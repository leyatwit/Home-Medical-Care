const express = require('express')
const connectDB = require('./config/db')

const app = express();

// Connect database
connectDB();

// Init Middleware to allow getting data using req.body
app.use(express.json({ extended: false }));

// Local port
const PORT = 5000; 

// Define routes
app.use('/api/user',require('./routes/api/user'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/profile',require('./routes/api/profile'))
app.use('/api/appointment', require('./routes/api/appointment'));

app.get('/',(req,res) => res.send(`API Running`))
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
