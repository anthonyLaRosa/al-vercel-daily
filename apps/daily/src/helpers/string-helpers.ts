// Capitalize first letter of each word in a string
export function capitalizeFirstLetter(str?: string) {
  if (!str) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
