export default function StylesheetExample() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
      />

      <style>{`
        .roboto-mono {
          font-family: 'Roboto Mono', monospace;
        }
      `}</style>
      <h2 className="font-bold text-3xl mb-5">Stylesheet & Preload Example</h2>
      <p className="roboto-mono text-lg">
        This paragraph uses <strong>Roboto Mono</strong>, a monospaced font loaded natively in React 19.
      </p>
    </div>
  );
}