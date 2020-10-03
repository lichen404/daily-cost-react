import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hooks/useTags';


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
    value: number[],
    onChange: (selectedId:number[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
    const {tags,addTag} = useTags()

    const selectedIds = props.value;

    const onToggle = (tagId:number) => {
        const index = selectedIds.indexOf(tagId);
        if (index >= 0) {
           props.onChange(selectedIds.filter(t => t !== tagId));
        } else {
            props.onChange([...selectedIds, tagId]);
        }
    };
    return <Wrapper>
        <ul>
            {tags.map(tag => {
                return <li key={tag.id} onClick={() => onToggle(tag.id)}
                           className={selectedIds.indexOf(tag.id) >= 0 ? 'selected' : ''}>{tag.name}</li>;
            })}
        </ul>
        <button onClick={addTag}>新增标签</button>
    </Wrapper>;
};
export default TagsSection;
