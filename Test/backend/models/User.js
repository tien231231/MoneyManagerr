const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        
        unique:true// tạo user giống thì lỗi
    },
    email:{
        type:String,
        required:true,
        
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },
    address:{
        type:String,
        required:false,
        
        
    },
    phonenumber:{
        type:String,
        required:false,
        
        
    },
    admin:{//thêm quyền admin
        type:Boolean,
        default:false,//mới tạo thì mặc định là người thường

    }
},{timestamps:true})

module.exports = mongoose.model("User",userSchema)