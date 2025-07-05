let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

const questions = [
    {
        type: 'multiple',
        topic: 'Present Simple',
        question: 'Choose the correct form: "She _____ English every day."',
        options: ['study', 'studies', 'studying', 'studied'],
        correct: 1,
        explanation: 'Third person singular (she/he/it) takes -s or -es in present simple.'
    },
    {
        type: 'multiple',
        topic: 'Present Simple',
        question: 'Which sentence is correct?',
        options: [
            'They doesn\'t like coffee.',
            'They don\'t like coffee.',
            'They not like coffee.',
            'They aren\'t like coffee.'
        ],
        correct: 1,
        explanation: 'Use "don\'t" for negative present simple with plural subjects.'
    },
    {
        type: 'input',
        topic: 'Present Simple',
        question: 'Complete the sentence: "I _____ (go) to school by bus."',
        correct: 'go',
        explanation: 'First person singular uses the base form in present simple.'
    },
    {
        type: 'multiple',
        topic: 'Present Simple',
        question: 'Choose the correct question: "_____ you speak Portuguese?"',
        options: ['Does', 'Do', 'Are', 'Is'],
        correct: 1,
        explanation: 'Use "Do" for questions with "you" in present simple.'
    },
    {
        type: 'input',
        topic: 'Present Simple',
        question: 'Make negative: "He plays football." → "He _____ football."',
        correct: 'doesn\'t play',
        explanation: 'Use "doesn\'t" + base form for third person singular negatives.'
    },
    {
        type: 'multiple',
        topic: 'Present Simple',
        question: 'What time marker is typically used with present simple?',
        options: ['yesterday', 'always', 'next week', 'right now'],
        correct: 1,
        explanation: 'Present simple uses frequency adverbs like "always", "usually", "never".'
    },
    {
        type: 'input',
        topic: 'Present Simple',
        question: 'Complete: "Water _____ (boil) at 100°C."',
        correct: 'boils',
        explanation: 'Scientific facts use present simple. Third person singular adds -s.'
    },
    {
        type: 'multiple',
        topic: 'Present Simple',
        question: 'Choose the correct form: "My parents _____ in London."',
        options: ['lives', 'live', 'living', 'lived'],
        correct: 1,
        explanation: 'Plural subjects use the base form in present simple.'
    },

    {
        type: 'multiple',
        topic: 'Future Simple',
        question: 'Choose the correct future form: "I _____ help you tomorrow."',
        options: ['will', 'going to', 'am', 'would'],
        correct: 0,
        explanation: 'Use "will" for spontaneous decisions and promises.'
    },
    {
        type: 'input',
        topic: 'Future Simple',
        question: 'Complete: "She _____ (travel) to Paris next month."',
        correct: 'will travel',
        explanation: 'Future simple: will + base form of the verb.'
    },
    {
        type: 'multiple',
        topic: 'Future Simple',
        question: 'Which sentence shows a planned future action?',
        options: [
            'I will call you later.',
            'I am going to visit my grandmother.',
            'I might come tomorrow.',
            'I would like to go.'
        ],
        correct: 1,
        explanation: '"Going to" is used for planned future actions.'
    },
    {
        type: 'input',
        topic: 'Future Simple',
        question: 'Make negative: "They will come." → "They _____ come."',
        correct: 'won\'t',
        explanation: 'Will + not = won\'t in future simple negatives.'
    },
    {
        type: 'multiple',
        topic: 'Future Simple',
        question: 'Complete the question: "_____ you be at home tonight?"',
        options: ['Will', 'Are', 'Do', 'Would'],
        correct: 0,
        explanation: 'Future simple questions start with "Will".'
    },
    {
        type: 'input',
        topic: 'Future Simple',
        question: 'Complete: "Look at those clouds! It _____ (rain)."',
        correct: 'is going to rain',
        explanation: 'Use "going to" for predictions based on present evidence.'
    },
    {
        type: 'multiple',
        topic: 'Future Simple',
        question: 'Which time expression is used with future simple?',
        options: ['yesterday', 'last week', 'tomorrow', 'now'],
        correct: 2,
        explanation: 'Future simple uses time expressions like "tomorrow", "next week", "soon".'
    },
    {
        type: 'input',
        topic: 'Future Simple',
        question: 'Complete: "I think technology _____ (change) our lives."',
        correct: 'will change',
        explanation: 'Use "will" for predictions and opinions about the future.'
    },

    {
        type: 'multiple',
        topic: 'WH Questions',
        question: '_____ is your favorite color?',
        options: ['What', 'Where', 'When', 'Who'],
        correct: 0,
        explanation: 'Use "What" to ask about things, objects, or information.'
    },
    {
        type: 'input',
        topic: 'WH Questions',
        question: 'Complete the question: "_____ do you live?"',
        correct: 'Where',
        explanation: 'Use "Where" to ask about location or place.'
    },
    {
        type: 'multiple',
        topic: 'WH Questions',
        question: '_____ did you arrive?',
        options: ['What', 'When', 'Where', 'Why'],
        correct: 1,
        explanation: 'Use "When" to ask about time.'
    },
    {
        type: 'input',
        topic: 'WH Questions',
        question: 'Complete: "_____ is calling?" (asking about a person)',
        correct: 'Who',
        explanation: 'Use "Who" to ask about people or identity.'
    },
    {
        type: 'multiple',
        topic: 'WH Questions',
        question: '_____ are you studying English?',
        options: ['What', 'Where', 'Why', 'When'],
        correct: 2,
        explanation: 'Use "Why" to ask about reasons or causes.'
    },
    {
        type: 'input',
        topic: 'WH Questions',
        question: 'Complete: "_____ do you make coffee?" (asking about method)',
        correct: 'How',
        explanation: 'Use "How" to ask about methods, ways, or manner.'
    },
    {
        type: 'multiple',
        topic: 'WH Questions',
        question: '_____ books do you have?',
        options: ['How much', 'How many', 'How long', 'How often'],
        correct: 1,
        explanation: 'Use "How many" for countable nouns.'
    },
    {
        type: 'input',
        topic: 'WH Questions',
        question: 'Complete: "_____ is that building?" (asking about height)',
        correct: 'How tall',
        explanation: 'Use "How + adjective" to ask about specific qualities.'
    },

    {
        type: 'multiple',
        topic: 'Technical Vocabulary',
        question: 'What does "algorithm" mean in programming?',
        options: [
            'A type of computer',
            'A step-by-step procedure for solving problems',
            'A programming language',
            'A computer virus'
        ],
        correct: 1,
        explanation: 'An algorithm is a set of rules or instructions for solving problems.'
    },
    {
        type: 'input',
        topic: 'Technical Vocabulary',
        question: 'Complete: "The _____ stores data permanently in a computer."',
        correct: 'hard drive',
        explanation: 'A hard drive is a storage device for permanent data storage.'
    },
    {
        type: 'multiple',
        topic: 'Technical Vocabulary',
        question: 'What is "debugging" in programming?',
        options: [
            'Writing new code',
            'Finding and fixing errors in code',
            'Deleting a program',
            'Installing software'
        ],
        correct: 1,
        explanation: 'Debugging is the process of finding and fixing errors in code.'
    },
    {
        type: 'input',
        topic: 'Technical Vocabulary',
        question: 'Complete: "_____ is a global network of interconnected computers."',
        correct: 'The Internet',
        explanation: 'The Internet is a worldwide network connecting millions of computers.'
    },
    {
        type: 'multiple',
        topic: 'Technical Vocabulary',
        question: 'What does "GUI" stand for?',
        options: [
            'General User Interface',
            'Graphical User Interface',
            'Global User Integration',
            'Guided User Instructions'
        ],
        correct: 1,
        explanation: 'GUI stands for Graphical User Interface - visual way to interact with computers.'
    },

    {
        type: 'multiple',
        topic: 'JavaScript Concepts',
        question: 'What does this code do: console.log("Hello World");',
        options: [
            'Creates a new variable',
            'Prints "Hello World" to the console',
            'Defines a function',
            'Creates an array'
        ],
        correct: 1,
        explanation: 'console.log() prints messages to the browser console for debugging.'
    },
    {
        type: 'input',
        topic: 'JavaScript Concepts',
        question: 'Complete: "let x = 5; let y = 10; console.log(x + y);" outputs: _____',
        correct: '15',
        explanation: 'The code adds 5 + 10 = 15 and prints the result.'
    },
    {
        type: 'multiple',
        topic: 'JavaScript Concepts',
        question: 'Which symbol is used to declare a variable in modern JavaScript?',
        options: ['var', 'let', 'const', 'all of the above'],
        correct: 3,
        explanation: 'var, let, and const are all used to declare variables, with let and const being modern.'
    },
    {
        type: 'input',
        topic: 'JavaScript Concepts',
        question: 'Complete: "A _____ is a reusable block of code that performs a specific task."',
        correct: 'function',
        explanation: 'Functions are reusable blocks of code that can be called multiple times.'
    },

    {
        type: 'reading',
        topic: 'Reading Comprehension',
        passage: 'Artificial Intelligence (AI) is transforming the way we live and work. From smartphones that recognize our voice to cars that can drive themselves, AI is becoming part of our daily lives. Machine learning, a subset of AI, allows computers to learn from data without being explicitly programmed. This technology is used in recommendation systems, fraud detection, and medical diagnosis. As AI continues to advance, it will create new opportunities while also presenting challenges that society must address.',
        question: 'According to the passage, what is machine learning?',
        options: [
            'A type of smartphone',
            'A subset of AI that allows computers to learn from data',
            'A way to drive cars',
            'A medical diagnosis tool'
        ],
        correct: 1,
        explanation: 'The passage states that machine learning is "a subset of AI" that "allows computers to learn from data".'
    },
    {
        type: 'reading',
        topic: 'Reading Comprehension',
        passage: 'The same passage about AI...',
        question: 'Which of the following is NOT mentioned as an example of AI in daily life?',
        options: [
            'Voice recognition on smartphones',
            'Self-driving cars',
            'Online shopping',
            'Medical diagnosis'
        ],
        correct: 2,
        explanation: 'Online shopping is not specifically mentioned in the passage as an example of AI.'
    },
    {
        type: 'reading',
        topic: 'Reading Comprehension',
        passage: 'The same passage about AI...',
        question: 'What does the passage suggest about the future of AI?',
        options: [
            'It will replace all human jobs',
            'It will create opportunities and challenges',
            'It will only be used in cars',
            'It will become less important'
        ],
        correct: 1,
        explanation: 'The passage states AI "will create new opportunities while also presenting challenges".'
    }
];

