import * as React from 'react';
import * as ReactDOM from 'react-dom';

fetch('/api/').then(response => {
    console.log(response.json());
})

const Index = () => {
    return (<div>Hello React - TypeScript!</div>);
}

ReactDOM.render(<Index />, document.getElementById('index'))