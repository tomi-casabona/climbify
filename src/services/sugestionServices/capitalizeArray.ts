import { capitalizeFirstLetterOnly } from "../capitalizeFirstLetter";

export function capitalizeArray(arr: Array<string>) {
	const arrayCapitalized = arr.map((e) => capitalizeFirstLetterOnly(e));
	console.log(arrayCapitalized);

	return arrayCapitalized;
}
