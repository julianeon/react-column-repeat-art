import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

{/*    <Col style={realColor}><img src={eye} alt="eye" height="42" width="42"/></Col>*/}

const Cr = (props) => {
	const realColor = {
            backgroundColor: props.color,
        }
    return(
	    <Col style={realColor}>👁</Col>

	  )
}

function Welcome(props) {
    var rows = [];
    for ( let i = 0; i < props.number; i++) {
    	    rows.push(<React.Fragment><Cr color={props.hues[i % props.hues.length]}/></React.Fragment>);
    }
    return <Row>{rows}</Row>
}


function WelcomeWrapUp(props) {
    var rows = [];
    for ( let i = 0; i < props.total; i++) {
	rows.push(<Welcome hues={props.hues} number={i}/>);
    }
    return <React.Fragment>{rows}</React.Fragment>
}

function WelcomeWrapDown(props) {
    var rows = [];

    for ( let i = props.total-1; i >= 0; i--) {
	rows.push(<Welcome hues={props.hues} number={i}/>);	
    }
    return <React.Fragment>{rows}</React.Fragment>
}

function Frame(props) {
    const acolours=["red","blue"]
    const bcolours=["blue","red"]
    const ccolours=["teal","pink","green","silver","brown","purple","gold"]
    return (
	  <div className="App">
	    <Container>
    	    <WelcomeWrapUp hues={acolours} total={props.total}/>
    	    <WelcomeWrapDown hues={ccolours} total={props.total}/>	    
	    </Container>
	  </div>	  
    );
}

function App() {
    const [count, setCount] = useState(1);

    
    useEffect(() => {
	setInterval(() => { setCount(count+1); console.log(count) }, 3000);
    });

    
    return (
	    <Frame total={count}/>
    )
}

export default App;
