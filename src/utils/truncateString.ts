export default function truncateString(str: string, maxLength: number) {
  return str.length < maxLength ? str : str.slice(0, maxLength) + "...";
}
