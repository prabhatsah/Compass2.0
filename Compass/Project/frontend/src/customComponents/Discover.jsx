import react from "react";
import { useSelector } from "react-redux";

export default function Discover() {
  const user = useSelector((state) => state.user.user);
  return <h1>Hello, {user}</h1>;
}
