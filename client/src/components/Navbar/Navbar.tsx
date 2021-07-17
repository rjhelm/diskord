import React from "react";
import styled from "styled-components";

import NavItem from "./NavItem";
import Seperator from '../Common/Seperator';

const servers = [
    { name: "Dope" },
    { name: "Bruh" },
    { name: "Dope" },
    { name: "Bruh" },
];

const Navbar = () => {
    return (
        <NavigationBarContainer>
            <NavItem name="Home" image="" /> 
            <Seperator />
            { servers.map((server, idx) => (
                <NavItem key={idx} name={server.name} />
            ))}
            {servers && <Seperator />}
            <NavItem name="+" />
        </NavigationBarContainer>
    );
};

const NavigationBarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100px;
    height: 100vh;
    background-color: var(--navbar-bg-color);
    overflow-y: scroll;
`;

export default Navbar;