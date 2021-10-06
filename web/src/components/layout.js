import React from "react";
import styled from 'styled-components';
import TopHeader from "./headerTop";
import SideHeader from "./headerSide";

import GlobalStyles from "../styles/globalStyles";

const Layout = ({ headerPosition, children, aside, ...props }) => (
  <RootWrapper {...props}>
    <GlobalStyles />
    {headerPosition === "top" ? <TopHeader /> : <SideHeader />}
    <main>{children}</main>
    <aside>{aside}</aside>
  </RootWrapper>
);

const RootWrapper = styled.div`
  
`;
export default Layout;
