const express = require('express');

const createRouter = function(data) {
  const router = express.Router();

  router.get('/', function(req, res) {
    res.json(data);
  });

  router.post('/', function(req, res) {
    data.push(req.body);
    res.json(data);
  });

  return router;
};

module.exports = createRouter;
