import { useContext } from "react";
import styled from "styled-components";
import { CoffeeDeliveryIcons } from "../../../components/baseComponents/CoffeeDeliveryIcons";
import { PurchaseContext } from "../../../context/purchaseContext";
import { defaultTheme } from "../../../styles/themes/default";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["base-card"]};
  .icon-title {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    p {
      color: ${({ theme }) => theme["base-subtitle"]};
    }
    span {
      color: ${({ theme }) => theme["base-text"]};
    }
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.865rem;
  .multiple-inputs-2 {
    display: flex;
    width: 100%;
    gap: 0.75rem;
  }
  .multiple-inputs-3 {
    display: flex;
    gap: 0.75rem;
  }
  input {
    border: none;
    border-radius: 4px;
    padding: 0.865rem;
    background-color: ${({ theme }) => theme["base-input"]};
    height: 2.625rem;
    ::placeholder {
      color: ${({ theme }) => theme["base-label"]};
    }
  }
  .input-small {
    width: 3.5rem;
  }
  .input-very-long {
    min-width: 35rem;
  }

  .input-long {
    min-width: 21.75rem;
    width: 100%;
  }
  .input-medium {
    min-width: 17.25rem;
    width: 100%;
  }
  .input-normal {
    max-width: 12.5rem;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  button {
    min-width: 11.67rem;
    display: flex;
    padding: 1rem;
    height: 2.625rem;
    align-items: center;
    gap: 0.75rem;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    font-size: 0.75rem;
    background-color: ${({ theme }) => theme["base-button"]};
  }
`;

export function BuyForm() {
  const {
    city,
    handleCity,
    handleComplement,
    handleNeighborhood,
    handlePaymentMethod,
    handleState,
    handleStreet,
    handleStreetNumber,
    handleZipCode,
    neighborhood,
    paymentMethod,
    state,
    street,
    streetNumber,
    zipCode,
    complement,
  } = useContext(PurchaseContext);

  return (
    <Form action="#" onSubmit={(e) => e.preventDefault()}>
      <Box>
        <div className="icon-title">
          <CoffeeDeliveryIcons
            width={22}
            height={22}
            name="currency-dollar-regular"
            color={defaultTheme["yellow-dark"]}
          />
          <div className="title">
            <p>Endereço de entrega</p>
            <span>Informe o endereço onde deseja receber o seu pedido</span>
          </div>
        </div>
        <InputContainer>
          <input
            onChange={(e) => {
              handleZipCode(e.target.value);
            }}
            value={zipCode}
            className="input-normal"
            type="text"
            name="CEP"
            placeholder="CEP"
          />

          <input
            onChange={(e) => {
              handleStreet(e.target.value);
            }}
            value={street}
            className="input-very-long"
            type="text"
            name="Rua"
            placeholder="Rua"
          />
          <div className="multiple-inputs-2">
            <input
              onChange={(e) => {
                handleStreetNumber(parseInt(e.target.value));
              }}
              value={streetNumber}
              className="input-normal"
              type="number"
              name="Número"
              placeholder="Número"
            />
            <input
              onChange={(e) => {
                handleComplement(e.target.value);
              }}
              value={complement}
              className="input-long"
              type="text"
              name="Complemento"
              placeholder="Complemento"
            />
          </div>
          <div className="multiple-inputs-3">
            <input
              onChange={(e) => {
                handleNeighborhood(e.target.value);
              }}
              value={neighborhood}
              className="input-normal"
              type="text"
              name="Bairro"
              placeholder="Bairro"
            />
            <input
              onChange={(e) => {
                handleCity(e.target.value);
              }}
              value={city}
              className="input-medium"
              type="text"
              name="Cidade"
              placeholder="Cidade"
            />
            <input
              onChange={(e) => {
                handleState(e.target.value);
              }}
              value={state}
              className="input-small"
              type="text"
              name="UF"
              placeholder="UF"
            />
          </div>
        </InputContainer>
      </Box>
      <Box>
        <div className="icon-title">
          <CoffeeDeliveryIcons
            width={22}
            height={22}
            name="currency-dollar-regular"
            color={defaultTheme["purple"]}
          />
          <div className="title">
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>
        <ButtonContainer>
          <button
            type="submit"
            style={{
              backgroundColor:
                paymentMethod === "CARTÃO DE CRÉDITO"
                  ? defaultTheme["purple-light"]
                  : defaultTheme["base-button"],
            }}
            onClick={(e) => {
              e.preventDefault();
              if (paymentMethod === "CARTÃO DE CRÉDITO") {
                handlePaymentMethod(undefined);
              } else {
                handlePaymentMethod("CARTÃO DE CRÉDITO");
              }
            }}
          >
            <CoffeeDeliveryIcons
              width={16}
              height={16}
              name="credit-card-regular"
              hoverColor={defaultTheme["purple-dark"]}
              color={defaultTheme["purple"]}
            />
            <span>Cartão de crédito</span>
          </button>
          <button
            type="submit"
            style={{
              backgroundColor:
                paymentMethod === "CARTÃO DE DÉBITO"
                  ? defaultTheme["purple-light"]
                  : defaultTheme["base-button"],
            }}
            onClick={(e) => {
              e.preventDefault();
              if (paymentMethod === "CARTÃO DE DÉBITO") {
                handlePaymentMethod(undefined);
              } else {
                handlePaymentMethod("CARTÃO DE DÉBITO");
              }
            }}
          >
            <CoffeeDeliveryIcons
              width={16}
              height={16}
              name="bank-regular"
              hoverColor={defaultTheme["purple-dark"]}
              color={defaultTheme["purple"]}
            />
            <span>Cartão de débito</span>
          </button>
          <button
            type="submit"
            style={{
              backgroundColor:
                paymentMethod === "DINHEIRO"
                  ? defaultTheme["purple-light"]
                  : defaultTheme["base-button"],
            }}
            onClick={(e) => {
              e.preventDefault();
              if (paymentMethod === "DINHEIRO") {
                handlePaymentMethod(undefined);
              } else {
                handlePaymentMethod("DINHEIRO");
              }
            }}
          >
            <CoffeeDeliveryIcons
              width={16}
              height={16}
              name="money-regular"
              hoverColor={defaultTheme["purple-dark"]}
              color={defaultTheme["purple"]}
            />
            <span>Dinheiro</span>
          </button>
        </ButtonContainer>
      </Box>
    </Form>
  );
}
