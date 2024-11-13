const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

export const checkPalindrome = async (text: string) => {
  const response = await fetch(`${API_URL}/check-palindrome`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) throw new Error("Verification failed");

  const result = await response.json();
  return result;
};
