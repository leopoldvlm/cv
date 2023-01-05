import { component$, useStore, $ } from '@builder.io/qwik';
import { projects } from './project-list';

export default component$(() => {
  const store = useStore({
    currentSlide: 0,
  });

  const nextSlide$ = $(() => {
    const slide =
      store.currentSlide === projects.length - 1 ? 0 : store.currentSlide + 1;
    store.currentSlide = slide;
  });

  const previousSlide$ = $(() => {
    const slide =
      store.currentSlide === 0 ? projects.length - 1 : store.currentSlide - 1;
    store.currentSlide = slide;
  });

  return (
    <section class="text-white min-h-screen h-fit pt-16" id="projects">
      <div class={'mx-auto overflow-hidden flex flex-col'}>
        <h2 class="text-5xl text-center py-8">Projets</h2>
        {/* <div class="w-full h-full overflow-x-scroll overflow-y-clip flex flex-row flex-nowrap snap-x snap-mandatory scroll-smooth scrollbar-hide">
          {projects.map(data => (
            <ProjectDesc project={data} key={data.name} />
          ))}
        </div> previous thing and it was rubbish */}
        <div class="w-[95%] sm:w-2/3 xl:w-1/2 2xl:w-2/5 aspect-[9/20] sm:aspect-[9/16] md:aspect-square flex overflow-hidden relative justify-items-center mx-auto bg-neutral-800 rounded-xl border border-black">
          <div
            onClick$={previousSlide$}
            class="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer">
            &larr;
          </div>
          {projects.map((project, index) => {
            return (
              <div
                key={project.name}
                class={
                  index === store.currentSlide
                    ? 'flex flex-col w-full h-full object-cover p-4'
                    : 'hidden'
                }>
                <div class="lg:mr-5 max-w-1xl xl:text-xl">
                  <h2 class="text-3xl text-center underline">{project.name}</h2>
                  <div class="w-full flex flew-row justify-between my-4">
                    <p class="w-1/3 grid place-items-center text-center">
                      {project.date}
                    </p>
                    <p class="w-1/3 grid place-items-center text-center">
                      {project.language}
                    </p>
                    <a
                      href={project.link}
                      class="regular-link w-1/3 grid place-items-center">
                      Repo:{' '}
                      <img
                        src={project.svg}
                        alt={`project ${project.name} svg`}
                        class="w-5 h-5 text-white inline-block stroke-white"
                      />
                    </a>
                  </div>
                  <p class="mb-4 xl:px-4 text-justify text-xl lg:text-base">{project.description}</p>
                </div>
                <div class="flex md:w-2/3 mx-auto max-w-lg h-full mt-0">
                  <img
                    src={project.pic}
                    alt={`project ${project.name} pic`}
                    class="w-full mx-auto my-auto max-h-full"
                  />
                </div>
              </div>
            );
          })}
          <div
            onClick$={nextSlide$}
            class="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer">
              &rarr;
          </div>
          <div class="absolute w-full flex justify-center bottom-0">
            {projects.map((project, index) => {
              return (
                <div
                  class={
                    index === store.currentSlide
                      ? 'h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer'
                      : 'h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer'
                  }
                  key={project.name}
                  onClick$={() => (store.currentSlide = index)}></div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});
