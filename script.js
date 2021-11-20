///////////////Problem 1////////////////////
// **QUESTION 1**

// Given an array of numbers, find the sum of all sub-arrays of size k.

// **Sample Input:**

// ****k = 3

// nums = [1, 2, 3, 2, 4, 1, 5, 6, 1];

// **Sample Output:**

// 6, 7, 9, 7, 10, 12, 12

// **Explanation:**

// Subarrays –

// [1, 2, 3], sum = 6

// [2, 3, 2], sum = 7

// [3, 2, 4], sum = 9

// [2, 4, 1], sum = 7

// [4, 1, 5], sum = 10

// [1, 5, 6], sum = 12

// [5, 6, 1], sum = 12


/////////////////////////////////////////////
/////Solution////////

// function test(arr,n, k)
// {
 
//    for (var i = 0; i <= num - k; i++) {
//        var sum = 0;
//     for (var j = i; j < k + i; j++)
//             sum += arr[j];
//         console.log(sum + " ");
//     }
// }
 
// var arr = [ 1, 2, 3, 2, 4, 1, 5, 6, 1 ];
// var num = arr.length;
// var k = 3;
 

// test(arr, num, k);
 







//  /////////////////Problem 2//////////////////////
// **QUESTION 2**

// Write a program to compress the given string: aaaaRRRggggHH -> a4R3g4H2, and decompress the compressed string back to the original string.

// **TEST CASE 1:**

// **Sample Input (Compress)**:

// aaaaRRRggggHH

// **Sample Output**:

// Compressed String: a4R3g4H2

// **TEST CASE 2:**

// **Sample Input (DeCompress)**:

// a3B12c3

// **Sample Output**:

// DeCompressed String: aaaBBBBBBBBBBBBccc

// Note: Number varies from 0 to 99.

////////Solution////////////

// function testTwo (str) {
//   var output = '';
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     count++;
//     if (str[i] != str[i+1]) {
//       output += str[i] + count;
//       count = 0;
//     }
//   }
//   console.log(output);
// }

// testTwo('aaaaRRRggggHH');















///////////////////////Problem  3/////////////////////


// **QUESTION 3**

// Write a program to check whether the opening and closing brackets are balanced in the given string.

// **TEST CASE 1:**

// **Sample Input:**

// “[ ( ) ] [ ( ) ( ) ]”

// **Sample Output**:

// Balanced

// **TEST CASE 2:**

// **Sample Input**:

// “[ ( ) ] [ ( ( ) ]”

// **Sample Output**:

// Not Balanced


///////Solution


// function testThree(para){
// 		let arr = [];
// 	for(let i = 0; i < para.length; i++){
// 		let x = para[i];
// 		if (x == '(' || x == '['){
// 			arr.push(x);
// 			continue;
// 		}
// 		if (arr.length == 0)	return false;			
// 		let check;
// 		switch (x){
// 		case ')':
// 			check = arr.pop();
// 			if (check == '[')
// 				return false;
// 		case ']':
// 			check = arr.pop();
// 			if (check == '(')
// 				return false;
// 		}
// 	}
// 	return (arr.length == 0);
// }

// let para = "[()][()()]";
// // let para = '[()][(()]'
// if (testThree(para))
// 	console.log("Question 3 Ans: Balanced ");
// else
// 	console.log("Question 3 Ans: Not Balanced ");






