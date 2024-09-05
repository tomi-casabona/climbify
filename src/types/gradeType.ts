export interface Scale {
  scale: string;
  grades: string[];
}

export type ScaleContextType = {
  scale: Scale;
  scaleIndex: number;
  selectScale: (scaleIndex: number) => void;
}

