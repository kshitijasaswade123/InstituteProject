const moongoose = require('mongoose');

const enquirySchema = new moongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    visitingDate:{
        type:Date,
        required:true
    },
    descrption:{
        type:String,
        required:true

    }
})

module.exports = moongoose.model('enquiry',enquirySchema);