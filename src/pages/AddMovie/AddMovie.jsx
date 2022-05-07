import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import {
  Section,
  Button,
  InputField,
  Notification,
  PageTitle,
  Loading,
} from "../../components";
import * as S from "./AddMovie.style";
import Theme from "../../theme";

const url = "https://metal-marshy-burst.glitch.me/";

function AddMovie() {
  const [data, setData] = useState({
    title: "",
    cover_img: "",
    poster_img: "",
    description: "",
    director: "",
    genre: "",
    movie_length: "",
    year: "",
  });
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const auth = useContext(AuthContext);

  function SubmitMovie(movie) {
    setLoading(true);
    let success = false;
    if (movie && movie.title !== "") {
      fetch(`${url}/movies/add`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${auth.token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(movie),
      })
        .then((res) => {
          if (res.ok) {
            success = true;
          } else {
            setError(true);
            setErrorType("danger");
          }
          return res.json();
        })
        .then((data) => {
          if (success && data) {
            history.push("/movies");
          } else {
            setMessage(data.msg || "Message not defined");
          }
        })
        .catch((err) => {
          setError(true);
          setMessage(err.message);
          setErrorType("danger");
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      setError(true);
      setMessage("Fill all required fields.");
      setErrorType("danger");
    }
  }

  return (
    <Section background={Theme.color.white}>
      {loading && <Loading />}
      {error && <Notification message={message} color={errorType} />}
      <PageTitle title="add" subtitle="movie" />
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          SubmitMovie(data);
        }}
      >
        <div>
          <InputField
            type="text"
            id="1"
            label="Movie Title"
            handleChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
        {data.cover_img ? (
          <i>
            <img src={data.cover_img} alt="Cover" />
          </i>
        ) : (
          <i>No Cover Image Defined</i>
        )}

        <div>
          <InputField
            type="text"
            id="2"
            label="Cover Image URL"
            handleChange={(e) =>
              setData({ ...data, cover_img: e.target.value })
            }
          />
        </div>
        {data.poster_img ? (
          <i>
            <img src={data.poster_img} alt="Poster" />
          </i>
        ) : (
          <i>No Poster Image Defined</i>
        )}
        <div>
          <InputField
            type="text"
            id="3"
            label="Poster Image URL"
            handleChange={(e) =>
              setData({ ...data, poster_img: e.target.value })
            }
          />
        </div>
        <div>
          <InputField
            type="text"
            id="4"
            label="Description"
            handleChange={(e) =>
              setData({ ...data, description: e.target.value })
            }
          />
        </div>
        <div>
          <InputField
            type="text"
            id="5"
            label="Director"
            handleChange={(e) => setData({ ...data, director: e.target.value })}
          />
        </div>
        <div>
          <div>
            <InputField
              type="text"
              id="6"
              label="Genre"
              handleChange={(e) => setData({ ...data, genre: e.target.value })}
            />
          </div>
          <div>
            <InputField
              type="number"
              id="7"
              label="Movie Length (minutes)"
              min="0"
              max="180"
              handleChange={(e) =>
                setData({ ...data, movie_length: Number(e.target.value) })
              }
            />
          </div>
          <div>
            <InputField
              type="number"
              id="8"
              label="Year"
              min="1900"
              max="2020"
              handleChange={(e) =>
                setData({ ...data, year: Number(e.target.value) })
              }
            />
          </div>
        </div>

        <div>
          <Button color="primary" type="submit">
            Add
          </Button>
        </div>
      </S.Form>
    </Section>
  );
}

export default AddMovie;
