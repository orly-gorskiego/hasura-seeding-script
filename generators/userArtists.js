const getRandomArtistIndex = (artists) => {
  const artistsLength = artists.length - 1
  const index = Math.floor(Math.random() * artistsLength)

  return index
}

const getArtistsSlice = (artists, number) => {
  const randomArtistsSlice = []
  const newArtists = [...artists]

  for (let i = 0; i <= number; i++) {
    const randomArtistIndex = getRandomArtistIndex(newArtists)
    const randomArtist = { ...newArtists[randomArtistIndex] }

    newArtists.splice(randomArtistIndex, 1)
    randomArtistsSlice.push(randomArtist)
  }

  return randomArtistsSlice
}

module.exports = {
  getArtistsSlice
}