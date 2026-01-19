// ============================================
// CAMBRIDGE UNIVERSITY QUIZ
// Computer Science Department
// ============================================

// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    if (themeIcon) {
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Configuration
// Configuration
const DEFAULT_TIMER = 30;
const ROUND_TIMERS = {
    1: 30,
    2: 15, // Round 2: 15 seconds
    3: 15  // Round 3: 15 seconds
};

const QUESTION_COUNTS = {
    1: 40, // Round 1: 40 questions
    2: 20, // Round 2: 20 questions
    3: 15  // Round 3: 15 questions
};

// Round Information
const ROUND_INFO = {
    1: {
        name: "Logo Identification",
        description: "Reveal the tiles to guess the brand logo.",
        totalQuestions: 40
    },
    2: {
        name: "Tech Titans (CEOs & Brands)",
        description: "Identify the CEO or Brand from the images.",
        totalQuestions: 20
    },
    3: {
        name: "Tech History & Logos",
        description: "Programming history, launch dates, and company logos.",
        totalQuestions: 15
    }
};

// Questions Database
// Questions Database
const QUESTIONS = {
    1: [
        // Round 1: Tough Tech Logos (Visual IQ)
        // Using 'college_logo.png' as default/placeholder for visual testing as requested
        {
            id: 1,
            question: "Identify this Logo",
            image: "logo/React-icon.svg.png",
            choices: ["Oracle", "Sun Microsystems", "IBM", "Solaris"],
            correctIndex: 1,
            explanation: "React js"
        },
        {
            id: 2,
            question: "Identify this Brand",
            image: "college_logo.png",
            choices: ["Linksys", "Juniper", "Cisco", "Netgear"],
            correctIndex: 2,
            explanation: "The vertical lines represent the Golden Gate Bridge."
        },
        {
            id: 3,
            question: "Identify this Brand",
            image: "college_logo.png",
            choices: ["Sony", "Vaio", "Lenovo", "Asus"],
            correctIndex: 1,
            explanation: "The 'VA' represents an analog wave, and 'IO' represents digital binary code."
        },
        {
            id: 4,
            question: "Who is this Mascot?",
            image: "college_logo.png",
            choices: ["BSD Daemon", "Tux (Linux)", "GNU", "Wilber (GIMP)"],
            correctIndex: 1,
            explanation: "Tux the Penguin is the official mascot of the Linux kernel."
        },
        {
            id: 5,
            question: "Identify this Platform",
            image: "college_logo.png",
            choices: ["GitLab", "Bitbucket", "GitHub", "SourceForge"],
            correctIndex: 2,
            explanation: "The 'Octocat' is the mascot of GitHub."
        },
        {
            id: 6,
            question: "Identify this OS Logo",
            image: "college_logo.png",
            choices: ["Debian", "Ubuntu", "Red Hat", "Fedora"],
            correctIndex: 1,
            explanation: "The Ubuntu logo is called the 'Circle of Friends'."
        },
        {
            id: 7,
            question: "Identify this Hardware Brand",
            image: "college_logo.png",
            choices: ["Alienware", "Logitech", "Corsair", "Razer"],
            correctIndex: 3,
            explanation: "The triple-headed snake is the iconic logo of Razer."
        },
        {
            id: 8,
            question: "Identify this Symbol",
            image: "college_logo.png",
            choices: ["Wi-Fi", "NFC", "Bluetooth", "Zigbee"],
            correctIndex: 2,
            explanation: "The symbol combines the Nordic runes for H and B."
        },
        {
            id: 9,
            question: "Identify this Brand",
            image: "college_logo.png",
            choices: ["AMD", "Intel", "Nvidia", "Qualcomm"],
            correctIndex: 2,
            explanation: "The stylized 'eye' (or spiral) is the logo for Nvidia."
        },
        {
            id: 10,
            question: "Identify this Mascot",
            image: "college_logo.png",
            choices: ["Go Gopher", "Python Snake", "Java Duke", "Rust Crab"],
            correctIndex: 2,
            explanation: "Duke is the interactive mascot for the Java programming language."
        },
        {
            id: 11,
            question: "Identify this Software",
            image: "college_logo.png",
            choices: ["Winamp", "VLC Media Player", "Windows Media Player", "QuickTime"],
            correctIndex: 1,
            explanation: "The orange traffic cone is the icon of VLC Media Player."
        },
        {
            id: 12,
            question: "Identify this Brand",
            image: "college_logo.png",
            choices: ["Predator", "ROG", "Alienware", "Omen"],
            correctIndex: 2,
            explanation: "The extraterrestrial head is the logo of Alienware."
        },
        {
            id: 13,
            question: "Identify this App",
            image: "college_logo.png",
            choices: ["WhatsApp", "Snapchat", "Telegram", "Signal"],
            correctIndex: 1,
            explanation: "Ghostface Chilah is the ghost in the Snapchat logo."
        },
        {
            id: 14,
            question: "Identify this Brand",
            image: "college_logo.png",
            choices: ["Sega", "Nintendo", "Atari", "Commodore"],
            correctIndex: 2,
            explanation: "The 'Fuji' logo is the symbol of Atari."
        },
        {
            id: 15,
            question: "Identify this Symbol",
            image: "college_logo.png",
            choices: ["Ethernet", "HDMI", "USB", "Thunderbolt"],
            correctIndex: 2,
            explanation: "The trident symbol represents USB."
        },
        // Questions 16-40 (Placeholders for User Expansion)
        { id: 16, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q16" },
        { id: 17, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q17" },
        { id: 18, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q18" },
        { id: 19, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q19" },
        { id: 20, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q20" },
        { id: 21, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q21" },
        { id: 22, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q22" },
        { id: 23, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q23" },
        { id: 24, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q24" },
        { id: 25, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q25" },
        { id: 26, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q26" },
        { id: 27, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q27" },
        { id: 28, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q28" },
        { id: 29, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q29" },
        { id: 30, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q30" },
        { id: 31, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q31" },
        { id: 32, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q32" },
        { id: 33, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q33" },
        { id: 34, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q34" },
        { id: 35, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q35" },
        { id: 36, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q36" },
        { id: 37, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q37" },
        { id: 38, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q38" },
        { id: 39, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q39" },
        { id: 40, question: "Identify this Brand", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder for Q40" }
    ],
    2: [
        // Round 2: Tech Titans (CEO & Brand Identification)
        // Note: Using 'college_logo.png' as placeholder. User should replace with actual CEO/Logo images.
        {
            id: 1,
            question: "Who is the CEO of this company?",
            image: "logo/Nvidia_logo.svg.png", // Replace with Google/Sundar Pichai image
            choices: ["Satya Nadella", "Sundar Pichai", "Tim Cook", "Mark Zuckerberg"],
            correctIndex: 1,
            explanation: "Jensen Huang is the CEO of NVIDIA."
        },
        {
            id: 2,
            question: "Identify the Company led by this CEO",
            image: "college_logo.png", // Replace with Satya Nadella image
            choices: ["Oracle", "Microsoft", "Salesforce", "IBM"],
            correctIndex: 1,
            explanation: "Satya Nadella has been the CAO of Microsoft since 2014."
        },
        {
            id: 3,
            question: "Who founded this company?",
            image: "college_logo.png", // Replace with Amazon/Bezos image
            choices: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Larry Page"],
            correctIndex: 0,
            explanation: "Jeff Bezos founded Amazon in 1994."
        },
        {
            id: 4,
            question: "Identify this Tech Leader",
            image: "college_logo.png", // Replace with Lisa Su image
            choices: ["Lisa Su", "Jensen Huang", "Ginni Rometty", "Sheryl Sandberg"],
            correctIndex: 0,
            explanation: "Lisa Su is the CEO of AMD (Advanced Micro Devices)."
        },
        {
            id: 5,
            question: "Which company is this?",
            image: "college_logo.png", // Replace with SpaceX/Tesla logo
            choices: ["SpaceX", "Blue Origin", "Virgin Galactic", "Boeing"],
            correctIndex: 0,
            explanation: "SpaceX was founded by Elon Musk."
        },
        // ... Placeholder for remaining 15 questions ...
        { id: 6, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" },
        { id: 7, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" },
        { id: 8, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" },
        { id: 9, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" },
        { id: 10, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" },
        { id: 11, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" },
        { id: 12, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" },
        { id: 13, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" },
        { id: 14, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" },
        { id: 15, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" },
        { id: 16, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" },
        { id: 17, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" },
        { id: 18, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" },
        { id: 19, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" },
        { id: 20, question: "Identify this CEO", image: "college_logo.png", choices: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder" }
    ],
    3: [
        // Round 3: Tech History & Logos (Mixed)
        {
            id: 1,
            question: "Who developed the Python programming language?",
            image: "logo/Python-logo-.png", // Text question, but keeping placeholder if needed or null
            choices: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
            correctIndex: 0,
            explanation: "Guido van Rossum created Python."
        },
        {
            id: 2,
            question: "Identify this Programming Language Logo",
            image: "college_logo.png", // Replace with Python/Java logo
            choices: ["Python", "Java", "C++", "JavaScript"],
            correctIndex: 0,
            explanation: "This is the official logo of the Python programming language."
        },
        {
            id: 3,
            question: "When was the first version of Java released?",
            image: null, // Text only
            choices: ["1991", "1995", "1998", "2000"],
            correctIndex: 1,
            explanation: "Java 1.0 was officially released by Sun Microsystems in 1995."
        },
        {
            id: 4,
            question: "Identify this Tech Company Logo",
            image: "college_logo.png", // Replace with Adobe/Microsoft logo
            choices: ["Adobe", "Microsoft", "Salesforce", "Oracle"],
            correctIndex: 1,
            explanation: "This is the logo of Microsoft."
        },
        {
            id: 5,
            question: "Who created C++?",
            image: null,
            choices: ["Ken Thompson", "Bjarne Stroustrup", "Brian Kernighan", "Linus Torvalds"],
            correctIndex: 1,
            explanation: "Bjarne Stroustrup developed C++ at Bell Labs."
        },
        {
            id: 6,
            question: "Identify this Browser Logo",
            image: "college_logo.png",
            choices: ["Chrome", "Firefox", "Edge", "Safari"],
            correctIndex: 1,
            explanation: "This is the logo for Mozilla Firefox."
        },
        {
            id: 7,
            question: "In which year was Facebook founded?",
            image: null,
            choices: ["2002", "2004", "2006", "2008"],
            correctIndex: 1,
            explanation: "Facebook was founded in 2004 by Mark Zuckerberg and details."
        },
        {
            id: 8,
            question: "Identify this Database Logo",
            image: "college_logo.png",
            choices: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
            correctIndex: 2,
            explanation: "This is the logo for MongoDB."
        },
        {
            id: 9,
            question: "Who is known as the father of the World Wide Web?",
            image: null,
            choices: ["Tim Berners-Lee", "Vint Cerf", "Marc Andreessen", "Robert Kahn"],
            correctIndex: 0,
            explanation: "Tim Berners-Lee invented the World Wide Web in 1989."
        },
        {
            id: 10,
            question: "Identify this Operating System",
            image: "college_logo.png",
            choices: ["Android", "iOS", "Linux", "Windows"],
            correctIndex: 0,
            explanation: "The robot mascot represents the Android operating system."
        },
        // Placeholders for 11-15
        { id: 11, question: "Who founded Apple?", image: null, choices: ["Steve Jobs", "Bill Gates", "Jeff Bezos", "Elon Musk"], correctIndex: 0, explanation: "Steve Jobs co-founded Apple." },
        { id: 12, question: "Identify this Cloud Service", image: "college_logo.png", choices: ["AWS", "Azure", "GCP", "Heroku"], correctIndex: 0, explanation: "AWS Logo." },
        { id: 13, question: "When was Google founded?", image: null, choices: ["1996", "1998", "2000", "2002"], correctIndex: 1, explanation: "Google was founded in 1998." },
        { id: 14, question: "Identify this Creative Tool", image: "college_logo.png", choices: ["Photoshop", "Figma", "Sketch", "Canva"], correctIndex: 1, explanation: "Figma Logo." },
        { id: 15, question: "Who created Linux?", image: null, choices: ["Linus Torvalds", "Richard Stallman", "Ken Thompson", "Dennis Ritchie"], correctIndex: 0, explanation: "Linus Torvalds created the Linux kernel." }
    ]
};

// Game State
let currentRound = 1;
let currentQuestionIndex = 0;
let gameState = {
    1: Array(QUESTION_COUNTS[1]).fill(null),
    2: Array(QUESTION_COUNTS[2]).fill(null),
    3: Array(QUESTION_COUNTS[3]).fill(null)
};
let timer = null;
let timeLeft = DEFAULT_TIMER;
let isAnswerSelected = false;
let autoRevealInterval = null;

// DOM Elements
const startScreen = document.getElementById('startScreen');
const roundScreen = document.getElementById('roundScreen');
const questionModal = document.getElementById('questionModal');
const completionModal = document.getElementById('completionModal');
const numbersGrid = document.getElementById('numbersGrid');
const progressBar = document.getElementById('progressBar');
const progressCount = document.getElementById('progressCount');
const roundTitle = document.getElementById('roundTitle');
const questionText = document.getElementById('questionText');
const questionPosition = document.getElementById('questionPosition');
const choicesContainer = document.getElementById('choicesContainer');
const resultContainer = document.getElementById('resultContainer');
const resultIcon = document.getElementById('resultIcon');
const resultMessage = document.getElementById('resultMessage');
const explanationBox = document.getElementById('explanationBox');
const correctAnswer = document.getElementById('correctAnswer');
const timerValue = document.getElementById('timerValue');
const timerLabel = document.getElementById('timerLabel');
const closeQuestion = document.getElementById('closeQuestion');
const backButton = document.getElementById('backButton');
const resetRound = document.getElementById('resetRound');
const backToRounds = document.getElementById('backToRounds');
const completionMessage = document.getElementById('completionMessage');

// Puzzle Elements (Will be created in HTML, but selecting safely here)
let puzzleContainer, puzzleImage, puzzleGrid;

// Audio Elements
const alertSound = document.getElementById('alertSound');
const timeUpSound = document.getElementById('timeUpSound');
const wrongSound = document.getElementById('wrongSound');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    // Select Puzzle Elements after DOM Load
    puzzleContainer = document.getElementById('puzzleContainer');
    puzzleImage = document.getElementById('puzzleImage');
    puzzleGrid = document.getElementById('puzzleGrid');

    // Initialize Theme
    initTheme();
    setupEventListeners();
}

function setupEventListeners() {
    // Round selection
    document.querySelectorAll('.round-card').forEach(card => {
        card.addEventListener('click', () => selectRound(card.dataset.round));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectRound(card.dataset.round);
            }
        });
    });

    // Start buttons
    document.querySelectorAll('.start-btn').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card event
            selectRound(index + 1);
        });
    });

    // Navigation
    if (backButton) backButton.addEventListener('click', goToStartScreen);
    if (closeQuestion) closeQuestion.addEventListener('click', closeQuestionModal);
    if (resetRound) resetRound.addEventListener('click', resetCurrentRound);
    if (backToRounds) backToRounds.addEventListener('click', () => {
        completionModal.classList.remove('active');
        goToStartScreen();
    });

    // Rules Modal Logic
    const rulesBtn = document.getElementById('rulesBtn');
    const footerRulesBtn = document.getElementById('footerRulesBtn');
    const rulesModalOverlay = document.getElementById('rulesModalOverlay');
    const closeRulesBtn = document.getElementById('closeRulesBtn');
    const ackRulesBtn = document.getElementById('ackRulesBtn');

    if (rulesBtn) {
        rulesBtn.addEventListener('click', () => {
            if (rulesModalOverlay) rulesModalOverlay.style.display = 'grid'; // CSS uses place-items: center
        });
    }

    if (footerRulesBtn) {
        footerRulesBtn.addEventListener('click', () => {
            if (rulesModalOverlay) rulesModalOverlay.style.display = 'grid';
        });
    }

    function closeRules() {
        if (rulesModalOverlay) rulesModalOverlay.style.display = 'none';
    }

    if (closeRulesBtn) closeRulesBtn.addEventListener('click', closeRules);
    if (ackRulesBtn) ackRulesBtn.addEventListener('click', closeRules);

    if (rulesModalOverlay) {
        rulesModalOverlay.addEventListener('click', (e) => {
            if (e.target === rulesModalOverlay) closeRules();
        });
    }

    // Keyboard support
    document.addEventListener('keydown', handleKeyDown);

    // Close modal on background click
    if (questionModal) {
        questionModal.addEventListener('click', (e) => {
            if (e.target === questionModal) closeQuestionModal();
        });
    }
}

function handleKeyDown(e) {
    if (!questionModal || !questionModal.classList.contains('active')) return;

    switch (e.key) {
        case 'Escape':
            closeQuestionModal();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            // Only allow keyword answer selection for Rounds 2 & 3
            if (currentRound !== 1 && !isAnswerSelected) {
                selectAnswer(parseInt(e.key) - 1);
            }
            break;
    }
}

function selectRound(roundNumber) {
    currentRound = parseInt(roundNumber);
    const roundInfo = ROUND_INFO[currentRound];

    if (roundTitle) roundTitle.textContent = `Round ${currentRound}: ${roundInfo.name}`;
    if (startScreen) startScreen.style.display = 'none';
    if (roundScreen) roundScreen.style.display = 'block';

    // Check if element exists before modifying
    const roundDesc = document.querySelector('.round-details-panel p');
    if (roundDesc) roundDesc.textContent = roundInfo.description;

    generateNumberGrid();
    updateProgress();
}

function goToStartScreen() {
    if (roundScreen) roundScreen.style.display = 'none';
    if (questionModal) questionModal.classList.remove('active');
    if (completionModal) completionModal.classList.remove('active');
    if (startScreen) startScreen.style.display = 'block';
}

function generateNumberGrid() {
    const questionCount = QUESTION_COUNTS[currentRound];
    if (!numbersGrid) return;
    numbersGrid.innerHTML = '';

    // Set appropriate grid class
    numbersGrid.className = 'numbers-grid';
    if (currentRound === 1) {
        numbersGrid.classList.add('grid-round-1');
    } else if (currentRound === 2) {
        numbersGrid.classList.add('grid-round-2');
    } else {
        numbersGrid.classList.add('grid-round-3');
    }

    for (let i = 1; i <= questionCount; i++) {
        const button = document.createElement('button');
        button.className = 'number-btn';
        button.textContent = i;
        button.dataset.index = i - 1;
        button.setAttribute('aria-label', `Question ${i}`);

        button.addEventListener('click', () => openQuestion(i - 1));

        // Add visual state for answered questions
        const state = gameState[currentRound][i - 1];
        if (state !== null) {
            button.classList.add('disabled');
        }

        numbersGrid.appendChild(button);
    }
}

function updateNumberGrid() {
    if (!numbersGrid) return;
    const buttons = numbersGrid.querySelectorAll('.number-btn');
    buttons.forEach((button, index) => {
        const state = gameState[currentRound][index];
        button.classList.remove('correct', 'incorrect', 'disabled', 'active');

        if (state !== null) {
            button.classList.add('disabled');
        }

        if (index === currentQuestionIndex) {
            button.classList.add('active');
        }
    });
}

function updateProgress() {
    if (!progressBar || !progressCount) return;
    const questionCount = QUESTION_COUNTS[currentRound];
    const attempted = gameState[currentRound].filter(state => state !== null).length;
    const progress = (attempted / questionCount) * 100;
    progressBar.style.width = `${progress}%`;
    progressCount.textContent = `${attempted}/${questionCount}`;
}

function openQuestion(index) {
    const state = gameState[currentRound][index];
    if (state !== null) return;

    currentQuestionIndex = index;
    isAnswerSelected = false;

    // Get question
    let questionData;
    if (QUESTIONS[currentRound] && QUESTIONS[currentRound][index % QUESTIONS[currentRound].length]) {
        questionData = QUESTIONS[currentRound][index % QUESTIONS[currentRound].length];
    } else {
        questionData = getDefaultQuestion(index, currentRound);
    }

    // Set Timer Duration based on Round
    timeLeft = ROUND_TIMERS[currentRound] || DEFAULT_TIMER;

    const questionCount = QUESTION_COUNTS[currentRound];
    if (questionPosition) questionPosition.textContent = `Question ${index + 1} of ${questionCount}`;

    // Puzzle & Image Logic
    if (puzzleContainer) puzzleContainer.style.display = 'none';
    if (puzzleGrid) puzzleGrid.innerHTML = ''; // Clear previous puzzle

    // ROUND 1: LOGO PUZZLE
    if (currentRound === 1) {
        if (questionText) questionText.style.display = 'none';
        if (choicesContainer) choicesContainer.style.display = 'none';

        if (puzzleContainer && puzzleImage) {
            puzzleContainer.style.display = 'block';
            puzzleImage.src = questionData.image;
            setupPuzzleGrid();
        }
    }
    // ROUND 2: CEO/BRAND IMAGES
    else if (currentRound === 2) {
        if (questionText) {
            questionText.style.display = 'block';
            questionText.textContent = questionData.question;
        }

        // Reuse puzzle container for plain image (no grid)
        if (puzzleContainer && puzzleImage) {
            puzzleContainer.style.display = 'block';
            puzzleImage.src = questionData.image;
        }

        // HIDE CHOICES FOR ROUND 2
        if (choicesContainer) choicesContainer.style.display = 'none';
        // setupChoices(questionData); // Removed for Round 2
    }
    // ROUND 3: MIXED (Text + Optional Image)
    else {
        if (questionText) {
            questionText.style.display = 'block';
            questionText.textContent = questionData.question;
        }

        // Show image if available
        if (questionData.image && puzzleContainer && puzzleImage) {
            puzzleContainer.style.display = 'block';
            puzzleImage.src = questionData.image;
            // IMAGE QUESTION: HIDE CHOICES
            if (choicesContainer) choicesContainer.style.display = 'none';
        } else {
            // TEXT QUESTION: SHOW CHOICES
            setupChoices(questionData);
        }
    }

    // Reset UI
    if (resultContainer) resultContainer.style.display = 'none';
    if (timerValue) {
        timerValue.textContent = timeLeft;
        timerValue.className = 'timer-value';
    }
    if (timerLabel) {
        timerLabel.textContent = 'seconds remaining';
        timerLabel.className = 'timer-label';
    }
    updateNumberGrid();

    // Start Timer
    startTimer();

    // Show modal
    if (questionModal) questionModal.classList.add('active');
}

function setupChoices(questionData) {
    if (choicesContainer) {
        choicesContainer.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D'];
        questionData.choices.forEach((choice, choiceIndex) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice;
            button.dataset.letter = letters[choiceIndex];
            button.setAttribute('aria-label', `Choice ${letters[choiceIndex]}: ${choice}`);
            button.addEventListener('click', () => selectAnswer(choiceIndex));
            choicesContainer.appendChild(button);
        });
        choicesContainer.style.display = 'grid';
    }
}

function setupPuzzleGrid() {
    if (!puzzleGrid) return;
    puzzleGrid.innerHTML = '';

    // Create 12 tiles (4x3 grid) - INTERACTIVE
    for (let i = 0; i < 12; i++) {
        const tile = document.createElement('div');
        tile.className = 'puzzle-tile';
        tile.textContent = i + 1; // Add number 1-12
        // Manual Reveal Click Listener
        tile.addEventListener('click', function () {
            this.classList.add('revealed');
        });
        puzzleGrid.appendChild(tile);
    }
}

function getDefaultQuestion(index, round) {
    // Basic fallback if QUESTIONS[round] is exhausted
    return {
        id: index + 1,
        question: "Bonus Question",
        image: "https://via.placeholder.com/500x400?text=Bonus",
        choices: ["A", "B", "C", "D"],
        correctIndex: 0,
        explanation: "This is a fallback."
    };
}

function startTimer() {
    if (timer) clearInterval(timer);
    if (autoRevealInterval) clearInterval(autoRevealInterval);

    let alertPlayed = false;

    // Round 1 Auto-Reveal Logic REMOVED

    timer = setInterval(() => {
        timeLeft--;
        if (timerValue) timerValue.textContent = timeLeft;

        // Normal Timer Logic (Sounds etc)
        if (timeLeft === 10 && !alertPlayed) {
            if (alertSound) alertSound.play().catch(e => console.log("Alert sound play failed:", e));
            alertPlayed = true;
            if (timerLabel) {
                timerLabel.textContent = 'seconds remaining (hurry!)';
                timerLabel.classList.add('timer-warning');
            }
        }

        if (timeLeft === 5) {
            if (alertSound) alertSound.play().catch(e => console.log("Alert sound play failed:", e));
            if (timerValue) timerValue.classList.add('timer-critical');
            if (timerLabel) {
                timerLabel.classList.remove('timer-warning');
                timerLabel.classList.add('timer-critical');
            }
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            if (currentRound === 1) {
                // Round 1: Show Answer
                showRound1Result();
            } else if (currentRound === 2) {
                // Round 2: Auto-Reveal Answer
                showRound2Result();
            } else if (currentRound === 3) {
                // Round 3 Logic Check
                const hasImage = choicesContainer && choicesContainer.style.display === 'none';
                if (hasImage) {
                    // Image Question -> Auto Reveal
                    showRound2Result();
                } else {
                    // Text Question -> Time Up Fail
                    if (timeUpSound) timeUpSound.play().catch(e => console.log("Time-up sound play failed:", e));
                    handleTimeout();
                }
            }
        }
    }, 1000);
}

function revealRandomTile() {
    if (!puzzleGrid) return;
    const tiles = Array.from(puzzleGrid.querySelectorAll('.puzzle-tile:not(.revealed)'));
    if (tiles.length > 0) {
        const randomTile = tiles[Math.floor(Math.random() * tiles.length)];
        randomTile.classList.add('revealed');
    }
}

function showRound1Result() {
    isAnswerSelected = true; // Stop any interactions

    // Get Data
    let questionData;
    if (QUESTIONS[currentRound] && QUESTIONS[currentRound][currentQuestionIndex % QUESTIONS[currentRound].length]) {
        questionData = QUESTIONS[currentRound][currentQuestionIndex % QUESTIONS[currentRound].length];
    } else {
        questionData = getDefaultQuestion(currentQuestionIndex, currentRound);
    }

    // Mark as "Answered"
    gameState[currentRound][currentQuestionIndex] = true;

    // Reveal Full Image
    if (puzzleGrid) puzzleGrid.innerHTML = '';

    // UI Updates
    if (resultIcon) {
        resultIcon.textContent = '👁';
        resultIcon.style.color = 'var(--primary)';
    }
    if (resultMessage) resultMessage.textContent = 'The Brand Was...';

    // Show Answer
    const correctChoice = questionData.choices[questionData.correctIndex];
    if (correctAnswer) {
        correctAnswer.textContent = correctChoice;
        correctAnswer.style.fontSize = "2rem";
    }

    if (explanationBox) {
        explanationBox.textContent = questionData.explanation;
        explanationBox.style.display = 'block';
    }

    if (resultContainer) resultContainer.style.display = 'block';

    // Auto-close after delay
    setTimeout(() => {
        if (questionModal) questionModal.classList.remove('active');
        updateProgress();
        updateNumberGrid();
        checkRoundCompletion();
    }, 4000);
}

function showRound2Result() {
    isAnswerSelected = true; // Stop any interactions

    // Get Data
    let questionData;
    if (QUESTIONS[currentRound] && QUESTIONS[currentRound][currentQuestionIndex % QUESTIONS[currentRound].length]) {
        questionData = QUESTIONS[currentRound][currentQuestionIndex % QUESTIONS[currentRound].length];
    } else {
        questionData = getDefaultQuestion(currentQuestionIndex, currentRound);
    }

    // Mark as "Answered" (Success/Viewed)
    gameState[currentRound][currentQuestionIndex] = true;

    // UI Updates
    if (resultIcon) {
        resultIcon.textContent = '👑'; // Tech King/Queen Icon
        resultIcon.style.color = 'var(--accent)';
    }
    if (resultMessage) resultMessage.textContent = 'The Tech Titan Is...';

    // Show Answer
    const correctChoice = questionData.choices[questionData.correctIndex];
    if (correctAnswer) {
        correctAnswer.textContent = correctChoice;
        correctAnswer.style.fontSize = "2rem";
        correctAnswer.style.color = "var(--text-main)";
    }

    if (explanationBox) {
        explanationBox.textContent = questionData.explanation;
        explanationBox.style.display = 'block';
    }

    if (resultContainer) resultContainer.style.display = 'block';

    // Auto-close after delay (Slightly longer for reading)
    setTimeout(() => {
        if (questionModal) questionModal.classList.remove('active');
        updateProgress();
        updateNumberGrid();
        checkRoundCompletion();
    }, 5000);
}

function selectAnswer(choiceIndex) {
    if (isAnswerSelected) return;

    isAnswerSelected = true;
    clearInterval(timer);
    if (autoRevealInterval) clearInterval(autoRevealInterval);

    let questionData;
    if (QUESTIONS[currentRound] && QUESTIONS[currentRound][currentQuestionIndex % QUESTIONS[currentRound].length]) {
        questionData = QUESTIONS[currentRound][currentQuestionIndex % QUESTIONS[currentRound].length];
    } else {
        questionData = getDefaultQuestion(currentQuestionIndex, currentRound);
    }

    const isCorrect = choiceIndex === questionData.correctIndex;

    // Play wrong sound if incorrect
    if (!isCorrect && wrongSound) {
        wrongSound.play().catch(e => console.log("Wrong sound play failed:", e));
    }

    // Update game state
    gameState[currentRound][currentQuestionIndex] = isCorrect;

    // Show result
    showResult(isCorrect, questionData, choiceIndex);
}

function handleTimeout() {
    if (isAnswerSelected) return;
    isAnswerSelected = true;
    if (autoRevealInterval) clearInterval(autoRevealInterval);

    let questionData;
    if (QUESTIONS[currentRound] && QUESTIONS[currentRound][currentQuestionIndex % QUESTIONS[currentRound].length]) {
        questionData = QUESTIONS[currentRound][currentQuestionIndex % QUESTIONS[currentRound].length];
    } else {
        questionData = getDefaultQuestion(currentQuestionIndex, currentRound);
    }

    // Time's up = incorrect
    gameState[currentRound][currentQuestionIndex] = false;

    // Play wrong sound for timeout
    if (wrongSound) wrongSound.play().catch(e => console.log("Wrong sound play failed:", e));

    // Show result
    showResult(false, questionData, -1);
}

function showResult(isCorrect, questionData, selectedIndex) {
    // Update UI
    if (resultIcon) {
        resultIcon.textContent = isCorrect ? '✓' : '✗';
        resultIcon.style.color = isCorrect ? 'var(--success)' : 'var(--error)';
    }
    if (resultMessage) resultMessage.textContent = isCorrect ? 'Correct Answer!' : 'Time\'s Up!';
    if (explanationBox) explanationBox.textContent = questionData.explanation;

    // Show correct answer
    const letters = ['A', 'B', 'C', 'D'];
    const correctChoice = questionData.choices[questionData.correctIndex];
    if (correctAnswer) {
        correctAnswer.textContent = `Correct: ${letters[questionData.correctIndex]}. ${correctChoice}`;
        correctAnswer.style.fontSize = "";
    }

    // Highlight choices
    if (choicesContainer) {
        const choiceButtons = choicesContainer.querySelectorAll('.choice-btn');
        choiceButtons.forEach((button, index) => {
            button.disabled = true;
            if (index === questionData.correctIndex) {
                button.classList.add('correct');
            } else if (index === selectedIndex) {
                button.classList.add('incorrect');
            }
        });
        choicesContainer.style.display = 'none'; // Fade out choices? or allow seeing hints? user said "answer only show"
    }

    // Show result
    if (resultContainer) resultContainer.style.display = 'block';

    // Auto-close after delay
    setTimeout(() => {
        if (questionModal) questionModal.classList.remove('active');
        updateProgress();
        updateNumberGrid();
        checkRoundCompletion();
    }, 2500);
}

function closeQuestionModal() {
    if (timer) clearInterval(timer);
    if (autoRevealInterval) clearInterval(autoRevealInterval);
    if (questionModal) questionModal.classList.remove('active');

    // Mark as skipped/incorrect if abandoned (unless already answered)
    if (!isAnswerSelected && gameState[currentRound][currentQuestionIndex] === null) {
        // For round 1, checking if viewed? or just mark as fail?
        // Let's mark as fail to be safe
        gameState[currentRound][currentQuestionIndex] = false;

        if (wrongSound) wrongSound.play().catch(e => console.log("Wrong sound play failed:", e));
        updateProgress();
        updateNumberGrid();
        checkRoundCompletion();
    }
}

function checkRoundCompletion() {
    const questionCount = QUESTION_COUNTS[currentRound];
    const attempted = gameState[currentRound].filter(state => state !== null).length;

    if (attempted === questionCount) {
        setTimeout(() => {
            showCompletionMessage();
        }, 500);
    }
}

function showCompletionMessage() {
    const questionCount = QUESTION_COUNTS[currentRound];
    const correctCount = gameState[currentRound].filter(state => state === true).length;
    const roundInfo = ROUND_INFO[currentRound];

    // Encouragement messages
    let message;
    if (correctCount >= questionCount * 0.8) {
        message = `Outstanding performance in ${roundInfo.name}!`;
    } else if (correctCount >= questionCount * 0.6) {
        message = `Strong showing in ${roundInfo.name}!`;
    } else {
        message = `Round complete! ${roundInfo.name} was challenging.`;
    }

    if (completionMessage) completionMessage.textContent = message;
    if (completionModal) completionModal.classList.add('active');
}

function resetCurrentRound() {
    const roundInfo = ROUND_INFO[currentRound];
    if (confirm(`Reset ${roundInfo.name}? All your progress in this round will be cleared.`)) {
        gameState[currentRound] = Array(QUESTION_COUNTS[currentRound]).fill(null);
        if (completionModal) completionModal.classList.remove('active');
        updateProgress();
        updateNumberGrid();
    }
}
