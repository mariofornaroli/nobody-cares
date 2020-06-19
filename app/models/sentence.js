"use strict";

const ObjectID = require("mongodb").ObjectID;
const SentenceMongoose = require("./sentence.model");
const SentenceModel = require("./sentence.model");

class SentenceDal {
    constructor() { }

    findAll(query, sort, skip, limit) {
        return new Promise(function (resolve, reject) {

            SentenceMongoose
                .find(query || {})
                .sort(sort)
                .skip(skip)
                .limit(limit)
                .exec(function (err, sentences) {
                    if (err) {
                        return reject(err)
                    }
                    return resolve(sentences)
                })
        })
    }

    findOne(id) {
        const objectId = (id instanceof ObjectID) ? id : new ObjectID(id);
        const filter = { _id: objectId };
        return new Promise(function (resolve, reject) {

            return SentenceMongoose
                .find(filter)
                .exec(function (err, sentence) {
                    if (err) {
                        return reject(err)
                    }
                    return resolve(sentence)
                })

        })
    }

    insertOne(data) {
        data.created_at = new Date();
        data.updated_at = new Date();
        var awesome_instance = new SentenceModel(data);
        return new Promise(function (resolve, reject) {
            awesome_instance.save(function (err, sentence) {
                if (err) {
                    return reject(err)
                }
                return resolve(sentence)
            });
        })
    }
}

module.exports = SentenceDal;
