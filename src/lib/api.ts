type Params = {
  model: string
}

export async function fetchCars({ model }: Params) {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2564eea59dmshc9507b79917b379p1ae81fjsn01f5056b682b',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  }

  const response = await fetch(url, options)

  const result = await response.json()

  return result
}

export function calculateCarRent(cityMpg: number, year: number) {
  const basePricePerDay = 50 // Base rental price per day in dollars
  const mileageFactor = 0.1 // Additional rate per mile driven
  const ageFactor = 0.05 // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = cityMpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}
