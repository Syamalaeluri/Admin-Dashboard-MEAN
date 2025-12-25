require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();


// CONNECT DATABASE

connectDB();


// MIDDLEWARES

app.use(cors());
app.use(express.json()); 

// TEST ROUTE
app.get('/', (req, res) => {
  res.send('Backend server is running');
});


app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
