import { component$ } from '@builder.io/qwik';
import { Formation } from './formations';

export default component$((props: { info: Formation }) => {
  return (
    <div class="w-2/6">
      <svg
        viewBox="0 0 10 15"
        xmlns="http://www.w3.org/2000/svg"
        class=" w-12 h-16 -translate-y-11">
        <circle cx="5" cy="5" r="5" fill="white" />
        <line x1="5" y1="5" x2="5" y2="100%" class="stroke-white stroke-[3]" />
      </svg>
      <div class="flex flex-col h-full -mt-9">
        <h2 class="text-xl sm:text-2xl">{props.info.diplome}</h2>
        <p class=" text-sm sm:text-base">
          {props.info.date}
          <br />
          {props.info.location}
        </p>
        <img
          src={props.info.img}
          alt={`pic ${props.info.location}`}
          class=" w-fit mt-6 max-h-72"
        />
      </div>
    </div>
  );
});
