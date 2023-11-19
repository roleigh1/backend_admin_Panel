const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { User } = require('../models/models');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
,

};

passport.use(new Strategy(options,async (payload, done) => {
    try{
        const user = await User.findByPk(payload.userId); 
        if(user){
            return done(null, user);
        } else {
            return done(null, false); 

        }
    } catch (err){
        done(err,false);
    }
}))

module.exports = passport;