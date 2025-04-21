const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchHabits = async () => {
  const response = await fetch(`${API_BASE_URL}/habits`);
  return response.json();
};

export const createHabit = async (habitInput) => {
  const response = await fetch(`${API_BASE_URL}/habits`, {
    method: "POST",
    body: JSON.stringify(habitInput),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const updateCompletedDates = async (habitId) => {
  const response = await fetch(`${API_BASE_URL}/habits/${habitId}/toggle`, {
    method: "PATCH",
  });
  return response.json();
};

export const deleteHabit = async (habitId) => {
  const response = await fetch(`${API_BASE_URL}/habits/${habitId}`, {
    method: "DELETE",
  });
  return response.json();
};
