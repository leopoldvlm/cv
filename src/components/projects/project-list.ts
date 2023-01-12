export interface Project {
  name: string;
  date: string;
  language: string;
  description: string;
  pic: string;
  link: string;
  svg: RepoHost;
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
    link: 'https://gitlab.univ-lille.fr/leopold.varlamoff.etu/repertoire-projets/-/tree/main/tutorat',
    svg: RepoHost.gitlab,
  },
  {
    name: 'Classification de données',
    date: 'Décembre 2022',
    language: 'Java',
    description:
      "Introduction aux algorithmes d'IA : développement d'une application qui permet de classer des données en important un fichier CSV, grâce aux plus proches voisins. Analyse fonctionnelle du problème, résolutions statistiques et développement objet.",
    pic: 'projects/class.png',
    link: 'https://gitlab.univ-lille.fr/leopold.varlamoff.etu/repertoire-projets/-/tree/main/classification',
    svg: RepoHost.gitlab,
  },
  {
    name: 'CV numérique',
    date: 'Décembre 2022',
    language: 'Typescript',
    description:
      "Réalisation d'une CV numérique dans le cadre du projet de portfolio de la formation. Utilisation du framework Qwik avec Typescript et TailwindCSS, et une config Docker basique pour déployer facilement.",
    pic: 'projects/cv.png',
    link: 'https://github.com/leopoldvlm/cv',
    svg: RepoHost.github,
  },
  {
    name: 'Application de note',
    date: 'Décembre 2022',
    language: 'Typescript',
    description:
      "J'ai eu envie de faire une application web de prise de note. Toujours WIP (notamment côté interface), fait sans BaaS. Utilisation de Qwik, Tailwind, base Postgres et Prisma.",
    pic: 'projects/notes.png',
    link: 'https://github.com/leopoldvlm/website',
    svg: RepoHost.github,
  },
];
