import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';


const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
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
    &.selected{
      background-color:#f60;
    }
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
type Props = {
    value: string[],
    onChange: (selected:string[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
    const {tags,setTags} = useTags()
    const selectedTags = props.value;
    const onAddTag = () => {
        const name = window.prompt('新标签的名称为');
        if (name) {
            setTags([...tags, name]);
        }

    };
    const onToggle = (tag: string) => {
        const index = selectedTags.indexOf(tag);
        if (index >= 0) {
           props.onChange(selectedTags.filter(t => t !== tag));
        } else {
            props.onChange([...selectedTags, tag]);
        }
    };
    return <Wrapper>
        <ul>
            {tags.map(tag => {
                return <li key={tag} onClick={() => onToggle(tag)}
                           className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}>{tag}</li>;
            })}
        </ul>
        <button onClick={onAddTag}>新增标签</button>
    </Wrapper>;
};
export default TagsSection;
