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
      name: 'Linkedin',
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
      img: 'contact/github-black.svg',
      link: 'https://github.com/leopoldvlm/',
    },
    {
      name: 'Gitlab',
      img: 'contact/gitlab-logo-600-black.svg',
      link: 'https://gitlab.univ-lille.fr/leopold.varlamoff.etu',
    },
  ];

  return (
    <section class="text-white h-screen snap-start pt-32" id="contact">
      <div class={'h-[80vh] mx-auto overflow-hidden flex flex-col'}>
        <h2 class="text-5xl text-center py-8">Contact</h2>
        <p class="text-center px-10">
          N'hésitez pas à me contacter pour plus de renseignements!
          <br /> Et si vous rencontrez un problème ou avez une idée sur un de
          mes projets, une issue ou une PR est toujours bienvenue!😄
        </p>
        <div class="flex flex-row flex-wrap justify-evenly mt-20 h-full">
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
    <div class=" text-black bg-gradient-to-r from-sky-400 to-cyan-300 aspect-square w-[12.25%] h-1/2 p-8 rounded-lg grid place-items-center">
      <a href={props.contact.link} class=" w-full h-fit" target="_blank" referrerPolicy="same-origin">
        <h2 class="text-center">{`${props.contact.name} :`}</h2>
        <img
          src={props.contact.img}
          alt={`pic for ${props.contact.name} contact`}
          class="h-20 w-20 m-auto mt-3"
        />
      </a>
    </div>
  );
});
