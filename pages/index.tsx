import Link from "next/link";

export default function Home() {
  const goals = ["DSA", "SystemDesign"];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-6">Select Your Goal</h1>
      <div className="space-y-4">
        {goals.map((goal) => (
          <Link key={goal} href={`/plan/${goal}`}>
            <div className="cursor-pointer bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">
              {goal}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
