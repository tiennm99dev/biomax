/**
 * A name inside a sentence: only the first letter lowered, so a species or
 * abbreviation later in the name (Bt, Wolbachia, Aedes) keeps its capital,
 * and a name that starts with an abbreviation (NPV, IPM) is left as it is.
 * @param {string} text
 */
export function lowerFirst(text) {
  if (/^\p{Lu}\p{Lu}/u.test(text)) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
}
