const express = require('express');
const mongoose = require('mongoose');
const app= express();
const port = 3000;
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const mainRoutes = require('./routes/index');




main()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => { // Pass 'err' as a parameter
    console.error('Error connecting to MongoDB:', err);
  });


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Taxcellence');
};

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));
app.use('/', mainRoutes);


 app.get('/', (req, res) => {
res.send('Taxcellence Project is Working!')
  });
/* home router  */

app.get('/home', (req, res) => {
    console.log('Home Page Accessed');
    res.render('pages/home', { title: 'Taxcellence Home' });
});



    app.listen(port, () => {
      console.log(`Taxcellence listening on port ${port}`)
    });
