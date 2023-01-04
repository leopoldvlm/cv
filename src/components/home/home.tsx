import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="text-white h-fit min-h-screen flex" id="home">
      <div class={'w-full flex flex-col'}>
        <p class={'text-2xl md:leading-relaxed md:text-5xl p-14 md:p-20 mt-14'}>
          Bonjour!
          <br /> Je m'appelle Léopold et je suis en 2ème année de BUT
          informatique.
          <br />
          Bienvenue sur mon{' '}
          <span class="cool-text font-semibold">CV numérique!</span>
        </p>
        <a href="#about" class="inline-block w-fit h-fit m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12 inline-block animate-bounce">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
});
