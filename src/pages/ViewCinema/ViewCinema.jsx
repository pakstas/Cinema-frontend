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
import * as S from "./ViewCinema.style";
import { IoTrashOutline } from "react-icons/io5";

const url = "https://devmoviebe.azurewebsites.net";

function ViewCinema() {
  const auth = useContext(AuthContext);
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [message, setMessage] = useState("");
  const [cinemaPost, setCinemaPost] = useState({
    title: "",
    rows: "",
    row_seats: "",
  });
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  function SubmitCinema(post_body) {
    setLoading(true);
    setError(false);
    let success = false;
    fetch(`${url}/cinema/add`, {
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
          setUpdate(true);
          // setData(data.filter((x) => x.id !== cinema_id));
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

  function DeleteCinema(cinema_id) {
    setLoading(true);
    setError(false);
    let success = false;
    fetch(`${url}/cinema/delete/${cinema_id}`, {
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
          setData(data.filter((x) => x.id !== cinema_id));
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
    fetch(`${url}/cinema`, {
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
          setMessage(data.msg);
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
      <Section background={Theme.color.blue} containerColor={Theme.color.white}>
        {error && <Notification message={message} color={errorType} />}
        {loading && <Loading />}
        <S.PageWrap>
          <S.PageBlock>
            <PageTitle title="cinema" subtitle="list" />

            {data && data.length !== 0 && (
              <S.CinemaTable>
                <thead>
                  <tr>
                    <th>Cinema ID</th>
                    <th>Title</th>
                    <th>Rows</th>
                    <th>Seats/Row</th>
                    <th>Seats</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((cinema) => (
                    <tr key={cinema.id}>
                      <td>{cinema.id}</td>
                      <td>{cinema.title}</td>
                      <td>{cinema.rows}</td>
                      <td>{cinema.row_seats}</td>
                      <td>{cinema.rows * cinema.row_seats}</td>
                      <td>
                        <S.DeleteBtn onClick={() => DeleteCinema(cinema.id)}>
                          <IoTrashOutline color="white" size="1.5em" />
                        </S.DeleteBtn>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </S.CinemaTable>
            )}
            {data && data.length === 0 && "No cinema found on database."}
          </S.PageBlock>
          <S.PageBlock>
            <PageTitle title="add" subtitle="cinema" />
            <S.Form
              onSubmit={(e) => {
                e.preventDefault();
                SubmitCinema(cinemaPost);
              }}
            >
              <div>
                <InputField
                  type="text"
                  id="1"
                  label="Cinema Title"
                  handleChange={(e) =>
                    setCinemaPost({ ...cinemaPost, title: e.target.value })
                  }
                />
              </div>
              <div>
                <InputField
                  type="number"
                  id="2"
                  label="Rows"
                  min="1"
                  max="40"
                  handleChange={(e) =>
                    setCinemaPost({
                      ...cinemaPost,
                      rows: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <InputField
                  type="number"
                  id="3"
                  label="Seats in a Row"
                  min="1"
                  max="20"
                  handleChange={(e) =>
                    setCinemaPost({
                      ...cinemaPost,
                      row_seats: Number(e.target.value),
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

export default ViewCinema;
