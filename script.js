document.addEventListener('DOMContentLoaded', () => {
    startQuiz();
});

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
let currentQuestionIndex = 0;
let score = 0; // Variable to keep track of the score

const questions = [
    {
        question: "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "How often do you make careless mistakes when you have to work on a boring or difficult project?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "How often do you misplace or have difficulty finding things at home or at work?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "How often are you distracted by activity or noise around you?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "How often do you feel restless or fidgety?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "How often do you find yourself talking too much when you are in social situations?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "When you're in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "How often do you have difficulty waiting your turn in situations when turn taking is required?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
    {
        question: "How often do you interrupt others when they are busy?",
        answers: [
            { text: "Very Often", value: 4 },
            { text: "Often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Rarely", value: 1 },
            { text: "Never", value: 0 }
        ]
    },
];


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0; // Reset score at the start of the quiz
    nextButton.classList.add('hide'); // Initially hide the Next button
    nextButton.removeEventListener('click', showNextQuestion); // Remove previous event listener to avoid duplicates
    nextButton.addEventListener('click', showNextQuestion); // Attach event listener to show next question on click
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    nextButton.classList.add('hide'); // Hide Next button by default
}

function selectAnswer(answer) {
    score += answer.value;
    localStorage.setItem(`question${currentQuestionIndex + 1}`, answer.value);
    nextButton.classList.remove('hide'); // Show Next button after an answer is selected
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.innerText = `Your score: ${score}. These results are not meant to be a diagnosis, you may want to consult a professional for further assessment.`;
    answerButtonsElement.classList.add('hide');
    nextButton.classList.add('hide'); // Hide Next button since the quiz is over
    customizePageBasedOnAnswers();
}

function customizePageBasedOnAnswers() {
    const customizationElement = document.getElementById('customization');
    if (customizationElement) {
        if (score > 20) {
            customizationElement.innerHTML = `<div class="custom-content">
                Based on your previous answers, you might find this section particularly interesting.<br><br>
                <strong>Treatment suggestions for Adult ADHD:</strong><br>
                <ul>
                    <li><strong>Medications:</strong>
                        <ul>
                            <li>Stimulants (e.g., methylphenidate, amphetamine) are commonly prescribed and can help balance neurotransmitters.</li>
                            <li>Nonstimulant options include atomoxetine and some antidepressants like bupropion, beneficial if stimulants are unsuitable due to health issues or side effects.</li>
                            <li>Medication and dosage vary by individual; side effects should be discussed with a doctor.</li>
                        </ul>
                    </li>
                    <li><strong>Psychological Counseling:</strong>
                        <ul>
                            <li>Aims to improve time management, organizational skills, reduce impulsive behavior, and develop better problem-solving skills.</li>
                            <li>Can help cope with past failures and improve self-esteem.</li>
                            <li>Supports improving relationships with family, co-workers, and friends and controlling temper.</li>
                        </ul>
                    </li>
                    <li><strong>Types of Psychotherapy:</strong>
                        <ul>
                            <li>Cognitive Behavioral Therapy (CBT): Focuses on managing behavior and transforming negative thinking patterns into positive ones, addressing life challenges and other mental health conditions.</li>
                            <li>Marital Counseling and Family Therapy: Assists families and partners in coping with the stress of living with someone with ADHD, enhancing communication and problem-solving skills.</li>
                        </ul>
                    </li>
                    <li><strong>Working on Relationships:</strong>
                        ADHD can lead to missed deadlines, forgotten appointments, and impulsive decisions, straining relationships. Therapy targeting behavior monitoring, communication improvement, and conflict resolution skills can be beneficial.
                    </li>
                </ul>
                More information available at <a href='https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know'>NIMH</a>.
            </div>`;
        } else {
            customizationElement.innerHTML = `<div class="custom-content">
                Discover how you can improve your focus and organization skills. Here are some strategies:<br><br>
                <ul>
                    <li>Establish a Routine: Stick to a consistent daily schedule to streamline decision-making and save mental energy.</li>
                    <li>Use Lists and Planners: Employ tools like lists, planners, or digital apps to keep track of tasks and deadlines.</li>
                    <li>Break Tasks into Smaller Steps: Divide large projects into smaller, manageable tasks to avoid feeling overwhelmed.</li>
                    <li>Set Specific Goals: Create SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals for short-term and long-term planning.</li>
                    <li>Minimize Distractions: Identify and reduce common distractions in your environment to maintain focus.</li>
                    <li>Use Time Management Techniques: Apply methods like the Pomodoro Technique (25 minutes of work followed by a 5-minute break) to enhance productivity.</li>
                    <li>Prioritize Tasks: Focus on completing the most important or urgent tasks first.</li>
                    <li>Practice Mindfulness and Meditation: Engage in mindfulness exercises and meditation to improve cognitive function and reduce stress.</li>
                    <li>Stay Organized: Keep both your physical and digital workspaces tidy to alleviate anxiety and facilitate task initiation.</li>
                    <li>Seek Support if Needed: If necessary, consult with professionals for personalized strategies or treatments.</li>
                    <li>Stay Physically Active: Incorporate regular physical activity into your routine to boost mental and physical health.</li>
                    <li>Healthy Eating and Sleep: Ensure a nutritious diet and adequate sleep for optimal focus and organizational capabilities.</li>
                </ul>
            </div>`;
        }
    }
}

