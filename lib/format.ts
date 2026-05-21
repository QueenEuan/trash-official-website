export function formatDate(value: string) {
  if (value === "TODO") {
    return "";
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(value));
}

export function yearFromDate(value: string) {
  if (value === "TODO") {
    return Number.NaN;
  }

  return new Date(value).getFullYear();
}
