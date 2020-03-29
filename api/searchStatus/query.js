const getAllSearchStatusesQuery = `
  {
    search_status {
      id,
      name
    }
  }
`

module.exports = {
  getAllSearchStatusesQuery
}