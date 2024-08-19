import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Yan's Blog",
  description: "A blog demo for vuepress-theme-hope",
 
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
