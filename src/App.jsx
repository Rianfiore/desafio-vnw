import { Header, Footer } from "components";
import Home from "pages/home";
import { lightTheme, darkTheme } from "styles/theme";
import * as S from "styles/globals";
import { GlobalStyles } from "styles/globals";
import { useState } from "react";
import ReactSwitch from "react-switch";
import images from "images";
import { Icon } from "components";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((curr) => (curr === lightTheme ? darkTheme : lightTheme));
  };
  return (
    <S.ThemeContainer theme={theme} switchTheme={toggleTheme}>
      <GlobalStyles />
      <Header>
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === darkTheme}
          onColor="#acacac"
          onHandleColor="#011356"
          checkedIcon={<Icon src={images.moonIcon} />}
          offColor="#fff"
          offHandleColor="#ff611e"
          uncheckedIcon={<Icon src={images.sunIcon} />}
        />
      </Header>
      <Home />
      <Footer />
    </S.ThemeContainer>
  );
};

export default App;
