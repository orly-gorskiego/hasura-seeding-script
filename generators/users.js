const faker = require('faker');

const getRandomGender = () => Math.floor(Math.random() * 2)

const getRandomBirthDate = () => faker.date.between('1980-01-01', '2002-12-31');

const generateRandomUser = () => ({
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  birth_date: getRandomBirthDate(),
  gender: getRandomGender(),
  photo_url: faker.image.avatar(),
  description: faker.lorem.sentences(3, 3)
})

exports.generateRandomUser = generateRandomUser;