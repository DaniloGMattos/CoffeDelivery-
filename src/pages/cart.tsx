import styled from "styled-components";
import { BuyForm } from "./sections/components/buyForm";

import { ConfirmationForm } from "./sections/components/confirmationForm";

const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  padding-top: 5rem;
`;
const BuyFormContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  h1 {
    margin-bottom: 0.25rem;
  }
`;
const ConfirmationFormContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  h1 {
    margin-bottom: 0.25rem;
  }
`;

export function Cart() {
  return (
    <CartLayout>
      <BuyFormContainer>
        <h1>Complete seu pedido </h1>
        <BuyForm />
      </BuyFormContainer>
      <ConfirmationFormContainer>
        <h1>Cafés selecionados</h1>
        <ConfirmationForm />
      </ConfirmationFormContainer>
    </CartLayout>
  );
}
