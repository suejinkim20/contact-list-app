const mongoose = require('mongoose')

const { Schema } = mongoose

const individualSchema = newSchema({
    lastName: {
        type: String,
    },
    firstName: {
        type: String
    },
    ageGroup: {
        type: String
    },
    familyID: {
        type: Schema.Types.ObjectId,
        ref: 'Family'    
    }
})

const Individual = mongoose.model('Individual', individualSchema);

module.exports = Individual;