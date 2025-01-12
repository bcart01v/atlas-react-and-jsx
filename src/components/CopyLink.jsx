import React from "react";
import copyIcon from "../assets/copy.svg";

const CopyLink = ({ link }) => {
    const handleCopyLink = () => {
        navigator.clipboard.writeText(link).then(
            () => alert ("Link Copied to Clipboard!"),
            () => alert ("Failed to copy link!")
        );
    };

    return (
        <img
        src={copyIcon}
        alt="Copy Link"
        className="copy"
        onClick={handleCopyLink}
        style={{ cursor: "pointer'" }}
        />
    );
};

export default CopyLink;