const storage = {}

const insertText = (text) => {
  storage.text = text;
  console.log(storage);
  return storage;
}

const getText = (text) => {
  return storage.text;
}

module.exports = {
  insertText,
  getText
};
