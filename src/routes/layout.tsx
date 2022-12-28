import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import { Footer } from '~/components/footer/footer';

export default component$(() => {
  return (
    <>
      <main class="snap-mandatory snap-y h-screen overflow-y-scroll overflow-x-hidden scroll-smooth duration-300 font-noto bg-neutral-900 scrollbar-hide">
        <Header />
        <Slot />
        <Footer />
      </main>
    </>
  );
});
