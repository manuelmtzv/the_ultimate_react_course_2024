export interface City {
  id: number;
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: Position;
}

export interface CreateCity extends Omit<City, "id"> {}

export interface Position {
  lat: number;
  lng: number;
}
