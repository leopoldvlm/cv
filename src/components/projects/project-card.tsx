import { component$ } from "@builder.io/qwik";
import { Project } from "./project-list";
import { ProjectStore } from "./projects";

interface ProjectCardProps {
    project: Project;
    index: number;
    store: ProjectStore
}

export default component$((props: ProjectCardProps) => {
    return (
        <div
          key={props.project.name}
          class={
            props.index === props.store.currentSlide
              ? 'flex flex-col w-full h-full object-cover p-4'
              : 'hidden'
          }>
          <div class="lg:mr-5 max-w-1xl xl:text-xl">
            <h2 class="text-3xl text-center underline">{props.project.name}</h2>
            <div class="w-full flex flew-row justify-between my-4">
              <p class="w-1/3 grid place-items-center text-center">
                {props.project.date}
              </p>
              <p class="w-1/3 grid place-items-center text-center">
                {props.project.language}
              </p>
              <a
                href={props.project.link}
                class="regular-link w-1/3 grid place-items-center">
                Repo:{' '}
                <img
                  src={props.project.svg}
                  alt={`props.project ${props.project.name} svg`}
                  class="w-5 h-5 text-white inline-block stroke-white"
                />
              </a>
            </div>
            <p class="mb-4 xl:px-4 text-justify lg:text-xl">
              {props.project.description}
            </p>
          </div>
          <div class="flex md:w-2/3 mx-auto max-w-lg h-full mt-0">
            <img
              src={props.project.pic}
              alt={`project ${props.project.name} pic`}
              class="w-full mx-auto my-auto max-h-full"
            />
          </div>
        </div>
      );
})