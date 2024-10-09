let currentQuestionIndex = 0;
let topScore = 0;
let score = 0;
let startTime;

const questions = [
    {
        type: 'multiple-choice',
        question: 'What are two trade-offs of using interviews as a needfinding technique?',
        options: [
            'a) They are quick and provide surface-level insights.',
            'b) They allow for in-depth insights but are time-consuming.',
            'c) They provide automated data analysis.',
            'd) They are suitable for large-scale data gathering.'
        ],
        answer: 'b) They allow for in-depth insights but are time-consuming.',
        hint: 'Think about the depth of insights and the time required for this technique.'
    },
    {
        type: 'multiple-choice',
        question: 'When attracting a specific target group, what are some demographics that might capture their attention?',
        options: [
            'a) Color preferences and music taste',
            'b) Age, gender, income level, education, and location',
            'c) Preferred TV shows and movie genres',
            'd) Favorite food and drink choices'
        ],
        answer: 'b) Age, gender, income level, education, and location',
        hint: 'Consider factors like age, income, and preferences that can influence targeting.'
    },
    {
        type: 'multiple-choice',
        question: 'Define a single user and a multiple user.',
        options: [
            'a) Single user works independently; multiple users collaborate.',
            'b) Single user uses multiple devices; multiple users use one device.',
            'c) Single user works in a team; multiple users work alone.',
            'd) Single user shares data; multiple users do not share data.'
        ],
        answer: 'a) Single user works independently; multiple users collaborate.',
        hint: 'Think about whether the user is working alone or with others.'
    },
    {
        type: 'multiple-choice',
        question: 'What are the main elements of heuristic evaluation?',
        options: [
            'a) Visual appeal and color scheme',
            'b) Usability principles like consistency and error prevention',
            'c) Sales growth and user satisfaction rates',
            'd) Server response time and data security'
        ],
        answer: 'b) Usability principles like consistency and error prevention',
        hint: 'Focus on the principles that guide user interactions.'
    },
    {
        type: 'multiple-choice',
        question: 'Explain the difference between a mistake and a slip in HCI.',
        options: [
            'a) A mistake is intentional, a slip is accidental.',
            'b) A mistake involves misunderstanding, a slip involves a wrong action.',
            'c) A mistake happens during input, a slip happens during output.',
            'd) A mistake is a software error, a slip is a hardware error.'
        ],
        answer: 'b) A mistake involves misunderstanding, a slip involves a wrong action.',
        hint: 'One involves misunderstanding, the other is an action error.'
    },
    {
        type: 'multiple-choice',
        question: 'What are the similarities and differences between stakeholders and user groups?',
        options: [
            'a) Both focus solely on financial outcomes.',
            'b) Stakeholders are users; user groups focus on business goals.',
            'c) Stakeholders have broader interests; user groups focus on usability.',
            'd) Stakeholders provide feedback, user groups do not.'
        ],
        answer: 'c) Stakeholders have broader interests; user groups focus on usability.',
        hint: 'Think about the scope of involvement in the design process.'
    },
    {
        type: 'multiple-choice',
        question: 'How can the "Flexibility and Efficiency of Use" heuristic impact users?',
        options: [
            'a) It makes the system easier for beginners only.',
            'b) It provides shortcuts for experienced users.',
            'c) It limits user options to prevent errors.',
            'd) It focuses solely on aesthetic appeal.'
        ],
        answer: 'b) It provides shortcuts for experienced users.',
        hint: 'It impacts both experienced and new users in different ways.'
    },
    {
        type: 'multiple-choice',
        question: 'Explain the difference between knowledge in the world and knowledge in the head.',
        options: [
            'a) World knowledge is universal; head knowledge is personal.',
            'b) World knowledge is external; head knowledge is internal.',
            'c) World knowledge is learned; head knowledge is innate.',
            'd) World knowledge is procedural; head knowledge is theoretical.'
        ],
        answer: 'b) World knowledge is external; head knowledge is internal.',
        hint: 'One is external, while the other is internal.'
    },
    {
        type: 'multiple-choice',
        question: 'Define affordances and signifiers. How do they work together in interface design?',
        options: [
            'a) Affordances are labels; signifiers are commands.',
            'b) Affordances suggest actions; signifiers communicate them.',
            'c) Affordances are user actions; signifiers are feedback.',
            'd) Affordances limit options; signifiers increase options.'
        ],
        answer: 'b) Affordances suggest actions; signifiers communicate them.',
        hint: 'Think about how these concepts guide user interactions with objects.'
    },
    {
        type: 'multiple-choice',
        question: 'Why is the usage of grids important in design?',
        options: [
            'a) Grids help create a chaotic layout.',
            'b) Grids ensure visual alignment and consistency.',
            'c) Grids slow down the design process.',
            'd) Grids only work on paper-based designs.'
        ],
        answer: 'b) Grids ensure visual alignment and consistency.',
        hint: 'Focus on structure and visual alignment.'
    },
    {
        type: 'multiple-choice',
        question: 'Why is recognition over recall important in design?',
        options: [
            'a) Recognition requires more effort from users.',
            'b) Recognition allows users to recall information quickly.',
            'c) Recognition reduces cognitive load.',
            'd) Recognition is not relevant in modern design.'
        ],
        answer: 'c) Recognition reduces cognitive load.',
        hint: 'Think about how this affects memory and ease of use.'
    },
    {
        type: 'multiple-choice',
        question: 'How can a user interface be designed to prevent errors and help users recover from mistakes?',
        options: [
            'a) By using complex layouts',
            'b) By providing clear feedback and constraints',
            'c) By limiting access to users',
            'd) By requiring manual updates'
        ],
        answer: 'b) By providing clear feedback and constraints',
        hint: 'Think about feedback, constraints, and recovery options.'
    },
    {
        type: 'multiple-choice',
        question: 'What are the two main "gulfs" described in the Execution-Evaluation cycle, and how do they differ?',
        options: [
            'a) Gulf of Action and Gulf of Reflection',
            'b) Gulf of Execution and Gulf of Evaluation',
            'c) Gulf of Planning and Gulf of Implementation',
            'd) Gulf of Input and Gulf of Output'
        ],
        answer: 'b) Gulf of Execution and Gulf of Evaluation',
        hint: 'One focuses on user actions, the other on understanding feedback.'
    },
    {
        type: 'multiple-choice',
        question: 'What are the four stages of design thinking?',
        options: [
            'a) Empathize, Analyze, Design, Review',
            'b) Ideate, Develop, Launch, Reflect',
            'c) Empathize, Define, Ideate, Test',
            'd) Research, Prototype, Validate, Iterate'
        ],
        answer: 'c) Empathize, Define, Ideate, Test',
        hint: 'Think of a process that starts with understanding the user and ends with testing.'
    },
    {
        type: 'multiple-choice',
        question: 'Name an example of externalizing information in an application that aids in reducing memory load.',
        options: [
            'a) A hidden menu',
            'b) Voice commands without instructions',
            'c) A visible list of common commands',
            'd) User manual with detailed instructions'
        ],
        answer: 'c) A visible list of common commands',
        hint: 'Think of ways that make information visible to users instead of relying on memory.'
    },
    {
        type: 'multiple-choice',
        question: 'Which of the following is an example of a remote and synchronous interaction?',
        options: [
            'a) Sticky Notes',
            'b) Face-to-Face interaction',
            'c) Video Conference',
            'd) Web forums'
        ],
        answer: 'c) Video Conference',
        hint: 'Consider which option allows for real-time communication despite distance.'
    },
    {
        type: 'multiple-choice',
        question: 'What does UI/UX stand for?',
        options: [
            'a) User Interface / User Experience',
            'b) User Interaction / Usability Experience',
            'c) Universal Input / User Exchange',
            'd) User Information / Unified Experience'
        ],
        answer: 'a) User Interface / User Experience',
        hint: 'Focus on design aspects for users.'
    }
];

