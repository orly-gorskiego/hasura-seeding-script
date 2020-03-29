const { createUserMutation } = require("./query")
const { sendRequest } = require("../client")

const createUsers = async (data) => {
  const query = createUserMutation()
  const variables = {
    data
  }

  return await sendRequest(query, variables)
}

module.exports = {
  createUsers,
}