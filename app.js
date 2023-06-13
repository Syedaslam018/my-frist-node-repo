
const express  = require('express'); 
const path = require('path');

const adminRoutes = require('./routes/admin')

const shopRoutes = require('./routes/shop')
const contactusRoute = require('./routes/contactus')
const successRoute = require('./routes/success')

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)
app.use('/contactus', contactusRoute);
app.use('/success', successRoute)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(4000)