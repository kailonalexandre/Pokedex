import {
  faHandBackFist,
  faMoon,
  faSnowflake,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBolt,
  faBug,
  faCannabis,
  faCircle,
  faDove,
  faDragon,
  faFire,
  faGhost,
  faGlobe,
  faMountain,
  faSignal,
  faSkullCrossbones,
  faWater,
  faWeightHanging,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

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
      return "linear-gradient(180deg, #f7de3f  50%, #ab9842 50%)";
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

export const handleIcons = (tipo) => {
  switch (tipo) {
    case "Grama":
      return faCannabis;
    case "Veneno":
      return faSkullCrossbones;
    case "Fogo":
      return faFire;
    case "Água":
      return faWater;
    case "Inseto":
      return faBug;
    case "Normal":
      return faCircle;
    case "Voador":
      return faWind;
    case "Sombrio":
      return faMoon;
    case "Elétrico":
      return faBolt;
    case "Psíquico":
      return faSignal;
    case "Gelo":
      return faSnowflake;
    case "Aço":
      return faWeightHanging;
    case "Terra":
      return faGlobe;
    case "Fada":
      return faDove;
    case "Lutador":
      return faHandBackFist;
    case "Pedra":
      return faMountain;
    case "Fantasma":
      return faGhost;
    case "Dragão":
      return faDragon;
  }
};

export const somarStatus = (status) => {
  if (status) {
    const arrayDeStatus = Object.values(status);
    return arrayDeStatus.slice(0, 6).reduce((a, b) => a + b, 0);
  }
};
