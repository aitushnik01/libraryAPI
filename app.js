const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/books', bookRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
