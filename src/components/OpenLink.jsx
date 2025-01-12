import React from "react";
import OpenIcon from "../assets/open.svg";

const OpenLink = ({ link }) => {
    const handleOpenLink = () => {
        window.open(link, "_blank", "noopener, noreferrer");
    };
    return (
        <img
        src={OpenIcon}
        alt="Open Link"
        onClick={handleOpenLink}
        style={{ cursor: "pointer" }}
        />
    );
};

export default OpenLink;