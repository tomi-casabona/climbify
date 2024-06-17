import * as React from "react";
import { Scale, ScaleContextType } from "../types/gradeType";
import { gradeScale } from "../data/gradeScale";

export const ScaleContext = React.createContext<ScaleContextType | null>(null);

export const ScaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [scale, setScale] = React.useState<Scale>(gradeScale[0]);
	const [scaleIndex, setScaleIndex] = React.useState(0);

	const selectScale = (scaleIndex: number) => {
		const newScale = gradeScale[scaleIndex];
		setScaleIndex(scaleIndex);
		setScale({ ...newScale });
	};

	return (
		<ScaleContext.Provider value={{ scale, scaleIndex, selectScale }}>
			{children}
		</ScaleContext.Provider>
	);
};

export default ScaleProvider;
