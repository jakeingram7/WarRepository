class Card {
    constructor(value, description) {
        this.value = value;
        this.description = description;
    }

    getCardValue() { //for mocha test
        return this.value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    shufflecards() {
        this.cards = this.cards.sort(() => Math.random() - 0.5)
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }

    addHand(deck) {
        for(let i = 0; i < deck.length; i++) {
            this.hand.push(deck[i]);
        }
        return this.hand;
    }

    incrementScore() {
        this.score += 1;
        return this.score;
    }
}

function gamePlay() {
   
    let player1 = makePlayers();
    let player2 = makePlayers();

    let suits = ["Ace", "Spade", "Heart", "Diamond"];
    let tempValue = 9;
    const card = new Card(tempValue, `${tempValue} of ${suits[3]}s`)
    console.log(card);

    function dealCards(p1, p2, deck) {
        let player1Hand = deck.deck.slice(0,26);
        let player2Hand = deck.deck.slice(26); 
        p1.addHand(player1Hand); 
        p2.addHand(player2Hand); 
        return player1Hand; 

        function playGame(p1, p2) {
            do {
                compareHand(p1, p2);
                console.log(`Player 1 Score: ${p1.score}, Player 2 Score: ${p2.score}`);
            } while (p1.hand.length != 0 && p2.hand.length != 0)
        } 
        
        function compareHand(p1, p2) {
            let x = p1.hand[0]; 
            let y = p2.hand[0];  
        
        
            if (x.value > y.value) {
                p1.hand.shift(x);
                p2.hand.shift(y); 
                p1.incrementScore(); 
                return p1.score; 
            } else if (x.value < y.value) {
                p1.hand.shift(x); 
                p2.hand.shift(y); 
                p2.incrementScore()
                return p2.score; 
            } else {
                p1.hand.shift(x); 
                p2.hand.shift(y); 
                return 0; 
            }
        }        
    }

    gamePlay();
}
