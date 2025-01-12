import React from "react";
import profilePicture from "../assets/profile.jpg";

const AboutMe = () => {
    return (
        <div className="about-me">
            <img src={profilePicture} alt="Bens Pic" className="profile-picture" />

            <p>
            Hello! My name is Benjamin Carter. I'm currently attending Atlas School in Tulsa, Oklahoma.
            in the 5th trimester of the Full Stack Web Development program. Currently, my favorite
            technologies to work with are Python, JavaScript, React, and Node.js. All of which I feel
            are extremely powerful and easy to work with!
            After school, I would love to work with an agency (ideally create my own) to help small companies
            create and use software that makes their life easier, or work with a company that could utilize
            all of my skills to help them grow and expand their business. 
            <br /><br />
            Outside of school I work with an
            Animal Rescue in my area, and when I have time, I volunteer with Habitat for Humanity and help
            build homes for those in need.
            </p>
        </div>
    );
};

export default AboutMe;