import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
const CategorySection: React.FC = () => {
    const categoryMap = {'-': '支出', '+': '收入'};
    type Keys = keyof typeof categoryMap
    const [categoryList] = useState<(Keys)[]>(['-', '+']);
    const [category, setCategory] = useState('-');

    return (
        <Wrapper>
            <ul>
                {
                    categoryList.map(c => {
                        return (

                            <li className={category === c ? 'selected' : ''}
                                onClick={() => {setCategory(c);}}
                                key={c}
                            >{categoryMap[c]}</li>

                        );
                    })
                }
            </ul>
        </Wrapper>
    );
};
export default CategorySection;
