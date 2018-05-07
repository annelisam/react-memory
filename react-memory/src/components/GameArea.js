import React from "react";
import { Row, Col } from "reactstrap";

const GameArea = props => 
<div className="container">
<Row>
<Col sm="6">

{props.children}

</Col>
</Row>
</div>;

export default GameArea;