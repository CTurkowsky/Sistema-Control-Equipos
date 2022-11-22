import { Router } from 'express';
import { pool } from '../db.js';

export const createMarca = async (req, res) => {
  try {
    const { marca } = req.body;
    const [result] = await pool.query(
      'INSERT INTO MARCA(marca) VALUES (?)',
      [marca]
    );

    res.json({
      idMarca: result.insertId,
      marca,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMarcas = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM MARCA');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMarca = async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM MARCA WHERE idMarca = ?',
      [req.params.id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Marca no encontrada' });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


