import { useState, useTransition } from "react";

type Data = {
  title: string;
  body: string;
}
 
function AsyncFunctionsPage() {
  const [data, setData] = useState<Data | null>(null);
  const [isPending, startTransition] = useTransition();

  const fetchData = async () => {
    startTransition(async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
      const result = await response.json();
      setData(result);
    });
  };

  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Async Functions in Transitions</h2>

      <div>
        <p className="mb-5">
          This example demonstrates how to use async functions in transitions.
        </p>
      </div>
      <div className="flex items-center space-x-5 mb-5">
        <button onClick={fetchData} disabled={isPending}>
          {isPending ? "Loading..." : "Fetch Data"}
        </button>
        <button onClick={() => setData(null)} disabled={isPending}>
          Clear Data
        </button>
      </div>
      <div className="flex flex-col space-y-10">
        {data && (
          <div>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}


export default AsyncFunctionsPage