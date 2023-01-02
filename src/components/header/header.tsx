import { component$ } from '@builder.io/qwik';
import Link from '../link/link';

export default component$(() => {
  const links = [
    { href: '#home', text: 'Accueil' },
    { href: '#about', text: 'A propos' },
    { href: '#formations', text: 'Formations'},
    { href: '#projects', text: 'Projets' },
    { href: '#competences', text: 'Compétences' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <header class="h-16 w-full grid place-items-center text-white border-b border-b-slate-400 bg-transparent backdrop-blur fixed">
      <div class="p-3 flex flex-row w-full">
        <nav class="flex flex-row justify-evenly w-1/2 ml-auto">
          {links.map(data => (
            <Link key={data.href} href={data.href} text={data.text} newTab={false} />
          ))}
        </nav>
        <div class="aspect-square w-5"></div>
      </div>
    </header>
  );
});
