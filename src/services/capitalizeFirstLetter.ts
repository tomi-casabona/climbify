export function capitalizeFirstLetterOnly(str: string) {

    const words = str.split(" ");

    const capitalizedWords = words.map(word =>
        word.toLowerCase().charAt(0).toUpperCase() + word.toLowerCase().slice(1)
    );

    return capitalizedWords.join(" ");
}
