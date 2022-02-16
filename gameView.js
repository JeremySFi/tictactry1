export default class GameView {
    
    constructor(root){
        this.root = root;

        this.onTileClick = undefined;
        this.onRestartClick = undefined;

        this.root.querySelectorAll(".cell").forEach(tile => {
            tile.addEventListener("click", () => {
                if(this.onTileClick){
                    this.onTileClick(tile.dataset.index);

                }
            });
            
        });


        this.root.querySelector(".Restart").addEventListener("click", () => {
            if(this.onRestartClick){
                this.onRestartClick();

            }
        });

    }

    update(game) {
        this.updateTurn(game);
        this.updateContainer(game);
        
    }

    updateTurn(game) {
        this.root.querySelector(".jugador").textContent = `${game.turn}'s turn ` ;

    }

    updateContainer(game) {
        const winningcondition = game.findwinningcombination();

        for (let i = 0; i < game.container.length; i++) {
            const tile = this.root.querySelector(`.cell[data-index="${i}"]`);

            tile.classList.remove("winner");
            tile.textContent = game.container[i];

            if(winningcondition && winningcondition.includes(i)) {
                tile.classList.add("winner");
            }
        }

    }
}   