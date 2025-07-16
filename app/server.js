const express = require('express');
const mongoose = require('mongoose');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cookieParser());
app.use(csurf({ cookie: true }));

app.get('/', (req, res) => {
    res.send(Hello from Secure Node.js App with CSRF! Your CSRF token is: ${req.csrfToken()});
});

app.listen(PORT, () => {
    console.log(Server running on port ${PORT});
});
