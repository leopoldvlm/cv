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
  github = 'contact/github-black.svg',
  gitlab = 'contact/gitlab-logo-600-black.svg',
}

export const projects: Array<Project> = [
  {
    name: 'Application de tutorat',
    date: 'Juin 2022',
    language: 'Java',
    description:
      'Une application qui permet à un professeur de créer des groupes de tutorat entre élèves',
    pic: 'projects/tutorat.png',
    link: 'https://gitlab.univ-lille.fr/sae2.01-2.02/2022/A-G5',
    svg: RepoHost.gitlab,
    id: "p0",
    previous: "p3",
    next: "p1",
  },
  {
    name: 'Classification de données',
    date: 'Octobre-Décembre 2022',
    language: 'Java',
    description:
      "Introduction aux algorithmes d'IA : développement d'une application qui permet de classer des données en important un fichier CSV, grâce aux plus proches voisins",
    pic: 'projects/class.png',
    link: 'https://gitlab.univ-lille.fr/sae302/2022/equipe-I1',
    svg: RepoHost.gitlab,
    id: "p1",
    previous: "p0",
    next: "p2",
  },
  {
    name: 'CV numérique',
    date: 'Décembre 2022',
    language: 'Typescript',
    description:
      "Réalisation d'une CV numérique dans le cadre du projet de portfolio de la formation. Utilisation du framework Qwik avec Typescript et TailwindCSS",
    pic: '',
    link: 'https://github.com/leopoldvlm/cv',
    svg: RepoHost.github,
    id: "p2",
    previous: "p1",
    next: "p3",
  },
  {
    name: 'Application de note',
    date: 'Décembre 2022',
    language: 'Typescript',
    description:
      "J'ai eu envie de faire une application web de prise de note, car je ne trouvais pas d'application qui me convenait, et on est jamais mieux servit que par soit même! Avec Qwik, Tailwind, une base de données Postgres et Prisma comme ORM (WIP)",
    pic: 'projects/notes.png',
    link: 'https://github.com/leopoldvlm/website',
    svg: RepoHost.github,
    id: "p3",
    previous: "p2",
    next: "p0",
  },
];
