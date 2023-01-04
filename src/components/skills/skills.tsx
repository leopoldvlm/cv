import { component$ } from '@builder.io/qwik';
import { devSkills, sysSkills, otherSkills, Skill } from './skills-lists';

export default component$(() => {
  return (
    <section
      class="text-black h-fit min-h-screen flex flex-col pt-32"
      id="competences">
      <h2 class="inline-block h-[10vh] w-full text-center text-5xl text-white mb-10">
        Compétences
      </h2>
      <div class="flex flex-col md:flex-row px-10 justify-around flex-1">
        <SkillCard category="Développement" skills={devSkills} />
        <SkillCard category="Réseaux & systèmes" skills={sysSkills} />
        <SkillCard category="Autres" skills={otherSkills} />
      </div>
    </section>
  );
});

export const SkillCard = component$(
  (props: { category: string; skills: Array<Skill> }) => {
    return (
      <div class="bg-neutral-800 border border-black hover:bg-gradient-to-r hover:from-[#ffe4e6] hover:to-[#d3f8ef] md:w-1/5 md:h-[70vh] rounded-xl my-2 md:my-0 md:mx-2 grid place-items-center hover:flex-grow hover:transition-all group">
        <div class="group-hover:hidden text-white text-md text-center p-8">
          {props.category}
        </div>
        <div class="hidden group-hover:grid grid-gap-3 grid-cols-3 sm:grid-cols-2 md:grid-cols-3  xl:grid-gap-5 transition-all duration-300 ease-in place-items-center h-full w-full place-content-center">
          {props.skills.map(skill => (
            <div
              key={skill.name}
              class="w-5 h-5 m-2 xs:m-0 xs:w-20 xs:h-20 xl:w-52 xl:h-52 grid place-items-center">
              <div>
                <h2 class="hidden xs:block text-md md:text-xl text-center">
                  {skill.name}
                </h2>
                <img
                  src={skill.img}
                  alt={`skill ${skill.name} image`}
                  class="w-5 h-5 xs:w-10 xs:h-10 mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
