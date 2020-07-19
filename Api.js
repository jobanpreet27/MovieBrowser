
export  const FetchMovies = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=d1004768`)
    const {results} = await response.json()
    return results
  }