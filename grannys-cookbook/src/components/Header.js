import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <img src="logo.png" alt = "granny"/>
      <NavBar />
      <SearchBar />
    </header>
  );
}
