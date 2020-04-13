import React, {Component} from "react";
import styled from 'styled-components';

import About from "../components/FrontPageSection/About";
import Skills from "../components/FrontPageSection/Skills";
import Contact from "../components/Contact";
import Projects from "../components/FrontPageSection/Projects";

class Index extends Component{
    render(){
        return(
            <div>  
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        );
    }
}

export default Index;