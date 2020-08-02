import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,


} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
 
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  >ul {
         display:flex;
    >li{
      flex: 33.3%;
      text-align: center;
      padding: 16px;
    }
  }
`;
const Main = styled.div`
  
  flex-grow: 1;

`;
export default function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                        <Route path="/tags">
                            <Tags/>
                        </Route>
                        <Route path="/money">
                            <Money/>
                        </Route>
                        <Route path="/statistics">
                            <Statistics/>
                        </Route>
                        <Redirect exact from="/" to="/money"/>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
                </Main>
                <ul>
                    <li>
                        <Link to="/tags">标签</Link>
                    </li>
                    <li>
                        <Link to="/money">记账</Link>
                    </li>
                    <li>
                        <Link to="/statistics">统计</Link>
                    </li>
                </ul>


            </Wrapper>
        </Router>
    );
}

function NoMatch() {
    return <h2>404</h2>;
}

function Statistics() {
    return <h2>统计页面</h2>;
}

function Tags() {
    return <h2>标签页面</h2>;
}

function Money() {


    return (
        <h2>记账页面</h2>
    );
}
