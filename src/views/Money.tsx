import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import NumberPadSection from './Money/NumberPadSection';
import CategorySection from './Money/CategorySection';
import NoteSection from './Money/NoteSection';
import TagSection from './Money/TagSection';
import {useRecords} from '../hooks/useRecords';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Category = '-' | '+'
const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0

}
function Money() {
    const [selected, setSelected] = useState(defaultFormData);
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        });

    };
    const {addRecord} = useRecords()
    return (

        <MyLayout className="xxx">
            <TagSection value={selected.tagIds} onChange={(tagIds) => onChange({tagIds})
            }/>
            <NoteSection value={selected.note} onChange={(note: string) => onChange({note})}/>
            <CategorySection value={selected.category} onChange={(category: Category) => onChange({category})}/>
            <NumberPadSection onChange={(amount: number) => {onChange({amount});}} onSubmit={
                ()=>{
                    addRecord(selected)
                    setSelected(defaultFormData)
                }
            }/>
        </MyLayout>
    );
}

export default Money;
