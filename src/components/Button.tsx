export default function Button({
  children,
  handleClick,
}: Readonly<{
  children: React.ReactNode;
  handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): any;
}>) {
  return (
    <button
      className="bg-secondary px-3 py-0.5 rounded-xl"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
