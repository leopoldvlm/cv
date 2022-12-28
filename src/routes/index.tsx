import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <div></div>;
});

export const head: DocumentHead = {
  title: 'Mon CV',
  meta: [
    {
      name: 'description',
      content: 'Mon CV',
    },
  ]
};
