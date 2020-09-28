import React from 'react';
import { useParams } from 'react-router-dom';
import {useTags} from '../useTags';
type Params = {
    id:string
}
const Tag:React.FC =()=> {
    const {findTag}= useTags()
    const {id} = useParams<Params>()
    const tag =findTag(parseInt(id))
    return (
        <span>{tag.name}</span>
    )
}
export {Tag}