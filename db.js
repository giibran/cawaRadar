const connector = require('./db_connectors/db_memory');

const insertTextToDB = (text) => {
  connector.insertText(text);
};

const getTextToDB = () => {
  return connector.getText();
};

module.exports = {
  insertTextToDB,
  getTextToDB
};
