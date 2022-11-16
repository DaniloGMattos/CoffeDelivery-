import styled from "styled-components";
import { COFFEE_TAGS, Product } from "../../database/@types";
import coffees from "../../database/products.json";
import { device } from "../../styles/themes/default";
import { CoffeeCard } from "./components/coffeeCard";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding-bottom: 10rem;
  gap: 3.4825rem;
  h1 {
    font-size: 2rem;
  }
`;
const ProductGrid = styled.div`
  display: grid;
  @media ${device.mobileS} {
    grid-template-columns: ${() => `repeat(${1},${1 / 1}fr)`};
    grid-column-gap: 2rem;
  }
  @media ${device.mobileM} {
    grid-template-columns: ${() => `repeat(${1},${1 / 1}fr)`};
  }
  @media ${device.mobileL} {
    grid-template-columns: ${() => `repeat(${1},${1 / 1}fr)`};
  }
  @media ${device.tablet} {
    grid-template-columns: ${() => `repeat(${1},${1 / 1}fr)`};
    place-items: center;
  }
  @media ${device.laptop} {
    grid-template-columns: ${() => `repeat(${2},${1 / 2}fr)`};
  }
  @media ${device.laptopM} {
    grid-template-columns: ${() => `repeat(${3},${1 / 3}fr)`};
  }

  @media ${device.laptopL} {
    grid-template-columns: ${() => `repeat(${4},${1 / 4}fr)`};
  }
  @media ${device.desktop} {
    grid-template-columns: ${() => `repeat(${5},${1 / 5}fr)`};
  }
  @media ${device.desktopL} {
    grid-template-columns: ${() => `repeat(${6},${1 / 6}fr)`};
    grid-column-gap: 2rem;
  }
  row-gap: 2.5rem;
`;

export function Products() {
  return (
    <Container>
      <h1>Nossos cafés</h1>
      <ProductGrid>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee as Product} />;
        })}
      </ProductGrid>
    </Container>
  );
}
