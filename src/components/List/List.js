import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledArticles = styled.ul`
  position: relative;
  padding-bottom: 20px;

  &:after {
    content: "";
    border-bottom: 1px solid #ccc;
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
  }
`;

const StyledTotal = styled.span`
  font-size: 20px;
`;

const List = () => {
  const shopping = useSelector((state) => state.shopping);

  return (
    <>
      <StyledArticles className="list-unstyled col-12"></StyledArticles>
      <StyledTotal className="col-12 text-end">1.95€</StyledTotal>
    </>
  );
};

export default List;
