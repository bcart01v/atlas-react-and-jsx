import React from "react";

const Greeting = () => {
    const getGreeting = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 6 && currentHour <12) {
            return {
                image: "/src/assets/day.svg",
                text: "Good Morning",
            };
        } else if (currentHour >= 12 && currentHour <17) {
            return {
                image: "/src/assets/day.svg",
                text: "Good Afternoon!",
            };
        } else if (currentHour >= 17 && currentHour < 21) {
            return {
                image: "/src/assets/evening.svg",
                text: "Good Evening",
            };
        } else {
            return {
                image: "src/assets/night.svg",
                text: "Good Night",
            };
        }
    };


    const { image, text } = getGreeting();

    return (
        <h1 className="greeting">
            <img src={image} alt={text} />
            {text}
        </h1>
    );
};

export default Greeting;