const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '692461028963-4h8q1gidhrfbmcnaoq6s5hf14sfdijjn.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://yourdomain:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function (request, accessToken, refreshToken, profile, done) {
    // for database of users 
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });

    return done(err, profile);
  }
));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});