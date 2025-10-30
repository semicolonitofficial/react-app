import Button from "./Button";

export default function NavBar({ onClick }) {
  return (
    <div>
      <span>Logo</span>
      <ul>
        <li>Home</li>
        <li>Contact</li>
      </ul>
      <Button onClick={onClick} text={"click"} />
    </div>
  );
}
