const db = require("../config/db");
const {getQuery,getQueryById,postQuery,putQueryById,DeleteQueryById} =require('../Models/User.mode')

const getAllUser = (req, res) => {
  const sql=getQuery("info");
  db.query(sql, (err, data) => {
    if (err) return res.json("error");
    return res.json(data);
  });
};

const getUserById = (req, res) => {
  const sql=getQueryById(req);

  db.query(sql, (err, data) => {
    if (err) return res.json("error");
    return res.json(data);
  });
};

const postUser = (req, res) => {
 const sql=postQuery(req);
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json("error");
    return res.status(201).json(data);
  });
};

const putUserById = (req, res) => {
  const sql=putQueryById(req);
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json("error");
    return res.status(200).json(data);
  });
};

const deleteUserById = (req, res) => {
  const sql=DeleteQueryById(req);
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json("error");
    return res.status(200).json(data);
  });
};
module.exports = {
  getAllUser,
  getUserById,
  postUser,
  putUserById,
  deleteUserById,
};
