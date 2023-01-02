import { component$ } from '@builder.io/qwik';
import { devSkills, sysSkills, otherSkills, Skill } from './skills-lists';

export default component$(() => {
  return (
    <section class="text-black h-screen snap-start pt-32" id="competences">
      <h2 class="inline-block h-[10vh] w-full text-center text-5xl text-white">
        Compétences
      </h2>
      <div class="flex flex-row px-10 justify-around">
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
      <div class="bg-[url('/about-blur.svg')] aspect-[960/540] bg-center bg-cover bg-no-repeat w-1/5 h-[70vh] rounded-xl mx-2 hover:flex-grow transition-all duration-300 group">
        <div class="h-full w-full p-8">
          <div class="group-hover:hidden text-xl">{props.category}</div>
          <div class="hidden group-hover:flex flex-wrap transition-all duration-300 ease-in justify-around h-fit my-auto">
            {props.skills.map(skill => (
              <div key={skill.name} class="w-40 h-40 xl:w-52 xl:h-52">
                <h2 class="text-xl text-center">{skill.name}</h2>
                <img src={skill.img} alt={`skill ${skill.name} image`} class="w-10 h-10 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);
