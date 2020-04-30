const getPuzzle = async (countWord) => {
  const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${countWord}`);

  if(response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to get puzzle');
  }
}

// const getPuzzle = (countWord) => {
//   return fetch(`https://puzzle.mead.io/puzzle?wordCount=${countWord}`).then((response) => {
//     if(response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('Unable to fetch puzzle');
//     }
//   }).then((data) => {
//     return data.puzzle;
//   });
// }

const getCurrentCountry = async () => {
  const location = await getLocation();
  
  return  getCountry(location.country);
}

const getCountry = async (countryCode) => {
  const response = await fetch('https://restcountries.eu/rest/v2/all');

    if(response.status === 200) {
      const data = await response.json();

      return data.find((country) => country.alpha2Code === countryCode);
    } else {
      throw new Error('Unable to fetch the country');
    }
}

const getLocation = async () => {
  const response = await fetch('https://ipinfo.io/json?token=29074c75cebdcc');

    if(response.status === 200) {
      return response.json();
    } else {
      throw new Error('Unable to get the current location');
    }
}

export { getPuzzle as default }