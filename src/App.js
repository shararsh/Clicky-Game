import React, { Component } from 'react';
import './App.css';
import cards from './cards.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Heading from './components/Heading'
import ColorCards from './components/ColorCards'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        currentScore: 0,
        cards: cards,
        unselectedCards: cards
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectCard = id => {
        const findCard = this.state.unselectedCards.find(item => item.id === id);

        if(findCard === undefined) {
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
                currentScore: 0,
                cards: cards,
                unselectedCards: cards
            });
        }
        else {
            const newCards = this.state.unselectedCards.filter(item => item.id !== id);
            
            this.setState({ 
                message: "You guessed correctly!",
                currentScore: this.state.currentScore + 1,
                cards: cards,
                unselectedCards: newCards
            });
        }

        this.shuffleArray(cards);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                />
                <Heading/>
                {
                    this.state.cards.map(cards => (
                        <ColorCards
                            id={cards.id}
                            image={cards.image}
                            imageURL={cards.imageURL}
                            selectCard={this.selectCard} 
                            currentScore={this.state.currentScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

