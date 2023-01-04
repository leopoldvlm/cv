import { component$, useStore, $ } from '@builder.io/qwik';
import Link from '../link/link';

export default component$(() => {
  const store = useStore({
    scrolled: false,
  });

  const links = [
    { href: '#home', text: 'Accueil' },
    { href: '#about', text: 'A propos' },
    { href: '#formations', text: 'Formations' },
    { href: '#projects', text: 'Projets' },
    { href: '#competences', text: 'Compétences' },
    { href: '#contact', text: 'Contact' },
  ];

  const handleScroll$ = $(() => {
    if (window.scrollY > 0) {
      store.scrolled = true;
    } else {
      store.scrolled = false;
    }
  });

  return (
    <header 
      class={`h-10 md:h-16 w-full hidden sm:grid place-items-center ${store.scrolled ? ('text-white bg-transparent backdrop-blur bg-opacity-0') : ('text-white bg-neutral-900')} border-b border-b-slate-400  fixed`}
      document:onScroll$={handleScroll$}
      onClick$={handleScroll$}
      >

      <div class="lg:p-3 flex flex-row w-full">
        <nav class="flex flex-row justify-evenly w-full md:w-[70%] lg:w-[60%] ml-auto">
          {links.map(data => (
            <Link
              key={data.href}
              href={data.href}
              text={data.text}
              newTab={false}
            />
          ))}
        </nav>
        <div class="aspect-square w-5"></div>
      </div>
    </header>
  );
});
