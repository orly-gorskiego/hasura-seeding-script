const { getSearchStatuses, getRandomSearchStatus } = require('../searchStatus/index')
const { createUserSearchStatusMutation } = require("./query")
const { sendRequest } = require("../client")

const generateUserSearchStatuses = async (data) => {
  const userIds = data.insert_users.returning;
  const searchStatuses = await getSearchStatuses()
  const randomUserSearchStatuses = userIds.map((user) => ({ user_id: user.id, status_id: getRandomSearchStatus(searchStatuses)}))

  return randomUserSearchStatuses
}

const createUserSearchStatuses = async (data) => {
  const statuses = await generateUserSearchStatuses(data)
  const query = createUserSearchStatusMutation

  const variables = {
    data: statuses
  }

  return await sendRequest(query, variables)
}

module.exports = createUserSearchStatuses