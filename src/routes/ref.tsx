import { Button } from '@/components/ui/button';
import { useRef } from 'react';

function FancyInput({ ref }: { ref: React.Ref<HTMLInputElement> }) {
  return <input ref={ref} placeholder="Click the button to focus me" className="border p-2 rounded" />;
}

export default function RefExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-3xl mb-5">Ref as a Prop Example</h2>
      <div className="flex items-center space-x-5 mb-5">
        <FancyInput ref={inputRef} />
        <Button
          onClick={handleClick}
          variant={'outline'}
        >
          Focus the input
        </Button>
      </div>
    </div>
  );
}