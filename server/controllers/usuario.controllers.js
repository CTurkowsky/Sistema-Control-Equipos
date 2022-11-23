import { Router } from 'express';
import { pool } from '../db.js';

// Consulta por todos los equipos informaticos

export const getUsuarios = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM usuario ');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consulta por id un  equipo informatico

export const getUsuario = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM usuario WHERE idUsuario = ?',
      [req.params.id]
    );
    if (result.length == 0)
      return res.status(404).json({ messagge: 'Usuario no encontrado' });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crea un equipo informatico

export const createUsuario = async (req, res) => {
  try {
    const {
      nombre,
      correo,
      password,
      apellidoPaterno,
      apellidoMaterno,
      numeroCelular,
      rol,
    } = req.body;
    const [result] = await pool.query(
      'INSERT INTO usuario (nombre,correo,password, apellidoPaterno, apellidoMaterno, numeroCelular, rol) VALUES (?,?,?,?,?,?,?)',
      [
        nombre,
        correo,
        password,
        apellidoPaterno,
        apellidoMaterno,
        numeroCelular,
        rol,
      ]
    );

    res.json({
      idUsuario: result.insertId,
      nombre,
      correo,
      password,
      apellidoPaterno,
      apellidoMaterno,
      numeroCelular,
      rol,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Actualiza un atributo de un equipo informatico

export const updateUsuario = async (req, res) => {
  try {
    const result = await pool.query(
      'UPDATE usuario SET ? WHERE idUsuario = ?',
      [req.body, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Elimina un equipo informatico por id
export const deleteUsuario = async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM usuario WHERE idUsuario = ?',
      [req.params.id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Usuario no encontrado' });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
