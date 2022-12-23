const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/list", (req, res) => {
  setTimeout(() => {
    db.all("SELECT * FROM shopping_items", (err, result) => {
      if (err) {
        res.json(err);
      }
      res.json(result);
    });
  }, 500);
});

router.post("/list", (req, res) => {
  const { name, desc, num } = req.body;
  let insert =
    "INSERT INTO shopping_items (name, desc, num, is_purchased) VALUES (?,?,?,?)";
  db.run(insert, [name, desc, num, false], (err) => {
    if (err) {
      res.json({
        success: false,
        msg: err,
      });
    } else {
      res.json({
        success: true,
        id: this.lastID,
      });
    }
  });
});

router.delete("/list", (req, res) => {
  const { id } = req.query;
  db.get("SELECT * FROM shopping_items WHERE id = ?", [id], (err, result) => {
    if (err || !result) {
      res.json({
        success: false,
        msg: "can not find the item",
      });
    } else {
      db.run("DELETE FROM shopping_items WHERE id = ?", id, function (err) {
        if (err) {
          res.json({
            success: false,
            msg: "can not delete the item",
          });
        } else {
          res.json({
            success: true,
          });
        }
      });
    }
  });
});

router.put("/list", (req, res) => {
  const { id, name, desc, num, isPurchased } = req.body;
  db.get("SELECT * FROM shopping_items WHERE id = ?", [id], (err, result) => {
    if (err || !result) {
      res.json({
        success: false,
        msg: "can not find the item",
      });
    } else {
      db.run(
        "UPDATE shopping_items SET name = ?, desc = ?, num = ?, is_purchased = ? WHERE id = ?",
        [name, desc, num, isPurchased, id],
        function (err) {
          if (err) {
            res.json({
              success: false,
              msg: "can not update the item",
            });
          } else {
            res.json({
              success: true,
            });
          }
        }
      );
    }
  });
});

router.get("/toggle", (req, res) => {
  const { id } = req.query;
  db.get("SELECT * FROM shopping_items WHERE id = ?", [id], (err, result) => {
    if (err || !result) {
      res.json({
        success: false,
        msg: "can not find the item",
      });
    } else {
      db.run(
        "UPDATE shopping_items SET is_purchased = ? WHERE id = ?",
        [!result.is_purchased, id],
        function (err) {
          if (err) {
            res.json({
              success: false,
              msg: "can not update the item",
            });
          } else {
            res.json({
              success: true,
            });
          }
        }
      );
    }
  });
});

module.exports = router;
