import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { INVITE_LINK } from "../config.json";
import Tippy from "@tippyjs/react";
import checkStatus from "../util/checkStatus";
export default function NavbarComponent() {
  const [status, setStatus] = useState();

  useEffect(() => {
    checkStatus(setStatus);
  }, []);
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
            {status && status === 200 ? (
              <Link className="hover:no-underline nav-link" to="/commands">
                Commands
              </Link>
            ) : (
              <Link
                className="hover:no-underline nav-link disabled"
                to="/commands"
              >
                Commands
              </Link>
            )}
            {status &&
              (status === 200 ? (
                <Tippy
                  content={
                    <span style={{ fontFamily: "Inter" }}>
                      Lit Bot is online. All systems are operational.
                    </span>
                  }
                >
                  <span className="nav-link indicateGreen">Online</span>
                </Tippy>
              ) : (
                <Tippy
                  content={
                    <span style={{ fontFamily: "Inter" }}>
                      Lit bot is currently offline; we are actively
                      investigating this issue.
                    </span>
                  }
                >
                  <span className="nav-link indicateRed">Offline</span>
                </Tippy>
              ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
