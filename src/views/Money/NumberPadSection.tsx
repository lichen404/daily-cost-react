import React, {useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {calculateOutput} from './NumberPadSection/calculateOutput';

type Props = {
    onChange: (amount: number) => void
    onSubmit:()=>void
}
const NumberPadSection: React.FC<Props> = (props) => {
    const [output, _setOutput] = useState('0');
    const setOutput = (output: string) => {
        if (output.length > 16) {
            _setOutput(output.slice(0, 16));
        } else if (output.length === 0) {
            _setOutput('0');
        } else {
            _setOutput(output);
        }
    };

    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text === null) {
            return;
        }
        if (text === 'OK') {
            const value = parseFloat(output)
            if(value>0){
                props.onChange(value);
                props.onSubmit()
                setOutput('')
            }

            return;
        }
        if (('0123456789.'.split('').concat(['删除', '清空']).indexOf(text)) >= 0) {
            setOutput(calculateOutput(text, output));
        }


    };
    return (
        <Wrapper>
            <div className="output">{output}</div>
            <div className="pad" onClick={
                onClickButtonWrapper
            }>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button>.</button>
            </div>
        </Wrapper>
    );
};
export default NumberPadSection;
