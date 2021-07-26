const service = {};

const mockupList = [
  {
    id: 1,
    title: "Pasta",
    price: "5.49",
    weight: 200,
    calories: 500,
  },
  {
    id: 2,
    title: "Pizza",
    price: "6.25",
    weight: 180,
    calories: 450,
  },
  {
    id: 3,
    title: "Risotto",
    price: "4.70",
    weight: 160,
    calories: 400,
  },
];

service.getList = () => {
  return mockupList;
};

service.getDetails = (id) => {
  return mockupList[id]
    ? mockupList[id]
    : {
        error: {
          message: "Not available",
          status: 404,
        },
      };
};

service.postDinner = (request) => {
  return [];
};

service.deleteDinner = (id) => {
  return [];
};

module.exports = service;
