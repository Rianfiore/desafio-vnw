import images from "images";
import * as S from "./styles";

const Footer = () => (
  <S.Footer bg={images.footerBg}>
    <h2 className="title">Contato</h2>
    <div className="content">
      <h3 className="follow-text">
        Siga nossas redes sociais e fique conectado com todas as novidades.
      </h3>
      <figure className="social-network">
        <img src={images.facebook} alt="facebook" />
        <img src={images.instagram} alt="instagram" />
        <img src={images.linkedin} alt="linkedin" />
        <img src={images.medium} alt="medium" />
        <img src={images.youtube} alt="youtube" />
      </figure>
    </div>
  </S.Footer>
);

export default Footer;
