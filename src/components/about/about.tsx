import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="text-black h-screen pt-32" id="about">
      <div
        class={
          " bg-gradient-to-r from-[#ffe4e6] to-[#d3f8ef] via-[#ffe4e6] w-[90vw] h-[80vh] mx-auto rounded-xl overflow-hidden"
        }>
        <h2 class="text-5xl text-center py-8">A propos</h2>
        <p
          class={
            'text-2xl md:text-3xl px-20 tracking-wide leading-tight 2xl:leading-loose'
          }>
          Je m'appelle Léopold Varlamoff, et je suis actuellement en deuxième
          année de BUT informatique à l'IUT de Lille, site de Villeneuve d'Ascq.
          <br />
          J'ai décidé de m'orienter vers le parcours "développement et
          conception d'application" car le développement est ce qui m'intéresse
          le plus dans l'informatique.
          <br />
          Je suis à la recherche d'un stage de développement, idéalement en web
          backend ou frontend, qui est un domaine qui m'intéresse
          particulièrement.
          <br />
          L'expérience que j'ai acquise lors des multiples projets en équipe
          réalisés dans le cadre de mes études me serviront grandement lors d'un
          stage. J'ai également eu l'occasion d'élargir mes compétences en
          réalisant de petits projets personnels ou en autodidacte, notamment
          car j'aime beaucoup faire de la veille et me renseigner sur les
          nouvelles technologies qui sortent chaques jours.
        </p>
      </div>
    </section>
  );
});
