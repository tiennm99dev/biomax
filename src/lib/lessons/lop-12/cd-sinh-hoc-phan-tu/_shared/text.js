/**
 * A name inside a sentence: the first letter lowered, so an abbreviation
 * later in the name (DNA, PCR, Bt) keeps its capitals, and a name that starts
 * with one (DNA, RNAi) is left as it is.
 * @param {string} text
 */
export function lowerFirst(text) {
  if (/^\p{Lu}\p{Lu}/u.test(text)) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
}
