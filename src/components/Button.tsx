export default function Button({
  children,
  handleClick,
}: Readonly<{ children: React.ReactNode; handleClick(): void }>) {
  return (
    <button
      className="bg-secondary px-3 py-0.5 rounded-xl"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