function initializeActivity() {
    displayQuestion();
    updateProgress();
    updateScore();
}

function displayQuestion() {
    const container = document.getElementById('questionsContainer');
    const question = questions[currentQuestionIndex];
    
    let questionHTML = `
        <div class="question-card">
            <div class="question-number">Question ${currentQuestionIndex + 1}/35</div>
            ${question.topic !== questions[currentQuestionIndex - 1]?.topic ? `<div class="topic-title">${question.topic}</div>` : ''}
            <div class="question-text">${question.question}</div>
    `;

    if (question.type === 'multiple') {
        questionHTML += '<div class="options">';
        question.options.forEach((option, index) => {
            questionHTML += `
                <div class="option" onclick="selectOption(${index})">
                    ${option}
                </div>
            `;
        });
        questionHTML += '</div>';
    } else if (question.type === 'input') {
        questionHTML += `
            <input type="text" class="input-answer" id="userInput" placeholder="Type your answer here...">
        `;
    } else if (question.type === 'reading') {
        questionHTML += `
            <div class="code-block">${question.passage}</div>
            <div class="options">
        `;
        question.options.forEach((option, index) => {
            questionHTML += `
                <div class="option" onclick="selectOption(${index})">
                    ${option}
                </div>
            `;
        });
        questionHTML += '</div>';
    }

    questionHTML += `
            <button class="check-btn" onclick="checkAnswer()">Check Answer</button>
            <div class="feedback" id="feedback" style="display: none;"></div>
        </div>
    `;

    container.innerHTML = questionHTML;
}

