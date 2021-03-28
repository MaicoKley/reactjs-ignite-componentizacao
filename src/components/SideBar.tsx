import { useEffect, useState } from "react";
import { Button } from "./Button";

import { api } from "./../services/api";

import "./../styles/sidebar.scss";

interface SideBarProps {
  selectId: Function;
  selectGenre: Function;
  selectedId: number;
}

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export function SideBar(props: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<GenreResponseProps>(`genres/${props.selectedId}`)
      .then((response) => {
        props.selectGenre(response.data.title);
      });
  }, [props.selectedId]);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.selectId(genre.id)}
            selected={props.selectedId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
