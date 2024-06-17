export function capitalizeFirstLetterOnly(str: string) {
    // Convierte toda la cadena a minúsculas y luego solo la primera letra a mayúscula
    return str.toLowerCase().charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}