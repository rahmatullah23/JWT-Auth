const shopService = require('../services/shop.service');

// creating data 
module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Error creating' })
    }
}
// get all data 
module.exports.getAll = async (req, res, next) => {
    try {
        const allData = await shopService.getAll();
        return res.status(200).json(allData);

    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Error' })
    }
}

// getting data by id 
module.exports.getById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const singleData = await shopService.getById(id);
        return res.status(200).json(singleData);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Error' })
    }
}

//update by id
module.exports.updateById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const updatedData = await shopService.updateById(id,body);
        return res.status(200).json(updatedData);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Error' });
    }
}

//delete data by id
module.exports.deleteById = async(req, res, next) => {
    try {
        const id = req.params.id;
        const deleted = await shopService.deleteById(id);
        return res.status(200).json('Delete data');
    }catch (e){
        console.log(e);
        return res.status(500).json({ message: 'Error'})           
        
    }
}