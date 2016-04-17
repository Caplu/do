'use strict';

const BaseController = {
    Model: null,

    create(req, res, next) {
        return this.Model.create(req.body)
            .then(entry => res.status(201).json({ result: entry }), next);
    },

    get(req, res, next) {
        let id = req && req.params ? req.params.id : undefined;

        if (typeof id !== 'undefined') { id = parseInt(id); }

        return this.Model.getWithChildren(id)
            .then(result => res.status(200).json({ result }), next);
    },

    remove(req, res, next) {
        const id = parseInt(req.params.id);

        return this.Model.remove(id)
            .then(() => res.status(204).json(), next);
    }
};

module.exports = BaseController;