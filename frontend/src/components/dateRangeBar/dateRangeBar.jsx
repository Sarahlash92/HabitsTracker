import React, { useMemo } from "react";
import { format, startOfWeek, addDays } from "date-fns";

export const DateRangeBar = () => {
  const weekStart = useMemo(() => startOfWeek(new Date(), { weekStartsOn: 1 }), []);
  const weekEnd = useMemo(() => addDays(weekStart, 6), [weekStart]);

  const formattedStart = format(weekStart, "EEE, MMMM d");
  const formattedEnd = format(weekEnd, "EEE, MMMM d");

  return (
    <div className="bg-white shadow-md rounded-lg px-4 py-2 text-gray-700 text-lg font-medium mb-4">
      {`${formattedStart} – ${formattedEnd}`}
    </div>
  );
};
