import { Router } from 'express';
import { pool } from '../db.js';

export const getPrestamos = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT p.idPrestamo, date_format(p.fecha , "%Y-%m-%d") AS fecha,TIME_FORMAT( p.horaPrestamo, "%h:%i %p") as horaPrestamo, TIME_FORMAT( p.horaDevolucion, "%h:%i %p") as horaDevolucion, p.estado, d.nombre as nombreDocente, u.nombre as nombreUsuario from prestamo p INNER JOIN docente d on p.docente = d.idDocente INNER JOIN usuario u on p.docente = u.idUsuario order by idPrestamo'); 
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPrestamo = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM prestamo WHERE idPrestamo = ?',
      [req.params.id]
    );
    if (result.length == 0)
      return res.status(404).json({ messagge: 'Prestamo no encontrado' });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const createPrestamo = async (req, res) => {
  try {
    const { fecha, horaPrestamo, horaDevolucion, estado, docente, usuario } =
      req.body;
    const [result] = await pool.query(
      'INSERT INTO prestamo (fecha,horaPrestamo, horaDevolucion, estado, docente, usuario ) VALUES (?,?,?,?,?,?)',
      [fecha, horaPrestamo, horaDevolucion, estado, docente, usuario]
    );

    res.json({
      idPrestamo: result.insertId,
      fecha,
      horaPrestamo,
      horaDevolucion,
      estado,
      docente,
      usuario,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePrestamo = async (req, res) => {
  try {
    const result = await pool.query(
      'UPDATE prestamo SET ? WHERE idPrestamo = ?',
      [req.body, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePrestamo = async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM prestamo WHERE idPrestamo = ?',
      [req.params.id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Prestamo no encontrado' });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
