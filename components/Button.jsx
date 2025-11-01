export default function Button({ children, onSmash }) {
  return (
    <button onClick={onSmash} className="p-2 bg-lime-200">
      {children}
    </button>
  );
}
