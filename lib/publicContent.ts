const blockedPublicTerms = [
  "TODO",
  "confirm official source",
  "placeholder",
  "internal review",
  "needs confirmation",
];

export function isPublicSafe(value?: string | null) {
  if (!value) return false;

  const normalized = value.toLowerCase();
  return !blockedPublicTerms.some((term) => normalized.includes(term.toLowerCase()));
}

export function publicText(value?: string | null, fallback = "") {
  return isPublicSafe(value) ? value! : fallback;
}

export function publicList(values: string[] = []) {
  return values.filter(isPublicSafe);
}

export function publicDateLabel(value?: string | null, fallback = "") {
  if (!value) return fallback;
  if (isPublicSafe(value)) return value;

  const firstSegment = value.split("/")[0]?.trim();
  return isPublicSafe(firstSegment) ? firstSegment : fallback;
}

export function isUnconfirmedValue(value: unknown) {
  return value === "TODO";
}
