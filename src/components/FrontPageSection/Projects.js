import React, {Component} from 'react';
import {Row, Col, Tabs} from 'antd';
import styled from 'styled-components';

import sampProject from '../../images/sokoban.png';
import samp from '../../images/samp.png';
import sudoku from '../../images/sudoku.png';
import cmsctrack from '../../images/cmsctrack.png';

const ProjectContainer = styled.div`
    background-image: url(${props => props.projectImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; 
    margin: 20px;
    color: white;
    .filter{
        background: #594833;
        padding: 250px;
        opacity: 0.75
    }
`

const ProjectWrapper = styled.div`
    width: 90vw;
    margin: 0px auto;
    padding: 0px;
    

    .header {
        width: 90vw;
        text-align: center;
        font-size: 40px;
        text-transform: uppercase;
        margin-bottom: 20px;
        font-weight: 300;
    }   
`


class Projects extends Component{
    render(){
        return (       
            <ProjectWrapper>  
            <a name="projects"/>
                <div className="header">Projects</div>
                        <Row>
                            <Col span={8}>
                                <ProjectContainer projectImage={sampProject}>
                                <div className="filter"><h3>Sokoban</h3><p>A puzzle game using Java</p></div>
                                </ProjectContainer>
                            </Col>                        
                            <Col span={8}>
                                <ProjectContainer projectImage={cmsctrack}>                
                                    <div className="filter"><h3>CMSC Curriculum</h3><p>A flowchart of Computer Science Curriculum using SVG</p></div>
                                </ProjectContainer>                    
                            </Col>
    
                            <Col span={8}>
                                <ProjectContainer projectImage={sudoku}>                                        
                                    <div className="filter"><h3>Sudoku in ICS-OS</h3><p>An additional application for ICS-OS</p></div>
                                </ProjectContainer>
                            </Col>
                    </Row>  
            </ProjectWrapper>
        );
    }
}
export default Projects;