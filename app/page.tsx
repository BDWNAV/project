"use client";
import Templates from "./components/Templates";
import Header from "./components/Header";
import "./styles.css";

export default function Home() {
  return (
    <div className="homepage-div">
      <Header></Header>
      <Templates></Templates>
    </div>
  );
}
