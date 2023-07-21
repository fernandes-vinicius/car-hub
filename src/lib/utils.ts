import { CarProps } from '@/types'

type FilterParams = {
  manufacturer: string
  year: number
  fuel: string
  limit: number
  model: string
}

export async function fetchCars(params: FilterParams) {
  const { fuel, limit, manufacturer, model, year } = params

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`

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

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage')

  const { make, model, year } = car

  url.searchParams.append(
    'customer',
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '',
  )
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}

export function updateSearchParams(type: string, value: string) {
  const searchParams = new URLSearchParams(window.location.search)

  searchParams.set(type, value)

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname
}
