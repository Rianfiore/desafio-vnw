import * as S from "./styles";

const Icon = ({ src }) => {
  return (
    <S.Figure>
      <img src={src} alt="icon" />
    </S.Figure>
  );
};

export default Icon;
