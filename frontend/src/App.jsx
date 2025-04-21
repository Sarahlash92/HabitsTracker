import "./App.css";
import React, { useState, useEffect } from "react";
import { HabitsTable } from "./components/habitsTable/habitsTable";
import { DateRangeBar } from "./components/dateRangeBar/dateRangeBar";
import { UserProfileCard } from "./components/userProfileCard/userProfileCard";
import { CreateHabit } from "./components/createHabit/createHabit";
import { HabitDisplayColumn } from "./components/habitDisplayColumn/habitDisplayColumn";
import { startOfWeek, addWeeks } from "date-fns";

import {
  fetchHabits,
  createHabit,
  updateCompletedDates,
  deleteHabit,
} from "./services/api";

function App() {
  const [habits, setHabits] = useState([]);
  const [weekStart, setWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  useEffect(() => {
    const loadHabits = async () => {
      try {
        const data = await fetchHabits();
        console.log(data);
        setHabits(data);
      } catch (err) {
        console.error("Failed to load habits", err);
      }
    };
    loadHabits();
  }, []);

  const handleDelete = async (habitIdToDelete) => {
    try {
      await deleteHabit(habitIdToDelete);
      setHabits((prev) => prev.filter((habit) => habit.id !== habitIdToDelete));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleSetCompletedDates = async (habitIndex, newCompletedDates) => {
    const habit = habits[habitIndex];
    try {
      await updateCompletedDates(habit.id, newCompletedDates);
      const updatedHabits = [...habits];
      updatedHabits[habitIndex] = {
        ...habit,
        completedDates: newCompletedDates,
      };
      setHabits(updatedHabits);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  const goToPrevWeek = () => setWeekStart((prev) => addWeeks(prev, -1));
  const goToNextWeek = () => setWeekStart((prev) => addWeeks(prev, 1));

  const handleCreateHabit = async (habitInput) => {
    try {
      const newHabit = await createHabit(habitInput);
      setHabits((prev) => [...prev, newHabit]);
    } catch (err) {
      console.error("Failed to create habit", err);
    }
  };

  return (
    <div className="flex h-screen justify-between w-full overflow-scroll">
      <div className="flex flex-col w-2/3 h-3/4 gap-10">
        <UserProfileCard habits={habits} />
        <CreateHabit
          onCreate={handleCreateHabit}
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
  );
}

export default App;
