export interface Scale {
  scale: string;
  grades: string[];
}

export type ScaleContextType = {
  scale: Scale;
  selectScale: (scaleIndex: number) => void;
}