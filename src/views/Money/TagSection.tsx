import styled from "styled-components";
import React, {useState} from "react";


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
const TagsSection: React.FC = (props) => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
    const [selectTags, setSelectedTags] = useState<string[]>([])
    const onAddTag = () => {
        const name = window.prompt('新标签的名称为')
        if (name) {
            setTags([...tags, name])
        }

    }
    const onToggle = (tag: string) => {
        const index = selectTags.indexOf(tag)
        if (index >= 0) {
            setSelectedTags(selectTags.filter(t => t !== tag))
        } else {
            setSelectedTags([...selectTags, tag])
        }
    }
    return <Wrapper>
        <ul>
            {tags.map(tag => {
                return <li key={tag} onClick={() => onToggle(tag)}
                           className={selectTags.indexOf(tag) >= 0 ? 'selected' : ''}>{tag}</li>
            })}
        </ul>
        <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
}
export default TagsSection;
