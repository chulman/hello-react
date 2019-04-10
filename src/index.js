console.log('Set up is continuing...');

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const title = 'React Webpack Babels';


class Codelab extends React.Component {
    render() {
        /**
            var랑 비슷함
            block scope
         */
        let text = "text is codelab let";
        /**
         * jsx에서 style 설정은 string 형식을 사용하지 않고, key를 camelCase로 사용
         */
        let style = {
            backgroundColor:'aqua'
        };

        return (
            <div style={style}>
                <h1>{title}{this.props.name}</h1>
                <h2>{this.props.number}</h2>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

/**
 * prop types 를 쓰기 위해서는 라이브러리 추가
 * npm i -s prop-types
 * @type {{number: *, name: *}}
 */
Codelab.propTypes = {
    name: PropTypes.string,
    number:PropTypes.number.isRequired
}
Codelab.defaultProps = {
    name : 'choi chul min',
    number: 5
}

class App extends React.Component {
    render() {
        return (
            <Codelab>{this.props.children}</Codelab>
        );
    }
}
/**
 * Component 설정이 끝난 후 DefaultProps 설정
 */
App.defaultProps = {
    value: 0
}



ReactDOM.render(
    <App>children data</App>,
    document.getElementById('root')
);

module.hot.accept();

