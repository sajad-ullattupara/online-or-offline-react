import React from "react";
import { useOnlineStatus } from "react-hookedup";
import "./App.css"


export default function App() {

  const { online } = useOnlineStatus();

  return <div>
  <h1 className="istatus">You are {online ? "online" : "offline"}</h1>
  </div>;
}


// // Alternative Program

// import React, { useEffect } from "react";
// import { useOnlineStatus, usePrevious } from "react-hookedup";

// export default function App() {
//   const { online } = useOnlineStatus();
//   const prevOnline = usePrevious(online);
//   useEffect(() => {
//     if (prevOnline === false && online === true) {
//       alert("syncing data");
//     }
//   }, [prevOnline, online]);
  
//   return <div>You are {online ? "online" : "offline"}!</div>;
// }
