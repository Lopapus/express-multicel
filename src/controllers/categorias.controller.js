const Categorias = require('../models').categorias;
const controller = {};

controller.getCategorias = async (req, res) => {
  try {
    const categorias = await Categorias.findAll({});
    if (categorias) {
      return res.status(200).json(categorias);
    } else {
      return res.status(400).json({ msg: 'No se encontró ninguna categoria en la base de datos' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

controller.getCategoria = async (req, res) => {
  try {
    const categorias = await Categorias.findByPk(req.params.id);

    if (categorias) {
      return res.status(200).json(categorias);
    } else {
      return res.status(400).json({ msg: 'La categoria que está buscando no existe' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

controller.postCategoria = async (req, res) => {
  try {
    const categorias = await Categorias.create({
      nombre: req.body.nombre
    });
    return res.status(201).json(categorias.toJSON());
  } catch (error) {
    res.status(500).json(error.errors || { msg: 'Server Error' });
  }
};

controller.putCategoria = async (req, res) => {
  try {
    const categoria = await Categorias.findByPk(req.body.id);

    if (categoria) {
      await categoria.update(req.body);
      return res.status(200).json({ msg: 'La categoria se ha actualizado correctamente' });
    } else {
      return res.status(304).json({ msg: 'Ocurrió un error al actualizar la categoria' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

controller.deleteCategoria = async (req, res) => {
  try {
    const categoria = await Categorias.findByPk(req.body.id);

    if (categoria) {
      await categoria.destroy();
      return res.status(200).json({ msg: 'Se ha eliminado correctamente' });
    } else {
      return res.status(400).json({ msg: 'La categoria que desea eliminar no existe' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

module.exports = controller;