import React from "react";
import Table from "./components/Table";
import { useRoutes } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import users from "./data/data";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/table",
      element: <Table dataTable={users} />,
    },
    {
      path: "/form",
      element: <Form />,
    },
  ]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      {element}
    </div>
  );
};

export default App;
