import "./App.css";
import React, { useState } from "react";
import { HabitsTable } from "./components/habitsTable/habitsTable";
import { DateRangeBar } from "./components/habitsTable/dateRangeBar/dateRangeBar";
import { UserProfileCard } from "./components/habitsTable/userProfileCard/userProfileCard";

function App() {
  const data = [
    {
      id: 1,
      name: "Drink Water",
      color: "bg-blue-400",
      description: "Drink at least 8 glasses of water today",
      completedDates: ["2025-04-16", "2025-04-17"],
    },
    {
      id: 2,
      name: "Exercise",
      color: "bg-green-400",
      description: "Do at least 30 minutes of physical activity",
      completedDates: [],
    },
    {
      id: 3,
      name: "Read for 30 mins",
      color: "bg-purple-500",
      description: "Spend 30 minutes reading a book or article",
      completedDates: ["2025-04-15"],
    },
    {
      id: 4,
      name: "Meditate",
      color: "bg-yellow-400",
      description: "Take 10–15 minutes to sit quietly and focus on breathing",
      completedDates: ["2025-04-16", "2025-04-18"],
    },
    {
      id: 5,
      name: "Write Journal",
      color: "bg-pink-400",
      description: "Reflect on the day by writing one journal entry",
      completedDates: ["2025-04-17"],
    },
  ];

  const [habits, setHabits] = useState(data);
  console.log("habits", habits);
  return (
    <div className="">
      <UserProfileCard habits={habits} />
      <DateRangeBar />
      <HabitsTable habits={habits} />
    </div>
  );
}

export default App;
