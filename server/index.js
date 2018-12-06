require('dotenv').config();
const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');

const bodyParser = require('body-parser');
const knex = require('./config/db');
const crypto = require('crypto');
const trimmer = require('./middlewares/trimmer');
const setUser = require('./middlewares/setUser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(cookieParser(process.env.JWT_SECRET));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(setUser);
app.use(trimmer);
app.use(csrf({ cookie: true }));
app.use('/', require('./routes/authRoutes'));

app.set('port', port);

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    }

    // Give nuxt middleware to express
    app.use(nuxt.render);

    // Listen the server
    app.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    });
}
start();
