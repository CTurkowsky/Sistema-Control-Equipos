import { Router } from 'express';
import { pool } from '../db.js';

// Consulta por todos los equipos informaticos

export const getEquipoInformaticos = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT e.idEquipo, e.nombre, e.descripcion, e.estado, e.numeroSerie, e.disponibilidad , m.marca, c.categoria FROM equipoinformatico e INNER JOIN marca m ON e.marca = m.idMarca INNER JOIN categoria c ON e.categoria = c.idCategoria');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consulta por id un  equipo informatico

export const getEquipoInformatico = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM equipoinformatico WHERE idEquipo = ?',
      [req.params.id]
    );
    if (result.length == 0)
      return res
        .status(404)
        .json({ messagge: 'Equipo informatico no encontrado' });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crea un equipo informatico

export const createEquipoInformatico = async (req, res) => {
  try {
    const { nombre, descripcion,numeroSerie, estado, categoria, marca, disponibilidad } = req.body;
    const [result] = await pool.query(
      'INSERT INTO equipoinformatico (nombre,descripcion,numeroSerie,estado,categoria, marca, disponibilidad) VALUES (?,?,?,?,?,?,?)',
      [nombre,descripcion, numeroSerie,estado, categoria, marca, disponibilidad]
    );

    res.json({
      idEquipo: result.insertId,
      nombre,
      descripcion,
      numeroSerie,
      estado,
      categoria,
      marca,
      disponibilidad
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Actualiza un atributo de un equipo informatico

export const updateEquipoInformatico = async (req, res) => {
  try {
    const result = await pool.query(
      'UPDATE equipoinformatico SET ? WHERE idEquipo = ?',
      [req.body, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Elimina un equipo informatico por id
export const deleteEquipoInformatico = async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM equipoinformatico WHERE idEquipo = ?',
      [req.params.id]
    );
    if (result.affectedRows === 0)
      return res
        .status(404)
        .json({ message: 'Equipo informatico no encontrado' });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
