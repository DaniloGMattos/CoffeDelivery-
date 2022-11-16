import styled from "styled-components";
import { CartProduct } from "../../context/cartContext/cartContext";
import { Product } from "../../database/@types";
import { defaultTheme } from "../../styles/themes/default";
import { CoffeeDeliveryIcons } from "./CoffeeDeliveryIcons";

interface Props {
  qty: number;
  product: Product;
  changeValue: (
    operation: "add" | "subtract",
    cartProduct?: CartProduct
  ) => void;
}
const Container = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.56125rem 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["base-button"]};
`;
export function ItemCounter({ qty, changeValue, product }: Props) {
  return (
    <Container>
      <button onClick={() => changeValue("subtract", { ...product, qty })}>
        <CoffeeDeliveryIcons
          width={14}
          height={14}
          color={defaultTheme["purple"]}
          hoverColor={defaultTheme["purple-dark"]}
          name="minus-bold"
        ></CoffeeDeliveryIcons>
      </button>
      <span>{qty}</span>
      <button onClick={() => changeValue("add", { ...product, qty })}>
        <CoffeeDeliveryIcons
          width={14}
          height={14}
          color={defaultTheme["purple"]}
          hoverColor={defaultTheme["purple-dark"]}
          name="plus-bold"
        ></CoffeeDeliveryIcons>
      </button>
    </Container>
  );
}
