import { Router } from 'express';
import { pool } from '../db.js';

// Consulta por todos los equipos informaticos

export const getEquipoPrestamos = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT ep.idEquipoPrestamo, e.nombre, p.idPrestamo,ep.estado from equipoprestamo ep INNER JOIN EquipoInformatico e ON ep.equipo = e.idEquipo INNER JOIN Prestamo p on ep.prestamo = p.idPrestamo');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consulta por id un  equipo informatico

export const getEquipoPrestamo = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM equipoprestamo WHERE idEquipoPrestamo = ?',
      [req.params.id]
    );
    if (result.length == 0)
      return res.status(404).json({ messagge: 'Prestamo no encontrado' });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crea un equipo informatico

export const createEquipoPrestamo = async (req, res) => {
  try {
    const { equipo, prestamo } =
      req.body;
    const [result] = await pool.query(
      'INSERT INTO equipoprestamo (equipo,prestamo ) VALUES (?,?)',
      [equipo, prestamo]
    );

    res.json({
      idEquipoPrestamo: result.insertId,
      equipo,
      prestamo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Actualiza un atributo de un equipo informatico

export const updateEquipoPrestamo = async (req, res) => {
  try {
    const result = await pool.query(
      'UPDATE equipoprestamo SET ? WHERE idEquipoPrestamo = ?',
      [req.body, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Elimina un equipo informatico por id
export const deleteEquipoPrestamo = async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM equipoprestamo WHERE idEquipoPrestamo = ?',
      [req.params.id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Prestamo no encontrado' });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
