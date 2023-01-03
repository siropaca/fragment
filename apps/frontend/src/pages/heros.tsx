import { NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';

const HEROS = [
  'Royal_Heath',
  'Egg_Sour',
  'Snowy_Mint',
  'Hopbush',
  'Flax',
  'Wisteria',
  'Tidal',
  'Violet_Blue',
  'Light_Sky_Blue1',
  'Mindaro',
  'Fuchsia',
  'Tumbleweed',
  'Pale_Violet_Red',
  'Prim2',
  'Perfume',
  'Medium_Purple1',
  'Dark_Salmon',
  'Buttercup',
  'Can_Can',
  'Melanie1',
  'Columbia_Blue2',
  'Shalimar',
  'California',
  'Sky_Blue1',
  'Witch_Haze1',
  'Honeysuckle',
  'Melanie2',
  'Deco',
  'Pale_Cornflower_Blue',
  'Wild_Rice',
  'Portage',
  'Banana_Mania',
  'Beauty_Bush',
  'Mauve',
  'Ronchi',
  'Pale_Chestnut',
  'Light_Sky_Blue2',
  'Sky_Blue2',
  'Prelude',
  'Cherokee',
  'Tonys_Pink',
  'Charm',
  'Harvest_Gold',
  'Green_Yellow',
  'Fog',
  'Watusi',
  'Whisper',
  'Witch_Haze2',
  'Soft_Peach1',
  'Columbia_Blue1',
  'Spindle',
  'Blue_Chalk',
  'Canary',
  'Pink_Flare',
  'My_Pink',
  'Cream_Whisper',
  'Light_Sky_Blue3',
  'Polution',
  'Light_Blue',
  'Zircon',
  'Lavender',
  'Amour',
  'Soft_Peach2',
  'Magic_Mint',
  'Prim1',
  'Yellow_Sand',
  'Rain',
  'Corvette',
  'Shocking',
  'Honeydew',
  'Quartz',
  'Sazerac',
  'Negroni',
  'Medium_Purple2',
  'Pale_Turquoise',
  'Rice_Flower',
  'Green_Bonbon',
  'Night_Sky',
  'Heliotrope',
  'Dusty_Blue',
  'Kobi',
  'Ice_Cream',
  'Frosted_Mint',
  'Lolypop',
  'Lily_White',
  'Cherub',
  'Spacy',
  'Sunny',
  'Canvas',
  'Grass_Mint',
  'Berry',
  'Sunset',
  'Medium_Goldenrod',
  'Almond',
  'Milkyway',
  'Lake',
  'Flare',
  'Torea_Bay',
  'Roman',
  'Chetwode_Blue',
];

const HerosPage: NextPage = () => {
  return (
    <ContentsLayout
      pageType='article'
      pageUrl={''}
    >
      <div className='grid gap-5 md:grid-cols-3 lg:grid-cols-4'>
        {HEROS.map((hero, index) => (
          <div key={hero}>
            <img
              src={`/heros/${hero}.png`}
              alt={hero}
              className='w-full'
            />
            <div className='mt-2 text-center'>
              {index + 1}. {hero}
            </div>
          </div>
        ))}
      </div>
    </ContentsLayout>
  );
};

export default HerosPage;
