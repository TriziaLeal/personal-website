import React,{Component} from 'react';
import {Row, Col} from 'antd';
import styled from 'styled-components';

const Bar = styled.div`  
    box-sizing:border-box;    
    background: #9E937F;
    width: 100%; 
    

    .percent{
        text-align: right;
        line-height: 15px;  
        color: white;
        width: ${props=>props.percentWidth};
        background:#302D27;
    }
`

const MainContainer = styled.div`
    width: 90vw;
    margin: 10px auto;

    h5 {
        text-align: center;
        color: #524C42;
    }
    .header {
        width: 90vw;
        margin-left: 1%;
        margin-right: 1%;
        padding: 10px 0px 10px 0px;
        text-align: center;
        font-size: 40px;
        text-transform: uppercase;
        margin-bottom: 20px;
        font-weight: 300;
    }
`
class Skills extends Component{
    render(){ 
        return(
            <MainContainer>              
            <a name="skills"/>
                <div className="header">Skills</div>  
                <Row gutter={24}>  
                <Col span={8}>
                <h5>Programming Language</h5> 
                <div>Java<Bar percentWidth="80%"><div className="percent">80%</div></Bar></div>
                <div>Python<Bar percentWidth="70%"><div className="percent">70%</div></Bar></div>
                <div>C<Bar percentWidth="60%"><div className="percent">60%</div></Bar></div>
                <div>ReactJS<Bar percentWidth="45%"><div className="percent">45%</div></Bar></div>
                <div>NodeJS<Bar percentWidth="50%"><div className="percent">50%</div></Bar></div>
                <div>HTML<Bar percentWidth="45%"><div className="percent">45%</div></Bar></div>
                <div>CSS<Bar percentWidth="45%"><div className="percent">45%</div></Bar></div>
                </Col>
                <Col span={8}>        
                <h5>Database</h5>
                <div>MariaDB<Bar percentWidth="60%"><div className="percent">60%</div></Bar></div>
                <div>MongoDB<Bar percentWidth="55%"><div className="percent">55%</div></Bar></div>
                </Col>
                <Col span={8}>
                <h5>Version Control Tools</h5>
                <div>Git<Bar percentWidth="70%"><div className="percent">70%</div></Bar></div>
                </Col>
                </Row>       
            </MainContainer>
        );
    }
}
export default Skills;