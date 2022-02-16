export default class Game {

    constructor(){
    this.turn = "X";
    this.container = new Array(9).fill(null);
    }

     
    nextTurn(){
        this.turn = this.turn === "X" ? "O" : "X";
    
    }

    makeMove(i) {
        if (!this.gameon()) {
            return;
        }

        if (this.container[i]) {
            return;
        }

        this.container[i] = this.turn;

        if (!this.findwinningcombination()){
            this.nextTurn();
        }

    }


    findwinningcombination() {
        const winningcondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ];

        for (const combination of winningcondition) {
                const [a, b, c] = combination;
                
                if (this.container[a] && (this.container[a] === this.container[b] && this.container[a] === this.container[c])) {
                    return combination;
                }
        
            }
            return null;
    }

    gameon(){
        return !this.findwinningcombination() && this.container.includes(null);
    }
}
