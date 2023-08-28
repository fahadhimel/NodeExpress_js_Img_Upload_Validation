const getQuery = () => {
  return "SELECT * FROM info";
};

const getQueryById = (req) => {
  return `SELECT * FROM info WHERE id = ${req.query.id || req.params.id};`;
};

const postQuery = (req) => {
  return `INSERT INTO info (name, birth) VALUES (${req.body.name},${req.body.birth});`;
};
const putQueryById = (req) => {
  return `UPDATE FAHAD_DB.info
    SET name = ${req.body.name}, birth = ${req.body.birth}
     WHERE id = ${req.params.id||req.params.id};`;
};

const DeleteQueryById = (req) => {
  return `DELETE FROM info WHERE id = ${req.params.id||req.params.id};`;
};

module.exports={getQuery,getQueryById,postQuery,putQueryById,DeleteQueryById}