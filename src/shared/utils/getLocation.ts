export const getCurrentPosition = () => {
  if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const positionCity = await getCityName(latitude, longitude, "ddbaac78a0f34977aa754368605a7193");
    return positionCity;
  }, function(error) {
    console.error("Error getting location:", error.message);
  });
  } else {
    console.error("Geolocation is not available in your browser");
  }
}


const getCityName = (latitude: number, longitude: number, apiKey: string) =>  {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

   fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.results.length > 0) {
        const city = data.results[0].components.city || data.results[0].components.town || data.results[0].components.village;

        if (city) {
          return (city);
        } else {
          console.log("City not found in the response.");
        }
      } else {
        console.error("Geocoding request failed or returned no results.");
      }
    })
    .catch(error => {
      console.error("Error fetching data from the Geocoding API: " + error);
    });
}