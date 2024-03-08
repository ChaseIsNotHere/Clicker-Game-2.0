const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;

// Buildings are made from classes here.
let cursor = new Building(15, .033);

// Manual click function, add one point to score per click
function scoreButton() {
    score++;
   ;
    
}


// Everything in the following function updates every tick as set at the top
function updatePage() {
    document.getElementById('scoreText').innerHTML = score
}
setInterval(updatePage, tickRate);
