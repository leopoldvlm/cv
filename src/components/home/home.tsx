import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="text-black h-screen snap-start pt-32" id="home">
      <div
        class={
          "bg-[url('/home-blur.svg')] aspect-[960/540] bg-center bg-cover bg-no-repeat w-[90vw] h-[80vh] mx-auto rounded-xl"
        }>
        <p class={'text-5xl p-20'}>
          Bonjour!
          <br /> Je m'appelle Léopold et je suis en 2<sup>ème</sup> année de BUT
          informatique
        </p>
        <a href="#about" class="w-fit h-fit mx-auto">
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
