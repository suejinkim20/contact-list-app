const mongoose = require('mongoose')

const { Schema } = mongoose

const familySchema = newSchema({
    familyName: {
        type: String,
        required: true
    },
    familyMembers: [Individual]

})