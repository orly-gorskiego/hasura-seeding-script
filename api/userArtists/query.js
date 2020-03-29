const createUserArtistsMutation = `
  mutation($data: [user_artists_insert_input!]!) {
    insert_user_artists(objects: $data) {
      returning {
        id
      }
    }
  }
`

module.exports = {
  createUserArtistsMutation
}