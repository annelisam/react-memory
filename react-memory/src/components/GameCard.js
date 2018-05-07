import React from 'react'; 
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import "./GameCard.css";

const GameCard = props => {
    return (
        <div className="game-card">
            <Card>
                <CardImg onClick={(props) => props.scorePoints}
                className="card-img"
                src={props.image}
                alt={props.name}
                title={`${props.name} picture`}
                // src={props.name}
                />
            </Card>
        </div>
    );
};


export default GameCard;
