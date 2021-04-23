import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Home() {
  const inviteLink =
    "https://ptb.discord.com/api/oauth2/authorize?client_id=808034778393608244&permissions=8&scope=bot";
  const discordServerInviteLink = "https://discord.gg/ADvWvmgKYd";
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
          {/* <Link
						to="/commands"
						className="b text-white rounded-sm home-btn text-2xl"
						style={{ backgroundColor: "#7289DA" }}
					>
						Commands
					</Link> */}
          <a
            className="ml-2 b rounded-sm hover:text-black home-btn text-2xl mt-2"
            style={{ backgroundColor: "#FF0" }}
            href={inviteLink}
            target="_blank"
          >
            <Icon icon={faDiscord} /> Invite
          </a>
          <a
            className="ml-2 b text-white rounded-sm home-btn text-2xl mt-2"
            style={{ backgroundColor: "#7289DA" }}
            href={discordServerInviteLink}
            target="_blank"
          >
            <Icon icon={faDiscord} /> Official Server
          </a>
        </Container>
      </div>
    </div>
  );
}
