import { component$ } from '@builder.io/qwik';

interface LinkProps {
  href: string;
  text: string;
  newTab: boolean
}

export default component$((props: LinkProps) => {
  return (
    <a href={props.href} target={props.newTab ? '_blank' : '_self'} referrerPolicy="same-origin" class="bg-gradient-to-r from-blue-200 via-cyan-100 to-cyan-200 bg-no-repeat bg-bottom bg-[length:100%_0px] hover:bg-[length:100%_100%] hover:text-black transition-[background-size]">
      {props.text}
    </a>
  );
});
