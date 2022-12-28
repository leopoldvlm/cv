import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import Home from '~/components/home/home';
import About from '~/components/about/about';

export default component$(() => {
  return (
    <>
      <Home />
      <About />
    </>
  );
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
