const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const controller404 = require('./controllers/error')

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoute = require('./routes/contactus')
const successRoute = require('./routes/success')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/shop',shopRoutes);
app.use('/contactus', contactusRoute)
app.use('/success', successRoute)

app.use(controller404.get404);

app.listen(3000);
