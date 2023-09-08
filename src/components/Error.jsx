import React from "react";
import Droids from "../assets/Droids.gif"

const Error = () => {
    return (
        <div>
            <p>These aren't the droids you're looking for!</p>
            <img src={Droids} alt="Error by Obi Wan Kenobi" />
        </div>
    )
}

export default Error;