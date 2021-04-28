import React, { useEffect, useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { CORS_SERVER_URL, LIT_BOT_SERVER_URL } from "../config.json";

export default function Commands() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();
  const [status, setStatus] = useState();

  async function checkStatus() {
    const ok = await fetch(`${CORS_SERVER_URL}${LIT_BOT_SERVER_URL}api/status`);
    setStatus(ok.status);
  }

  async function fetchData() {
    const dataInJSON = await fetch(
      `${CORS_SERVER_URL}${LIT_BOT_SERVER_URL}api/commands`
    );
    const data = await dataInJSON.json();
    setData(data);
  }
  useEffect(() => {
    checkStatus();
    fetchData();
  }, []);

  const cardStyle = {
    borderRadius: "0.5rem",
    border: "none",
    backgroundColor: "#2C2F33",
    color: "#fff",
    fontFamily: "Inter",
  };
  const inputStyle = {
    backgroundColor: "#23272A",
    color: "#fff",
    fontFamily: "Manrope",
    outline: "none",
    width: "100%",
  };

  /* 
 
  */

  return status !== 200 ? (
    <div className="text-white text-center mt-48">
      <h1 style={{ fontFamily: "Manrope" }} className="text-4xl">
        Sorry, but Lit Bot is down. Please check again later.
      </h1>
    </div>
  ) : !data ? (
    <div className="text-white text-center mt-48">
      <h1 style={{ fontFamily: "Manrope" }} className="text-6xl">
        Loading..
      </h1>
    </div>
  ) : (
    <>
      <div>
        <Container>
          <h1
            className="pt-4 text-white mb-0"
            style={{ fontFamily: "Manrope" }}
          >
            Commands
          </h1>
          <input
            type="text"
            className="border-0 text-lg"
            style={inputStyle}
            placeholder={`Search for ${data.length} commands..`}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Row>
            {data
              ?.filter((val) => {
                if (search === "") return val;
                else if (
                  val.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(
                (cmd) =>
                  !cmd.dev && (
                    <Col sm="4" key={cmd.name}>
                      <Card style={cardStyle} className="mt-4">
                        <Card.Body>
                          <h3>{cmd.name}</h3>
                          <p className="mb-0">{cmd.siteDescription}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
              )}
          </Row>
        </Container>
        <br />
      </div>
    </>
  );
}
