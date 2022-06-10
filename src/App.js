import React from "react";
import { useOnlineStatus } from "react-hookedup";
import "./App.css"


export default function App() {

  const { online } = useOnlineStatus();

  return <div>
  <h1 className="istatus">You are {online ? "online" : "offline"}</h1>
  </div>;
}
