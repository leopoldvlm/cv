import { component$, useStore, $ } from '@builder.io/qwik';
import ProjectCard from './project-card';
import { projects } from './project-list';

export interface ProjectStore {
  currentSlide: number;
}

export default component$(() => {
  const store = useStore<ProjectStore>({
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
        <div class="w-[95%] sm:w-2/3 xl:w-1/2 2xl:w-2/5 aspect-[9/20] sm:aspect-[9/16] md:aspect-square max-h-screen flex overflow-hidden relative justify-items-center mx-auto bg-neutral-800 rounded-xl border border-black">
          <div
            document:onKeyDown$={event => {
              if (
                event.key === 'ArrowLeft' &&
                window.scrollY > 2000 &&
                window.scrollY < 4000
              ) {
                previousSlide$();
              }
            }}
            onClick$={previousSlide$}
            class="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer">
            &larr;
          </div>
          {projects.map((project, index) => {
            return (
              <ProjectCard project={project} index={index} store={store} key={project.name} />
            );
          })}
          <div
            document:onKeyDown$={event => {
              if (
                event.key === 'ArrowRight' &&
                window.scrollY > 2000 &&
                window.scrollY < 4000
              ) {
                nextSlide$();
              }
            }}
            onClick$={nextSlide$}
            class="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer">
            &rarr;
          </div>
          {/* Dots at the bottom */}
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
