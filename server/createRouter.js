const express = require('express');

const createRouter = function(data) {
  const router = express.Router();

  // Get all items in array
  router.get('/', function(req, res) {
    res.json(data);
  });

  // Get item by array index number
  router.get('/:id', function(req, res) {
    res.json(data[req.params.id]);
  });

  // Add item to array
  router.post('/', function(req, res) {
    data.push(req.body);
    res.json(data);
  });

  // Change item in array
  router.put('/:id', function(req, res) {
    data[req.params.id] = req.body;
    res.json(data);
  });

  // Delete item in array
  router.delete("/:id", function(req, res) {
    data.splice(req.params.id, 1);
    res.json(data);
  });


  return router;
};

module.exports = createRouter;
