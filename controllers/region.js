const db = require("../config/connection_db");

exports.createRegion = (req, res) => {
  const { id, name } = req.body;
  db.query(
    `insert into region (id,name)
values (?,?)`,
    [id, name],
    (error, result) => {
      if (error) {
        console.log("Error creating Region: ", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({
        message: "Region sccessfuly created",
        RegionId: result.insertId,
      });
    }
  );
};

exports.getAllRegions = (req, res) => {
  db.query("Select * from region", (error, result) => {
    if (error) {
      console.log("Error getting region: ", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(result);
  });
};

exports.getRegion = (req, res) => {
  const myId = req.params.id;
  db.query("select * from region where id = ?", myId, (error, result) => {
    if (error) {
      console.log("Error getting region: ", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
    res.json(result[0]);
  });
};

exports.updateRegion = (req, res) => {
  const myId = req.params.id;
  const { name } = req.body;
  db.query(
    "update region set name = ? where id = ?",
    [name, myId],
    (error, result) => {
      if (error) {
        console.log("Error updating region: ", error);
        return res.status(500).json({
          error: "Internal server error",
        });
      }
      res.json({
        message: "Region successfuly updated",
        drugId: result.insertId,
      });
    }
  );
};

exports.deleteRegion = (req, res) => {
  const myId = req.params.id;
  db.query("delete from region where id = ?", myId, (error, result) => {
    if (error) {
      console.log("Error deleting region: ", error);
      return res.status(404).json({
        error: "Internal server error",
      });
    }
    res.json({
      message: "Region successfuly deleted",
      result,
    });
  });
};
