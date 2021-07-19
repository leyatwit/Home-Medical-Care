const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

// Connect database
connectDB();
app.use(cors());

// Init Middleware to allow getting data using req.body
app.use(express.json({ extended: false }));

// Local port
const PORT = 5000;

// Define routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/appointment', require('./routes/api/appointment'));
app.use('/api/document', require('./routes/api/document'));
app.use('/api/symptom', require('./routes/api/symptom'));
app.use('/api/measurement', require('./routes/api/measurement'));
app.use('/api/medication', require('./routes/api/medication'));
app.use('/api/instruction', require('./routes/api/instruction'));

app.get('/', (req, res) => res.send(`API Running`));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
