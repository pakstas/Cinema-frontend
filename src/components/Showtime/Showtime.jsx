import React from "react";
import * as S from "./Showtime.style";
import { Button } from "../index";

function Showtime({ children, data, buttonClick }) {
  return (
    <S.ShowtimeBlock>
      <S.ShowtimeImg src={data.cover_img} alt={data.title} />
      <S.ShowtimeDetails>
        <S.ShowtimeHeader>
          <S.ShowtimeTitle>{data.title}</S.ShowtimeTitle>
          <S.ShowtimeSubtitle>
            {data.year + " | " + data.genre + " | " + data.movie_length + "min"}
          </S.ShowtimeSubtitle>
        </S.ShowtimeHeader>

        <S.ShowtimeDescription>{data.description}</S.ShowtimeDescription>
        <S.ShowtimeDirector>By: {data.director}</S.ShowtimeDirector>
        <S.ShowtimeActions>
          <S.ShowtimeTagTime>{data.time.slice(0, 5)}</S.ShowtimeTagTime>
          <S.ShowtimeTag>
            Seats left: {data.tickets ? data.seats - data.tickets : data.seats}/
            {data.seats}
          </S.ShowtimeTag>
          <Button color="secondary" handleClick={buttonClick} bold>
            Book Now
          </Button>
        </S.ShowtimeActions>
      </S.ShowtimeDetails>
    </S.ShowtimeBlock>
  );
}

export default Showtime;
