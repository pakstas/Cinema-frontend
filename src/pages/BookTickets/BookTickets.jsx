import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Button, Notification, PageTitle, Loading } from "../../components";
import * as S from "./BookTickets.style";
import Theme from "../../theme";

function BookTickets() {
  const { showtimeId } = useParams();
  const history = useHistory();
  const [tickets, setTickets] = useState([]);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [message, setMessage] = useState("");
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  function BookSeats(tickets, data) {
    setLoading(true);
    let post_body = {
      event_id: data.showtime[0].id,
      ticket_price: data.showtime[0].price,
      event_time: data.showtime[0].time.slice(0, 5),
      event_date: new Date(data.showtime[0].date).toLocaleDateString("LT-lt"),
      movie_title: data.showtime[0].title,
      ticket_seat: tickets,
    };
    let success = false;
    setError(false);
    fetch(`${process.env.REACT_APP_BE_URL}/tickets`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(post_body),
    })
      .then((res) => {
        if (res.ok) {
          success = true;
        } else {
          setError(true);
          setErrorType("danger");
          setLoading(false);
        }
        return res.json();
      })
      .then((data) => {
        if (success) {
          history.push("/tickets");
        } else {
          setMessage(data.msg || "Message not defined.");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setMessage(err.message);
        setErrorType("danger");
      });
  }

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_BE_URL}/showtimes/${showtimeId}`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.showtime) {
          setData(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [showtimeId, auth.token]);

  return (
    <>
      {loading ? (
        <S.Section style={{ minHeight: "calc(100vh - 170px)" }}>
          <Loading />
        </S.Section>
      ) : (
        <>
          <S.Section
            containerColor={Theme.color.white}
            image={data && data.showtime && data.showtime[0].poster_img}
          >
            <S.ContainerWrapper>
              {data && data.showtime && (
                <S.Hero>
                  <div>
                    <span>{data.showtime[0].title}</span>
                    <span>{data.showtime[0].time.slice(0, 5)}</span>
                  </div>
                </S.Hero>
              )}
              <S.Container>
                {error && <Notification message={message} color={errorType} />}
                <PageTitle title="book your tickets" subtitle="now" />
                {data ? (
                  <>
                    <S.Booking>
                      <S.TicketsInfo>
                        <div>
                          Selected seats: <span>{tickets.length}</span>
                        </div>
                        <div>
                          Price:{" "}
                          <span>
                            {data.showtime && tickets
                              ? (
                                  tickets.length * data.showtime[0].price
                                ).toFixed(2) + " €"
                              : "0.00 €"}
                          </span>
                        </div>
                      </S.TicketsInfo>
                      <S.SeatsBlock>
                        <S.SeatsScreen>Screen</S.SeatsScreen>
                        {tickets &&
                          data &&
                          data.tickets &&
                          data.seats &&
                          data.seats.map((items, index) => (
                            <S.SeatRow
                              key={index}
                              style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-evenly",
                              }}
                            >
                              {items.map((item) =>
                                data.tickets.filter(
                                  (reserved) => reserved.ticket_seat === item
                                ).length !== 0 ? (
                                  <S.SeatReserved key={item} />
                                ) : (
                                  <S.Seat
                                    key={item}
                                    showtype={
                                      tickets.filter(
                                        (ticket) => ticket === item
                                      ).length !== 0
                                        ? "selected"
                                        : "empty"
                                    }
                                    id={item}
                                    onClick={() => {
                                      if (tickets.length === 0) {
                                        setTickets([item]);
                                      } else if (tickets.length > 0) {
                                        let temp = tickets;
                                        tickets.filter(
                                          (ticket) => ticket === item
                                        ).length === 0 && tickets.length < 4
                                          ? setTickets((tickets) =>
                                              tickets.concat(item)
                                            )
                                          : setTickets(
                                              temp.filter(
                                                (ticket) => ticket !== item
                                              )
                                            );
                                      }
                                    }}
                                  />
                                )
                              )}
                            </S.SeatRow>
                          ))}
                      </S.SeatsBlock>
                    </S.Booking>
                    <S.ButtonWrap>
                      {!!modal ? (
                        <S.Modal>
                          {tickets.length === 0 ? (
                            <S.ModalContent>
                              <p>Please select tickets first.</p>
                              <Button
                                color="primary"
                                handleClick={(e) => setModal(false)}
                              >
                                OK
                              </Button>
                            </S.ModalContent>
                          ) : (
                            <S.ModalContent>
                              <p>
                                Please confirm your reservation for{" "}
                                {tickets.length} tickets?
                              </p>
                              <Button
                                color="primary"
                                handleClick={(e) => {
                                  setModal(false);
                                  // history.push("/");
                                  BookSeats(tickets, data);
                                }}
                              >
                                Confirm
                              </Button>
                              <Button
                                color="primary"
                                handleClick={(e) => {
                                  setModal(false);
                                }}
                              >
                                Cancel
                              </Button>
                            </S.ModalContent>
                          )}
                        </S.Modal>
                      ) : (
                        <Button
                          color="primary"
                          bold
                          handleClick={(e) => setModal(true)}
                        >
                          Reserve your tickets!
                        </Button>
                      )}
                    </S.ButtonWrap>
                  </>
                ) : (
                  <S.EmptyData>Please try again later.</S.EmptyData>
                )}
              </S.Container>
            </S.ContainerWrapper>
          </S.Section>
        </>
      )}
    </>
  );
}

export default BookTickets;
