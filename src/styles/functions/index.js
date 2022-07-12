export const handleValues = (value1, value2) => `${value1} ${value2}`;

export const handleScrollToSection = (value) => {
  let currentValue = window.scrollY;

  setInterval(() => {
    if (currentValue < value) {
      currentValue += 5;
      window.scrollTo(0, currentValue);
    }
    if (currentValue > value) {
      currentValue -= 5;
      window.scrollTo(0, currentValue);
    }
  }, 1);
};
