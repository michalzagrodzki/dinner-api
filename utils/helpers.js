parseIngredients = (payload, keys) => {
  let localList = JSON.parse(JSON.stringify(payload));
  const listWithoutKeys = localList.filter((item) => {
    keys.forEach((key) => {
      delete item[key];
    });
    return item;
  });
  return listWithoutKeys;
};

evaluatePrice = (price, ingredients) => {
  if (price) return price;
  if (!ingredients || ingredients.length === 0) return 0;
  const prices = ingredients.map((item) => {
    const itemPrice = item.price;
    const floatPrice = parseFloat(itemPrice);
    return floatPrice;
  });
  const sumPrice = prices.reduce((a, b) => a + b, 0);
  return sumPrice.toString();
};

module.exports = { parseIngredients };
