const { generateRandomUser } = require('./generators/users');
const { generateRandomArtist } = require('./generators/artists');
const createUsers = require('./api/users/index')
const createArtists = require('./api/artists/index')
const createUserSearchStatuses = require("./api/userSearchStatus/index")
const createUserArtists = require("./api/userArtists/index")

const dotenv = require('dotenv');

dotenv.config();

const USERS_BATCH = 500
const ARTISTS_BATCH = 500

const main = async () => {
  const emptyUserArray = new Array(USERS_BATCH).fill(0);
  const emptyArtistsArray = new Array(ARTISTS_BATCH).fill(0);

  try {
    const randomUsersArray = emptyUserArray.map(() => generateRandomUser())
    const randomArtistsArray = emptyArtistsArray.map(() => generateRandomArtist())

    // const users = await createUsers(randomUsersArray)
    // const artists = await createArtists(randomArtistsArray)
    // await createUserSearchStatuses(users)
    // await createUserArtists(users, artists)
  } catch (error) {
   console.log(error)
  }
}

main()