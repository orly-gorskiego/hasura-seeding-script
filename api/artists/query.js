const getAllArtists = `
    {
      artists {
        id
        name
      }
    }
  `

const createArtistMutation = () => `
  mutation($data: [artists_insert_input!]!) {
    insert_artists(objects: $data) {
      returning {
        id
      }
    }
  }
`

module.exports = {
  getAllArtists,
  createArtistMutation
}