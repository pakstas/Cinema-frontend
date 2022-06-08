import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Section, PageTitle, Notification, Loading } from "../../components";
import Theme from "../../theme";
import * as S from "./ViewMovies.style";
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

function ViewMovies() {
  const auth = useContext(AuthContext);
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function DeleteMovie(movie_id) {
    setLoading(true);
    setError(false);
    let success = false;
    fetch(`${process.env.REACT_APP_BE_URL}/movies/delete/${movie_id}`, {
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
          setData(data.filter((x) => x.id !== movie_id));
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
    fetch(`${process.env.REACT_APP_BE_URL}/movies`, {
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
  }, [auth.token]);

  return (
    <Section background={Theme.color.white}>
      <PageTitle title="movies" subtitle="list" />
      {error && <Notification message={message} color={errorType} />}
      {loading && <Loading />}
      {data && data.length !== 0 && (
        <S.MoviesTable>
          <thead>
            <tr>
              <th>Movie ID</th>
              <th>Title</th>
              <th>Director</th>
              <th>Genre</th>
              <th>Length</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.genre}</td>
                <td>{movie.movie_length + "min"}</td>
                <td>{movie.year}</td>
                <td>
                  <div>
                    <S.EditBtn
                      onClick={() => history.push(`/movies/edit/${movie.id}`)}
                    >
                      <FiEdit color={Theme.color.white} size="1.5em" />
                    </S.EditBtn>
                    <S.DeleteBtn onClick={() => DeleteMovie(movie.id)}>
                      <IoTrashOutline size="1.5em" color="white" />
                    </S.DeleteBtn>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </S.MoviesTable>
      )}
    </Section>
  );
}

export default ViewMovies;
