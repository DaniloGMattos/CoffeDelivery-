import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CoffeeDeliveryIcons } from "../components/baseComponents/CoffeeDeliveryIcons";
import { CartContext } from "../context/cartContext/cartContext";
import { PurchaseContext } from "../context/purchaseContext";
import { defaultTheme } from "../styles/themes/default";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 5rem;
  column-gap: 6.375rem;
`;
const InformationContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme["yellow-dark"]};
  }
  p {
    font-size: 1.25rem;
  }
  .purchase-details {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    gap: 2rem;

    position: relative;

    padding: 2.5rem;
    .icon-info {
      display: flex;
      gap: 0.75rem;
      .icon {
        height: 2rem;
        width: 2rem;
        border-radius: 99999px;
        padding: 0.5rem;
      }
    }
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 6px 36px;
      border: 2px solid transparent;
      background: linear-gradient(-45deg, #8047f8, #dbac2c) border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }
  }
`;

export function Thankyou() {
  const { street, city, state, streetNumber, paymentMethod, neighborhood } =
    useContext(PurchaseContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (!street || !city || !state || !streetNumber || !paymentMethod) {
      navigate("/");
    }
  }, []);
  return (
    <Container>
      <InformationContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar o café chegará até você</p>
        <div className="purchase-details">
          <div className="icon-info">
            <CoffeeDeliveryIcons
              className="icon"
              name="map-pin-fill"
              color={defaultTheme["white"]}
              width={16}
              height={16}
              backgroundColor="purple"
            />
            <span>
              Entrega em{" "}
              <strong>
                {street},{streetNumber}
              </strong>
              {neighborhood} - {city}, {state}
            </span>
          </div>
          <div className="icon-info">
            <CoffeeDeliveryIcons
              className="icon"
              name="timer-fill"
              color={defaultTheme["white"]}
              width={16}
              height={16}
              backgroundColor="yellow"
            />
            <span>
              Previsão de entrega <br />
              <strong> 20min -30min</strong>{" "}
            </span>
          </div>
          <div className="icon-info">
            <CoffeeDeliveryIcons
              className="icon"
              name="currency-dollar-regular"
              color={defaultTheme["white"]}
              width={16}
              height={16}
              backgroundColor="yellow-dark"
            />
            <span>
              Pagamento na entrega <br />
              <strong> {paymentMethod?.toLocaleUpperCase()}</strong>
            </span>
          </div>
        </div>
      </InformationContainer>

      <img
        width={492}
        height={293}
        src="src/assets/thankyou-illustration.png"
        alt="A man in a motor bike"
      />
    </Container>
  );
}
