const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://naitikganvir:1234@cluster0.nhn2j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
   .then(() => console.log('MongoDB Connected'))
   .catch(err => console.log(err));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
