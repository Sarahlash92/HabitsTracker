import "./App.css";
import React, { useState } from "react";
import { HabitsTable } from "./components/habitsTable/habitsTable";
import { DateRangeBar } from "./components/dateRangeBar/dateRangeBar";
import { UserProfileCard } from "./components/userProfileCard/userProfileCard";
import { CreateHabit } from "./components/createHabit/createHabit";
import { HabitDisplayColumn } from "./components/habitDisplayColumn/habitDisplayColumn";
import { startOfWeek, addWeeks } from "date-fns";

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

  const [weekStart, setWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  const handleDelete = (habitIdToDelete) => {
    const updatedHabits = habits.filter(
      (habit) => habit.id !== habitIdToDelete
    );
    setHabits(updatedHabits);
  };

  const handleSetCompletedDates = (habitIndex, newCompletedDates) => {
    const updatedHabits = [...habits];
    updatedHabits[habitIndex] = {
      ...updatedHabits[habitIndex],
      completedDates: newCompletedDates,
    };
    setHabits(updatedHabits);
  };

  const goToPrevWeek = () => setWeekStart((prev) => addWeeks(prev, -1));
  const goToNextWeek = () => setWeekStart((prev) => addWeeks(prev, 1));

  return (
    <>
      <div className="flex h-screen justify-between w-full overflow-scroll">
        <div className="flex flex-col w-2/3 h-3/4 gap-10">
          <UserProfileCard habits={habits} />
          <CreateHabit
            habitsOnDisplay={habits}
            setHabitsOnDisplay={setHabits}
          />
          <DateRangeBar
            weekStart={weekStart}
            goToPrevWeek={goToPrevWeek}
            goToNextWeek={goToNextWeek}
          />
          <HabitsTable habits={habits} weekStart={weekStart} />
        </div>
        <HabitDisplayColumn
          habits={habits}
          setCompletedDates={handleSetCompletedDates}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}
export default App;
