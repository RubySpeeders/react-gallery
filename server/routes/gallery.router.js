const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// PUT Route to update likes
router.put('/like/:id', (req, res) => {
  //update number of likes on a photo
  const galleryId = req.params.id;
  const queryText = `SELECT id, likes from "gallery" WHERE id = $1;`;
  const queryArray = [galleryId];
  pool
    .query(queryText, queryArray)
    .then((dbResponse) => {
      // const id = dbResponse.rows[0].id;
      let likes = dbResponse.rows[0].likes;
      let newLikes = likes + 1;
      const queryText = `UPDATE "gallery" SET "likes" = $1 WHERE "id" = $2;`;
      const queryArray = [newLikes, galleryId];
      pool
        .query(queryText, queryArray)
        .then((dbResponse) => {
          res.sendStatus(200);
        })
        .catch((err) => {
          console.log('error updating likes', err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.log('error getting likes in database', err);
    });
}); // END PUT Route

//GET ROUTE to get all items from gallery
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "gallery" ORDER BY id;`;
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

//POST ROUTE to add an item to the gallery
router.post('/', (req, res) => {
  const path = req.body.path;
  const description = req.body.description;
  const queryText = `INSERT INTO "gallery" ("path", "description", "likes") VALUES
  ($1, $2, 0);`;
  const queryArray = [path, description];
  pool
    .query(queryText, queryArray)
    .then((dbResponse) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('error adding item to the gallery', err);
      res.sendStatus(500);
    });
});

//DELETE ROUTE to delete an item from the gallery
router.delete('/:id', (req, res) => {
  const itemId = req.params.id;
  const queryText = `DELETE FROM "gallery" WHERE id =$1;`;
  const queryArray = [itemId];
  pool
    .query(queryText, queryArray)
    .then((dbResponse) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('error deleting item from gallery', err);
      res.sendStatus(500);
    });
});

module.exports = router;
