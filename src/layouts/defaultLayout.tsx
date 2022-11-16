import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/baseComponents/Header";

const LayoutContainer = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;

  padding: 0 10rem 2rem;
`;

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
