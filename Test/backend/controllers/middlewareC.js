const jwt = require("jsonwebtoken")

const middlewareC = {

    verifyToken:(req,res,next) => {

        const token = req.headers.token
        if(token){
            const accessToken = token.split(" ")[1]
            jwt.verify(accessToken,
                process.env.JWT_ACCESS_TOKKEN,
                (err,user) =>{
                    if(err){return res.status(403).json("token is not valid")}
                    req.user = user
                    next()// đi tiếp
                })
        }
        else{
            return res.status(401).json("you are not authenticated")
        }
    },
    verifyTokenAndAdminAuth:(req,res,next)=>{
        middlewareC.verifyToken(req,res,()=>{
            if(req.user.id == req.params.id||req.user.admin){// nếu id muốn xóa là của mình hoặc là admin thì mới được xóa
                next()
            }else{
                return res.status(403).json("You are not allowed to delete other")
            }
        })
    }
}
module.exports = middlewareC