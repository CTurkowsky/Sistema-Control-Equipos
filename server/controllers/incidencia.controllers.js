import { Router } from 'express';
import { pool } from '../db.js';

export const getIncidencias = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT i.idIncidencia, date_format(i.fecha , "%d-%m-%Y") AS fecha, i.hora, i.descripcion, u.nombre as nombreUsuario, e.nombre as nombreEquipo from incidencia i INNER JOIN usuario u on i.usuario = u.idUsuario INNER JOIN equipoinformatico e on i.equipo = e.idEquipo');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getIncidencia = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM INCIDENCIA WHERE idIncidencia = ?',
      [req.params.id]
    );
    if (result.length == 0)
      return res.status(404).json({ messagge: 'Incidencia no encontrada' });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createIncidencia = async (req, res) => {
  try {
    const { fecha, hora, descripcion, usuario, equipo } = req.body;
    const [result] = await pool.query(
      'INSERT INTO INCIDENCIA(fecha, hora, descripcion, usuario, equipo ) VALUES (?,?,?,?,?)',
      [fecha, hora, descripcion, usuario, equipo]
    );

    res.json({
      idIncidencia: result.insertId,
      fecha,
      hora,
      descripcion,
      usuario,
      equipo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateIncidencia = async (req, res) => {
  try {
    const result = await pool.query(
      'UPDATE INCIDENCIA SET ? WHERE idIncidencia = ?',
      [req.body, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteIncidencia= async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM INCIDENCIA WHERE idIncidencia = ?',
      [req.params.id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Incidencia no encontrada' });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
