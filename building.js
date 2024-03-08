class Building {
    constructor(cost, prod) {
        this.baseCost = 45;
        this.cost = cost;
        this.baseProd = 1/450;
        this.prod = prod;
        this.owned = 0;

    }

    // Triggered when the player buys a Building
    purchase() {
        console.log("I need to increase by 0.1 and I can't let us go into debt.")
        if (score >= this.cost) {
            score = score - this.cost;
            this.owned++ 
            this.cost = Math.ceil(this.cost * 1.15)
            this.prod = this.baseProd;
        }
    }

    // Updates the button, grey if can't afford, price, number owned, etc
    buttonState() {}
}

