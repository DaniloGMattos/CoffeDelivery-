import styled from "styled-components";
import {} from "@formatjs/intl-locale/polyfill";
import { CoffeeDeliveryIcons } from "../../../components/baseComponents/CoffeeDeliveryIcons";
import { Tag } from "../../../components/baseComponents/tag";
import { Product } from "../../../database/@types";
import { useContext, useState } from "react";
import { ItemCounter } from "../../../components/baseComponents/itemCounter";
import {
  CartContext,
  CartProduct,
} from "../../../context/cartContext/cartContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px 36px 6px 36px;
  width: 16rem;
  height: 19.375rem;
  padding: 0 1.5rem;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme["base-card"]};

  img {
    transform: translateY(-20px);
    margin-bottom: -4px;
  }
  .tags-container {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }
  .text-content {
    margin-bottom: 2rem;
    text-align: center;
    h2 {
      font-size: 1.25rem;
    }
    p {
      color: ${({ theme }) => theme["base-label"]};

      font-size: 0.825rem;
    }
  }
`;
const PaymentActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .price-currency {
    font-size: 0.825rem;
  }
  .price-amount {
    font-family: "Baloo 2", cursive;
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 1.5rem;
  }
  .cart-button {
    margin-left: 0.5rem;
  }
  .icon-container {
    padding: 8px;
    border-radius: 6px;
  }
`;
interface Props {
  coffee: Product;
}
export function CoffeeCard({ coffee }: Props) {
  const BRLformatter = Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
    currencyDisplay: "code",
  });
  const [itemCount, setItemCount] = useState(0);
  const { addToCart } = useContext(CartContext);
  function changeItemCount(operation: string) {
    if (operation === "add") {
      setItemCount((prev) => prev + 1);
    }
    if (operation === "subtract") {
      if (itemCount > 0) {
        setItemCount((prev) => prev - 1);
      }
    }
  }

  return (
    <Container>
      <img
        width={120}
        height={120}
        src={coffee.image}
        alt="Image of a coffee cup with coffee in it"
      />
      <div className="tags-container">
        {coffee.tags.map((tag) => (
          <Tag
            key={tag}
            background="yellow-light"
            textColor="yellow-dark"
            description={tag}
          />
        ))}
      </div>

      <div className="text-content">
        <h2>{coffee.name}</h2>
        <p>{coffee.description}</p>
      </div>
      <PaymentActions>
        <div>
          <span className="price-currency">R$</span>
          <span className="price-amount">
            {BRLformatter.format(coffee.price).replace("BRL", "").trim()}
          </span>
        </div>
        <ItemCounter
          product={coffee}
          changeValue={changeItemCount}
          qty={itemCount}
        />
        <button
          className="cart-button"
          onClick={() => {
            //console.log(addToCart);
            addToCart({
              ...coffee,
              qty: itemCount,
            });
            setItemCount(0);
          }}
        >
          <CoffeeDeliveryIcons
            className="icon-container"
            width={22}
            height={22}
            name="shopping-cart-fill"
            backgroundColor="purple-dark"
            color="white"
          />
        </button>
      </PaymentActions>
    </Container>
  );
}
