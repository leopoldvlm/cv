import { component$ } from '@builder.io/qwik';
import FormationDesc from './formation-desc';

export interface Formation {
  diplome: string;
  date: string;
  img: string;
  location: string;
}

export default component$(() => {
  const formations: Array<Formation> = [
    {
      diplome: 'Baccalauréat général scientifique',
      date: '2017-2020',
      img: 'formations/lycee.jpg',
      location: 'Lycée Marguerite de Flandre'
    },
    {
      diplome: 'BUT Informatique',
      date: 'Depuis 2021',
      img: 'formations/iut.jpg',
      location: 'IUT de Lille, site de Villeneuve d\'Ascq'
    }
  ];

  return (
    <section class="text-white h-screen snap-start pt-32" id="formations">
      <div
        class={
          'h-[80vh] mx-auto overflow-hidden flex flex-col'
        }>
        <h2 class="text-5xl text-center py-8">Formations</h2>
        <svg height="30" width="100%" class="mt-12">
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            class="stroke-white stroke-[30]"
          />
        </svg>
        <div class="flex flex-row justify-evenly h-full">
          {formations.map(data => (
            <FormationDesc info={data} key={data.diplome} />
          ))}
        </div>
      </div>
    </section>
  );
});
