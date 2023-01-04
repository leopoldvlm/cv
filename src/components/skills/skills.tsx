import { component$ } from '@builder.io/qwik';
import { devSkills, sysSkills, otherSkills, Skill } from './skills-lists';

export default component$(() => {
  return (
    <section class="text-black h-screen  pt-32" id="competences">
      <h2 class="inline-block h-[10vh] w-full text-center text-5xl text-white">
        Compétences
      </h2>
      <div class="flex flex-col md:flex-row px-10 justify-around h-5/6">
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
      <div class="bg-neutral-800 border border-black hover:bg-gradient-to-r hover:from-[#ffe4e6] hover:to-[#d3f8ef] md:w-1/5 md:h-[70vh] max-h-full rounded-xl my-2 md:my-0 md:mx-2 hover:flex-grow hover:transition-all group">
        <div class="h-full w-full py-4 px-2 group-hover:p-8">
          <div class="group-hover:hidden text-white text-md text-center">{props.category}</div>
          <div class="hidden group-hover:grid grid-gap-2 md:grid-gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 transition-all duration-300 ease-in place-items-center h-full place-content-center">
            {props.skills.map(skill => (
              <div key={skill.name} class="w-20 h-20 md:w-40 md:h-40 xl:w-52 xl:h-52">
                <h2 class="text-md md:text-xl text-center">{skill.name}</h2>
                <img src={skill.img} alt={`skill ${skill.name} image`} class="w-10 h-10 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);
