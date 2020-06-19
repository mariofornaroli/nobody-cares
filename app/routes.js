"use-strict";

const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const config = require('config');
const favicon = require('serve-favicon');

const SentenceController = require('./controllers/SentenceController');

module.exports = (app) => {
    const frontendFolder = `${__dirname}/../frontend/build`;

    const router = express.Router();
    const dbConnectionMiddleware = require('./middleware/dbConnectionWarning')();

    const sentenceController = new SentenceController();

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.disable('x-powered-by');

    app.use(cors());
    app.options('*', cors());

    router.post('/sentence/list', sentenceController.list);
    router.get('/sentence/:id', sentenceController.get);
    router.post('/sentence', sentenceController.create);

    app.use('/api', [dbConnectionMiddleware], router);

    app.use(favicon(__dirname + '/static/favicon.ico'));

    app.use('/static', express.static(`${frontendFolder}/static`));

    app.use('/', express.static(`${frontendFolder}`, {
        setHeaders: function (res, path) {
            res.set("Age", "0");
            res.set("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate");
            res.set("Expires", "Mon, 01 Jan 1990 00:00:00 GMT");
            res.set("Pragma", "no-cache");
            res.set("X-Content-Type-Options", "nosniff");
        }
    }));

    app.use('/*', express.static(`${frontendFolder}`, {
        setHeaders: function (res, path) {
            res.set("Age", "0");
            res.set("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate");
            res.set("Expires", "Mon, 01 Jan 1990 00:00:00 GMT");
            res.set("Pragma", "no-cache");
            res.set("X-Content-Type-Options", "nosniff");
        }
    }));

    return app
}