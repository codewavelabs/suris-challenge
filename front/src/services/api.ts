const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

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

export const getHistory = async () => {
  const response = await fetch(`${API_URL}/history`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Error getting history");

  const result = await response.json();
  console.warn(response);
  return result.records;
};
