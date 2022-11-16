import "styled-components";
import { defaultTheme, device } from "../src/styles/themes/default";

type ThemeType = typeof defaultTheme & { device: typeof device };

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
