import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="text-black min-h-screen h-fit pt-32" id="about">
      <div class="flex flex-row flex-wrap-reverse w-fit justify-center">
        <div
          class={
            'w-2/3 h-fit mx-auto md:mr-5 md:ml-0 rounded-xl text-white'
          }>
          <h2 class="text-5xl text-center mt-8">A propos</h2>
          <p
            class={
              'text-xl lg:text-2xl tracking-wide leading-tight 2xl:leading-relaxed text-center my-8 px-5 md:px-20'
            }>
            Je m'appelle Léopold Varlamoff, et je suis actuellement en deuxième
            année de BUT informatique à l'IUT de Lille, site de Villeneuve
            d'Ascq.
            <br />
            J'ai décidé de m'orienter vers le parcours "développement et
            conception d'application" car le développement est ce qui
            m'intéresse le plus dans l'informatique.
            <br />
            Je suis à la recherche d'un stage de développement, idéalement en
            web backend ou frontend, qui est un domaine qui m'intéresse
            particulièrement.
            <br />
            L'expérience que j'ai acquise lors des multiples projets en équipe
            réalisés dans le cadre de mes études me serviront grandement lors
            d'un stage. J'ai également eu l'occasion d'élargir mes compétences
            en réalisant de petits projets personnels ou en autodidacte,
            notamment car j'aime beaucoup faire de la veille et me renseigner
            sur les nouvelles technologies qui sortent chaques jours.
          </p>
        </div>
        <div class="grid place-items-center">
          <div class="w-52 lg:w-80 h-fit p-3 cool-gradient rounded-full my-auto">
            <img
              id="magueule"
              class="aspect-square rounded-full"
              src="others/magueule.jpg"
              alt="moi mdr :)"
            />
          </div>
        </div>
      </div>
    </section>
  );
});
