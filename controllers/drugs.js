const db = require("../config/connection_db");

exports.createDrug = (req, res) => {
  const { id, name, manufacturer, medicine_type, price, expiry_date, info } =
    req.body;
  db.query(
    `insert into drugs (id,name,manufacturer,medicine_type,price,expiry_date,info)
values (?,?, ?, ?, ?, ?, ?)`,
    [id, name, manufacturer, medicine_type, price, expiry_date, info],
    (error, result) => {
      if (error) {
        console.log("Error creating pharmacy: ", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({
        message: "Drug sccessfuly created",
        pharmacyId: result.insertId,
      });
    }
  );
};

exports.getAllDrugs = (req, res) => {
  db.query("Select * from drugs", (error, result) => {
    if (error) {
      console.log("Error getting drugs: ", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(result);
  });
};

exports.getDrug = (req, res) => {
  const myId = req.params.id;
  db.query("select * from drugs where id = ?", myId, (error, result) => {
    if (error) {
      console.log("Error getting drug: ", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
    res.json(result[0]);
  });
};

exports.updateDrug = (req, res) => {
  const myId = req.params.id;
  const { name } = req.body;
  db.query(
    "update drugs set name = ? where id = ?",
    [name, myId],
    (error, result) => {
      if (error) {
        console.log("Error updating drug: ", error);
        return res.status(500).json({
          error: "Internal server error",
        });
      }
      res.json({
        message: "Drug successfuly updated",
        drugId: res.insertId,
      });
    }
  );
};

exports.deleteDrug = (req, res) => {
  const myId = req.params.id;
  db.query("delete from drugs where id = ?", myId, (error, result) => {
    if (error) {
      console.log("Error deleting drug: ", error);
      return res.status(404).json({
        error: "Internal server error",
      });
    }
    res.json({
      message: "Drug successfuly deleted",
      result,
    });
  });
};
