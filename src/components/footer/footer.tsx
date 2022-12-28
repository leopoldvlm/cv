import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="snap-start bg-neutral-900 h-[50vh] w-full">
      <div class="bg-[url('/footer-waves.svg')] w-full h-full aspect-[960/300] bg-center bg-cover bg-no-repeat">
          <h1 class="inline-block w-full text-center mt-20 text-4xl text-white">Made by me</h1>
      </div>
    </footer>
  );
});
