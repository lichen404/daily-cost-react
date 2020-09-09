import styled from "styled-components";

const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  >.pad {
      display: grid;
      grid-template-rows: 64px 64px 64px 64px;
      grid-template-columns:25% 25% 25% 25% ;
      >button {
        font-size: 18px;
        border: none;
        &.ok{
        grid-column:4/5;
        grid-row:3/5;
      }
        &.zero {
        grid-column:1/3;
        grid-row:4/5;
      }
      &:nth-child(1){
          background-color: #f2f2f2;
        }
      &:nth-child(2),&:nth-child(5){
        background-color: #e0e0e0;
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background-color: #d3d3d3;
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10){
        background-color: #c1c1c1;
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13){
        background-color: #b8b8b8;
      }
      &:nth-child(12){
        background-color:#9a9a9a;
      }
      &:nth-child(14){
        background-color:#a9a9a9;
      }
      }
    
  }
  >.output {
    background-color: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px  rgba(0,0,0,0.25);
    
    
    
  }
`;
export  default NumberPadSection;
