import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import header from '../../images/header.png';

const Header = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.bg});
    background-size: cover;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    margin-bottom: 10px;

    a {
        position: absolute;
        top: 0;
    }

    .name{
        margin-bottom: 20px;
        position:relative;
        display: block;
        text-align: center;
    }

    p{
        margin-bottom: 40px;
        margin: 0 auto;
        position: relative;
        display-block;
        text-align: center;;
    }

    .overlay {
        background-color: rgba(82, 67, 41, 0.6);
        position: absolute;        
        width: 100vw;
        height: 100vh;
    }
`
const About = () => (
    <div>
        <a name="about">
        </a>
        <Header bg={header}>
            <span className="overlay"></span>
            <div className="name">
                <h1>Hi! I'm Trizia</h1>
                <div>A BS Computer Science student from the University of the Philippines Los Banos</div>
            </div>
        </Header>
    </div>
      
)

export default About
