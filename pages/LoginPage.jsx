import { useState } from "react";

export default function LoginPage() {
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "") {
    }

    console.log(userName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          className="border"
          type="text"
          name="name"
          placeholder="Full Name"
        />
        <button className="p-2 bg-blue-500" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
