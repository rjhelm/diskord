import Chat from '../Chat/Chat';
import LeftMenu from '../LeftMenu/LeftMenu';
import Navbar from '../Navbar/Navbar';
import RightMenu from '../RightMenu/RightMenu';
import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
    return (
        <MainContainer>
            <Navbar />
            <LeftMenu />
            <Chat />
            <RightMenu />
        </MainContainer>
    );
};

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

export default MainPage;