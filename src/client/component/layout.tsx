import { Outlet } from "react-router-dom";
import styled from "styled-components/macro";

import { APPLICATION } from "../constant";
import { Header } from "./header";

const LayoutContainer = styled.div`
  min-width: ${APPLICATION.MINIMUM_WIDTH}px;
  width: 50%;
  margin: auto;
`;

const Layout = () => {

  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

export { Layout };
