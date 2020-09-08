import Layout from 'components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  background-color: #fff;
  padding: 12px 16px;
  > ul {
    margin: 0 -12px;
    > li {
    background-color: #d9d9d9;
    border-radius: 18px;
    display: inline-block;
    padding: 3px 18px;
    font-size:14px;
    margin:8px 12px;
        }
    }
  > button {
    margin-top:8px;
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom:1px solid #333;
    color: #666;
  }
`;

const NotesSection = styled.section`
    background-color: #f5f5f5;
    padding: 0 16px;
    font-size: 14px;
    > label {
    display: flex;
    align-items: center;
      > span {
        margin-right: 16px;
        white-space: nowrap;
        
      }
      > input {
          display: block;
          width: 100%;
          height: 72px;
          border: 0;
          background:none;
        }
    }
`;
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

function Money() {


    return (
        <Layout>
            <TagsSection>
                <ul>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="在这里添加备注"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div className="output">100</div>
                <div className="pad">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="ok">OK</button>
                    <button className="zero">0</button>
                    <button>.</button>
                </div>


            </NumberPadSection>
        </Layout>
    );
}

export default Money;
