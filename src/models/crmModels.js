var mongoose = require('mongoose');

//lets create a schema
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName : {
        type: String,
        required : 'Enter a first name'
    },
    lastName:{
       type: String,
       required: 'Enter a last name'
    },
    email:{
        type: String
    },
    company:{
        type: String
    },
    phone:{
        type: Number
    },
    created_date:{
        type: Date,
        //We do not need to send value for this field
        default: Date.now 
    }
})

module.exports = ContactSchema;