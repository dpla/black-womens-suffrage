import React from "react"
import MainLayout from "../components/MainLayout"
import HomePage from "../components/HomePage"

const Home = () => {
  return (
      <MainLayout>
        <div id="main" role="main">
          <HomePage/>
        </div>
      </MainLayout>
  )
};

export default Home;
