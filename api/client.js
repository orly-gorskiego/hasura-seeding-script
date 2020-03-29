const { GraphQLClient } = require('graphql-request')

const sendRequest = async (query, variables = {}) => {
  const endpoint = process.env.API_ENDPOINT
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "x-hasura-admin-secret": process.env.AUTH_TOKEN,
    },
  })

  return await graphQLClient.request(query, variables);
}

exports.sendRequest = sendRequest;