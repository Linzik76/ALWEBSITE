// Career vibe quiz: each answer adds points to one or more career types.
// The type with the most points is the result.

const TYPES = {
  electrical: {
    title: 'The Power Player ⚡',
    trade: 'Electrical',
    img: 'images/trade-electrical.jpg',
    desc: "You're logical, precise and love figuring out how things work behind the scenes. You stay calm under pressure and get a real buzz from solving a tricky problem. Electrical trades need exactly that kind of brain.",
    traits: ['🧠 Problem solver', '🎯 Detail-focused', '🔌 Techy', '😎 Cool under pressure'],
    jobs: ['Electrician', 'Electrical Instrumentation', 'Electrical Engineering Technician', 'Wind Turbine Maintenance'],
  },
  culinary: {
    title: 'The Creative Cook 🍳',
    trade: 'Culinary & Hospitality',
    img: 'images/trade-culinary.jpg',
    desc: "You're creative, energetic and happiest when you're making something people love. You thrive in a busy, buzzing team and don't mind a bit of heat. The kitchen could be your stage.",
    traits: ['🎨 Creative', '⚡ High energy', '🤝 Team player', '😋 People pleaser'],
    jobs: ['Commis Chef', 'Chef de Partie', 'Butcher', 'Hospitality Supervisor'],
  },
  motor: {
    title: 'The Fixer 🔧',
    trade: 'Motor & Mechanics',
    img: 'images/trade-motor.jpg',
    desc: "If it's broken, you want to fix it. You're hands-on, practical and love engines, machines and anything with moving parts. You learn best by doing, not reading about it.",
    traits: ['🛠️ Hands-on', '🚗 Machine lover', '🔍 Curious', '💪 Practical'],
    jobs: ['Motor Mechanic', 'Heavy Vehicle Mechanic', 'Agricultural Mechanic', 'Aircraft Mechanic'],
  },
  engineering: {
    title: 'The Inventor 🤖',
    trade: 'Engineering & Manufacturing',
    img: 'images/trade-engineering.jpg',
    desc: "You're the one who takes things apart just to see how they work. You love gadgets, maths and making things better. Engineering and manufacturing need curious minds like yours.",
    traits: ['💡 Inventive', '🔬 Curious', '📐 Precise', '🚀 Future-focused'],
    jobs: ['Manufacturing Technician', 'Toolmaker', 'Mechanical Automation & Maintenance Fitter', 'Engineering Technician'],
  },
  construction: {
    title: 'The Builder 🏗️',
    trade: 'Construction',
    img: 'images/trade-construction.jpg',
    desc: "You like seeing real results from your hard work: something you can stand back and point at. You're active, love being outdoors and are a solid, dependable part of any team.",
    traits: ['🌤️ Outdoorsy', '💪 Active', '🧱 Dependable', '🏆 Results-driven'],
    jobs: ['Carpentry & Joinery', 'Plumbing', 'Bricklaying', 'Scaffolding'],
  },
  ict: {
    title: 'The Digital Whizz 💻',
    trade: 'ICT & Business',
    img: 'images/trade-ict.jpg',
    desc: "You're organised, quick to pick up new tech and good at seeing the bigger picture. Whether it's code, data or keeping a business running, you're the person everyone asks for help.",
    traits: ['💻 Tech savvy', '🗂️ Organised', '📈 Big-picture thinker', '💬 Great communicator'],
    jobs: ['Software Developer', 'Network Engineer', 'Cybersecurity', 'Accounting Technician'],
  },
};