function selectOption(index) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[index].classList.add('selected');
    userAnswers[currentQuestionIndex] = index;
}

function checkAnswer() {
    const question = questions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    let isCorrect = false;

    if (question.type === 'multiple' || question.type === 'reading') {
        const userAnswer = userAnswers[currentQuestionIndex];
        isCorrect = userAnswer === question.correct;
        
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === userAnswer && !isCorrect) {
                option.classList.add('incorrect');
            }
        });
    } else if (question.type === 'input') {
        const userInput = document.getElementById('userInput');
        const userAnswer = userInput.value.trim().toLowerCase();
        const correctAnswer = question.correct.toLowerCase();
        isCorrect = userAnswer === correctAnswer;
        
        userInput.style.borderColor = isCorrect ? '#4CAF50' : '#f44336';
        userInput.style.backgroundColor = isCorrect ? '#e8f5e8' : '#ffebee';
    }

    if (isCorrect) {
        score++;
        feedback.className = 'feedback correct';
        feedback.textContent = '✓ Correct! ' + question.explanation;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent = '✗ Incorrect. ' + question.explanation;
    }

    feedback.style.display = 'block';
    updateScore();

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
            updateProgress();
        } else {
            showFinalScore();
        }
    }, 3000);
}

function updateProgress() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function updateScore() {
    document.getElementById('scoreDisplay').textContent = `Score: ${score}/${questions.length}`;
}

function showFinalScore() {
    document.getElementById('questionsContainer').style.display = 'none';
    const finalScore = document.getElementById('finalScore');
    const percentage = Math.round((score / questions.length) * 100);
    
    let message = '';
    if (percentage >= 90) {
        message = 'Excellent work! You have mastered these English concepts! 🌟';
    } else if (percentage >= 70) {
        message = 'Good job! You have a solid understanding of the material! 👍';
    } else if (percentage >= 50) {
        message = 'Not bad! Keep practicing to improve your English skills! 💪';
    } else {
        message = 'Keep studying! Practice makes perfect! 📚';
    }
    
    document.getElementById('finalScoreText').innerHTML = `
        <h3>Your Score: ${score}/${questions.length} (${percentage}%)</h3>
        <p>${message}</p>
    `;
    
    finalScore.style.display = 'block';
}

function restartActivity() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    document.getElementById('questionsContainer').style.display = 'block';
    document.getElementById('finalScore').style.display = 'none';
    initializeActivity();
}

window.onload = initializeActivity;