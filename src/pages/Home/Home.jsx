import React from 'react';

// import Section from 'components/Section/Section';
import Card from 'components/Card/Card';

import { mountains } from 'db/data';

import {
  StyledCardSection,
  StyledGallerySection,
  StyledHeroSection,
  StyledWelcomeSection,
} from './Home.styled';

const Home = () => {
  return (
    <div>
      <StyledHeroSection>
        <h1 className="animate__animated animate__fadeInDown">
          Щастя не за горами. Щастя у горах.
        </h1>
      </StyledHeroSection>
      <StyledWelcomeSection title="Ласкаво просимо на наш блог!">
        <p className="text">
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
      </StyledWelcomeSection>
      <StyledCardSection title="Маршрути">
        <p className="text">
          Вершини Карпат чекають на вас! Вирушайте в незабутні подорожі наших
          туристичних маршрутів серед чарівних лісів, кришталевих потоків і
          високогірних панорам. Відчуйте дух пригоди у серці Карпат!
        </p>
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
