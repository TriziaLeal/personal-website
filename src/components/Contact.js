import React, { Component } from 'react';
import {Icon} from 'antd';
import styled from 'styled-components';

const StyledDiv = styled.div`
    color: #EBD6B2;
    background-color:#524C42;
    padding:10px 10px !important;
    align-items: center;
    text-align: center;
   
    div,p,a,Icon{
        margin-left: 1%;
        margin-right: 1%;   

        margin-bottom: 0;
    }

    .header{
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 300;    
        border-bottom: 2px;
        border-color: #EBD6B2; 
    } 
    
`

const Contact = () => (
        <div>
        <a name="contact"/>
        <StyledDiv>
            <div>
                <a href="mailto:mmleal@gmail.com.com"><Icon type="mail" style={{ fontSize:"24px", color: '#EBD6B2' }}/></a>
                <a href="https://github.com/TriziaLeal"><Icon type="github" style={{ fontSize:"24px", color: '#EBD6B2' }} /></a>
                <a href="https://gitlab.com/mmleal" ><Icon type="gitlab" style={{ fontSize:"24px", color: '#EBD6B2' }}/></a>
                <a href="https://www.linkedin.com/in/mtmleal/"><Icon type="linkedin" style={{ fontSize:"24px", color: '#EBD6B2' }}/></a>
            </div>
        </StyledDiv>
        </div>
);
export default Contact;