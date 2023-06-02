const db = require("../config/connection_db");

exports.createStock = (req, res) => {
  const { id, medicine_id, pharmacy_id, qunatity } = req.body;
  db.query(
    `insert into stock (id,medicine_id,pharmacy_id, qunatity)
values (?,?,?,?)`,
    [id, medicine_id, pharmacy_id, qunatity],
    (error, result) => {
      if (error) {
        console.log("Error creating stock: ", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({
        message: "Stock sccessfuly created",
        stockId: result.insertId,
      });
    }
  );
};

exports.getAllStocks = (req, res) => {
  db.query("Select * from stock", (error, result) => {
    if (error) {
      console.log("Error getting stocks: ", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(result);
  });
};

exports.getStock = (req, res) => {
  const myId = req.params.id;
  db.query("select * from stock where id = ?", myId, (error, result) => {
    if (error) {
      console.log("Error getting stock: ", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
    res.json(result[0]);
  });
};

exports.updateStock = (req, res) => {
  const myId = req.params.id;
  const { qunatity } = req.body;
  db.query(
    "update stock set qunatity = ? where id = ?",
    [qunatity, myId],
    (error, result) => {
      if (error) {
        console.log("Error updating stock: ", error);
        return res.status(500).json({
          error: "Internal server error",
        });
      }
      res.json({
        message: "Stock successfuly updated",
        drugId: result.insertId,
      });
    }
  );
};

exports.deleteStock = (req, res) => {
  const myId = req.params.id;
  db.query("delete from stock where id = ?", myId, (error, result) => {
    if (error) {
      console.log("Error deleting stock: ", error);
      return res.status(404).json({
        error: "Internal server error",
      });
    }
    res.json({
      message: "Stock successfuly deleted",
      result,
    });
  });
};
