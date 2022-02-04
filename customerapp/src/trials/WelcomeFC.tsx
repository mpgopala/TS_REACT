import React from 'react';
import Welcome from './Welcome';

interface Props {
    msg?:string
}

const defaultWelcomeProps:Props = {
    msg:"Good morning"
}

const WelcomeFC:React.FC<Props> = ({msg, children}) => {
    return <h1>Hello {msg} {children} </h1>
}

WelcomeFC.defaultProps = defaultWelcomeProps;

export default WelcomeFC;

// <WelcomeFC > <h1>Testing...</h1> </WelcomeFC>