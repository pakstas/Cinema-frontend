import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import {
  Section,
  Button,
  InputField,
  Notification,
  PageTitle,
  Loading,
} from "../../components";
import * as S from "./EditMovie.style";
import Theme from "../../theme";

const url = "https://metal-marshy-burst.glitch.me/";

function EditMovie() {
  const { movieId } = useParams();
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

  const auth = useContext(AuthContext);

  function SubmitMovie(movie, id) {
    setLoading(true);
    let success = false;
    if (movie && id && movie.title !== "") {
      fetch(`${url}/movies/update/${id}`, {
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
            setError(true);
            setMessage("Movie updated successfully.");
            setErrorType("success");
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
    }
  }

  useEffect(() => {
    if (movieId) {
      setLoading(true);
      fetch(`${url}/movies/${movieId}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data[0].id) {
            setData(data[0]);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [auth.token, movieId]);

  return (
    <Section background={Theme.color.white}>
      {loading && <Loading />}
      {error && <Notification message={message} color={errorType} />}
      <PageTitle title="edit" subtitle="movie" />
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          SubmitMovie(data, movieId);
        }}
      >
        <div>
          <InputField
            type="text"
            id="1"
            label="Movie Title"
            value={data.title}
            handleChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
        {data && data.cover_img ? (
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
            value={data.cover_img}
            handleChange={(e) =>
              setData({ ...data, cover_img: e.target.value.toString() })
            }
          />
        </div>
        {data && data.poster_img ? (
          <i>
            <img src={data.poster_img} alt="Poster" />
          </i>
        ) : (
          <i>"No Poster Image Defined"</i>
        )}
        <div>
          <InputField
            type="text"
            id="3"
            label="Poster Image URL"
            value={data.poster_img}
            handleChange={(e) =>
              setData({ ...data, poster_img: e.target.value.toString() })
            }
          />
        </div>
        <div>
          <InputField
            type="text"
            id="4"
            label="Description"
            value={data.description}
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
            value={data.director}
            handleChange={(e) => setData({ ...data, director: e.target.value })}
          />
        </div>
        <div>
          <div>
            <InputField
              type="text"
              id="6"
              label="Genre"
              value={data.genre}
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
              value={data.movie_length}
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
              value={data.year}
              handleChange={(e) =>
                setData({ ...data, year: Number(e.target.value) })
              }
            />
          </div>
        </div>
        <div>
          <Button color="primary" type="submit">
            Update
          </Button>
        </div>
      </S.Form>
    </Section>
  );
}

export default EditMovie;
