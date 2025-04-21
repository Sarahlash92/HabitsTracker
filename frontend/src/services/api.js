const API_BASE = "http://localhost:8080";

export const fetchHabits = async () => {
  const res = await fetch(`${API_BASE}/habits`);
  if (!res.ok) throw new Error("Failed to fetch habits");
  return res.json();
};

export const createHabit = async (habit) => {
  const res = await fetch(`${API_BASE}/habits`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(habit),
  });
  if (!res.ok) throw new Error("Failed to create habit");
  return res.json();
};

export const updateCompletedDates = async (id) => {
  const res = await fetch(`${API_BASE}/habits/${id}/toggle`, {
    method: "PATCH",
  });
  if (!res.ok) throw new Error("Failed to update completed dates");
  return res.json();
};

export const deleteHabit = async (id) => {
  const res = await fetch(`${API_BASE}/habits/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete habit");
};
