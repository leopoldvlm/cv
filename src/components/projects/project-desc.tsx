import { component$ } from '@builder.io/qwik';
import { Project } from './project-list';

export default component$((props: { project: Project }) => {
  return (
    <div
      id={props.project.id}
      class="shrink-0 my-auto bg-gradient-to-r from-blue-200 to-cyan-200 rounded-xl text-black mx-96 w-1/2 h-[87.5%] snap-center p-8 flex flex-row">
      <a href={`#${props.project.previous}`} class=" items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </a>
      <div class="flex flex-col flex-1">
        <h2 class="text-xl text-center mb-3 underline">{props.project.name}</h2>
        <div class="flex flex-row justify-between content-between flex-nowrap text-center w-3/4 mx-auto mb-3">
          <p>{props.project.date}</p>
          <p>{props.project.language}</p>
          <a href={props.project.link}>
            Repo:{' '}
            <img
              src={props.project.svg}
              alt={`project ${props.project.name} svg`}
              class="w-5 h-5 text-white inline-block stroke-white"
            />
          </a>
        </div>
        <p>{props.project.description}</p>
        <div class="h-[70%] w-full">
          <img
            src={props.project.pic}
            alt={`project ${props.project.name} pic`}
            class="h-full mx-auto"
          />
        </div>
      </div>
      <a href={`#${props.project.next}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </a>
    </div>
  );
});
