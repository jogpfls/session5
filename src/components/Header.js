import React from "react";
import styled from "styled-components";
import WatchaImg from "../assets/image/icon_logo.png";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { darkMode } from '../Recoil/Atom';

function Header() {
    const [isDarkMode, setIsDarkMode] = useRecoilState(darkMode);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <HeaderWrapper isDarkMode = {isDarkMode}>
            <HeaderStart>
                <Link to="/"><LogoImage src={WatchaImg} alt="왓챠 이미지"></LogoImage></Link>
                <Text >영화</Text>
                <Text>시리즈</Text>
                <Text>책</Text>
                <Text>웹툰</Text>
                <Btn onClick={toggleDarkMode}>{isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}</Btn>
            </HeaderStart>
            <HeaderEnd>
                <FindBox type="text" placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."></FindBox>
            <LoginButton><Login /></LoginButton>
                <Join>회원가입</Join>
            </HeaderEnd>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
    top: 0;
    position: fixed;
    width: 100%;
    height: 62px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 0px 0px;
    z-index: 51;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#121212' : 'white')};
`;

const HeaderStart = styled.div`
    width: 390px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    `;

const LogoImage = styled.img`
    width: 150px;
    height: 100%;
    cursor: pointer;
`;

const Text = styled.p`
    cursor: pointer;
    font-size: 13px;
    color: #8c8c8c;
`;

const Btn = styled.button`
    cursor: pointer;
    font-size: 12px;
    border-radius: 5px;
    border: 1px solid #8c8c8c;
    padding: 3px 10px;
`;


const HeaderEnd = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
`;

const FindBox = styled.input`
    height: 40px;
    width: 250px;
    border-radius: 3px;
    background-color: #f5f5f5;
    border:1px ;
    ::placeholder{
        font-size: 13px;
    }

;
`;

const Join = styled.button`
    cursor: pointer;
    font-size: 12px;
    border: 1px solid #8c8c8c;
    border-radius: 5px;
    font-weight: bold;
    padding: 6px 12px;
`;

const LoginButton = styled.p`
    cursor: pointer;
    margin: 0;
    font-size: 13px;
    color: #8c8c8c;

`;

export default Header;