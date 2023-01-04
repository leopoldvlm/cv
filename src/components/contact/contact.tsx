import { component$ } from '@builder.io/qwik';

export interface ContactMedium {
  name: string;
  img: string;
  link: string;
}

export default component$(() => {
  const medium: Array<ContactMedium> = [
    {
      name: 'Email',
      img: 'contact/email.svg',
      link: 'mailto:leopold.varlamoff.etu@univ-lille.fr',
    },
    {
      name: 'LinkedIn',
      img: 'contact/linkedin.svg',
      link: 'https://www.linkedin.com/in/leopold-varlamoff/',
    },
    {
      name: 'Discord',
      img: 'contact/discord.svg',
      link: 'https://discord.com/users/322008741149016065',
    },
    {
      name: 'Github',
      img: 'projects/github-white.svg',
      link: 'https://github.com/leopoldvlm/',
    },
    {
      name: 'Gitlab',
      img: 'projects/gitlab-white.svg',
      link: 'https://gitlab.univ-lille.fr/leopold.varlamoff.etu',
    },
  ];

  return (
    <section class="text-white h-screen pt-32" id="contact">
      <div class={'h-[80vh] mx-auto overflow-hidden flex flex-col'}>
        <h2 class="text-5xl text-center py-8">Contact</h2>
        <p class="text-center text-sm md:text-base px-10">
          N'hésitez pas à me contacter pour plus de renseignements!
          <br /> Et si vous rencontrez un problème ou avez une idée sur un de
          mes projets, une issue ou une PR est toujours bienvenue!😄
        </p>
        <div class="mx-10 md:mx-20 h-fit grid gap-3 md:gap-8 grid-cols-3 xl:grid-cols-5 my-auto">
          {medium.map(data => (
            <Contact contact={data} key={data.name} />
          ))}
        </div>
      </div>
    </section>
  );
});

export const Contact = component$((props: { contact: ContactMedium }) => {
  return (
    <a
      target="_blank"
      referrerPolicy="same-origin"
      href={props.contact.link}
      class="text-white bg-neutral-800 border border-black rounded-lg place-items-center py-5 min-w-min">
      <h2 class="text-center">{`${props.contact.name}`}</h2>
      <img
        src={props.contact.img}
        alt={`pic for ${props.contact.name} contact`}
        class="h-5 w-5 md:h-10 md:w-10 lg:h-20 lg:w-20 m-auto mt-3"
      />
    </a>
  );
});
