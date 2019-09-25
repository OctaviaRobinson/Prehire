let rolls = 0;
let amount;
let duration;
let initial;
let peakAmount;

function diceRoll() {
	rolls++;
	let roll = (Math.floor(Math.random()*10)+1); // working with a ten sided dice
	
	if (roll===7) {

			amount = (amount+5.00); // amount will double
		if (amount > peakAmount){
			peakAmount=amount;
			duration = rolls;
			}
		}
	else {
			amount = amount - 1.00; // it cost $1 dollar to play
	}

}


function start(){
	initial = parseInt(document.getElementById("initialBet").value);
	
	peakAmount = document.getElementById("initialBet").value;
	
	duration = rolls;
	
	document.getElementById("initialBet").disable = true;
	if (initial <= 0){
		alert('Please enter a non-zero dollar amount!')
}
	else {
		amount = initial
		
	}
	
	while (amount > 0) {
		diceRoll();
	}
	
}
document.getElementById(result).setAttribute("style","");
document.getElementById(go).setAttribute("style", "display:none");
document.getElementById(startingBetResult).innerHTML='$${initial}';
document.getElementById(rollTotalResult).innerHTML='${rolls}';
document.getElementById(highestAmount).innerHTML='$${peakAmount}';
document.getElementById(highestRolls).innerHTML='${duration}';
