import React, { useState } from "react";
import { NewStateObject } from "../types/userDataTypes";
import { createUserData } from "../services/createUserData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { updateUserData } from "../redux/thunks/userDataThunks";

export const Formulario: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const userData = useSelector((state: RootState) => state.userData.data)

  console.log(userData);

  const [newState, setNewState] = useState<NewStateObject>({
    locationName: "",
    schoolName: "",
    sectorName: "",
    routeName: "",
    routeGrade: 0,
    routeHeight: 0,
    comments: "",
  });

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const newUserData = createUserData(userData, newState);
		dispatch(updateUserData(newUserData));
	};

	return (
		<div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
			<h1 className="text-2xl font-bold mb-6">
				Formulario de Vías de Escalada
			</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Nombre de la Ciudad:
					</label>
					<input
						name="locationName"
						type="text"
						value={newState.locationName}
						onChange={handleChange}
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Nombre de la Escuela:
					</label>
					<input
						name="schoolName"
						type="text"
						value={newState.schoolName}
						onChange={handleChange}
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Nombre del Sector:
					</label>
					<input
						name="sectorName"
						type="text"
						value={newState.sectorName}
						onChange={handleChange}
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Nombre de la Vía:
					</label>
					<input
						name="routeName"
						type="text"
						value={newState.routeName}
						onChange={handleChange}
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Grado:
					</label>
					<input
						name="routeGrade"
						type="number"
						value={newState.routeGrade}
						onChange={handleChange}
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Altura máxima:
					</label>
					<input
						name="routeHeight"
						type="number"
						value={newState.routeHeight}
						onChange={handleChange}
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Comentarios:
					</label>
					<textarea
						name="comments"
						value={newState.comments}
						onChange={handleChange}
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<button
					type="submit"
					onClick={handleSubmit}
					className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Agregar Vía
				</button>
			</form>
		</div>
	);
};
