import styled from "styled-components";

const CategorySection = styled.section`
  >ul {
  background-color:#c4c4c4;
  display: flex;
    >li {
      width: 50%;
      text-align: center;
      font-size: 24px;
      padding: 18px 0;
      position: relative;
      &.selected::after {
      position:absolute;
      bottom: 0;
      left: 0;
      content:'';
      display: block;
      width: 100%;
      height: 4px;
      background-color: #333;
      }
    }
  }
`;
export  default  CategorySection;
