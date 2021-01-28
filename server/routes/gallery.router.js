const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
  //update number of likes on a photo
  const galleryId = req.params.id;
  // for (const galleryItem of galleryItems) {
  //   if (galleryItem.id == galleryId) {
  //     galleryItem.likes += 1;
  //   }
  // }
  const queryText = `SELECT likes from "gallery" WHERE id = $1;`;
  const queryArray = [galleryId];
  pool
    .query(queryText, queryArray)
    .then((dbResponse) => {
      console.log(dbResponse.rows);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('error getting likes in database', err);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  res.send(galleryItems);
}); // END GET Route

module.exports = router;
