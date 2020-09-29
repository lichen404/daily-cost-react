import styled from "styled-components";
import React from 'react';
import {Input} from '../../components/Input';


const Wrapper = styled.section`
    background-color: #f5f5f5;
    padding: 14px 16px;
    font-size: 14px;
   

`;
type Props = {
    value:string,
    onChange:(note:string)=>void
}
const NoteSection:React.FC<Props> = (props)=>{
  const  note = props.value
    return (
        <Wrapper>
            <Input label="备注" type="text"  placeholder="填写备注" value={note} onChange={(e)=>props.onChange(e.target.value)}/>
        </Wrapper>
    )
}
export  default  NoteSection;
