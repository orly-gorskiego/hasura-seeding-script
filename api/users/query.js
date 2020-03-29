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

const createUserMutation = `
  mutation($data: [users_insert_input!]!) {
    insert_users(objects: $data) {
      returning {
        id
      }
    }
  }
`

module.exports = {
  getUserQuery,
  createUserMutation
}