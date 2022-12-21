var sqlite3 = require("sqlite3");

const DB = "./database.db";

const db = new sqlite3.Database(DB, (err) => {
  if (err) {
    console.err(err);
    return;
  } else {
    db.run(
      "CREATE TABLE shopping_items( \
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
      name NVARCHAR(20)  NOT NULL,\
      desc NVARCHAR(255)  NOT NULL,\
      num INTEGER,\
      is_purchased BOOLEAN\
  )",
      (err) => {
        if (err) {
          console.error(err);
          console.log("Table already exists.");
        } else {
          // Initial items
          let insert =
            "INSERT INTO shopping_items (name, desc, num, is_purchased) VALUES (?,?,?,?)";
          db.run(insert, ["Item 1", "This is item #1.", 1, false]);
          db.run(insert, ["Item 2", "This is item #2.", 2, false]);
          db.run(insert, ["Item 3", "This is item #3.", 3, true]);
          db.run(insert, ["Item 4", "This is item #4.", 4, false]);
        }
      }
    );
  }
});

module.exports = db;
