import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="text-white h-screen snap-start pt-32" id="about">
      <div
        class={
          'h-[80vh] mx-auto border border-white overflow-hidden flex flex-col'
        }>
        <h2 class="text-5xl text-center py-8">Formations</h2>
        <svg height="30" width="100%" class="mt-12">
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            class="stroke-white stroke-[30]"
          />
        </svg>
        <div class="flex flex-row"></div>
      </div>
    </section>
  );
});
