import { useRouter } from "next/router";
import { plans } from "../../data/plans";

export default function GoalPlanPage() {
  const router = useRouter();
  const { goal } = router.query;
  const selectedPlan = plans[goal as keyof typeof plans] || [];

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">30-Day Plan for {goal}</h1>
      <ul className="space-y-2">
        {selectedPlan.map((task) => (
          <li
            key={task.day}
            className="bg-white p-4 rounded shadow hover:bg-gray-50"
          >
            <span className="font-medium">Day {task.day}:</span> {task.topic}
          </li>
        ))}
      </ul>
    </div>
  );
}
