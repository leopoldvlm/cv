import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="text-black h-screen snap-start pt-32" id="home">
      <div class={"bg-[url('/home-blur.svg')] aspect-[960/540] bg-center bg-cover bg-no-repeat w-[90vw] h-[80vh] mx-auto rounded-xl"}>
        <p class={"animate-fade-in-down text-5xl p-20"}>
          Bonjour!<br/> Je m'appelle Léopold et je suis en 2<sup>ème</sup> année de BUT informatique
        </p>
      </div>
    </section>
  );
});
