import './App.css'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import React from "react";


function App() {


    return (
    <>
        <div className="container" >
            <div className="sidebar-wrp dark:bg-neutral-800">
                <Sidebar></Sidebar>
            </div>
            <div className="main-wrp">
                <div className="header_mainPage-wrp dark:bg-neutral-800">
                    <Header></Header>
                </div>
                <div className="main-content dark:bg-neutral-800" >
                    <MainPage></MainPage>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
