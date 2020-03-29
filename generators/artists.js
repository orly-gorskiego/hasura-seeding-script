const faker = require('faker');

const generateRandomArtist = () => ({ name: faker.internet.userName() })

module.exports = {
  generateRandomArtist
}