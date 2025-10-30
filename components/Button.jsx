export default function Button({ text, onClick }) {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <button onClick={handleClick} className="p-2 bg-lime-200">
      {text}
    </button>
  );
}
