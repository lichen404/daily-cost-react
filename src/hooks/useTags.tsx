import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';


const useTags = () => {
    // 封装自定义hook
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
        if (localTags.length === 0) {
            localTags = [{id: createId(), name: '衣'}, {id: createId(), name: '食'}, {
                id: createId(),
                name: '住'
            }, {id: createId(), name: '行'}];
        }
        setTags(localTags);

    }, []); // 组件挂载时执行
    useUpdate(() => {

        window.localStorage.setItem('tags', JSON.stringify(tags));
    }, tags);
    const findTag = (id: number) => {
        return tags.filter(tag => tag.id === id)[0];
    };
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;

            }
        }
        return result;
    };
    const editTag = (id: number, obj: { name: string }) => {

        setTags(tags.map(tag => {
            return tag.id !== id ? tag : {id, name: obj.name};
        }));


    };
    const addTag = () => {

        const name = window.prompt('新标签的名称为');
        if (name) {
            setTags([...tags, {id: Math.random(), name}]);
        }

    };
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
    };
    const getName = (id: number) => {
        const tag = tags.filter(t => t.id === id)[0];
        return tag ? tag.name : '';
    };
    return {
        tags,
        setTags,
        findTag,
        editTag,
        findTagIndex,
        deleteTag,
        addTag,
        getName
    };
};
export {useTags};