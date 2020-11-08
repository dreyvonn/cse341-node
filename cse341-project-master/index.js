const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
// const csrf = require('csurf');
const flash = require('connect-flash');

const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://shaymond:mushrooms@cluster0.xg5rq.mongodb.net/shop?retryWrites=true&w=majority"

const User = require('./project/models/user');

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URL,
  collection: 'sessions'
});

// const csrfProtection = csrf();

const ta01Routes = require('./routes/ta01');
const ta02Routes = require('./routes/ta02');
const ta03Routes = require('./routes/ta03'); 
const ta05Routes = require('./routes/ta05'); 
const prove01Routes = require('./routes/prove01'); 
const prove02Routes = require('./routes/prove02');
const prove08Routes = require('./routes/prove08');
const projectRoutes = require('./project/routes/shop');
const classActivities = require('./routes/classActivities/w03/routes');

app.use(session({ 
  secret: 'my secret', 
  resave: true, 
  saveUninitialized: true,
  store: store,
}));

// app.use(csrfProtection);
app.use(flash());

const corsOptions = {
  origin: "https://guarded-falls-94352.herokuapp.com/",
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4
}

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  // res.locals.csrfToken = req.csrfToken();
  next();
});

app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .use(bodyParser({extended: false}))
   .use('/ta01', ta01Routes)
   .use('/ta02', ta02Routes) 
   .use('/ta03', ta03Routes) 
   .use('/ta05', ta05Routes)
   .use('/prove01', prove01Routes)
   .use('/prove02', prove02Routes)
   .use('/prove08', prove08Routes)
   .use('/project', projectRoutes)
   .use('/classActivities/w03', classActivities)
   .get('/', (req, res, next) => {
     res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
    })
   .use((req, res, next) => {
     res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
   });
  //  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

mongoose
  .connect(
    MONGODB_URL, options
  )
  .then(result => {
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });