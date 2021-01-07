const shopService = require('../services/shop.service');

// creating data
module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

// getting all data
module.exports.getAll = async (req, res, next) => {
    try {
        const allData = await shopService.getAll();
        return res.status(200).json(allData);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

// getting data by ID
module.exports.getById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const specificData = await shopService.getById(id);
        return res.status(200).json(specificData);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

// updating data by ID
module.exports.updateById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const updatedData = await shopService.updateById(id, body);
        return res.status(200).json(updatedData);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

// deleting data by ID
module.exports.deleteById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deleted = await shopService.deleteById(id);
        return res.status(200).josn('Document Deleted');
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}