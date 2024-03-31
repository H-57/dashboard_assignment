

import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDashboard(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {showDashboard?<Dashboard />:<Login/>}
    </>
  );
}

export default App;