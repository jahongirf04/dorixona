const db = require("../config/connection_db");

exports.createDrugType = (req, res) => {
  const { id, name } = req.body;
  db.query(
    `insert into drug_type (id,name)
values (?,?)`,
    [id, name],
    (error, result) => {
      if (error) {
        console.log("Error creating drug type: ", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({
        message: "Drug type sccessfuly created",
        pharmacyId: result.insertId,
      });
    }
  );
};

exports.getAllDrugTypes = (req, res) => {
  db.query("Select * from drug_type", (error, result) => {
    if (error) {
      console.log("Error getting drug types: ", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(result);
  });
};

exports.getDrugType = (req, res) => {
  const myId = req.params.id;
  db.query("select * from drug_type where id = ?", myId, (error, result) => {
    if (error) {
      console.log("Error getting drug type: ", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
    res.json(result[0]);
  });
};

exports.updateDrugType = (req, res) => {
  const myId = req.params.id;
  const { name } = req.body;
  db.query(
    "update drug_type set name = ? where id = ?",
    [name, myId],
    (error, result) => {
      if (error) {
        console.log("Error updating drug type: ", error);
        return res.status(500).json({
          error: "Internal server error",
        });
      }
      res.json({
        message: "Drug type successfuly updated",
        drugId: result.insertId,
      });
    }
  );
};

exports.deleteDrugType = (req, res) => {
  const myId = req.params.id;
  db.query("delete from drug_type where id = ?", myId, (error, result) => {
    if (error) {
      console.log("Error deleting drug type: ", error);
      return res.status(404).json({
        error: "Internal server error",
      });
    }
    res.json({
      message: "Drug type successfuly deleted",
      result,
    });
  });
};
