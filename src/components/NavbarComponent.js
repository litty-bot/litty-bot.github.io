import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BOT_ID } from "../config";

export default function NavbarComponent() {
  const inviteLink =
    "https://ptb.discord.com/api/oauth2/authorize?client_id=808034778393608244&permissions=8&scope=bot";
  const topGGLink = `https://top.gg/bot/${BOT_ID}/vote`;
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
            <Nav.Link href={inviteLink} target="_blank">
              Invite
            </Nav.Link>
            <Link className="hover:no-underline nav-link" to="/commands">
              Commands
            </Link>
            <Nav.Link href={topGGLink} target="_blank">
              Vote
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
