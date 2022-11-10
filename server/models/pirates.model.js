// Import mongoose to build a model
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// The Schema
const PirateSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 charaters long"]

    },

    image:{
        type: String,
        required: [true, "show us ur best {PATH} "]
    },

    catchPhrase:{
        type:String,
        required: [true, "{PATH} will strike fear into your enemy"],
        minlength: [3, "{PATH} must be at least 3 charaters long"]
    },

    crewPosition:{
        type:String,
        required: [true, "what {PATH} you want matey"],
        minlength: [3, "{PATH} must be at least 3 charaters long"],
        unique: [true, "there can only be one Captain"]
    },

    treasure:{
        type: Number,
        required: [true, "what kind of pirate has no {PATH} "],
        min: [1, "{PATH} must be more than 0 "]
    },
    pegLeg:{
        type: Boolean,
        default: false
    },

    eyePatch:{
        type: Boolean,
        default: false
    },

    hookHand:{
        type: Boolean,
        default: false
    }
}, {timestamps: true})

PirateSchema.plugin(uniqueValidator, { message: 'We already have a captain mate' });

//Creat the schema and export it
const Pirate = mongoose.model("Pirate", PirateSchema);
module.exports = Pirate