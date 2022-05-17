import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Section, Showtime, PageTitle, Loading } from "../../components";
import * as S from "./Home.style";
import Theme from "../../theme";

function Home() {
  const history = useHistory();
  const [showtimes, setShowtimes] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getShowtimes();
    // fetch(`${url}/showtimes`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setShowtimes(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setShowtimes([]);
    //   });
  }, []);

  async function getShowtimes() {
    try {
      setLoading(true);
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/showtimes`);
      if (!response.ok) {
        console.log(`HTTP error: ${response.status}`);
      }
      let data = await response.json();
      setShowtimes(data);
      setLoading(false);
    } catch (error) {
      console.log(`Could not get showtimes: ${error}`);
      setLoading(false);
    }
  }

  return (
    <>
      <S.Hero>
        <S.HeroImg src="https://images.unsplash.com/photo-1545277517-919cb4049d52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
      </S.Hero>
      {loading ? (
        <Loading />
      ) : (
        <Section
          background={Theme.color.gradient}
          containerColor={Theme.color.white}
        >
          <PageTitle title="movies" subtitle="today" />
          {showtimes && showtimes.length > 0 ? (
            showtimes.map((showtime) => (
              <Showtime
                key={showtime.show_id}
                data={showtime}
                buttonClick={(e) => history.push(`/book/${showtime.show_id}`)}
              />
            ))
          ) : (
            <S.EmptyShowtime>
              Sorry, no available movies for today. Please come next time.
            </S.EmptyShowtime>
          )}
        </Section>
      )}
    </>
  );
}

export default Home;
