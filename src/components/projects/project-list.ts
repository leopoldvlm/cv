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
  {
    name: 'API REST de Pizza',
    date: 'Février 2023',
    language: 'Java (EE)',
    description:
      "Réalisation d'une API REST pour une pizzaria. Utilisation d'un schéma de base de données que nous avons fait nous même, puis utilisation de l'API servlet et JDBC de Java pour l'interroger. Implémentation des méthodes HTTP les plus utilisées GET, POST, PATCH, PUT, DELETE. L'API est complètement documentée sur Postman.",
    pic: 'projects/pizza.png',
    link: 'https://gitlab.univ-lille.fr/alexandre.herssens.etu/pizzaland',
    svg: RepoHost.gitlab
  },
  {
    name: 'Jeu agar.io',
    date: 'Avril 2023',
    language: 'Typescript',
    description:
      "En s'inspirant du jeu agar.io, nous avons fait notre propre version nommée 'agar-agar.io'. Nous avons utilisé Typescript et la librairie socket.io pour gérer les connexions. L'application est également testée grâce à Jest. L'affichage est géré par un canvas qui est mis à jour en temps réel avec la position des autres éléments de la carte.",
    pic: 'projects/agar.png',
    link: 'https://gitlab.univ-lille.fr/alexandre.herssens.etu/agar-agar.io',
    svg: RepoHost.gitlab
  }

];
