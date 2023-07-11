const questions = [
    {
        question: "What is Your Chutiya Collage name ?",
        answers: [
            {text: "Goverment Polytecnice Kanpur", correct: false},
            {text: "Goverment Polytecnice Mahoba", correct: true},
            {text: "Goverment Polytecnice Khulpahar", correct: false},
            {text: "Goverment Polytecnice Lucknow", correct: false},
        ]
    },
    {    question: "Which  branch do you have ?",
    answers: [
        {text: "Electrical", correct: false},
        {text: "Mechanical", correct: false},
        {text: "Computer Science & Information Tecnhology", correct: true},
        {text: "Electronics", correct: false},
    ]

    },
    {    question: "Genda👿 kiska Nick name hai ?",
    answers: [
        {text: "Raj Beg Mirza", correct: false},
        {text: "Swapnill Singh Osab", correct: false},
        {text: "Anand Sani", correct: false},
        {text: "Harshit", correct: true},
    ]

    },
    {    question: "Vo kon sa ladka hai jiski gf uski bahan lagti😁 ?",
    answers: [
        {text: "Harshit", correct: false},
        {text: "Swapnill Singh Osab", correct: false},
        {text: "Anand Sani", correct: false},
        {text: "Raj Beg Mirza", correct: true},
    ]

    },
    {    question: "Nibba kon hai ?",
    answers: [
        {text: "Raj Beg Mirza", correct: false},
        {text: "Swapnill Singh Osab", correct: false},
        {text: "Adarsh", correct: true},
        {text: "Harshit", correct: false},
    ]

    },
    {    question: "Akhand Single Kon hai ?",
    answers: [
        {text: "Raj Beg Mirza", correct: false},
        {text: "Yogrand", correct: true},
        {text: "Adarsh", correct: false},
        {text: "Harshit", correct: false},
    ]

    },
    {    question: "Sabse bda Gandu ?",
    answers: [
        {text: "Raj Beg Mirza", correct: false},
        {text: "Yogrand", correct: false},
        {text: "Adarsh", correct: false},
        {text: "Harshit", correct: true},
    ]

    },
    {    question: "Group me femous Gali ?",
    answers: [
        {text: "Bhkk Bskd", correct: false},
        {text: "Tere maa ki cho..?", correct: false},
        {text: "Chala Ja bskd ke", correct: true},
        {text: "gand marao", correct: false},
    ]

    },
    {    question: "Exam time me baki jane vali gali?",
    answers: [
        {text: "Bhkk Bskd", correct: false},
        {text: "Fati pari hai bskd ke", correct: true},
        {text: "Chala Ja bskd ke", correct: false},
        {text: "gand marao", correct: false},
    ]

    },
    {    question: "Sabse bda lodiya baaj?",
    answers: [
        {text: "Swapnill Singh ", correct: false},
        {text: "Raj BEg MIrza", correct: false},
        {text: "Harshit", correct: false},
        {text: "Adarsh", correct: true},
    ]

    },
    {    question: "Mardana Kiski Gf hai ?",
    answers: [
        {text: "Swapnill Singh ", correct: false},
        {text: "Anand", correct: true},
        {text: "Devendra", correct: false},
        {text: "Yogrand", correct: false},
    ]

    },
    {    question: "Group me gand faar bajati kiski hoti ?",
    answers: [
        {text: "Adarsh", correct: false},
        {text: "Yogrand", correct: false},
        {text: "Devendra", correct: false},
        {text: "Harshit", correct: true},
    ]

    },
    {    question: "Me (Madar Cho..d) Khne vala Chutiya Kon hai ?",
    answers: [
        {text: "Adarsh", correct: true},
        {text: "Yogrand", correct: false},
        {text: "Devendra", correct: false},
        {text: "Harshit", correct: false},
    ]

    },
    {    question: "Sabse Jada Lucknow me kiski mari gyi ?",
    answers: [
        {text: "Adarsh", correct: true},
        {text: "Yogrand", correct: false},
        {text: "Devendra", correct: false},
        {text: "Harshit", correct: false},
    ]

    },
    {    question: "Vo kon sa ladka hai jiski Gf uski mar lati ?",
    answers: [
        {text: "Raj", correct: false},
        {text: "Yogrand", correct: false},
        {text: "Swapnill", correct: true},
        {text: "Davendra", correct: false},
    ]

    },
    {    question: "Gf ke pyar me kiski lode lge ?",
    answers: [
        {text: "Raj", correct: false},
        {text: "Anand", correct: false},
        {text: "Swapnill", correct: false},
        {text: "Yusuf", correct: true},
    ]

    },
    {    question: "Harshit Ki kitne Crush hai ?",
    answers: [
        {text: "4", correct: true},
        {text: "2", correct: false},
        {text: "1", correct: false},
        {text: "3", correct: false},
    ]

    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer_buttons");
const nextButton = document.getElementById("quiz_next");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("quiz_btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} Out of ${questions.length}!` ;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();