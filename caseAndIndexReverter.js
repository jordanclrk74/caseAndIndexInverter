function invertString(string) {
    return string
      .split("")
      .reverse()
      .map((ch) => (ch.toUpperCase() == ch ? ch.toLowerCase() : ch.toUpperCase()))
      .join("");
  }