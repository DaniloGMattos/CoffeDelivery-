import styled, { css } from "styled-components";
import { BankRegular } from "../../assets/icons/bank-regular";
import { CoffeeFill } from "../../assets/icons/coffee-fill";
import { CreditCardRegular } from "../../assets/icons/credit-card-regular";
import { CurrencyDollarRegular } from "../../assets/icons/currency-dollar-regular";
import IconProps from "../../assets/icons/IconProps";
import { MapPinFill } from "../../assets/icons/map-pin-fill";
import {
  MapPinFillRegular,
  MapPinLineRegular,
} from "../../assets/icons/map-pin-line-regular";
import { MinusBold } from "../../assets/icons/minus-bold";
import { MoneyRegular } from "../../assets/icons/money-regular";
import { PackageFill } from "../../assets/icons/package-fill";
import { PlusBold } from "../../assets/icons/plus-bold";
import { ShoppingCartFill } from "../../assets/icons/shopping-cart-fill";
import { TimerFill } from "../../assets/icons/timer-fill";
import { TrashRegular } from "../../assets/icons/trash-regular";
import { defaultTheme, ThemeColors } from "../../styles/themes/default";

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never;

export const iconsName = [
  "bank-regular",
  "coffee-fill",
  "credit-card-regular",
  "currency-dollar-regular",
  "map-pin-fill",
  "map-pin-fill-regular",
  "minus-bold",
  "money-regular",
  "package-fill",
  "plus-bold",
  "shopping-cart-fill",
  "timer-fill",
  "trash-regular",
];
type IconName = ElementType<typeof iconsName>;

const Icon = styled.div<{ hoverColor?: string; backgroundColor?: ThemeColors }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme[backgroundColor] : "transparent"};
  :hover {
    path {
      ${(props) =>
        props.hoverColor &&
        css`
          fill: ${props.hoverColor};
        `}
    }
  }
`;

type Icons = { [iconName: string]: JSX.Element };
interface Props extends IconProps {
  name: IconName;
  hoverColor?: string;
  backgroundColor?: ThemeColors;
}
export function CoffeeDeliveryIcons({
  name,
  color,
  height,
  width,
  hoverColor,
  backgroundColor,
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) {
  const iconsMap: Icons = {
    "bank-regular": <BankRegular color={color} height={height} width={width} />,
    "coffee-fill": <CoffeeFill color={color} height={height} width={width} />,
    "credit-card-regular": (
      <CreditCardRegular color={color} height={height} width={width} />
    ),
    "currency-dollar-regular": (
      <CurrencyDollarRegular color={color} height={height} width={width} />
    ),
    "map-pin-fill": <MapPinFill color={color} height={height} width={width} />,
    "map-pin-line-regular": (
      <MapPinLineRegular color={color} height={height} width={width} />
    ),
    "minus-bold": <MinusBold color={color} height={height} width={width} />,
    "money-regular": (
      <MoneyRegular color={color} height={height} width={width} />
    ),
    "package-fill": <PackageFill color={color} height={height} width={width} />,
    "plus-bold": <PlusBold color={color} height={height} width={width} />,
    "shopping-cart-fill": (
      <ShoppingCartFill color={color} height={height} width={width} />
    ),
    "timer-fill": <TimerFill color={color} height={height} width={width} />,
    "trash-regular": (
      <TrashRegular color={color} height={height} width={width} />
    ),
  };

  return (
    <Icon {...rest} backgroundColor={backgroundColor} hoverColor={hoverColor}>
      {iconsMap[name]}
    </Icon>
  );
}
