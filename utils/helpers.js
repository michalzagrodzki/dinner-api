const { OMITTED_INGREDIENTS_KEYS } = require("./constants");

parseIngredients = (payload) => {
  let localList = JSON.parse(JSON.stringify(payload));
  const listWithoutKeys = localList.filter((item) => {
    OMITTED_INGREDIENTS_KEYS.forEach((key) => {
      delete item[key];
    });
    return item;
  });
  return listWithoutKeys;
};

module.exports = { parseIngredients };
