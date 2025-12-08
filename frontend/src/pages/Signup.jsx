import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../features/auth/authSlice";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(form));
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="name" onChange={handleChange} />
        <input name="email" placeholder="email" onChange={handleChange} />
        <input name="username" placeholder="username" onChange={handleChange} />
        <input name="password" placeholder="password" onChange={handleChange} />
        <button disabled={loading}>Signup</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
