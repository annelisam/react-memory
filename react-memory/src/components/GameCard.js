import React from 'react'; 
import {Card, CardImg} from 'reactstrap';

const GameCard = props => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="http://via.placeholder.com/300x300" onClick={(props) => props.scorePoints}
                alt={props.name}
                title={`${props.name} picture`}
                src={props.name}
                />
            </Card>
        </div>
    );
};


export default GameCard;
