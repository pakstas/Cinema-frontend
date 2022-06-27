import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  Section,
  Notification,
  Button,
  PageTitle,
  Loading,
} from "../../components";
import { Theme } from "../../theme";
import * as S from "./ViewTickets.style";
import { IoTrashOutline } from "react-icons/io5";

function ViewTickets() {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);
  const [ticketId, setTicketId] = useState(null);
  const [loading, setLoading] = useState(false);
  const auth = useContext(AuthContext);

  const [showData, setShowData] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const [pageCount, setPageCount] = useState();
  const [pageNumbers, setPageNumbers] = useState([]);
  const rowsPerPage = 15;

  function DeleteTicket(ticket_id) {
    setLoading(true);
    setError(false);
    let success = false;
    fetch(`${process.env.REACT_APP_BE_URL}/tickets/delete/${ticket_id}`, {
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
      .then((info) => {
        if (success && info.affectedRows !== 0) {
          setData(data.filter((x) => x.id !== ticket_id));
        } else {
          setError(true);
          setErrorType("danger");
          setMessage(info.msg);
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
    fetch(`${process.env.REACT_APP_BE_URL}/tickets`, {
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
          setData(
            data.sort((a, b) => {
              return b.id - a.id;
            })
          );
          setCurrentPage(1);
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

  useEffect(() => {
    if (data) {
      setPageCount(Math.ceil(data.length / rowsPerPage));
      let tableData = data.filter(
        (element, index) =>
          index < rowsPerPage * currentPage &&
          index > rowsPerPage * currentPage - rowsPerPage
      );
      setShowData(tableData);
    }
  }, [data, currentPage]);

  useEffect(() => {
    if (pageCount > 1) {
      let pagesArray = [];
      for (let i = 1; i <= pageCount; i++) {
        i === pageCount
          ? pagesArray.push(i) && setPageNumbers(pagesArray)
          : pagesArray.push(i);
      }
    }
  }, [pageCount]);

  return (
    <Section background={Theme.color.blue} containerColor={Theme.color.white}>
      {error && <Notification message={message} color={errorType} />}
      {!!modal && (
        <S.Modal>
          <S.ModalContent>
            <p>Please confirm you want to cancel ticket?</p>
            <Button
              color="primary"
              handleClick={(e) => {
                setModal(false);
                DeleteTicket(ticketId);
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
        </S.Modal>
      )}
      <PageTitle title="view your" subtitle="tickets" />
      {loading && (
        <div>
          <Loading />
        </div>
      )}

      {showData && (
        <>
          <S.TicketsTable>
            <thead>
              <tr>
                <th>ID</th>
                <th>Movie</th>
                <th>Date</th>
                <th>Time</th>
                <th>Seat</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {showData &&
                showData.map((ticket) => (
                  <tr key={ticket.id}>
                    <td>{ticket.id}</td>
                    <td>{ticket.movie_title}</td>
                    <td>
                      {new Date(ticket.event_date).toLocaleDateString("LT-lt")}
                    </td>
                    <td>{ticket.event_time.toString().slice(0, 5)}</td>
                    <td>{ticket.ticket_seat}</td>
                    <td>{ticket.ticket_price.toFixed(2) + "\u20AC"}</td>
                    <td>
                      <S.DeleteBtn
                        onClick={() => {
                          setTicketId(ticket.id);
                          setModal(true);
                        }}
                      >
                        <IoTrashOutline color="white" size="1.5em" />
                      </S.DeleteBtn>
                    </td>
                  </tr>
                ))}
            </tbody>
          </S.TicketsTable>
          {pageNumbers.length > 1 && (
            <S.PaginationBlock>
              {pageNumbers.map((item) =>
                item !== currentPage ? (
                  <S.Button key={item} onClick={() => setCurrentPage(item)}>
                    {item}
                  </S.Button>
                ) : (
                  <S.Button key={item} disabled>
                    {item}
                  </S.Button>
                )
              )}
            </S.PaginationBlock>
          )}
        </>
      )}
    </Section>
  );
}

export default ViewTickets;
