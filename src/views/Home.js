import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import MyLink from "../components/MyLink";
import {
  INVITE_LINK,
  DISCORD_SERVER_LINK,
  CORS_SERVER_URL,
  LIT_BOT_SERVER_URL,
} from "../config.json";
export default function Home() {
  const [status, setStatus] = useState();

  async function checkStatus() {
    const ok = await fetch(`${CORS_SERVER_URL}${LIT_BOT_SERVER_URL}api/status`);
    setStatus(ok.status);
  }

  useEffect(() => {
    checkStatus();
  }, []);
  return (
    <div>
      <div
        className="pt-44 text-center text-white"
        style={{ fontFamily: "Inter" }}
      >
        <Container>
          <h1
            style={{ fontFamily: "Julius Sans One" }}
            className="mb-4 text-7xl"
          >
            lit bot
          </h1>
          <h4 className="mb-3">
            The perfect multi-purpose bot by Lit&#8482; Enterprises.
          </h4>
          <MyLink to="/commands" disabled={status === 200 ? false : true} />
          <a
            className="ml-2 b rounded-sm hover:text-black home-btn text-2xl mt-2"
            style={{ backgroundColor: "#FF0" }}
            href={INVITE_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={faDiscord} /> Invite
          </a>
          <a
            className="ml-2 b text-white rounded-sm home-btn text-2xl mt-2"
            style={{ backgroundColor: "#7289DA" }}
            href={DISCORD_SERVER_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={faDiscord} /> Official Server
          </a>
        </Container>
      </div>
    </div>
  );
}
