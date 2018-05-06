/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

let pyrLevels = 7;

/* Note: since "pyramid" and "i" variables are defined within each function's scope below,
their values do not influence the output of each function

for, while, and do loops do not have local scopes like functions do
*/

// using a for loop & counter set to 0

function forLoopNum() {
	let pyramid = "";
	for(let i = 0; i < pyrLevels; i++){
		pyramid += "#";
		console.log(pyramid);
	}
};
forLoopNum();

// using a for loop & counter set to "#"

function forLoopAmp() {
	let pyramid = "";
	for (let i = " "; i.length <= pyrLevels; i+= " ") { // must use "<=" because i = " "
		pyramid += "o";
		console.log(pyramid);
	}
};
forLoopAmp();

// using a for loop with initialization and iteration statements outside for loop

function forLoopAmp() {
  let pyramid = "";
  for (;pyramid.length < pyrLevels;){  // pyramid.length of the last console.log(pyramid) breaks loop
    pyramid += "x";
    console.log(pyramid);
  }
};
forLoopAmp();

//using a while loop

let pyramid = "";
while(pyramid.length < pyrLevels) {
	pyramid += "*";
	console.log(pyramid)
}

// using a do loop

let pyramid1 = "";
do {
  pyramid1 += "+";
  console.log(pyramid1);
} while (pyramid1.length < pyrLevels)
