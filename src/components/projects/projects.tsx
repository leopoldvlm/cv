import { component$ } from '@builder.io/qwik';
import ProjectDesc from './project-desc';
import { projects } from './project-list';

export default component$(() => {
  return (
    <section class="text-white h-screen  pt-32" id="projects">
      <div class={'h-[80vh] mx-auto overflow-hidden flex flex-col'}>
        <h2 class="text-5xl text-center py-8">Projets</h2>
        <div class="w-full h-full overflow-x-scroll overflow-y-clip flex flex-row flex-nowrap snap-x snap-mandatory scroll-smooth scrollbar-hide">
          {projects.map(data => (
            <ProjectDesc project={data} key={data.name} />
          ))}
        </div>
      </div>
    </section>
  );
});
