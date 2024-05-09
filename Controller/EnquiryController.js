
const Enquiry = require('../Model/Enquiry')

exports.getData = async (req,res)=>{
    try {
        const data = await Enquiry.find() 
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return res.status(400).json({
            errors:true,
            message:error.message
        })
    }
}

exports.postData = async (req,res)=>{
    try {
        const data = await Enquiry.create(req.body);
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return res.status(400).json({
            errors:true,
             message:error.message
        })
    }
}

exports.putData = async (req,res)=>{
    try {
        const data = await Enquiry.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return res.status(400).json({
            errors:true,
             message:error.message
        })
    }
}

exports.deleteData = async (req,res)=>{
    try {
        const data = await Enquiry.findByIdAndDelete(req.params.id);
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return res.status(400).json({
            errors:true,
             message:error.message
        })
    }
}
