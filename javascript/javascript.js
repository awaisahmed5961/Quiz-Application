
var questions = [
	{ question: 'Q1. who is awais ahmed', a: 'aa', b: 'bb', c: 'cc', d: 'bb', correctOption: 'a' },
	{ question: 'Q2. who is Albert Einstine', a: 'doctor', b: 'engineer', c: 'singer', d: 'actor', correctOption: 'a' },
	{ question: 'Q3. who is Doctor A.Q Khan', a: 'Doctor', b: 'Engineer', c: 'Singer', d: 'Actor', correctOption: 'a' },
	{ question: 'Q4. who is  Imran khan', a: 'Doctor', b: 'Engineer', c: 'Singer', d: 'Politician', correctOption: 'c' },
	{ question: 'Q5. who is Doctor Nawaz Shrif', a: 'Doctor', b: 'Engineer', c: 'Singer', d: 'Actor', correctOption: 'a' }

];

var m = 05;
var s = 60;
var quesionIndex = 0;

this.setInterval(getTime, 1000);

function decrementSeconds() {
	if (s == 0) {
		this.decrementMinute();
		this.changeQuestion();
		s = 60;

	}


	s = s - 1;
}
function decrementMinute() {
	m = m - 1;

	if (m < 0 && s < 0) {
		this.testcompleted();
	}
}
function getTime() {

	this.decrementSeconds();
	document.getElementById('time').innerHTML = m + ":" + s;

}

function changeQuestion() {

	if (quesionIndex < 5) {

		// this is for getting Question
		document.getElementById('Question').innerHTML = questions[quesionIndex].question;
		// this is for getting Option A
		document.getElementById('a').innerHTML = questions[quesionIndex].a;
		// this is for getting Option B
		document.getElementById('b').innerHTML = questions[quesionIndex].b;
		// this is for getting Option C
		document.getElementById('c').innerHTML = questions[quesionIndex].c;
		// this is for getting Option D
		document.getElementById('d').innerHTML = questions[quesionIndex].d;
		quesionIndex++;
	}
	else {

		this.testcompleted();
	}
}

function testcompleted() {
	alert('Your test is compelted');
	window.location = "../index.html";
	this.QuizTaken();

}
function showModal() {
	document.getElementById('instructionmodel').style.display = 'block';
}

function QuizTaken() {
	document.getElementById('quiztaken').disabled = true;
}
