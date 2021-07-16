import React from "react";
import "./TopBarMenuIcon.css";

interface IProps {
    down: boolean;
}

const TopBarMenuIcon: React.FC<IProps> = ({ down }) => {
    return (
        <svg
        className={`toggle-arrow-svg ${down ? "down" : ""}`}
        width="25"
        height="25"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="50" height="50" />
            <path className="half-arrow"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.4258 27.6864C24.1267 27.5644 23.8464 27.382 23.6037 27.1392L7.76777 11.3033C6.79146 10.327 6.79146 8.74408 7.76777 7.76776C8.74408 6.79145 10.327 6.79145 11.3033 7.76776L25.4905 21.767766. 7.76776C44.1895 8.74407 44.1895 10.327 43.2132 11.3033L27.3033 27.2132C26.5248 27.9917 25.3606 28.1494 24.4258 27.6864Z"
                    fill="#C4C4C4"
            />
        </svg>
    );
};

export default TopBarMenuIcon;