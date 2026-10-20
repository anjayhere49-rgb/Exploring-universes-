const data=[{emoji:'🌌',name:'Galaxy cluster',text:'Huge groups of galaxies bound together by gravity.'},{emoji:'⭐',name:'A star system',text:'A star and the worlds and objects that orbit it.'},{emoji:'🌍',name:'A planet',text:'A world with landscapes, oceans, and atmosphere.'},{emoji:'🦋',name:'An animal',text:'A living organism built from specialised cells.'},{emoji:'🔬',name:'A cell',text:'A tiny unit of life containing molecular machinery.'},{emoji:'⚛️',name:'An atom',text:'A basic unit of a chemical element.'}];document.querySelectorAll('.grid button').forEach(b=>b.addEventListener('click',()=>{document.getElementById('title').textContent=b.dataset.title;document.getElementById('text').textContent=b.dataset.text;document.getElementById('fact').textContent=b.dataset.fact;document.querySelector('.detail').scrollIntoView({behavior:'smooth'});}));document.getElementById('begin').addEventListener('click',()=>document.getElementById('solar-system')?.scrollIntoView({behavior:'smooth'}));document.getElementById('mission-button')?.addEventListener('click',()=>{document.getElementById('solar-system')?.scrollIntoView({behavior:'smooth',block:'start'});document.getElementById('mission-text').textContent='Mission briefing ready. Choose any planet card to set your destination, then drag the 3D scene to look around.';document.getElementById('mission-button').textContent='Briefing ready ✓';});const slider=document.getElementById('slider');function update(){const s=data[+slider.value];document.getElementById('emoji').textContent=s.emoji;document.getElementById('scaleName').textContent=s.name;document.getElementById('scaleText').textContent=s.text}slider.addEventListener('input',update);// ============================================
// INFINITE EXPLORER — PLANET ENCYCLOPEDIA
// ============================================

const encyclopediaData = {
  Sun: {
    emoji: "☀️",
    name: "The Sun",
    type: "G-type main-sequence star",
    diameter: "1.39 million km",
    day: "About 25 days at equator",
    year: "About 225 million Earth years around the galaxy",
    distance: "149.6 million km from Earth",
    moons: "0",
    description: "The star at the centre of our Solar System. Its gravity holds the planets in orbit.",
    fact: "The Sun contains about 99.86% of the Solar System's total mass."
  },
  Mercury: {
    emoji: "☿️",
    name: "Mercury",
    type: "Terrestrial planet",
    diameter: "4,879 km",
    day: "59 Earth days",
    year: "88 Earth days",
    distance: "57.9 million km",
    moons: "0",
    description: "The smallest planet and the closest planet to the Sun.",
    fact: "Mercury completes one orbit around the Sun in just 88 Earth days."
  },
  Venus: {
    emoji: "♀️",
    name: "Venus",
    type: "Terrestrial planet",
    diameter: "12,104 km",
    day: "243 Earth days",
    year: "225 Earth days",
    distance: "108.2 million km",
    moons: "0",
    description: "A rocky world with a thick atmosphere dominated by carbon dioxide.",
    fact: "Venus is the hottest planet in our Solar System."
  },
  Earth: {
    emoji: "🌍",
    name: "Earth",
    type: "Terrestrial planet",
    diameter: "12,742 km",
    day: "About 24 hours",
    year: "365.25 days",
    distance: "149.6 million km",
    moons: "1",
    description: "Our home planet, with liquid-water oceans and a protective atmosphere.",
    fact: "Earth is the only world currently known to support life."
  },
  Mars: {
    emoji: "🔴",
    name: "Mars",
    type: "Terrestrial planet",
    diameter: "6,779 km",
    day: "24 hours 37 minutes",
    year: "687 Earth days",
    distance: "227.9 million km",
    moons: "2",
    description: "A cold, rocky world known for its reddish surface and enormous volcanoes.",
    fact: "Mars is home to Olympus Mons, the tallest known volcano on a planet in our Solar System."
  },
  Jupiter: {
    emoji: "🟠",
    name: "Jupiter",
    type: "Gas giant",
    diameter: "139,820 km",
    day: "About 9 hours 56 minutes",
    year: "11.86 Earth years",
    distance: "778.6 million km",
    moons: "101",
    description: "The largest planet in our Solar System, with powerful storms and many moons.",
    fact: "Jupiter's Great Red Spot is a giant storm that has lasted for centuries."
  },
  Saturn: {
    emoji: "🪐",
    name: "Saturn",
    type: "Gas giant",
    diameter: "116,460 km",
    day: "About 10.7 hours",
    year: "29.4 Earth years",
    distance: "1.43 billion km",
    moons: "285",
    description: "A gas giant famous for its spectacular rings made mainly of ice and rocky material.",
    fact: "Saturn's average density is lower than that of water."
  },
  Uranus: {
    emoji: "🩵",
    name: "Uranus",
    type: "Ice giant",
    diameter: "50,724 km",
    day: "About 17 hours 14 minutes",
    year: "84 Earth years",
    distance: "2.87 billion km",
    moons: "29",
    description: "A distant ice giant that rotates on its side relative to its orbit.",
    fact: "Uranus has an extreme axial tilt of about 98 degrees."
  },
  Neptune: {
    emoji: "🔵",
    name: "Neptune",
    type: "Ice giant",
    diameter: "49,244 km",
    day: "About 16 hours",
    year: "165 Earth years",
    distance: "4.50 billion km",
    moons: "16",
    description: "A distant blue ice giant with an active atmosphere and powerful winds.",
    fact: "Neptune takes about 165 Earth years to complete one orbit around the Sun."
  }
};

const encyclopediaSelect =
  document.getElementById("encyclopedia-select");

function updateEncyclopedia() {
  if (!encyclopediaSelect) return;

  const planet = encyclopediaData[encyclopediaSelect.value];

  if (!planet) return;

  document.getElementById("encyclopedia-name").textContent =
    `${planet.emoji} ${planet.name}`;

  document.getElementById("encyclopedia-description").textContent =
    planet.description;

  document.getElementById("encyclopedia-type").textContent =
    planet.type;

  document.getElementById("encyclopedia-diameter").textContent =
    planet.diameter;

  document.getElementById("encyclopedia-day").textContent =
    planet.day;

  document.getElementById("encyclopedia-year").textContent =
    planet.year;

  document.getElementById("encyclopedia-distance").textContent =
    planet.distance;

  document.getElementById("encyclopedia-moons").textContent =
    planet.moons;

  document.getElementById("encyclopedia-fact").textContent =
    planet.fact;
}

if (encyclopediaSelect) {
  encyclopediaSelect.addEventListener(
    "change",
    updateEncyclopedia
  );

  updateEncyclopedia();
}

console.log("🪐 Planet Encyclopedia loaded!");
