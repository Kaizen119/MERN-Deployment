// import the model to make queris to the DB

const Pirate = require("../models/pirates.model")


//FULL CRUD

//READ ALL
module.exports.findAllPirates = (requestObj,responseObj) => {
    Pirate.find().sort({name:"ASC"},{name: "asc",})
        .then((allDaPirates) => {
            responseObj.json(allDaPirates)
        })
        .catch(err => {
            console.log("Server Error")
            responseObj.json(err)
        });
}

//FIND ONE
module.exports.findOnePirate = (requestObj,responseObj) => {
    Pirate.findById(requestObj.params.id)
        .then(onePirate => {
            responseObj.json(onePirate)
        })
        .catch(err => {
            console.log("Server Error")
            responseObj.json(err)
        });
}


//Create
module.exports.createNewPirate = (requestObj,responseObj) => {
    Pirate.create(requestObj.body)
        .then(newlyCreatedPirate => {
            console.log("Server Success")
            responseObj.json(newlyCreatedPirate)
        })
        .catch(err => {
            console.log("Server Error")
            responseObj.status(400).json(err)
        });
}

//Update 
module.exports.updatePirate = (requestObj,responseObj) => {
    Pirate.findByIdAndUpdate(
        requestObj.params.id ,
        requestObj.body,
        { new: true, runValidators: true })
        .then(updatedPirate => {
            responseObj.json(updatedPirate)
        })
        .catch(err => {
            console.log("Server Error")
            responseObj.json(err)
        });
}

//DELETE
module.exports.deletePirate = (requestObj,responseObj) => {
    Pirate.findByIdAndDelete(requestObj.params.id )
        .then(result => {
            console.log("Entry has been deleted")
            responseObj.json(result)
        })
        .catch(err => {
            console.log("Server Error")
            responseObj.json(err)
        });
}