import * as S from "./styles";
import { SearchBar } from "components";
/* eslint-disable react/jsx-no-comment-textnodes */

const Section = ({
  type,
  direction = "row",
  title,
  subtitle,
  content,
  image,
  imageType,
  children,
}) => {
  switch (type) {
    case "main":
      return renderMainSection(type, title, content, image);
    case "topic":
      return renderTopicSection(
        type,
        direction,
        title,
        subtitle,
        children,
        content,
        image,
        imageType
      );
    case "search":
      return renderSearchSection(type, title, children);
    default:
      break;
  }
};

const renderMainSection = (type, title, content, image) => (
  <S.Section bg={image}>
    <div className={type}>
      <div className="content">
        <article className="title">
          <h1>
            <span className="decoration">// </span>
            {title}
          </h1>
        </article>
        {content}
      </div>
    </div>
  </S.Section>
);

const renderTopicSection = (
  type,
  direction,
  title,
  subtitle = null,
  children,
  content,
  image,
  imageType
) => {
  const topicWithText = (type, title, children, image, imageType) => (
    <S.Section direction={direction} imageType={imageType}>
      <div className={type} id={imageType}>
        <div className="title">
          {subtitle !== null && <h2>{title}</h2>}
          <figure className="logo" id={imageType}>
            <img src={image.src} alt={image.alt} />
          </figure>
        </div>
        <div className="text-box">
          {subtitle !== null ? (
            <h2 className="subtitle">{subtitle}</h2>
          ) : (
            <h2>{title}</h2>
          )}
          <div className="paragraph">{children}</div>
        </div>
      </div>
    </S.Section>
  );

  const topicWithComponent = (type, title, children, image) => (
    <S.Section direction={direction}>
      <div className={type}>
        <figure className="background">
          <img src={image.src} alt={image.alt} />
        </figure>
        <div className="component-title">
          <h2>{title}</h2>
          <div className="children">{children}</div>
        </div>
      </div>
    </S.Section>
  );

  switch (content) {
    case "text":
      return topicWithText(type, title, children, image, imageType);
    case "component":
      return topicWithComponent(type, title, children, image, imageType);
    default:
      break;
  }
};

const renderSearchSection = (type, title, children) => {
  return (
    <S.Section>
      <div className={type}>
        <div className="nav-bar">
          <h2 className="title">{title}</h2>
          <SearchBar data={children} />
        </div>
      </div>
    </S.Section>
  );
};

export default Section;
