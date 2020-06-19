
const BaseController = require("./BaseController");
const config = require('config');
const SentenceModel = require("../models/sentence");
const SentenceMongoose = require("../models/sentence.model");

class SentenceController extends BaseController {

    constructor() {
        super();

        this.sentence = new SentenceModel();
        this.list = this.list.bind(this);
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
    }

    list(req, res) {
        const filters = {};
        const sort = { updated_at: -1 };

        const pageSize = (req.body.pageSize && parseInt(req.body.pageSize) > 0 && parseInt(req.body.pageSize) < 1000) ? parseInt(req.body.pageSize) : 20;
        const pageNum = (req.body.pageNum && parseInt(req.body.pageNum) > 0) ? parseInt(req.body.pageNum) : 1;
        const skip = pageSize * (pageNum - 1);

        if (req.body.search) {
            filters.$text = { "$search": req.body.search };
        }

        SentenceMongoose.count(filters).then(countResult => {
            const actionPrmise = this.sentence.findAll(filters, sort, skip, pageSize);
            actionPrmise.then(dbResponse => {
                let out = [];
                if (dbResponse && dbResponse.length) {
                    out = dbResponse;
                    res.json(this.successResponse(out, { total: countResult, totalPage: Math.ceil(countResult / pageSize) }));
                } else {
                    res.json(this.successResponse(out, { total: countResult, totalPage: Math.ceil(countResult / pageSize) }));
                }
            }).catch(error => {
                console.error(error.message, { error });
                this.fillErrorResponse(res, 500, "Oggetto non trovato");
            });

        }).catch(error => {
            console.error(error.message, { error });
            this.fillErrorResponse(res, 500, "Error count sentence entry");
        });
    }

    get(req, res) {
        const id = req.params.id;

        const actionPrmise = this.sentence.findOne(id);
        actionPrmise.then(dbResponse => {
            if (dbResponse) {
                var out = this.successResponse(dbResponse);
                res.json(out);
            } else {
                console.error(error.message, { error });
                this.fillErrorResponse(res, 404, "Oggetto non trovato");
            }
        }).catch(error => {
            console.error(error.message, { error });
            this.fillErrorResponse(res, 500, "Error getting now entry");
        });
    }

    create(req, res) {
        let requestData = req.body;

        const actionPromise = this.sentence.insertOne(requestData);
        actionPromise.then(dbResponse => {
            if (dbResponse) {
                var out = this.successResponse(dbResponse);
                res.json(out);
            } else {
                console.error(error.message, { error });
                this.fillErrorResponse(res, 500, "Oggetto non creato");
            }
        }).catch(error => {
            logger.error(error.message, { error });
            this.fillErrorResponse(res, 500, "Errore durante la query per i custom fields");
        });
    }


}

module.exports = SentenceController;