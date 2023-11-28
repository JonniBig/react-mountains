import React from 'react';

import Section from 'components/Section/Section';
import Card from 'components/Card/Card';

import { mountains } from 'db/data';

import {
  StyledCardSection,
  StyledGallerySection,
  StyledHeroSection,
} from './Home.styled';

const Home = () => {
  return (
    <div>
      <StyledHeroSection>
        <h1 className="animate__animated animate__backInDown">
          Щастя не за горами. Щастя у горах.
        </h1>
      </StyledHeroSection>
      <Section title="Ласкаво просимо на наш блог!">
        {/* <Card
          thumbs={[imgPipIvan]}
          title="Pip Ivan"
          description='третя по висоті вершина України. На ній розташована абсерваторій "Білий слон" Висота 2028 метрів.'
        /> */}
        <p>
          Ласкаво запрошуємо на сторінку "Захоплення вершинами"! Тут ми
          зануримось у захоплюючі пригоди та незабутні враження від туристичних
          походів до височин, які перевершують хмари. Подорожі - це не тільки
          досягнення вершин, а й відкриття величезної різноманітності природних
          пейзажів. Від величних гірських масивів до віддалених долин та озер –
          ми розкриємо перед вами природні скарби, які варто побачити. Кожен
          похід – це можливість знімати неперевершені краєвиди та зафіксовувати
          моменти емоцій. Відкрийте для себе менш відомі, але не менш захоплюючі
          шляхи до вершин. Ми розповідаємо про регіони та маршрути, які
          заслуговують на вашу увагу та відвідання. Відкрийте для себе
          захоплюючий світ гір та вершин разом з нами. Приєднуйтесь до нашої
          подорожі, де кожен похід - це можливість відкрити новий горизонт та
          здолати власні межі!
        </p>
      </Section>
      <StyledCardSection title="Маршрути">
        <div className="cardContainer">
          {mountains.map(mount => (
            <Card
              key={mount.mountainName}
              title={mount.mountainName}
              thumbs={mount.thumbs}
              description={mount.description}
            />
          ))}
        </div>
      </StyledCardSection>
      <StyledGallerySection title="Галерея">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora id,
          ullam eos alias aliquid explicabo amet dolores non et corporis!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora id,
          ullam eos alias aliquid explicabo amet dolores non et corporis!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora id,
          ullam eos alias aliquid explicabo amet dolores non et corporis!
        </p>
      </StyledGallerySection>
    </div>
  );
};

export default Home;
