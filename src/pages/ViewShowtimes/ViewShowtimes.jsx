import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  Section,
  PageTitle,
  Notification,
  InputField,
  Button,
  Loading,
} from "../../components";
import Theme from "../../theme";
import * as S from "./ViewShowtimes.style";
import { IoTrashOutline } from "react-icons/io5";

const url = "https://metal-marshy-burst.glitch.me/";

function ViewShowtimes() {
  const auth = useContext(AuthContext);
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [message, setMessage] = useState("");
  const [postData, setPostData] = useState({
    time: null,
    date: null,
    cinema_id: null,
    movie_id: null,
    ticket_price: null,
  });
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);

  function SubmitShowtime(post_body) {
    setLoading(true);
    setError(false);
    let success = false;
    // fetch(`http://localhost:8080/showtime/add`, {
    fetch(`${url}/showtime/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post_body),
    })
      .then((res) => {
        if (res.ok) {
          success = true;
        }
        return res.json();
      })
      .then((res_data) => {
        if (success && res_data.affectedRows === 1) {
          !!update ? setUpdate(false) : setUpdate(true);
        } else {
          setError(true);
          setErrorType("danger");
          setMessage(res_data.msg);
        }
      })
      .catch((err) => {
        setError(true);
        setErrorType("danger");
        setMessage(err.message);
      })
      .finally(() => setLoading(false));
  }

  function DeleteShowtime(show_id) {
    setLoading(true);
    setError(false);
    let success = false;
    fetch(`${url}/showtime/delete/${show_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          success = true;
        }
        return res.json();
      })
      .then((res_data) => {
        if (success && res_data.affectedRows === 1) {
          setData(data.filter((x) => x.show_id !== show_id));
        } else {
          setError(true);
          setErrorType("danger");
          setMessage(res_data.msg);
        }
      })
      .catch((err) => {
        setError(true);
        setErrorType("danger");
        setMessage(err.message);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    setLoading(true);
    setError(false);
    let success = false;
    fetch(`${url}/showtimes/get/all`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          success = true;
        }
        return res.json();
      })
      .then((data) => {
        if (success && data) {
          setData(data);
        } else {
          setError(true);
          setErrorType("danger");
          setMessage(data.msg || "Error from SQL database.");
        }
      })
      .catch((err) => {
        setError(true);
        setErrorType("danger");
        setMessage(err.message);
      })
      .finally(() => setLoading(false));
  }, [auth.token, update]);

  return (
    <>
      <Section
        background={Theme.color.gradient}
        containerColor={Theme.color.white}
      >
        {loading && <Loading />}
        {error && <Notification message={message} color={errorType} />}
        <S.PageWrap>
          <S.PageBlock>
            <PageTitle title="showtimes" subtitle="list" />

            {data && data.length !== 0 && (
              <S.CinemaTable>
                <thead>
                  <tr>
                    <th>Showtime ID</th>
                    <th>Datetime</th>
                    <th>Cinema</th>
                    <th>Movie</th>
                    <th>Ticket price</th>
                    <th>Tickets sold</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((showtime) => (
                    <tr key={showtime.show_id}>
                      <td>{showtime.show_id}</td>
                      <td>
                        {(showtime.date
                          ? new Date(showtime.date).toLocaleDateString("LT-lt")
                          : "undefined") +
                          " " +
                          showtime.time.slice(0, 5)}
                      </td>
                      <td>{showtime.room_title}</td>
                      <td>{showtime.title}</td>
                      <td>{showtime.price.toFixed(2) + "\u20AC"}</td>
                      <td>{showtime.tickets ? showtime.tickets : "0"}</td>
                      <td>
                        <S.DeleteBtn
                          onClick={() => DeleteShowtime(showtime.show_id)}
                        >
                          <IoTrashOutline color="white" size="1.5em" />
                        </S.DeleteBtn>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </S.CinemaTable>
            )}
            {data && data.length === 0 && "No showtimes found on database."}
          </S.PageBlock>
          <S.PageBlock>
            <PageTitle title="add" subtitle="showtime" />
            <S.Form
              onSubmit={(e) => {
                e.preventDefault();
                SubmitShowtime(postData);
              }}
            >
              <div>
                <InputField
                  type="text"
                  id="1"
                  label="Event time (hh:mm)"
                  handleChange={(e) =>
                    e.target.value.length === 5 &&
                    setPostData({ ...postData, time: e.target.value })
                  }
                />
              </div>
              <div>
                <InputField
                  type="date"
                  id="2"
                  label="Event date"
                  handleChange={(e) => {
                    console.log("post " + e.target.value);
                    setPostData({ ...postData, date: e.target.value });
                  }}
                />
              </div>
              <div>
                <InputField
                  type="number"
                  id="3"
                  label="Cinema ID"
                  handleChange={(e) =>
                    setPostData({
                      ...postData,
                      cinema_id: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <InputField
                  type="number"
                  id="4"
                  label="Movie ID"
                  handleChange={(e) =>
                    setPostData({
                      ...postData,
                      movie_id: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <InputField
                  type="number"
                  id="5"
                  label="Ticket price"
                  handleChange={(e) =>
                    setPostData({
                      ...postData,
                      ticket_price: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <Button color="primary" type="submit">
                  Add
                </Button>
              </div>
            </S.Form>
          </S.PageBlock>
        </S.PageWrap>
      </Section>
    </>
  );
}

export default ViewShowtimes;
