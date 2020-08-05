import React from "react"
import MainLayout from "../components/MainLayout"
import HomePage from "../components/HomePage"

const Home = () => {
  return (
      <MainLayout className="main" role="main">
        <HomePage/>
      </MainLayout>
  )
};

export default Home;
