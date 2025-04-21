import { format, addDays } from "date-fns";

export const DateRangeBar = ({ weekStart, goToPrevWeek, goToNextWeek }) => {
  const start = format(weekStart, "MMM d");
  const end = format(addDays(weekStart, 6), "MMM d");

  return (
    <div className="flex items-center justify-center gap-4">
      <button onClick={goToPrevWeek}>&larr;</button>
      <span className="text-sm font-medium">{start} – {end}</span>
      <button onClick={goToNextWeek}>&rarr;</button>
    </div>
  );
};
