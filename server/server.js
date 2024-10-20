const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const userRoutes = require('./routes/User');

const contactRoutes = require('./routes/contact');
const User = require('./models/User');
const Contact = require('./models/Contact');

require('dotenv').config();
const mongoUri = process.env.MONGO_URI;

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/users', userRoutes);
app.use('/api/contacts',contactRoutes);

//Message
// Serve static files from the public folder (including index.html)
app.use(express.static(path.join(__dirname, 'public')));



// MongoDB Connection
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.log('MongoDB connection error:', err));


// Route to handle message API
app.get('/', (req, res) => {
    res.json({ message: "welcome to dressStore application." });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('MONGO_URI:', process.env.MONGO_URI);

});
