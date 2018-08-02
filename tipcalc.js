let billAmt = parseFloat(prompt("Enter the total dollar value for your meal (e.g., $15.74): $")); // Use parsefloat to turn string values into integers.

if (billAmt < 15) {
	let tipPct = 0.20;
	alert("For bills under $15, a 20% tip is automatically applied.");
	let tipAmt = (tipPct * billAmt);
	alert("You should leave $" + tipAmt.toFixed(2) + " for tip. "); //.toFixed cuts to 2 variables after decimal.
	alert("Total amount for your meal would be $" + (tipAmt + billAmt).toFixed(2) + " if giving a " + tipPct.toFixed(2) + "% tip of $" + tipAmt.toFixed(2) + ".");
} else {
	let tipPct = parseFloat(prompt("Enter the percentage tip you'd like to leave(e.g., 15): ")) / 100; // Divide by 100 to get decimal value
	let tipAmt = (tipPct * billAmt);
	alert("You should leave $" + tipAmt.toFixed(2) + " for tip. "); //.toFixed cuts to 2 variables after decimal.
	alert("Total amount for your meal would be $" + (tipAmt + billAmt).toFixed(2) + " if giving a " + tipPct.toFixed(2) + "% tip of $" + tipAmt.toFixed(2) + ".");
}
