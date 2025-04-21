import { parseISO, isSameDay, subDays } from "date-fns";

export const calculateStreak = (completedDates) => {
  if (!Array.isArray(completedDates) || completedDates.length === 0) {
    return 0;
  }

  const sortedDates = completedDates
    .map((date) => parseISO(date))
    .sort((a, b) => b - a); // newest first

  let streak = 0;
  let current = new Date();

  for (let i = 0; i < sortedDates.length; i++) {
    if (isSameDay(sortedDates[i], current)) {
      streak++;
      current = subDays(current, 1);
    } else if (isSameDay(sortedDates[i], subDays(current, 1))) {
      streak++;
      current = subDays(current, 1);
    } else {
      break;
    }
  }

  return streak;
};
