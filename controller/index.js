
const User = require('../model/user');
const passport=require('passport')

module.exports.a = function (req,res){
    //res.send("server created for a also")
   res.status(200).send({
       success:'true',
       message:'successfully created first rest api in /a',
       material:"xyz"
   })
}

module.exports.signup= (req,res)=>{
    console.log("req body is@@",req.body);

    User.findOne({email:req.body.email}, (err,user)=>{
        if(err){
         return   res.status(500).json({msg:`internal server error __--${err} `})
        }
         if(user){
             return res.status(401).json({msg:"User already existed"});
         }else{
             const newUser = new User ({
                 name:req.body.name,
                 email:req.body.email,
                 password:req.body.password
             })
             newUser.save()
             .then(user =>{
                //  if(err){
                //      return res.status(500).json({ msg:`err is ${err}`})
                //  }
                 return res.status(200).json({
                     msg: 'user succesfully created',
                     user:{
                         id:user._id,
                         name:user.name,
                         email:user.email
                     }
                 })
             })
            }
    })    
}

module.exports.login =  (req,res)=>{
console.log(`req body signin is ${req.body}`)

User.findOne({email:req.body.email},(err,user)=>{
    if(err){
        return   res.status(500).json({msg:`internal server error __--${err} `})
       }
     if(user && user.password == req.body.password ){
        return res.status(200).json({
            msg: 'user succesfully signed in',
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })
     }else{
            return   res.status(500).json({msg:` Invalid username or password `})        
     }  
    

})

}