import Layout from 'components/Layout';
import React from 'react';
import styled from 'styled-components';
import NumberPadSection from './Money/NumberPadSection';
import CategorySection from "./Money/CategorySection";
import NoteSection from "./Money/NoteSection";
import TagsSection from "./Money/TagSection";


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
    return (
        <MyLayout className="xxx">
            <TagsSection/>
            <NoteSection/>
            <CategorySection/>
            <NumberPadSection/>
        </MyLayout>
    );
}

export default Money;
