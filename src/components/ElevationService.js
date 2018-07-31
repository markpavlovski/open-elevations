import axios from 'axios'
import React from 'react';


// Length in meters of 1° of latitude = always 111320 m; 1km along a lat line = 0.00898311174° of latitude
// Length in meters of 1° of longitude = 40075000 m * cos( latitude ) / 360, 1km along a long line = 0.008983156581409857/cos(latitude) ° of longitude

// All calculations done in meters

class ElevationService {

  static request(
    anchorLatlong = {latitude: 47.668939,longitude: -122.384951},
    radius = 3000,
    resolution = 1/10
  ){

    const stepCount = Math.floor(1/resolution)
    const stepSize = radius / stepCount
    const matrixSize = 2 * stepCount + 1

    const locationMatrix = ElevationService.createLocationMatrix(anchorLatlong, matrixSize, stepSize, stepCount)
    console.log(locationMatrix);

    const url = 'https://api.open-elevation.com/api/v1/lookup'
    const data = {
    	"locations":
    	[...Array(20)].map(el=>anchorLatlong)
    }
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
     }
    }
    const reqs = [...Array(1)].map(req => axios.post(url, data, config))

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


  static createLocationMatrix(latlong, matrixSize, stepSize, stepCount){
    const step = {x: 0.00000898311174, y : 0.000008983156581409857/Math.cos(latlong.latitude)}
    const locationMatrix = [...Array(matrixSize)]
      .map(el => [...Array(matrixSize)])
      .map((matrixRow,row) => matrixRow.map((location, col) => {
          const offset = {x: col - stepCount, y: stepCount - row}
          return {
            latitude: latlong.latitude + offset.x * step.x,
            longitude: latlong.longitude + offset.y * step.y
          }
        })
      )
    return locationMatrix
  }


}

export default ElevationService
