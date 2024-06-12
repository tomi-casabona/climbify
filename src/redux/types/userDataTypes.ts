export interface UserData {
  id: `${string}-${string}-${string}-${string}-${string}`;
  ascents: number;
  locations: Location[];
}

export interface Location {
  id: `${string}-${string}-${string}-${string}-${string}`;
  location: string;
  schools: School[];
}

export interface School {
  id: `${string}-${string}-${string}-${string}-${string}`;
  school: string;
  sectors: Sector[];
}

export interface Sector {
  id: `${string}-${string}-${string}-${string}-${string}`;
  sector: string;
  routes: Route[];
}

export interface Route {
  id: `${string}-${string}-${string}-${string}-${string}`;
  route: string;
  grade: number;
  score?: number;
  height: number;
  attempts: Attempt[];
  completed: boolean;
}

export interface Attempt {
  id: `${string}-${string}-${string}-${string}-${string}`;
  date: Date;
  comments?: string;
  completed: boolean;
}