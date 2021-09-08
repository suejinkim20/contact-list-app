const mongoose = require('mongoose')

const { Schema } = mongoose

const familySchema = newSchema({
    familyName: {
        type: String,
        required: true
    },
    familyMembers: [{
        type: Schema.Types.ObjectId,
        ref: 'Individual'
    }], 
    correspondence: [{
        type: Schema.Types.ObjectId,
        ref: 'Correspondence'
    }],

})

const Family = mongoose.model('Family', familySchema);

module.exports = Family;