const QUESTIONS = [
  {
    q: "It's Saturday with nothing planned. What are you doing?",
    a: [
      ['🎮', 'Gaming, or tweaking my setup', { ict: 2, electrical: 1 }],
      ['🍕', 'Cooking up something for my mates', { culinary: 2 }],
      ['🚲', 'Fixing up my bike or car', { motor: 2, engineering: 1 }],
      ['⚽', 'Outside, playing sport or at the beach', { construction: 2 }],
    ],
  },
  {
    q: 'Pick a superpower',
    a: [
      ['⚡', 'Control electricity', { electrical: 2 }],
      ['🔮', 'Build anything I can imagine', { engineering: 2, construction: 1 }],
      ['🧠', 'Know every language, including code', { ict: 2 }],
      ['🔥', 'Never get tired, ever', { culinary: 1, construction: 2 }],
    ],
  },
  {
    q: 'In a group project, you are the one who…',
    a: [
      ['📋', 'Makes the plan and keeps everyone on track', { ict: 2 }],
      ['🛠️', 'Actually builds the thing', { construction: 1, motor: 1, engineering: 1 }],
      ['🎨', 'Makes it look amazing', { culinary: 2 }],
      ['🔍', 'Finds and fixes all the mistakes', { electrical: 2, engineering: 1 }],
    ],
  },
  {
    q: "Your mate's phone won't turn on. You…",
    a: [
      ['🪛', 'Open it up to see what is going on', { electrical: 2, engineering: 1 }],
      ['💻', 'Google the fix and talk them through it', { ict: 2 }],
      ['🍫', 'Cheer them up with snacks', { culinary: 2 }],
      ['🤷', 'Tell them to try turning it off and on again', { motor: 1, construction: 1 }],
    ],
  },
  {
    q: 'Which school subject did you (secretly) enjoy most?',
    a: [
      ['📐', 'Maths or Physics', { engineering: 2, electrical: 1 }],
      ['🪚', 'Woodwork, Metalwork or Construction Studies', { construction: 2, motor: 1 }],
      ['🍰', 'Home Ec', { culinary: 2 }],
      ['🖥️', 'Computers or Business', { ict: 2 }],
    ],
  },
  {
    q: 'Pick your ideal workplace',
    a: [
      ['🏙️', 'On a building site, watching something go up', { construction: 2 }],
      ['🍽️', 'A busy restaurant kitchen', { culinary: 2 }],
      ['🏭', 'A high-tech workshop or factory', { engineering: 2, motor: 1 }],
      ['🏢', 'A modern office with good coffee', { ict: 2 }],
    ],
  },
  {
    q: 'Which of these would you most like to learn?',
    a: [
      ['🔌', 'How to wire a whole house', { electrical: 2 }],
      ['🚗', 'How to rebuild an engine', { motor: 2 }],
      ['🤖', 'How to program a robot', { engineering: 1, ict: 1 }],
      ['🥩', 'How to cook like a top chef', { culinary: 2 }],
    ],
  },
  {
    q: 'Your perfect Friday feeling is…',
    a: [
      ['🏆', 'Seeing something I built with my own hands', { construction: 2, motor: 1 }],
      ['💡', 'Solving a problem no one else could', { electrical: 1, engineering: 2 }],
      ['😋', 'Happy customers loving what I made', { culinary: 2 }],
      ['✅', 'Everything organised and running smoothly', { ict: 2, electrical: 1 }],
    ],
  },
];

const $ = (id) => document.getElementById(id);
let current = 0;
let answers = [];

function show(screen) {
  document.querySelectorAll('.quiz-screen').forEach((s) => s.classList.remove('active'));
  $(screen).classList.add('active');
}

function renderQuestion() {
  const { q, a } = QUESTIONS[current];
  $('quiz-q').textContent = q;
  $('quiz-count').textContent = `${current + 1} / ${QUESTIONS.length}`;
  $('quiz-progress-fill').style.width = `${(current / QUESTIONS.length) * 100}%`;
  $('quiz-back').style.visibility = current === 0 ? 'hidden' : 'visible';

  const box = $('quiz-answers');
  box.innerHTML = '';
  a.forEach(([emoji, label], i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-answer';
    if (answers[current] === i) btn.classList.add('selected');
    btn.innerHTML = `<span class="qa-emoji">${emoji}</span><span>${label}</span>`;
    btn.style.animationDelay = `${i * 0.06}s`;
    btn.addEventListener('click', () => choose(i, btn));
    box.appendChild(btn);
  });

  // Restart the slide-in animation
  const card = $('quiz-question');
  card.classList.remove('slide-in');
  void card.offsetWidth;
  card.classList.add('slide-in');
}

