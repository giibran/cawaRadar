const {insertTextToDB, getTextToDB} = require('./db');

const insertText = (text) => {
  insertTextToDB(text)
};

const getText = () => {
  value = getTextToDB();
  console.log('text: ' + value);
};

module.exports = {
  insertText,
  getText
};
