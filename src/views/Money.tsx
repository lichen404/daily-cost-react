import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import NumberPadSection from './Money/NumberPadSection';
import CategorySection from './Money/CategorySection';
import NoteSection from './Money/NoteSection';
import TagSection from './Money/TagSection';



const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Category = '-' | '+'

function Money() {
    const [selected, setSelected] = useState({
        tagIds: [] as number[],
        note: '',
        category: '-' as Category,
        amount: 0

    });
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        });

    };
    return (

        <MyLayout className="xxx">
            {selected.amount}
            <TagSection value={selected.tagIds} onChange={(tagIds) => onChange({tagIds})
            }/>
            <NoteSection value={selected.note} onChange={(note: string) => onChange({note})}/>
            <CategorySection value={selected.category} onChange={(category: Category) => onChange({category})}/>
            <NumberPadSection onChange={(amount: number) => {onChange({amount});}}/>
        </MyLayout>
    );
}

export default Money;
