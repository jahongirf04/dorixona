const { restart } = require("nodemon");
const db = require("../config/connection_db");
const { json } = require("express");

exports.getAllPharmacies = (req, res) => {
  db.query("select * from pharmacies", (error, result, fileds) => {
    if (error) {
      console.log("Error getting pharmacies: ", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(result);
  });
};

exports.createPharmacy = (req, res) => {
  const { id, name, address, location, phone, email, region_id, district_id } =
    req.body;
  db.query(
    `insert into pharmacies (id, name, address,location,phone,email,region_id,district_id)
values
(?,?,?,?,?,?,?,?)`,
    [id, name, address, location, phone, email, region_id, district_id],
    (error, result) => {
      if (error) {
        console.log("Error creating pharmacy: ", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      console.log(result);
      res.json({
        message: "Pharmacy successfuly created",
        pharmacyId: result.insertId,
      });
    }
  );
};

exports.getPharmacy = (req, res) => {
  const myId = req.params.id;
  db.query(
    "select * from pharmacies where id = ?",
    myId,
    (error, result, fileds) => {
      if (error) {
        console.log("Error getting pharmacy: ", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      if (result.length === 0) {
        return res.status(404).json({ error: "Pharmacy not found" });
      }
      res.json(result[0]);
    }
  );
};

exports.updatePharmacy = (req, res) => {
  const { name } = req.body;
  const myId = req.params.id;
  db.query(
    "update pharmacies set name = ? where id = ?",
    [name, myId],
    (error, result) => {
      if (error) {
        console.log("Error updating pharmacy: ", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({
        message: "Pharmacy successfuly updated",
        pharmacyId: result.insertId,
      });
    }
  );
};

exports.deletePharmacy = (req, res) => {
  const myId = req.params.id;
  db.query("Delete from pharmacies where id = ?", myId, (error, result) => {
    if (error) {
      console.log("Errro deleting pharmacy: ", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json({
      message: "Pharmacy successfuly deleted",
      pharmacyId: result.insertId,
    });
  });
};
