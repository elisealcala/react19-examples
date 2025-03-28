import { Button } from '@/components/ui/button';
import { useOptimistic, useState, useTransition } from 'react';

interface Todo {
  id: number;
  text: string;
}


function UseOptimisticPage() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn useOptimistic' },
    { id: 2, text: 'Write clean React code' },
  ]);

  const [optimisticTodos, addOptimisticTodo] = useOptimistic<Todo[], Todo>(
    todos,
    (state, newTodo) => [...state, newTodo]
  );

  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    const text = formData.get('text')?.toString().trim();
    if (!text) return;

    const newTodo: Todo = {
      id: Date.now(),
      text,
    };

    addOptimisticTodo(newTodo);

    startTransition(async () => {
      try {
        await new Promise((res) => setTimeout(res, 1000));

        setTodos((prev) => [...prev, newTodo]);
      } catch (err) {
        console.error('Error saving todo:', err);
      }
    });
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="font-bold text-3xl mb-5">useOptimistic Example</h2>

      <form action={handleSubmit} className="flex items-center gap-2 mb-4">
        <input
          name="text"
          type="text"
          placeholder="Add a task"
          className="flex-1 border border-gray-300 px-3 py-2 rounded"
          required
        />
        <Button
          type="submit"
          variant="outline"
          disabled={isPending}
        >
          {isPending ? 'Adding...' : 'Add'}
        </Button>
      </form>

      <ul className="list-disc list-inside space-y-1">
        {optimisticTodos.map((todo) => (
          <li key={todo.id} className="text-gray-800">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseOptimisticPage;