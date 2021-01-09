const Shop = require('../models/Shop.model');

// Create
module.exports.create = shop => {
    return Shop.create(shop);
}
//find all
module.exports.getAll = () => {
return Shop.find({});
}

//read One
module.exports.getById = id => {
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