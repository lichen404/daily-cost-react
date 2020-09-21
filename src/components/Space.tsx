import styled from 'styled-components';

interface SizeProps {
    size:'small'|'large'|'medium'
}
const Space = styled.div`
  height:${(props:SizeProps)=>{
    if(props.size==='small'){
        return '16px'
    }
    else if(props.size==='medium'){
        return '32px'
    }
    else {
        return '64px'
    }
}};
`;
export {Space}