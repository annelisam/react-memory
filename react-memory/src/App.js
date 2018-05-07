import React from "react";
import Navigation from "./components/Navbar";
import Jumbo from "./components/Jumbotron.js";
import GameCard from "./components/GameCard.js";
import Jumbotron from "./components/Jumbotron.js";
import GameScore from "./components/GameScore.js";
import cardDetails from "./cardDetails.json";
import GameArea from "./components/GameArea.js";


class App extends React.Component {
    state = {
        cardDetails, 
        score: 0
    }; 

    render() {
        return (
            <div>
                <Navigation score={0 || this.state.score} />
                <Jumbo />
                <div>
                    <GameArea>
                        {this.state.cardDetails.map(cardInfo => (
                            <GameCard 
                            id={cardInfo.id}
                            key={cardInfo.id}
                            name={cardInfo.name}
                            image={cardInfo.image}
                            />
                        ))}
                    </GameArea>
                </div>
            </div>
        
                    )}
                };
                    


export default App;
