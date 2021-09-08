const mongoose = require('mongoose');

const { Schema } = mongoose;

const correspondenceSchema = new Schema({
    category: {
        type: String
    },
    //sent or received?
    direction: {
        type: String
    },
    note: {
        type: String
    },
    date: {
        type: Date
    },
    family: {
        type: Schema.Types.ObjectId,
        ref: "Family"
    }

})

const Correspondence = mongoose.model('Correspondence', correspondenceSchema);

module.exports = Correspondence;