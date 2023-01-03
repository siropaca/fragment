import { NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';

const HEROS = [
  '01_Royal_Heath.png',
  '02_Egg_Sour.png',
  '03_Snowy_Mint.png',
  '04_Hopbush.png',
  '05_Flax.png',
  '06_Wisteria.png',
  '07_Tidal.png',
  '08_Violet_Blue.png',
  '09_Light_Sky_Blue.png',
  '10_Mindaro.png',
  '11_Fuchsia.png',
  '12_Tumbleweed.png',
  '13_Pale_Violet_Red.png',
  '14_Prim.png',
  '15_Perfume.png',
  '16_Medium_Purple.png',
  '17_Dark_Salmon.png',
  '18_Buttercup.png',
  '19_Can_Can.png',
  '20_Melanie.png',
  '21_Columbia_Blue.png',
  '22_Shalimar.png',
  '23_California.png',
  '24_Sky_Blue.png',
  '25_Witch_Haze.png',
  '26_Honeysuckle.png',
  '27_Melanie.png',
  '28_Deco.png',
  '29_Pale_Cornflower_Blue.png',
  '30_Wild_Rice.png',
  '31_Portage.png',
  '32_Banana_Mania.png',
  '33_Beauty_Bush.png',
  '34_Mauve.png',
  '35_Ronchi.png',
  '36_Pale_Chestnut.png',
  '37_Light_Sky_Blue.png',
  '38_Sky_Blue.png',
  '39_Prelude.png',
  '40_Cherokee.png',
  '41_Tonys_Pink.png',
  '42_Charm.png',
  '43_Harvest_Gold.png',
  '44_Green_Yellow.png',
  '45_Fog.png',
  '46_Watusi.png',
  '47_Whisper.png',
  '48_Witch_Haze.png',
  '49_Soft_Peach.png',
  '50_Columbia_Blue.png',
  '51_Spindle.png',
  '52_Blue_Chalk.png',
  '53_Canary.png',
  '54_Pink_Flare.png',
  '55_My_Pink.png',
  '56_Cream_Whisper.png',
  '57_Light_Sky_Blue.png',
  '58_Polution.png',
  '59_Light_Blue.png',
  '60_Zircon.png',
  '61_Lavender.png',
  '62_Amour.png',
  '63_Soft_Peach.png',
  '64_Magic_Mint.png',
  '65_Prim.png',
  '66_Yellow_Sand.png',
  '67_Rain.png',
  '68_Corvette.png',
  '69_Shocking.png',
  '70_Honeydew.png',
  '71_Quartz.png',
  '72_Sazerac.png',
  '73_Negroni.png',
  '74_Medium Purple.png',
  '75_Pale_Turquoise.png',
  '76_Rice_Flower.png',
  '77_Green_Bonbon.png',
  '78_Night_Sky.png',
  '79_Heliotrope.png',
  '80_Dusty_Blue.png',
  '81_Kobi.png',
  '82_Ice_Cream.png',
  '83_Frosted_Mint.png',
  '84_Lolypop.png',
  '85_Lily_White.png',
  '86_Cherub.png',
  '87_Spacy.png',
  '88_Sunny.png',
  '89_Canvas.png',
  '90_Grass_Mint.png',
  '91_Berry.png',
  '92_Sunset.png',
  '93_Medium_Goldenrod.png',
  '94_Almond.png',
  '95_Milkyway.png',
  '96_Lake.png',
  '97_Flare.png',
  '98_Torea_Bay.png',
  '99_Roman.png',
  '100_Chetwode_Blue.png',
];

const HerosPage: NextPage = () => {
  return (
    <ContentsLayout
      pageType='article'
      pageUrl={''}
    >
      <div className='grid gap-5 md:grid-cols-3 lg:grid-cols-4'>
        {HEROS.map((hero) => (
          <div key={hero}>
            <img
              src={`/heros/${hero}`}
              alt={hero}
              className='w-full'
            />
            <div className='mt-2 text-center'>{hero.replace('.png', '')}</div>
          </div>
        ))}
      </div>
    </ContentsLayout>
  );
};

export default HerosPage;
