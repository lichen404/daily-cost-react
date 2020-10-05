import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useTags} from '../hooks/useTags';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import Button from 'components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';


type Params = {
    id: string
}

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background-color: white;
`;
const InputWrapper = styled.div`
    background-color: white;
    padding: 0 16px;
    margin-top: 8px;
`;
const Tag: React.FC = () => {
    const {findTag, editTag,deleteTag} = useTags();
    const {id: idString} = useParams<Params>();
    const history = useHistory()
    const tag = findTag(parseInt(idString));
    const tagContent = (tag:{id:number;name:string})=>{
        return (
            <div>
                <InputWrapper>
                    <Input label="标签名" type="text" placeholder="标签名" value={tag.name} onChange={
                        (e) => {
                            editTag(tag.id, {name: e.target.value});
                        }
                    }/>
                </InputWrapper>
                <Space size="large"/>
                <Center>
                    <Button onClick={()=>{
                        deleteTag(tag.id)
                        history.push('/tags')
                    }}>删除标签</Button>
                </Center>
            </div>
        )
    }
    return (
        <Layout>
            <TopBar>
                <Icon name="left" onClick={()=>{
                    history.push('/tags')
                }}/>
                <span>编辑标签</span>
                <Icon/>
            </TopBar>
            {tag ? tagContent(tag):<Center>标签不存在</Center>}
        </Layout>

    );
};
export {Tag};
