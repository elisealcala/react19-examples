import { useActionState, useState } from 'react';
import { Button } from "@/components/ui/button"

interface User {
  id: number;
  name: string;
}

interface FormState {
  message: string;
  success: boolean;
  newUser?: User; 
}

const initialState: FormState = {
  message: '',
  success: false,
};

async function addUser(_: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get('name') as string;

  if (!name || name.length < 3) {
    return { message: 'Name must be at least 3 characters long.', success: false };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000)); 

  const newUser: User = {
    id: Date.now(),
    name,
  };

  return {
    message: `User "${name}" added successfully!`,
    success: true,
    newUser,
  };
}

export default function UseActionStateExample() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Ada Lovelace' },
    { id: 2, name: 'Alan Turing' },
  ]);

  const [state, formAction] = useActionState<FormState, FormData>(
    async (prevState, formData) => {
      const result = await addUser(prevState, formData);

      if (result.success && result.newUser) {
        setUsers((prev) => [...prev, result.newUser!]);
      }

      return result;
    },
    initialState
  );

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="font-bold text-3xl mb-5">useActionState Example</h2>

      <form action={formAction} className="flex flex-col gap-3 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Enter user name"
          className="border border-gray-300 rounded px-3 py-2"
          required
        />
        <Button
          type="submit"
          variant="outline"
        >
          Submit
        </Button>
      </form>

      {state.message && (
        <div
          className={`p-2 rounded ${
            state.success ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
          }`}
        >
          {state.message}
        </div>
      )}

      <h2 className="mt-6 text-xl font-semibold">Current Users</h2>
      <ul className="mt-2 list-disc list-inside">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}