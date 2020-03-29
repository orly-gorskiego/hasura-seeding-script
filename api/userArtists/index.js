const { createUserArtistsMutation } = require("./query")
const { sendRequest } = require("../client")
const { getArtistsSlice } = require("../../generators/userArtists")

const getUserArtistQuantity = () => Math.floor(Math.random() * 5)

const createUserArtists = async (usersData, artistsData) => {
  const query = createUserArtistsMutation

  const users = usersData.insert_users.returning
  const artists = artistsData.insert_artists.returning

  const userArtists = []

  users.forEach(user => {
    const userArtistNumber = getUserArtistQuantity()
    const artistsSlice = getArtistsSlice(artists, userArtistNumber)

    artistsSlice.forEach(artist => {
      userArtists.push({ user_id: user.id, artist_id: artist.id })
    })
  })

  const variables = {
    data: userArtists
  }

  return await sendRequest(query, variables)
}

module.exports = createUserArtists