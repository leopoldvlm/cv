import { component$ } from '@builder.io/qwik';
import ProjectDesc from './project-desc';

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
  github = 'github-mark-white.svg',
  gitlab = 'gitlab-logo-600.svg',
}

export default component$(() => {
  const projects: Array<Project> = [
    {
      name: 'Application de tutorat',
      date: 'Juin 2022',
      language: 'Java',
      description:
        'Une application qui permet à un professeur de créer des groupes de tutorat entre élèves',
      pic: 'projects/tutorat.png',
      link: 'https://gitlab.univ-lille.fr/sae2.01-2.02/2022/A-G5',
      svg: RepoHost.gitlab,
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
    },
    {
      name: 'Application de note',
      date: 'Décembre 2022',
      language: 'Typescript',
      description:
        "J'ai eu envie de faire une application web de prise de note, car je ne trouvais pas d'application qui me convenait, et on est jamais mieux servit que par soit même! Avec Qwik, Tailwind, une base de données Postgres et Prisma comme ORM",
      pic: '',
      link: 'https://github.com/leopoldvlm/website',
      svg: RepoHost.github,
    },
  ];

  return (
    <section class="text-white h-screen snap-start pt-32" id="projects">
      <div
        class={
          'h-[80vh] mx-auto overflow-hidden flex flex-col'
        }>
        <h2 class="text-5xl text-center py-8">Projets</h2>
        <div class="w-full h-full overflow-x-scroll overflow-y-clip flex flex-row flex-nowrap snap-x snap-mandatory">
          {projects.map(data => (
            <ProjectDesc project={data} key={data.name}/>
          ))}
        </div>
      </div>
    </section>
  );
});
