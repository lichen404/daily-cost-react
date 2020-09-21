import {useState} from 'react';
const useTags = ()=>{
    // 封装自定义hook
    const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
    return {
        tags,
        setTags
    }
}
export {useTags}
