const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "you need a pet name"],
        minlength: [3, "pet must be atleast 3 characters long"]
    },
    ptype: {
        type: String,
        required: [true, "you need a Pet Type"],
        minlength: [3, "pet type must be atleast 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "you need a Pet description"],
        minlength: [3, "pet must be atleast 3 description long"]

    },
    skill:{
        type: String,
        required: [true, "you need a Pet skill"],
        minlength: [3, "pet must be atleast skill 3 characters long"]
    }
    
}, {timestamps: true})

const mernBelt = mongoose.model("mernBelt", petSchema);

module.exports = mernBelt;