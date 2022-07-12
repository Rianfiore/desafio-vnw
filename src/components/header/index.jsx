import images from "images";
import { useEffect, useState } from "react";
import { handleScrollToSection } from "styles/functions";
import * as S from "./styles";

const Header = ({ children }) => {
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      event.target.documentElement.scrollTop <= 100
        ? setNavBackground(true)
        : setNavBackground(false);
    });
  }, []);

  return (
    <S.Header bgColor={navBackground}>
      <div className="header-content">
        <nav>
          <figure className="logo" onClick={() => handleScrollToSection(0)}>
            <img src={images.logoHeader} alt="logo-vnw" />
          </figure>
          <ul className="navigation-items">
            <li className="about" onClick={() => handleScrollToSection(650)}>
              Sobre
            </li>
            <li
              className="formation"
              onClick={() => handleScrollToSection(1350)}
            >
              Formação
            </li>
            <li className="squad" onClick={() => handleScrollToSection(2150)}>
              Equipe
            </li>
            <li className="events" onClick={() => handleScrollToSection(3800)}>
              Eventos
            </li>
            <li
              className="contacts"
              onClick={() => handleScrollToSection(4550)}
            >
              Contatos
            </li>
            {children}
          </ul>
        </nav>
      </div>
    </S.Header>
  );
};

export default Header;
