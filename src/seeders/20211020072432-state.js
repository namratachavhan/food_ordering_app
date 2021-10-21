'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('States',
      [
        {
          name: "Andaman and Nicobar Islands",
          countryId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Andhra Pradesh",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()
         },
        {name: "Arunachal Pradesh",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Assam",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Bihar",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Chandigarh",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Chhattisgarh",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Dadra and Nagar Haveli",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Daman and Diu",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Delhi",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Goa",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Gujarat",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Haryana",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Himachal Pradesh",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Jammu and Kashmir",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Jharkhand",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Karnataka",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Kerala",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Lakshadweep",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Madhya Pradesh",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Maharashtra",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Manipur",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Meghalaya",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Mizoram",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Nagaland",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Odisha",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Puducherry",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Punjab",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Rajasthan",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Sikkim",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Tamil Nadu",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Telangana",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Tripura",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Uttarakhand",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "Uttar Pradesh",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()},
        {name: "West Bengal",
                  countryId:1,
                  createdAt: new Date(),
                  updatedAt: new Date()}
              ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('States', null, {});
  }
};
