import { useState } from "react";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenreTitle, setSelectedGenreTitle] = useState("");

  function handleSelectGenre(title: string) {
    setSelectedGenreTitle(title);
  }

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectId={handleClickButton}
        selectGenre={handleSelectGenre}
        selectedId={selectedGenreId}
      />

      <Content
        selectedGenreTitle={selectedGenreTitle}
        selectedId={selectedGenreId}
      />
    </div>
  );
}
