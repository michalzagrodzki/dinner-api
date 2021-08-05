noSpecialCharacters = (payload) => {
  regex = new RegExp(/^[0-9a-zA-Z]+$/g);
  return regex.test(payload);
};

module.exports = { noSpecialCharacters };
