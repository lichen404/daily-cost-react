import React from 'react';
import { useParams } from 'react-router-dom';
import {useTags} from '../useTags';
import Layout from '../components/Layout';
import Icon from '../components/icon';
import Button from 'components/Button';
import styled from 'styled-components';
type Params = {
    id:string
}

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background-color: white;
`
const Tag:React.FC =()=> {
    const {findTag}= useTags()
    const {id} = useParams<Params>()
    const tag =findTag(parseInt(id))
    return (
        <Layout>
            <TopBar>
                     <Icon name="left"/>
                     <span>编辑标签</span>
                <Icon/>
            </TopBar>
            <div>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="标签名"/>
                </label>
            </div>
            <Button>删除标签</Button>
        </Layout>

    )
}
export {Tag}