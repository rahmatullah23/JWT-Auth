const Shop = require('../models/Shop.model');

// create
module.exports.create = shop => {
    return Shop.create(shop);
}

// read all
module.exports.getAll = () => {
    return Shop.find({});
}

// read one
module.exports.getById = (id) => {
    return Shop.findById({_id: id});
}

// update
module.exports.updateById = (id, body) => {
    Shop.findByIdAndUpdate(id, body);
}

// delete
module.exports.deleteById = (id) => {
    Shop.findByIdAndDelete(id);
}