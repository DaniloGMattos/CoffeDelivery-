import styled from "styled-components";
import { CoffeeDeliveryIcons } from "../../components/baseComponents/CoffeeDeliveryIcons";
import { defaultTheme } from "../../styles/themes/default";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  background-image: url(src/assets/bannerBGImage.png);
  background-size: cover;
  margin: 0 -10rem;
  img {
    margin: 5.825rem 0 6.75rem;
    margin-right: 10rem;
  }
`;
const TextContainer = styled.div`
  padding: 5.825rem 0 6.75rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
    margin-bottom: 4.125rem;
  }
  .features {
    display: grid;
    grid-template-columns: fit-content(100%) fit-content(100%);
    row-gap: 1.25rem;
    column-gap: 2.5rem;

    .features-description {
      display: flex;
      align-items: center;
      flex: content;
      gap: 0.75rem;
      > div {
        height: 2rem;
        width: 2rem;
        border-radius: 9999px;
      }
    }
  }
`;

export function Hero() {
  return (
    <Container>
      <TextContainer>
        <h1>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </h1>
        <p>
          Com o Coffee Delivery você recebe o café onde estive, a<br /> qualquer
          hora{" "}
        </p>
        <div className="features">
          <div className="features-description">
            <CoffeeDeliveryIcons
              backgroundColor={"yellow-dark"}
              name="shopping-cart-fill"
              color={defaultTheme.white}
              width={16}
              height={16}
            />
            <span>Compra simples e segura</span>
          </div>
          <div className="features-description">
            <CoffeeDeliveryIcons
              backgroundColor={"base-text"}
              name="package-fill"
              color={defaultTheme.white}
              width={16}
              height={16}
            />
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div className="features-description">
            <CoffeeDeliveryIcons
              backgroundColor={"yellow"}
              name="timer-fill"
              color={defaultTheme.white}
              width={16}
              height={16}
            />

            <span>Entrega rápida e segura</span>
          </div>
          <div className="features-description">
            <CoffeeDeliveryIcons
              backgroundColor={"purple-dark"}
              name="coffee-fill"
              color={defaultTheme.white}
              width={16}
              height={16}
            />
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
      </TextContainer>

      <img
        width={476}
        height={360}
        src="src/assets/heroImage.png"
        alt="A Coffee cup with a yellow background with coffee beans and coffee powder in it"
      />
    </Container>
  );
}
