const { createUserSearchStatusMutation } = require("./query")
const { sendRequest } = require("../client")

const createUserSearchStatus = async (data) => {
  const query = createUserSearchStatusMutation()
  const variables = {
    data
  }

  return await sendRequest(query, variables)
}

module.exports = {
  createUserSearchStatus,
}