export const checkTypeAndPalindromeString = (
  text: string
): { type: string; isPalindrome: boolean } => {
  const cleanedString = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const isPalindrome =
    cleanedString === cleanedString.split("").reverse().join("");

  return {
    type: text.includes(" ") ? "phrase" : "word",
    isPalindrome,
  };
};
