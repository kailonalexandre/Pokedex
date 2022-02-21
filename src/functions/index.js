export const handleCor = (tipo) => {
  switch (tipo) {
    case "Grama":
      return "#9bcc50";
    case "Veneno":
      return "#b97fc9";
    case "Fogo":
      return "#fd7d24";
    case "Água":
      return "#4592c4";
    case "Inseto":
      return "#729f3f";
    case "Normal":
      return "#a4acaf";
    case "Voador":
      return "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)";
    case "Sombrio":
      return "#707070";
    case "Elétrico":
      return "#eed535";
    case "Psíquico":
      return "#f366b9";
    case "Gelo":
      return "#51c4e7";
    case "Aço":
      return "#9eb7b8";
    case "Terra":
      return "linear-gradient(180deg, #f7de3f  50%, ##ab9842 50%)";
    case "Fada":
      return "#fdb9e9";
    case "Lutador":
      return "#d56723";
    case "Pedra":
      return "#a38c21";
    case "Fantasma":
      return "#7b62a3";
    case "Dragão":
      return "#51c4e7";
  }
};
