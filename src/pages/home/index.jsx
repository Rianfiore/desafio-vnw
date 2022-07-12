import * as S from "./styles";
import { Section, Article, Form, Card } from "components";
import images from "images";
import { squad } from "data";

const Home = () => (
  <S.Main>
    <Section
      type="main"
      title="Quer construir uma carreira de
        sucesso como Desenvolvedor(a) Front-end?"
      image={(props) => props.theme.images.main.bg.src}
      content={
        <Form
          type="google-form"
          title="Inscreva-se no Vai na Web!"
          subtitle="Inscrições até 02 a 21 de Agosto"
          textLink="Link para o formulário"
          link="https://bit.ly/CarreiraVaiNaWeb"
          reqLinkProtocol={false}
        />
      }
    />
    <Section
      type="topic"
      content="text"
      title="Sobre o Vai na Web"
      image={{ src: images.logoSection, alt: "logo-vnw" }}
    >
      <p>
        Fundado em 2017, no Complexo do Alemão, o Vai na Web vem impactando e
        transformando a vida de jovens das classes C, D e E do Rio de Janeiro e
        de outros 18 estados do Brasil.
      </p>
      <p>
        Muito mais do que compartilhar conhecimento de programação front-end, o
        programa oferece aulas de inglês e desenvolvimento de habilidades
        humanas e socioemocionais, que preparam os futuros desenvolvedores para
        o mundo do trabalho e oferecem um espaço em que é possível descobrir a
        riqueza de áreas que a tecnologia tem.
      </p>
      <p>
        Com o objetivo de acentuar a potência mundial que é a juventude, o Vai
        na Web tem se tornado cada vez mais um lugar de transformação. Através
        da cultura do afeto, a equipe do programa entende que “educar não é
        impor informação, é trocar” e sua maior riqueza, segundo a coordenadora
        executiva, Cris dos Prazeres, “é respeitar a geração da juventude que
        está nesse processo de compartilhar”.
      </p>
    </Section>
    <Section
      type="topic"
      content="component"
      title="Formação"
      imageType="background"
      image={{ src: images.fullstackSection, alt: "full-stack" }}
      direction="row-reverse"
    >
      <Article
        title="Front-end"
        image={{ src: images.pcSection, alt: "front-end" }}
        imageType="rounded-dashed"
      >
        Quem trabalha com Front End é responsável por desenvolver por meio do
        código uma interface gráfica e, normalmente, com tecnologias base da
        Web: HTML, CSS e JavaScript.
      </Article>
      <Article
        title="Back-end"
        image={{ src: images.pcSection, alt: "back-end" }}
        imageType="rounded-dashed"
      >
        O Back-End trabalha em boa parte dos casos fazendo a ponte entre os
        dados que vem do navegador rumo ao banco de dados e vice-versa, sempre
        aplicando as devidas regras de negócio, validações e garantias num
        ambiente restrito ao usuário final (ou seja, onde ele não consegue
        acessar ou manipular algo).
      </Article>
    </Section>
    <Section type="search" title="Equipe">
      {squad.map((person, index) => (
        <Card
          key={index}
          type="squad"
          prop1={person.name}
          prop2={person.role}
          prop3={person.img}
        />
      ))}
    </Section>
    <Section
      type="topic"
      content="text"
      title="Eventos"
      subtitle="Tech Girls"
      imageType="events"
      image={{ src: images.eventsImage, alt: "events" }}
    >
      <p>
        Com o objetivo de promover network entre mulheres de tecnologia,
        conectar talentos femininos com oportunidades no mercado da tecnologia,
        oferecer experiências de troca através de eventos com mulheres que já
        têm experiência no mercado da tecnologia, acelerar os talentos com ajuda
        para custeio de luz e internet para facilitar o processo de estudo,
        promover mentoria para as participantes do grupo.
      </p>
    </Section>
  </S.Main>
);

export default Home;
