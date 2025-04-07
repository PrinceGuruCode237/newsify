export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // At least 8 chars, 1 letter, 1 number
};
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  MATERIALS: "/materials",
};

export const MESSAGES = {
  ERROR_404: "Page not found.",
  LOADING: "Loading, please wait...",
};
