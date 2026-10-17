// Tout le contenu du site est ici : modifie ce fichier, pas les composants.

export const profile = {
  name: 'Mike SIP',
  location: 'Sèvres (92)',
  tagline: "S’amuser est l’art de rester jeune dans un monde qui oublie de l’être.",
  role: 'Développeur backend Python / Django',
  company: 'chez Patrowl, plateforme de cybersécurité offensive',
  github: 'https://github.com/mike-sip',
  linkedin: 'https://www.linkedin.com/in/mike-sip/',
};

// Auto-évaluation façon fiche de perso, sur 10.
export const stats = [
  { label: 'Backend', value: 9, color: 'red' },
  { label: 'DevOps', value: 7, color: 'blue' },
  { label: 'Frontend', value: 6, color: 'green' },
  { label: 'Curiosité', value: 10, color: 'yellow' },
] as const;

export const levels = [
  { title: 'Bac S, option ISN', place: 'Lycée Pierre et Marie Curie, Châteauroux', date: '2016 – 2019', text: 'Premières lignes de Python, dans un terminal. Le déclic.' },
  { title: 'DUT Informatique', place: "Université d'Orléans", date: '2019 – 2021', text: 'Les bases solides : algo, réseau, bases de données.' },
  { title: 'Développeur full-stack PHP', place: 'CNFPT, Orléans · stage', date: '2021', text: 'Première expérience en équipe sur une vraie application web.' },
  { title: 'Licence Informatique, parcours Ingénierie', place: "Université d'Orléans", date: '2021 – 2022', text: 'Monter en abstraction et en rigueur.' },
  { title: 'Master Architecte logiciel', place: 'ETNA, Ivry-sur-Seine · alternance', date: '2022 – 2024', text: "Concevoir des applications, pas seulement les coder." },
  { title: 'Développeur logiciel et web', place: 'Thales, Élancourt · alternance', date: '2022 – 2024', text: "Outils internes en Angular et FastAPI, conteneurisés avec Docker. 30 à 40 % de temps gagné sur des tâches d'administration et de monitoring grâce à l'automatisation." },
  { title: 'Développeur back-end Python', place: 'Patrowl, Paris', date: 'Depuis 2026', text: 'APIs Django, tâches Celery et PostgreSQL au quotidien.', current: true },
];

export const inventory = [
  { name: 'Python', kind: 'Langage' },
  { name: 'Django', kind: 'Backend' },
  { name: 'FastAPI', kind: 'Backend' },
  { name: 'Celery', kind: 'Backend' },
  { name: 'Prefect', kind: 'Backend' },
  { name: 'PostgreSQL', kind: 'Données' },
  { name: 'Docker', kind: 'DevOps' },
  { name: 'Kubernetes', kind: 'DevOps' },
  { name: 'Angular', kind: 'Frontend' },
  { name: 'TypeScript', kind: 'Langage' },
  { name: 'Dev AI-native', kind: 'IA · en cours' },
];

export const quests = [
  {
    name: 'Super Smash Marvel',
    pitch: 'Un jeu de combat 2.5D façon Super Smash Bros : Hulk contre Spider-Man, en style toon.',
    details: ['23 coups par personnage', 'Simulation déterministe à 60 Hz', '308 tests automatisés', 'Build WebGL jouable dans le navigateur'],
    stack: ['Unity', 'C#', 'Shaders URP'],
    status: 'Jouable',
    color: 'red',
  },
  {
    name: 'La Carto Poulet',
    pitch: 'Une app mobile qui cartographie tous les restaurants qui servent les meilleurs poulets.',
    details: ['Carte des meilleures adresses', 'Pensée pour le mobile'],
    stack: ['Mobile'],
    status: 'En cours',
    color: 'yellow',
  },
] as const;

export const offline = [
  { name: 'Nouvelles technologies', text: "Tester le dernier outil, lire la doc, bricoler un prototype. Toujours.", emoji: '🚀' },
  { name: 'Musculation', text: 'Progresser un peu chaque semaine, comme sur un projet.', emoji: '🏋️' },
  { name: 'Jeu compétitif', text: "Analyser, s'adapter, recommencer. Le meilleur entraînement au debug.", emoji: '🎮' },
];
