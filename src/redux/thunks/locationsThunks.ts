import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { Location } from "../../types/dataTypes";
import { auth, db } from "../../firebase/firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLocations = createAsyncThunk("locations/fetchLocations", async () => {
	const user = auth.currentUser;
	if (!user) {
		throw new Error("No authenticated user");
	}
	try {
		const locationsDocRef = doc(db, user.uid, "locations");
		const locationsDoc = await getDoc(locationsDocRef);

		if (locationsDoc.exists()) {
			const data = locationsDoc.data();
			return data.locations as Location[];
		} else {
			console.error("No locations document found for user:", user.uid);
			throw new Error("No such document");
		}
	} catch (error) {
		console.error("Error fetching locations:", error);
		throw error; // Re-throw the error to be handled by the thunk
	}
});

export const updateLocations = createAsyncThunk(
	"locations/updateLocations",
	async (locations: Location[]) => {
		const user = auth.currentUser;
		if (!user) {
			throw new Error("No authenticated user");
		}

		try {
			const docRef = doc(db, user.uid, "locations");
			const docSnapshot = await getDoc(docRef);

			if (docSnapshot.exists()) {
				await updateDoc(docRef, { locations });
			} else {
				await setDoc(docRef, { locations });
			}
			return locations;
		} catch (error) {
			console.error("Error updating locations:", error);
			throw new Error("Failed to update locations"); // Rethrow or handle error
		}
	}
);

// Thunk para eliminar una location específica
export const deleteLocation = createAsyncThunk(
	"location/deleteLocation",
	async (deletingLocation: Location) => {
		const user = auth.currentUser;
		if (!user) {
			throw new Error("No authenticated user");
		}
		try {
			const docRef = doc(db, user.uid, "locations");
			const docSnapshot = await getDoc(docRef);
			if (!docSnapshot.exists()) {
				throw new Error("No such document");
			}
			const locations = docSnapshot.data()?.locations || [];
			const updatedLocations = locations.filter(
				(location: Location) => location.locationId !== deletingLocation.locationId
			);

			await setDoc(docRef, { routes: updatedLocations });

			return updatedLocations;
		} catch (error) {
			console.error("Error deleting location;", error);
			throw new Error("Failed to delete location");
		}
	}
);
