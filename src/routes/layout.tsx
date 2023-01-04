import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import { Footer } from '~/components/footer/footer';

export default component$(() => {
  return (
    <>
      <main
        class={
          'overflow-x-hidden font-noto bg-neutral-900 scrollbar-hide'
        }>
        <Header />
        <Slot />
        <Footer />
      </main>
    </>
  );
});