function choose(i, btn) {
  answers[current] = i;
  btn.classList.add('selected');
  setTimeout(() => {
    current += 1;
    if (current < QUESTIONS.length) renderQuestion();
    else showResult();
  }, 280);
}

function scores() {
  const totals = Object.fromEntries(Object.keys(TYPES).map((k) => [k, 0]));
  answers.forEach((choice, qi) => {
    const weights = QUESTIONS[qi].a[choice][2];
    Object.entries(weights).forEach(([k, v]) => { totals[k] += v; });
  });
  return Object.entries(totals).sort((x, y) => y[1] - x[1]);
}

function pct(score, top) {
  // The top match lands between 84% and 98%; others are scaled against it
  const topPct = Math.min(98, 82 + top);
  return Math.max(10, Math.round((topPct * score) / Math.max(top, 1)));
}

function showResult() {
  $('quiz-progress-fill').style.width = '100%';
  const ranked = scores();
  const [bestKey, bestScore] = ranked[0];
  const best = TYPES[bestKey];

  $('result-title').textContent = best.title;
  $('result-trade').textContent = best.trade;
  $('result-desc').textContent = best.desc;
  $('result-img').src = best.img;
  $('result-img').alt = best.trade;
  $('result-pct').textContent = `${pct(bestScore, bestScore)}%`;
  $('result-traits').innerHTML = best.traits.map((t) => `<span>${t}</span>`).join('');
  $('result-jobs').innerHTML = best.jobs.map((j) => `<li>${j}</li>`).join('');

  $('result-bars').innerHTML = ranked.slice(1, 4).map(([k, s]) => `
    <div class="result-bar">
      <div class="result-bar-label"><span>${TYPES[k].trade}</span><span>${pct(s, bestScore)}%</span></div>
      <div class="result-bar-track"><div class="result-bar-fill" data-w="${pct(s, bestScore)}"></div></div>
    </div>`).join('');

  show('quiz-result');
  $('quiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => {
    document.querySelectorAll('.result-bar-fill').forEach((b) => { b.style.width = `${b.dataset.w}%`; });
  }, 300);
  confetti();
}

function confetti() {
  const colours = ['#e8704a', '#f5a060', '#5b4bd6', '#22c55e', '#facc15', '#ffffff'];
  for (let i = 0; i < 80; i++) {
    const c = document.createElement('span');
    c.className = 'confetti';
    c.style.left = `${Math.random() * 100}vw`;
    c.style.background = colours[i % colours.length];
    c.style.animationDuration = `${2 + Math.random() * 2}s`;
    c.style.animationDelay = `${Math.random() * 0.5}s`;
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

$('quiz-start').addEventListener('click', () => {
  current = 0;
  answers = [];
  show('quiz-question');
  renderQuestion();
});

$('quiz-back').addEventListener('click', () => {
  if (current > 0) {
    current -= 1;
    renderQuestion();
  }
});

$('quiz-restart').addEventListener('click', () => {
  current = 0;
  answers = [];
  show('quiz-question');
  renderQuestion();
});

$('quiz-share').addEventListener('click', async () => {
  const text = `I got "${$('result-title').textContent}" on the ApprenticeLinks career vibe quiz! What's yours?`;
  const url = window.location.href;
  try {
    if (navigator.share) {
      await navigator.share({ title: 'My apprenticeship vibe', text, url });
    } else {
      await navigator.clipboard.writeText(`${text} ${url}`);
      $('quiz-share').textContent = 'Copied to clipboard ✓';
    }
  } catch (e) {
    // Sharing cancelled
  }
});
