const createUserSearchStatusMutation = () => `
  mutation($data: [users_insert_input!]!) {
    insert_users(objects: $data) {
      returning {
        id
      }
    }
  }
`

module.exports = {
  createUserSearchStatusMutation
}