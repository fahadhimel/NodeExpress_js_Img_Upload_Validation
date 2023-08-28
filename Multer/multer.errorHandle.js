const multer = require("multer")

const errHandle=(err,req,res,next)=>{
    if(err instanceof multer.MulterError){
        res.json({
            success:0,
            message: err.message
        })
    }else if(err){
        res.status(400).json({
            success:0,
            message: err.message
        })
    }

}

module.exports={errHandle};