const passport = require('passport');
const LocalStrategy= require('passport-local').Strategy;

const User = require('../model/user')
console.log("in passportjs")


passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
  //  passReqToCallback : true
}, 
  function(req,email,password,done){
 console.log(email,password, "sdfsd",req);
          User.findOne({email:email}, function(err,user){
              if(err){
                  return ({
                    success:false,
                    message:'error in processing query'
                })
              }
             if(user){
                return done(null,false);
             }else{
              const user =  User.create({ email, password });
              return done(null,user);
             }
          })

  }
)  )


module.exports = passport;