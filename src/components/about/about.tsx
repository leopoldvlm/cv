import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section
      class="from-blue-200 via-cyan-100 to-cyan-200 bg-gradient-to-r bg-no-repeat bg-fixed text-white h-screen snap-start"
      id="about">
      <h1 class="text-white font-noto">Hi!</h1>
    </section>
  );
});
