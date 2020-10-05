import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
      background-color:#fff;
      line-height: 24px;
      box-shadow: 0 0 3px rgba(0,0,0,0.25);
      >ul {
         display:flex;
        
        >li{
            flex: 33.3%;
            text-align: center;
              > a {
              display: flex;
              flex-direction: column;
              padding: 4px 0;
              align-items: center;
              justify-content: center;
              &.selected {
              color:#e1251b;
              .icon {
              fill:#e1251b;
              }
              }
            }
        .icon {
        width: 24px;
        height: 24px;
        }
      
    }
  }
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="tags"/>标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money"/>记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="statistics"/>统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>

    );
};
export default Nav;
