const quizData =
[
  {
    question : 'In which year was League Of Legends launched ?',
    a : '2010',
    b : '2011',
    c : '2009',
    d : '2008',
    correct : 'c'
  },
  {
    question : "Shaco's quote 'Why so serious?' is a reference from which movie ?",
    a : 'Oblivion',
    b : 'The Dark Knight',
    c : 'Parker',
    d : 'Death Race 3',
    correct : 'b'
  },
  {
    question : "Who created Blitzcrank ?",
    a : 'Rumble',
    b : 'heimerdinger',
    c : 'ziggs',
    d : 'Viktor',
    correct : 'd'
  },
  {
    question : "What is Zoe's R ability ?",
    a : 'PADDLE STAR',
    b : 'PORTAL JUMP',
    c : 'JUMP PORTAL',
    d : 'MORE SPARKLES',
    correct : 'b'
  },
  {
    question : "Who is Taliyah's mentor ?",
    a : 'Yasuo',
    b : 'Yone',
    c : 'Master Yi',
    d : 'Jax',
    correct : 'a'
  },
  {
    question : "What is Annie referred to as ?",
    a : 'Darkness Tibbers',
    b : 'Molten Child',
    c : 'The Dark Child',
    d : 'Baby Tibbers ',
    correct : 'c'
  },
  {
    question : "What kind of creature is Tahm Kench ?",
    a : 'Darkin',
    b : 'Yordle',
    c : 'Human (Cursed)',
    d : 'Spirit',
    correct : 'd'
  },
  {
    question : "Which of the following summoners spells has the longest cooldown ?",
    a : 'Ghost',
    b : 'Heal',
    c : 'Barrier',
    d : 'Exhaust',
    correct : 'b'
  },
  {
    question : "Which champion was the soul survivor of Aatrox's massacre in the Frelijord ?",
    a : 'Sejuani',
    b : 'Ashe',
    c : 'Lissandra',
    d : 'Tryndamere',
    correct : 'd'
  },
  {
    question : "Who killed Vayne's parents ?",
    a : 'Zed',
    b : 'Evelynn',
    c : 'Leblanc',
    d : 'Nocturne',
    correct : 'b'
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0 ;
let score = 0 ;

loadQuiz();

function loadQuiz()
{
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected()
{
  let answer = undefined;

  answerEls.forEach((answerEl) =>
  {
    if(answerEl.checked)
    {
      answer = answerEl.id ;
    }
  });
  return answer ;
}
function deselectAnswers()
{
  answerEls.forEach((answerEl) =>
  {
  answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () =>
{
  const answer = getSelected();
  if(answer)
  {
    if (answer === quizData[currentQuiz].correct)
    {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length)
    {
      loadQuiz();
    }
    else
    {
          quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.
          </h2> <button onclick="location.reload()">Reload</button>`;
    }
  }


});
