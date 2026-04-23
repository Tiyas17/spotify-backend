const jwt=require('jsonwebtoken'); 

async function authMiddleware(req,res,next){
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.role!=="artist"){
        return res.status(403).json({
            message:"Forbidden, You are not an artist"
        })  
        }
        req.user=decoded; //adding this property to access user later
        next();
    }
    catch(err){
        return res.status(401).json({
            message:"Unauthorized"
        }) 
    }
}

async function authenticate(req,res,next){
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
    }
    catch(err){
        return res.status(401).json({
            message:"Invalid Token"
        })
    }
    next();
}

module.exports={authMiddleware,authenticate};