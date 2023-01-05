export interface Project {
  name: string;
  date: string;
  language: string;
  description: string;
  pic: string;
  link: string;
  svg: RepoHost;
  id: string;
  previous: string;
  next: string;
}

export enum RepoHost {
  github = 'projects/github-white.svg',
  gitlab = 'projects/gitlab-white.svg',
}

export const projects: Array<Project> = [
  {
    name: 'Application de tutorat',
    date: 'Juin 2022',
    language: 'Java',
    description:
      "Une application qui permet à un professeur de créer des groupes de tutorat entre élèves. Utilisation des graphes, notamment l'algorithme de Kuhn-Munkres, et première application en développement orienté objet.",
    pic: 'projects/tutorat.png',
    link: 'https://gitlab.univ-lille.fr/sae2.01-2.02/2022/A-G5',
    svg: RepoHost.gitlab,
    id: 'p0',
    previous: 'p3',
    next: 'p1',
  },
  {
    name: 'Classification de données',
    date: 'Décembre 2022',
    language: 'Java',
    description:
      "Introduction aux algorithmes d'IA : développement d'une application qui permet de classer des données en important un fichier CSV, grâce aux plus proches voisins. Analyse fonctionnelle du problème, résolutions statistiques et développement objet.",
    pic: 'projects/class.png',
    link: 'https://gitlab.univ-lille.fr/sae302/2022/equipe-I1',
    svg: RepoHost.gitlab,
    id: 'p1',
    previous: 'p0',
    next: 'p2',
  },
  {
    name: 'CV numérique',
    date: 'Décembre 2022',
    language: 'Typescript',
    description:
      "Réalisation d'une CV numérique dans le cadre du projet de portfolio de la formation. Utilisation du framework Qwik avec Typescript et TailwindCSS. Et aussi un peu de Docker pour m'améliorer.",
    pic: 'projects/cv.png',
    link: 'https://github.com/leopoldvlm/cv',
    svg: RepoHost.github,
    id: 'p2',
    previous: 'p1',
    next: 'p3',
  },
  {
    name: 'Application de note',
    date: 'Décembre 2022',
    language: 'Typescript',
    description:
      "J'ai eu envie de faire une application web de prise de note. Toujours WIP (notamment côté interface 🙂), fait sans BaaS pour le challenge (très mauvaise idée). Utilisation de Qwik, Tailwind, base Postgres et Prisma.",
    pic: 'projects/notes.png',
    link: 'https://github.com/leopoldvlm/website',
    svg: RepoHost.github,
    id: 'p3',
    previous: 'p2',
    next: 'p0',
  },
];
