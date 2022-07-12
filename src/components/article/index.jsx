import * as S from "./styles";

export const Article = ({ title, children, image, imageType }) => {
  let imageBg;
  switch (imageType) {
    case "rounded-dashed":
      imageBg = (
        <div className="image-bg">
          <figure className="pc-icon">
            <img src={image.src} alt={image.alt} />
          </figure>
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <S.Article>
      {imageBg}
      <div className="article-content">
        <h3>{title}</h3>
        <h4 className="content">{children}</h4>
      </div>
    </S.Article>
  );
};

export default Article;
