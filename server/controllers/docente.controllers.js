import { Router } from 'express';
import { pool } from '../db.js';

// Consulta por todos los equipos informaticos

export const getDocentes = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM DOCENTE');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consulta por id un  equipo informatico

export const getDocente= async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM DOCENTE WHERE idDocente = ?',
      [req.params.id]
    );
    if (result.length == 0)
      return res
        .status(404)
        .json({ messagge: 'Docente no encontrado' });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crea un equipo informatico

export const createDocente = async (req, res) => {
  try {
    const { nombre, apellidoPaterno, apellidoMaterno, numeroCelular, grado, seccion } = req.body;
    const [result] = await pool.query(
      'INSERT INTO DOCENTE(nombre, apellidoPaterno, apellidoMaterno, numeroCelular, grado, seccion) VALUES (?,?,?,?,?,?)',
      [nombre, apellidoPaterno, apellidoMaterno, numeroCelular, grado, seccion]
    );

    res.json({
      idEquipo: result.insertId,
    nombre, 
    apellidoPaterno, 
    apellidoMaterno, 
    numeroCelular,
    grado,
    seccion
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Actualiza un atributo de un equipo informatico

export const updateDocente= async (req, res) => {
  try {
    const result = await pool.query(
      'UPDATE DOCENTE SET ? WHERE idDocente = ?',
      [req.body, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Elimina un equipo informatico por id
export const deleteDocente = async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM DOCENTE WHERE idDocente = ?',
      [req.params.id]
    );
    if (result.affectedRows === 0)
      return res
        .status(404)
        .json({ message: 'Docente no encontrado' });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

