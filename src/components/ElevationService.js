import axios from 'axios'

class ElevationService {

  static request(
    anchorLatlong = {latitude: 47.668939,longitude: -122.384951},
    radius = 30000,
    resolution = 1/100
  ){
    const openElevations = 'https://api.open-elevation.com/api/v1/lookup'
    const reqs = [...Array(10)].map(req => axios.post(openElevations, {
    	"locations":
    	[...Array(20)].map(el=>anchorLatlong)
    }))

    Promise.all(reqs)
    .then(responses => {
      console.log(responses.length)
      responses.forEach(response =>
      console.log(response.data.results)
    )})
    .catch(error => {
      console.log(error)
    })
  }

  static createLocationMatrix(){

  }


}

export default ElevationService
