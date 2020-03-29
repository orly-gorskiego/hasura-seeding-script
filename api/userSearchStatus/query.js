const createUserSearchStatusMutation = `
  mutation($data: [user_search_status_insert_input!]!) {
    insert_user_search_status(objects: $data) {
      returning {
        id
      }
    }
  }
`

module.exports = {
  createUserSearchStatusMutation
}