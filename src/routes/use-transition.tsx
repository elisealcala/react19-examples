import { useState, useTransition } from "react";

function UseTransitionPage() {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleIncrement = () => {
    startTransition(() => {
      setCount((prev) => prev + 1);
    });
  };

  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">useTransition Example</h2>
      <div className="flex items-center space-x-5 mb-5">
        <button onClick={handleIncrement} disabled={isPending}>
          {isPending ? "Updating..." : "Increment"}
        </button>
        <button onClick={() => setCount(0)} disabled={isPending}>
          Clear Data
        </button>
      </div>
      <p className="mt-3">Count: {count}</p>
    </div>
  );
}

export default UseTransitionPage;