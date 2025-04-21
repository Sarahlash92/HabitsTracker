import { HabitCard } from "../habitCard/habitCard";

export const HabitDisplayColumn = ({ habits, setCompletedDates, handleDelete }) => {
  return (
    <div className="flex justify-center w-1/4 rounded-2x border-2 border-gray-100 h-full overflow-y-auto">
      <div className="w-full m-4 p-4 gap-2 block">
        {habits.map((habit, index) => (
          <div key={habit.id} className="mb-2">
            <HabitCard
              habitName={habit.name}
              habitColor={habit.color}
              habitDes={habit.description}
              habitCompletedDates={habit.completedDates}
              setCompletedDates={(newDates) =>
                setCompletedDates(index, newDates)
              }
              onDelete={() => handleDelete(habit.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};