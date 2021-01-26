const Pet = require("../models/pet.models");


// Get all of our stuff
module.exports.findAll = (req, res ) => {
    Pet.find().sort({ptype: 1})
        .then(allPet => res.json({Pet: allPet}))
        .catch(err => res.json({message: "something went wrong when getting all items", error: err}))
}

// Get one thing
module.exports.findOnePet = (req, res ) => {
    Pet.findOne({_id: req.params._id})
        .then(onePet => res.json({Pet: onePet}))
        .catch(err => res.json({message: "something went wrong when getting One item", error: err}))
}

//add to db
module.exports.CreateOnePet = (req, res ) => {
    Pet.create(req.body)
        .then(addPet => res.json({Pet: addPet}))
        .catch(err => res.json({message: "something went wrong when getting adding items", error: err}))
}

//updating one db
module.exports.updateOnePet = (req, res ) => {
    Pet.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(onePet => res.json({Pet: onePet}))
        .catch(err => res.json({message: "something went wrong when updating item", error: err}))
}

//deleting one thing
module.exports.deleteOnePet = (req, res ) => {
    Pet.deleteOne({_id: req.params._id})
        .then(res.json({message: "item deleted"}))
        .catch(err => res.json({message: "something went wrong when deleting", error: err}))
}