const questions = [
    {
        question: "Which of the following is an input device ?",
        answers: [
            {text: "Monitor", correct: false},
            {text: "Keyboard", correct: true},
            {text: "Printer", correct: false},
            {text: "Speaker", correct: false},
        ]
    },
    {    question: "What does CPU stand for?",
    answers: [
        {text: "Central Process Unit", correct: false},
        {text: "Control Process Unit", correct: false},
        {text: "Central Processing Unit", correct: true},
        {text: "Control Processing Unit", correct: false},
    ]

    },
    {    question: "Which part of the computer is responsible for executing instructions?",
    answers: [
        {text: "RAM", correct: false},
        {text: "Hard Disk", correct: false},
        {text: "GPU", correct: false},
        {text: "CPU", correct: true},
    ]

    },
    {    question: "Which of the following is a type of volatile memory?",
    answers: [
        {text: "ROM", correct: false},
        {text: "Hard Drive", correct: false},
        {text: "Flash Drive", correct: false},
        {text: "RAM", correct: true},
    ]

    },
    {    question: "What is the main function of an operating system?",
    answers: [
        {text: "To manage hardware and software resources", correct: true},
        {text: "To perform arithmetic calculations", correct: false},
        {text: "To display images on the screen", correct: false},
        {text: "To store data permanently", correct: false},
    ]

    },
    {    question: "Which one of the following is not an operating system?",
    answers: [
        {text: "Windows", correct: false},
        {text: "macOS", correct: true},
        {text: "Linux", correct: false},
        {text: "Harshit", correct: false},
    ]

    },
    {    question: "Which of the following is used for internet browsing?",
    answers: [
        {text: "Compiler", correct: false},
        {text: "File Explorer", correct: false},
        {text: "Terminal", correct: false},
        {text: "Browser", correct: true},
    ]

    },
    {    question: "Which type of software translates high-level language into machine language?",
    answers: [
        {text: "Text Editor", correct: false},
        {text: "Tere maa ki cho..?", correct: false},
        {text: "Compiler", correct: true},
        {text: "Assembler", correct: false},
    ]

    },
    {    question: "What does LAN stand for?",
    answers: [
        {text: "Local Access Network", correct: false},
        {text: "Local Area Network", correct: true},
        {text: "Long Area Network", correct: false},
        {text: "Long Access Network", correct: false},
    ]

    },
    {    question: "Which of the following storage devices is non-volatile?",
    answers: [
        {text: "RAM", correct: false},
        {text: "Cache Memory", correct: false},
        {text: "Registers", correct: false},
        {text: "Hard Drive", correct: true},
    ]

    },
    {    question: "Which of the following is a network topology?",
    answers: [
        {text: "Tree ", correct: true},
        {text: "Windows", correct: false},
        {text: "MAC", correct: false},
        {text: "Linux", correct: false},
    ]

    },
    {    question: "What is the smallest unit of data in a computer system?",
    answers: [
        {text: "Byte", correct: false},
        {text: "Nibble", correct: false},
        {text: "Word", correct: false},
        {text: "Bit", correct: true},
    ]

    },
    {    question: "Which type of memory is used to store data temporarily?",
    answers: [
        {text: "RAM", correct: true},
        {text: "ROM", correct: false},
        {text: "SSD", correct: false},
        {text: "Hard Disk", correct: false},
    ]

    },
    {    question: "Which of the following is not a programming language?",
    answers: [
        {text: "MS Word", correct: true},
        {text: "Python", correct: false},
        {text: "HTML", correct: false},
        {text: "Java", correct: false},
    ]

    },
    {    question: "Which one of the following is an example of application software?",
    answers: [
        {text: "Windows", correct: false},
        {text: "Linux", correct: false},
        {text: "Microsoft Word", correct: true},
        {text: "BIOS", correct: false},
    ]

    },
    {    question: "Which key combination is commonly used to copy selected data?",
    answers: [
        {text: "Ctrl + X", correct: false},
        {text: "Ctrl + V", correct: false},
        {text: "Ctrl + P", correct: false},
        {text: "Ctrl + C", correct: true},
    ]

    },
    {    question: "Which type of software controls the hardware of the computer?",
    answers: [
        {text: "System Software", correct: true},
        {text: "Application Software", correct: false},
        {text: "Utility Software", correct: false},
        {text: "Security Software", correct: false},
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