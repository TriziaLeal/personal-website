import React, { Component } from 'react';
import {Layout} from 'antd';
import styled from 'styled-components';

const {Footer} = Layout

const StyledFooter = styled(Footer)`
  text-align: center;
  padding: 0 !important;
  background-color: #9E937F !important;
`
const AppFooter = () => (
    <StyledFooter>
        © 2018 - All rights reserved.
    </StyledFooter>
)

export default AppFooter;
