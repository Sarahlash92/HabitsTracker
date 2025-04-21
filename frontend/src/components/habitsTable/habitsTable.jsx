import React from "react";
import {
  format,
  addDays,
  isSameDay,
  parseISO,
  isToday,
} from "date-fns";

export const HabitsTable = ({ habits, weekStart }) => {
  // Make sure weekStart is a valid Date
  const startDate = new Date(weekStart);
  if (isNaN(startDate)) return <div>Invalid week start</div>;

  const weekDates = Array.from({ length: 7 }, (_, i) => addDays(startDate, i));

  return (
    <div className="flex h-2/3">
      <table className="border-separate border-spacing-x-2 border-spacing-y-0 flex-grow">
        <thead className="text-left">
          <tr>
            <th />
            <th />
            {weekDates.map((day, index) => (
              <th
                key={index}
                className="min-w-[60px] py-3 font-light text-center"
              >
                {format(day, "EEE")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="border-black">
          {habits.map((habit) => (
            <tr key={habit.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-center">
                <span
                  className={`inline-block w-3 h-3 rounded-full ${habit.color}`}
                ></span>
              </td>
              <td className="p-2 font-light text-left">{habit.name}</td>
              {weekDates.map((day, index) => {
                const habitCompletedDates = habit.completedDates || [];
                const completed = habitCompletedDates.some((date) =>
                  isSameDay(parseISO(date), day)
                );
                return (
                  <td key={index}>
                    <div className="flex items-center justify-center w-full h-full">
                      <span
                        className={`block rounded-md w-7 h-7 transition-all duration-200
                          ${
                            completed
                              ? `${habit.color} text-white`
                              : isToday(day)
                              ? "bg-pink-50"
                              : "bg-gray-50"
                          }`}
                      />
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
