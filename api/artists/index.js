const { createArtistMutation } = require("./query")
const { sendRequest } = require("../client")

const createArtists = async (data) => {
  const query = createArtistMutation()
  const variables = {
    data
  }

  return await sendRequest(query, variables)
}

module.exports = {
  createArtists,
}