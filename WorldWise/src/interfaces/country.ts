import {City} from '@/interfaces/city'

export type Country = Omit<City, 'cityName'>