import Layout from 'components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from 'components/icon';
import {Space} from '../components/Space';

const TagList = styled.ul`
  font-size: 16px;
  background-color: #fff;
  >li {
    border-bottom: 1px solid #d5d5d9;
    padding: 12px 16px 12px 0;
    margin-left:14px ;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }

`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #767676;
  color:#fff;
  
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


function Tags() {
    const {tags, setTags} = useTags();
    return (
        <Layout>
            <TagList>
                {tags.map((tag) => <li key={tag.id}>
                    <span className="oneLine">{tag.name}</span>
                    <Icon name="right"/>
                </li>)}

            </TagList>
            <Space size="large"/>
            <Center>
                <Button>新增标签</Button>
            </Center>
        </Layout>

    );
}

export default Tags;