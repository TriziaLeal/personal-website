import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import styled from 'styled-components';

import samplogo from '../../images/samplogo.png';


const MenuItem = Menu.Item;

const StyledMenu = styled(Menu)`
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    width: 100%;
    position: fixed;
    z-index: 10;
    background-color: #423934;
    color: #EBD6B2;
    // background-color: rgba(0,0,0,0.0);
    border-bottom: 0px;
    
    .logo-holder {
        // position: absolute;
        // left:0;
        padding:0;
      }
      
      .logo-holder img {
        margin: 0;
        height: 50px;
        width: 200px;
      }
`


class Navigation extends Component{
    render(){
        return(       
            <div>
                <StyledMenu mode="horizontal"> 
                    <MenuItem><a href="#about">About</a></MenuItem>
                    <MenuItem><a href="#skills">Skills</a></MenuItem>
                    {/* <div className="logo-holder"><a href="#about"><img src={samplogo}/></a></div>                     */}
                    <MenuItem><a href="#projects">Projects</a></MenuItem>
                </StyledMenu>
            </div>
        );
    }
}

export default Navigation;