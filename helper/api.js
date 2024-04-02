const axios = require('axios');

const API_URL = 'https://your-api.com/postal-codes';

async function getPostalCodes() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching postal codes:', error);
    return [];
  }
}

const mockPostalCodes = [
  { postalCode: "28001", city: "Madrid", province: "Madrid" },
  { postalCode: "08001", city: "Barcelona", province: "Barcelona" },
  { postalCode: "41001", city: "Sevilla", province: "Sevilla" },
  { postalCode: "46001", city: "Valencia", province: "Valencia" },
];

async function getPostalCodesMock() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockPostalCodes;
}

module.exports = { getPostalCodes, getPostalCodesMock };
