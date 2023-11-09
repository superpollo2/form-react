import React from "react";
import { PrivateRoute } from "@/components/PrivateRoute";


const Home = () => { 
  return (
    <PrivateRoute >
      <h1 className="text-3xl font-bold">Materials Page</h1>
    </PrivateRoute >

  );
};

export default Home;