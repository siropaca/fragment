import { NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { HeroImage } from '@/gql/graphql';
import { PagePath } from '@/lib/router';

const HeroesPage: NextPage = () => {
  return (
    <ContentsLayout
      pageType='article'
      pageUrl={PagePath.heroes(true)}
    >
      <div className='grid gap-5 md:grid-cols-3 lg:grid-cols-4'>
        {Object.entries(HeroImage).map(([key, value], index) => (
          <div key={key}>
            <img
              src={`/heroes/${value}.png`}
              alt={value}
              className='w-full'
            />
            <div className='mt-2 text-center'>
              {++index}. {key}
            </div>
          </div>
        ))}
      </div>
    </ContentsLayout>
  );
};

export default HeroesPage;
