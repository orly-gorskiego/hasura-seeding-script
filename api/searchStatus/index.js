const { getAllSearchStatusesQuery } = require("./query")
const { sendRequest } = require("../client")

const getSearchStatuses = async () => {
  const query = getAllSearchStatusesQuery

  return await sendRequest(query)
}

const getRandomSearchStatus = ({ search_status }) => search_status[Math.floor(Math.random() * search_status.length)].id

module.exports = {
  getSearchStatuses,
  getRandomSearchStatus
}