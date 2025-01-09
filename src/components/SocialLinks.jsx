import React from "react";

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a
                href="https://www.linkedin.com/in/benjamincarter918"
                target="_blank"
                rel="nopener noreferrer"
            >
                <img src="src/assets/linkedin.svg" alt="Bens LinkedIn" />
            </a>
            <a
                href="https://github.com/bcart01v/atlas-react-and-jsx"
                target="_blank"
                rel="nopener noreferrer"
            >
                <img src="/src/assets/github.svg" alt="Bens Githib" />
            </a>
        </div>
    );
};

export default SocialLinks;