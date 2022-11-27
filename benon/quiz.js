
	var questions=[
	               "Q1. What Is Sum Of 5+10?",
	               "Q2. A semiconductor is formed by ……… bonds.",
	               "Q3. A semiconductor has ………… temperature coefficient of resistance.",
	               "Q4. A semiconductor has generally ……………… valence electrons.",
	               "Q5. When a pure semiconductor is heated, its resistance ………….."

	];
     answer(questions);
 
  function answer(questions) {
 	for (i =0; i<= questions.length; i++) {
 		questions[i]=questions.toString();
 	}
 }


 function answer() {
 	var ques1=[8,7,4,15];
 	document.write(ques1[0]);
 	document.write(ques1[1]);
 	document.write(ques1[2]);
 	document.write(ques1[3]);
 }


var ques2=["Covalent","Electrovalent","Co-ordinate","None of the above"];
var ques3=["Positive","Zero","Negative","None of the above"];
var ques4=[2,3,6,4];
var ques5=["Goes up","Goes down","Remains the same","Can’t say"];

document.getElementById("demo").innerHTML =answer();

function result(){
	var score=0;
	if(document.getElementById("correct1").checked){
		score++;
	}

	if(document.getElementById("correct2").checked){
		score++;
	}

	if(document.getElementById("correct3").checked){
		score++;
	}

	if(document.getElementById("correct4").checked){
		score++;
	}

	if(document.getElementById("correct5").checked){
		score++;
	}

	alert("your score is:"+ score);
}

