const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
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

// // GET Route
// router.get('/', (req, res) => {
//   res.send(galleryItems);
// }); // END GET Route

//GET ROUTE to get all items from gallery
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "gallery";`;
  pool
    .query(queryText)
    .then((dbResponse) => {
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log('error getting gallery items', err);
      res.sendStatus(500);
    });
});

module.exports = router;
