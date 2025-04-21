import React, { useState } from "react";
import { format } from "date-fns";
import { FiMoreVertical } from "react-icons/fi";

export const HabitCard = ({
  habitId,
  habitName,
  habitColor,
  habitDes,
  habitCompletedDates,
  setCompletedDates,
  onDelete,
}) => {
  const today = format(new Date(), "yyyy-MM-dd");
  const isCompletedToday = habitCompletedDates?.includes(today);
  const [showMenu, setShowMenu] = useState(false);

  const handleMarkToday = () => {
    const updatedDates = isCompletedToday
      ? habitCompletedDates.filter((date) => date !== today)
      : [...habitCompletedDates, today];

    setCompletedDates(updatedDates);
  };

  return (
    <div className="relative flex items-stretch shadow-2xl mb-3 rounded-xl overflow-clip">
      {!isCompletedToday && <div className={`w-2 ${habitColor}`} />}
      <div
        className={`flex-1 text-left p-4 transition-all duration-300 ${
          isCompletedToday
            ? `${habitColor} text-white hover:bg-gray-100`
            : "bg-white text-black"
        }`}
      >
        <div className="absolute top-2 right-3">
          <button onClick={() => setShowMenu(!showMenu)}>
            <FiMoreVertical className="text-lg" />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-28 bg-white border rounded-md shadow-lg z-10">
              <button
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-red-500"
                onClick={() => {
                  setShowMenu(false);
                  onDelete?.(habitId); 
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>

        <div className="pb-2 font-normal">{habitName}</div>
        <div className="pb-3 text-sm">{habitDes}</div>
        <button
          className="p-3 border-2 border-gray-300 rounded-2xl"
          onClick={handleMarkToday}
        >
          {isCompletedToday ? "Mark as Uncompleted" : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
};
