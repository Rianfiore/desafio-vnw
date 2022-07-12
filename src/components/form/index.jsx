import * as S from "./styles";

const Form = ({ type, title, subtitle, textLink, link, reqLinkProtocol }) => {
  switch (type) {
    case "google-form":
      return renderGoogleForm(title, subtitle, textLink, link, reqLinkProtocol);
    default:
      break;
  }
};

const renderGoogleForm = (title, subtitle, textLink, link, reqLinkProtocol) => (
  <S.GoogleForm>
    <a href={link}>
      <div className="sign-up">
        <div className="sign-up-box">
          <div className="circles-decoration">
            <div className="circle" id="circle1"></div>
            <div className="circle" id="circle2"></div>
            <div className="circle" id="circle3"></div>
          </div>
          <hr className="line-decoration"></hr>
          <div className="text-box">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </div>
        </div>
      </div>
      <h3 className="link">
        {textLink}:
        <span>
          {reqLinkProtocol
            ? link
            : link.slice(
                link.match("://").index + link.match("://")[0].length,
                link.length
              )}
        </span>
      </h3>
    </a>
  </S.GoogleForm>
);

export default Form;
