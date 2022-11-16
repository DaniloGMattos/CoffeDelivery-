import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CoffeeDeliveryIcons } from "../../../components/baseComponents/CoffeeDeliveryIcons";
import { ItemCounter } from "../../../components/baseComponents/itemCounter";

import {
  CartContext,
  CartProduct,
} from "../../../context/cartContext/cartContext";
import { defaultTheme } from "../../../styles/themes/default";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme["base-card"]};
  gap: 1.5rem;
  border-radius: 6px 44px 6px 44px;
  img {
    width: 4rem;
    height: 4rem;
  }
  .confirmation {
    background-color: ${({ theme }) => theme["yellow"]};
    color: ${({ theme }) => theme["white"]};
    height: 2.625rem;
    border-radius: 6px;
    text-transform: uppercase;
    :hover {
      background-color: ${({ theme }) => theme["yellow-dark"]};
    }
    :disabled {
      cursor: not-allowed;
      :hover {
        background-color: ${({ theme }) => theme["yellow"]};
      }
    }
  }
`;
const ProductCard = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme["base-button"]};
  .product-price {
    margin-left: auto;
    display: inline-flex;
    font-weight: bold;
    color: ${({ theme }) => theme["base-text"]};
  }
  .product-name {
    margin-bottom: 0.5rem;
  }
`;
const ActionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  .remove-product {
    display: flex;
    padding: 0.40625rem;
    align-items: center;
    background-color: ${({ theme }) => theme["base-button"]};
    text-transform: uppercase;
    font-size: 0.75rem;
    border-radius: 0.625rem;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  .information {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    //margin-bottom: 0.25rem;
  }
`;

export function ConfirmationForm() {
  const [shippingPrice, setShippingPrice] = useState(3.5);
  const {
    cartProducts,
    removeFromCart,
    subtractFromCart,
    addToCart,
    totalValue,
  } = useContext(CartContext);
  function changeItemCount(
    operation: "add" | "subtract",
    cartProduct?: CartProduct
  ) {
    if (cartProduct) {
      if (operation === "add") {
        addToCart({ ...cartProduct, qty: 1 });
      }
      if (operation === "subtract") {
        subtractFromCart(cartProduct.id, 1);
      }
    }
  }
  const BRLformatter = Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
  });
  const navigate = useNavigate();

  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/thankyou");
      }}
    >
      <Box>
        {cartProducts.length === 0
          ? null
          : cartProducts.map((product) => {
              return (
                <ProductCard key={product.id}>
                  <img
                    src={product.image}
                    alt="image of a coffee cup with coffee in it"
                  />
                  <div>
                    <p className="product-name">{product.name}</p>
                    <ActionContainer>
                      <ItemCounter
                        product={product}
                        changeValue={changeItemCount}
                        qty={product.qty}
                      />
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="remove-product"
                      >
                        <CoffeeDeliveryIcons
                          width={16}
                          height={16}
                          name="trash-regular"
                          hoverColor={defaultTheme["purple-dark"]}
                          color={defaultTheme["purple"]}
                        />
                        <span>Remover</span>
                      </button>
                    </ActionContainer>
                  </div>
                  <p className="product-price">
                    {BRLformatter.format(product.price)}
                  </p>
                </ProductCard>
              );
            })}
        <TextContainer>
          <div className="information">
            <p>Total de itens</p>
            <p>{BRLformatter.format(totalValue)}</p>
          </div>
          <div className="information">
            <p>Entrega</p>
            <p>
              {cartProducts.length === 0
                ? BRLformatter.format(0)
                : BRLformatter.format(shippingPrice)}
            </p>
          </div>
          <div className="information">
            <h3>Total de itens</h3>
            <h3>
              {cartProducts.length === 0
                ? BRLformatter.format(0)
                : BRLformatter.format(totalValue + shippingPrice)}
            </h3>
          </div>
        </TextContainer>

        <button
          type="submit"
          disabled={cartProducts.length === 0 ? true : false}
          className="confirmation"
        >
          Confirmar pedido
        </button>
      </Box>
    </form>
  );
}
