import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BOT_ID, INVITE_LINK } from "../config.json";

export default function NavbarComponent() {
  return (
    <Navbar style={{ backgroundColor: "#23272A" }} variant="dark" expand="lg">
      <Container>
        <Link
          style={{ fontFamily: "Julius Sans One" }}
          className="navbar-brand"
          to="/"
        >
          lit&#8482;
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ fontFamily: "Inter" }}>
            <Nav.Link href={INVITE_LINK} target="_blank">
              Invite
            </Nav.Link>
            <Link className="hover:no-underline nav-link" to="/commands">
              Commands
            </Link>
            <Nav.Link
              href={`https://top.gg/bot/${BOT_ID}/vote`}
              target="_blank"
            >
              Vote
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
