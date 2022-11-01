import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";

const LayoutDefaultStyle = styled.div`
  .container {
    background: #f4f3f6;
    min-height: 90vh;
    .container-inner {
      max-width: 1128px;
      width: 100%;
      margin: 0 auto;
    }
  }
`;

const LayoutDefault = ({ children }) => {
  return (
    <LayoutDefaultStyle>
      <Header />
      <div className="container">
        <div className="container-inner">{children}</div>
      </div>
      <Footer />
    </LayoutDefaultStyle>
  );
};

export default LayoutDefault;
