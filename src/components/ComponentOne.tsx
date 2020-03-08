import * as React from 'react';

export const ComponentOne = (): number => {
var hello = 'hello'
return <div>Greetings</div>;
};
    

export class ComponentTwo extends React.Component {
    state={ hello: null }

    render() {
        return(
            <p>Text</p>
        )
    }
}