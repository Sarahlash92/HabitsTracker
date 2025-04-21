import React, { useState } from "react";

const tailwindColors = [
  { name: "Blue", class: "bg-blue-400" },
  { name: "Green", class: "bg-green-400" },
  { name: "Purple", class: "bg-purple-400" },
  { name: "Yellow", class: "bg-yellow-400" },
  { name: "Pink", class: "bg-pink-400" },
];

export const CreateHabit = ({ habitsOnDisplay, setHabitsOnDisplay }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState(tailwindColors[0].class);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCreateHabit = () => {
    if (!name.trim()) return;

    const newHabit = {
      id: habitsOnDisplay.length + 1,
      name,
      description,
      color,
      completedDates: [],
    };

    setHabitsOnDisplay([...habitsOnDisplay, newHabit]);
    setName("");
    setDescription("");
    setColor(tailwindColors[0].class);
    setIsExpanded(false);
  };

  return (
    <div className="text-left border-2 border-blue-300 rounded-2xl w-full h-fit p-4 bg-white shadow-md">
      <div
        className="text-2xl cursor-pointer hover:text-blue-500 transition-colors flex items-center gap-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="bg-blue-200 text-1xl p-1 w-1/9 h-1/9 flex items-center justify-center align-middle rounded-md">
          {isExpanded ? "−" : "+"}
        </span>
        <span>Create a new habit</span>
      </div>

      {isExpanded && (
        <div className="mt-4 flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter habit name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Description:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Select habit color:
            </label>
            <select
              className="border border-gray-300 rounded-md p-2 w-full"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              {tailwindColors.map((c) => (
                <option key={c.class} value={c.class}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleCreateHabit}
            className="p-3 bg-blue-100 hover:bg-blue-200 rounded-md border border-gray-300 transition"
          >
            Create Habit
          </button>
        </div>
      )}
    </div>
  );
};
