import { component$ } from '@builder.io/qwik';
import { Project } from './projects';

export default component$((props: { project: Project }) => {
  return (
    <div class="border shrink-0 my-auto border-white mx-96 w-1/2 h-[87.5%] snap-center p-8 flex flex-col">
      <h2 class="text-xl text-center mb-3">{props.project.name}</h2>
      <div class="flex flex-row justify-evenly content-evenly flex-nowrap text-center mb-3">
        <p>{props.project.date}</p>
        <p>{props.project.language}</p>
        <a href={props.project.link}>
          <img
            src={props.project.svg}
            alt={`project ${props.project.name} svg`}
            class="w-10 h-10 text-white inline-block"
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
  );
});
