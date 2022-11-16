import { useContext } from "react";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo";
import { CartContext } from "../../context/cartContext/cartContext";
import { defaultTheme } from "../../styles/themes/default";
import { CoffeeDeliveryIcons } from "./CoffeeDeliveryIcons";
const Container = styled.nav`
  display: flex;
  background-color: ${({ theme }) => theme.background};
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000px;
  margin: 0 -10rem;
  padding: 2rem 10rem;
`;
const ActionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    min-width: 2.5rem;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 0.5rem;
    border: none;
    border-radius: 6px;
  }
  .location {
    background-color: ${({ theme }) => theme["purple-light"]};
    span {
      color: ${({ theme }) => theme["purple-dark"]};
      font-size: 0.825rem;
    }
  }
  .shopping-cart {
    background-color: ${({ theme }) => theme["yellow-light"]};
    position: relative;
    .product-count {
      position: absolute;
      color: ${({ theme }) => theme["white"]};
      background-color: ${({ theme }) => theme["yellow-dark"]};
      border-radius: 999999px;
      height: 1.25rem;
      width: 1.25rem;
      top: -0.5rem;
      right: -0.5rem;
      font-weight: bold;
      font-size: 0.75rem;
      padding: 0 0.125rem;
      display: grid;
      place-items: center;
    }
  }
`;

export function Header() {
  const { totalProducts } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <Container>
      <NavLink to={"/"}>
        <Logo />
      </NavLink>

      <ActionsContainer>
        <button className="location">
          <CoffeeDeliveryIcons
            width={22}
            height={22}
            color={defaultTheme["purple-dark"]}
            name={"map-pin-fill"}
          />
          <span>Rio de Janeiro - RJ</span>
        </button>
        <button
          onClick={() => {
            navigate("/cart");
          }}
          className="shopping-cart"
        >
          {totalProducts > 0 ? (
            <div className="product-count">{totalProducts}</div>
          ) : null}

          <CoffeeDeliveryIcons
            width={22}
            height={22}
            color={defaultTheme["yellow-dark"]}
            name={"shopping-cart-fill"}
          />
        </button>
      </ActionsContainer>
    </Container>
  );
}
