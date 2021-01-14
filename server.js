require('./config/config')

const express = require('express');
const tournamentRoutes = require('./routes/tournaments')

const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//app.use('/', routes);
app.use('/', tournamentRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
});