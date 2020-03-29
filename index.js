const { generateRandomUser } = require('./generators/user');
const { createUsers } = require('./api/users/index')
const dotenv = require('dotenv');

dotenv.config();

const USER_BATCH = 100

const main = async () => {
  const emptyArray = new Array(USER_BATCH).fill(0);
  const randomUsersArray = emptyArray.map(() => generateRandomUser())

  const result = await createUsers(randomUsersArray)
}

main()