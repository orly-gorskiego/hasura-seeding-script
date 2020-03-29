const { getRandomUser } = require('./generators/user');
const { sendRequest } = require('./api/client');
const { getUserQuery } = require('./api/queries/user')
const dotenv = require('dotenv');
dotenv.config();

const user = getRandomUser()

const main = async () => {
  const userRequest = await sendRequest(getUserQuery)
}

main()