noSpecialCharacters = (payload) => {
  regex = new RegExp(/^[0-9a-zA-Z]+$/g);
  return regex.test(payload);
};

const is = {
  missingParams: (payload) => {
    if (!payload.params) return true;
  },
  emptyParams: (payload) => {
    const { params } = payload;
    if (!params.id && params.id === "") return true;
  },
  missingBody: (payload) => {
    if (!payload.body) return true;
  },
  undefinedValue: (value) => {
    if (value === undefined || value === null) return true;
  },
  emptyValue: (value) => {
    if (value === "") return true;
  },
  emptyIngredients: (list) => {
    if (list.length === 0) return true;
  },
  emptyBody: (payload) => {
    const { ingredients } = payload.body;
    if (!ingredients || ingredients.length === 0) return true;
  },
};

module.exports = {
  noSpecialCharacters,
  is,
};
