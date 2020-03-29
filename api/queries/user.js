const getUserQuery = `
    {
      users {
        id
        first_name
        last_name
        favorite_artists {
          artist {
            id
            name
          }
        }
      }
    }
  `

module.exports = {
  getUserQuery
}