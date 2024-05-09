const moongoose = require('mongoose');

const enquirySchema = new moongoose.Schema({
    name:{
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