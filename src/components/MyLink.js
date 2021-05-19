import React from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";

export default function MyLink(props) {
  return props.disabled ? (
    <Tippy
      content={
        <span style={{ fontFamily: "Inter" }}>
          This page is currently unavailable.
        </span>
      }
    >
      <span
        className="b text-white rounded-sm home-btn text-2xl"
        style={{ backgroundColor: "#8ea0e1", cursor: "default" }}
      >
        Commands
      </span>
    </Tippy>
  ) : (
    <Link
      to={props.to}
      className="b text-white rounded-sm home-btn text-2xl"
      style={{ backgroundColor: "#7289DA" }}
    >
      Commands
    </Link>
  );
}
