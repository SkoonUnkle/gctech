export type Destination = {
  name: string
  description: string
  imageSrc: string
  imageAlt: string
  id: string
}

export interface ICity {
  id: string
  name: string
  description: string
  details: CityDetails[]
}

type CityDetails = {
  name: string
  description: string
}
