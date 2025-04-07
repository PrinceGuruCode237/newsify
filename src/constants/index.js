export const DEFAULT = 10;

export function colorTheme(type) {
  switch (type) {
    case "continuous":
      return "#1f78ff";
    case "exam":
      return "#008000";
    case "retake exam":
      return "#c1121f";
    case "practical":
      return "rgb(2, 6, 23)";
    default:
      return "";
  }
}
