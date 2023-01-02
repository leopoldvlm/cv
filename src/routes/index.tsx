import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import Home from '~/components/home/home';
import About from '~/components/about/about';
import Formations from '~/components/formations/formations';

export default component$(() => {
  return (
    <>
      <Home />
      <About />
      <Formations />
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
