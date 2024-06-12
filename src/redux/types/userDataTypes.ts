export interface UserData {
  ascents: number;
  locations: null | Location[];
}

export interface Location {
  location: string;
  schools: School[];
}

export interface School {
  school: string;
  sectors: Sector[];
}

export interface Sector {
  sector: string;
  routes: Route[];
}

export interface Route {
  route: string;
  grade: number;
  score?: number;
  height: number;
  attempts: Attempt[];
  completed: boolean;
}

export interface Attempt {
  id: string;
  date: Date;
  comments?: string;
  completed: boolean;
}