document.getElementById('next-button').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

document.getElementById('retry-button').addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    showQuestion();
});

// Function to update scores
function updateScore(isCorrect) {
    const timeTaken = (new Date() - startTime) / 1000;
    let bonus = Math.max(10 - timeTaken, 0);
    if (isCorrect) {
        score += 10 + bonus; // Increase score for correct answers
    } else {
        score -= 10; // Deduct points for incorrect answers
    }
    console.log(`Current score: ${score}`); // Debugging line
    document.getElementById('score').textContent = score; // Update score display

    // Check if the current score is higher than the top score
    if (score > topScore) {
        topScore = score; // Update top score
        document.getElementById('top-score').textContent = topScore; // Update top score display
    }
    
    document.getElementById('next-button').classList.remove('hidden'); // Show the next button
}

// Function to show feedback to the user
function showFeedback(isCorrect) {
    const feedback = document.createElement('div');
    feedback.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
    feedback.classList.add('feedback', isCorrect ? 'correct' : 'incorrect');
    document.getElementById('quiz-container').appendChild(feedback);
    setTimeout(() => {
        feedback.remove();
    }, 2000);
}

// Function to show the current question
function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const answerContainer = document.getElementById('answer-container');
    const hintContainer = document.getElementById('hint-container');
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<h2>${question.question}</h2>`;
    answerContainer.innerHTML = '';
    hintContainer.innerHTML = `<button id="hint-button">Show Hint</button>`;
    document.getElementById('next-button').classList.add('hidden');
    startTime = new Date(); // Start timing

    document.getElementById('hint-button').addEventListener('click', () => {
        hintContainer.innerHTML = `<p class="hint">${question.hint}</p>`;
    });

    // Handle different question types
    if (question.type === 'short-answer') {
        const textarea = document.createElement('textarea');
        answerContainer.appendChild(textarea);
        textarea.addEventListener('change', () => {
            const isCorrect = textarea.value.trim().toLowerCase().includes(question.answer.toLowerCase().split(' ')[0]);
            updateScore(isCorrect); // Update score based on correctness
            showFeedback(isCorrect);
        });
    } else if (question.type === 'multiple-choice') {
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => {
                const isCorrect = option === question.answer;
                updateScore(isCorrect); // Update score based on correctness
                showFeedback(isCorrect);
            });
            answerContainer.appendChild(button);
        });
    }
}

// Function to show the user's score at the end of the quiz
function showScore() {
    document.getElementById('quiz-container').classList.add('hidden');
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.classList.remove('hidden');
    scoreContainer.innerHTML = `<h2>Your Score: ${score}</h2>`;
}

// Event listener for the "Next" button
document.getElementById('next-button').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

// Event listener for the "Retry" button
document.getElementById('retry-button').addEventListener('click', () => {
    currentQuestionIndex = 0; // Reset current question index
    score = 0; // Reset current score
    document.getElementById('score-container').classList.add('hidden'); // Hide score container
    document.getElementById('quiz-container').classList.remove('hidden'); // Show quiz container
    document.getElementById('score').textContent = score; // Reset score display
    document.getElementById('top-score').textContent = topScore; // Maintain top score display
    showQuestion(); // Show the first question
});

// Initial call to show the first question
showQuestion();