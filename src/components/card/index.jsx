import * as S from "./styles";

const Card = ({ type, prop1, prop2, prop3 }) => {
  switch (type) {
    case "squad":
      return renderSquadCard(type, prop1, prop2, prop3);
    default:
      break;
  }
};

const renderSquadCard = (type, name, role, image) => (
  <S.Card bg={image}>
    <div className={type}>
      <div className="effect">
        <h2>{name}</h2>
        <h3>#{role}</h3>
      </div>
    </div>
  </S.Card>
);

export default Card;
