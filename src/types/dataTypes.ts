export interface FormObject {
  locationName: string;
  schoolName: string;
  sectorName: string;
  routeName: string;
  routeGrade: number;
  routeHeight: number;
}

export interface State {
  data: Location[] | School[] | Sector[] | Route[] | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface Location {
  locationId: `${string}-${string}-${string}-${string}-${string}`;
  locationName: string;
  schools: number[];
}

export interface School {
  schoolId: `${string}-${string}-${string}-${string}-${string}`;
  schoolName: string;
  locationIndex: number
  sectors: number[];
}

export interface Sector {
  sectorId: `${string}-${string}-${string}-${string}-${string}`;
  sectorName: string;
  schoolIndex: number;
  locationIndex: number;
  routes: number[];
}

export interface Route {
  routeId: `${string}-${string}-${string}-${string}-${string}`;
  routeName: string;
  routeGrade: number;
  routeScore?: number;
  routeComments?: string[];
  routeHeight: number;
  routeAttempts: Attempt[];
  completed: boolean;
  sectorIndex: number;
  schoolIndex: number;
  locationIndex: number;
}

export interface Attempt {
  id: `${string}-${string}-${string}-${string}-${string}`;
  date: Date;
  completed: boolean;
}