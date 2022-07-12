import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Showtime, PageTitle, Loading } from "../../components";
import * as S from "./Home.style";

async function getShowtimes({ setLoading, setShowtimes }) {
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

function Home() {
  const history = useHistory();
  const [showtimes, setShowtimes] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getShowtimes({ setShowtimes, setLoading });
  }, []);

  return (
    <>
      <S.Section>
        <S.Container>
          {loading ? (
            <Loading />
          ) : (
            <>
              <PageTitle title="movies" subtitle="today" />
              {showtimes && showtimes.length > 0 ? (
                showtimes.map((showtime) => (
                  <Showtime
                    key={showtime.show_id}
                    data={showtime}
                    buttonClick={(e) =>
                      history.push(`/book/${showtime.show_id}`)
                    }
                  />
                ))
              ) : (
                <S.EmptyShowtime>
                  Sorry, no available movies for today. Please come next time.
                </S.EmptyShowtime>
              )}
            </>
          )}
        </S.Container>
      </S.Section>
    </>
  );
}

export default Home;
