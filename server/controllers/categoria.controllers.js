import { Router } from 'express';
import { pool } from '../db.js';

export const createCategoria= async (req, res) => {
  try {
    const { categoria  } = req.body;
    const [result] = await pool.query(
      'INSERT INTO categoria (categoria) VALUES (?)',
      [categoria]
    );

    res.json({
      idCategoria: result.insertId,
      categoria,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getCategorias= async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM categoria');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM categoria WHERE idCategoria = ?',
      [req.params.id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Categoria no encontrada' });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};