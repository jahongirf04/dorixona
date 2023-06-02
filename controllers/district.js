const db = require("../config/connection_db");

exports.createDistrict = (req, res) => {
  const { id, name, region_id } = req.body;
  db.query(
    `insert into district (id,name,region_id)
values (?,?,?)`,
    [id, name, region_id],
    (error, result) => {
      if (error) {
        console.log("Error creating district: ", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({
        message: "District sccessfuly created",
        stockId: result.insertId,
      });
    }
  );
};

exports.getAllDistricts = (req, res) => {
  db.query("Select * from district", (error, result) => {
    if (error) {
      console.log("Error getting district: ", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(result);
  });
};

exports.getDistrict = (req, res) => {
  const myId = req.params.id;
  db.query("select * from district where id = ?", myId, (error, result) => {
    if (error) {
      console.log("Error getting district: ", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
    res.json(result[0]);
  });
};

exports.updateDistrict = (req, res) => {
  const myId = req.params.id;
  const { name } = req.body;
  db.query(
    "update district set name = ? where id = ?",
    [name, myId],
    (error, result) => {
      if (error) {
        console.log("Error updating district: ", error);
        return res.status(500).json({
          error: "Internal server error",
        });
      }
      res.json({
        message: "District successfuly updated",
        drugId: result.insertId,
      });
    }
  );
};

exports.deleteDistrict = (req, res) => {
  const myId = req.params.id;
  db.query("delete from district where id = ?", myId, (error, result) => {
    if (error) {
      console.log("Error deleting district: ", error);
      return res.status(404).json({
        error: "Internal server error",
      });
    }
    res.json({
      message: "District successfuly deleted",
      result,
    });
  });
};
