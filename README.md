
## NPM
- Node.js를 위한 기본 패키지 관리자. 소스코드와 관리, 라이브러리 설치, 업데이트 및 제거

## React
- Front-end Library, Not Framework
- Virtual DOM

### 1. Compnent
- UI를 구성하는 개별 요소

### 2. JSX
- JS + XML
- React를 위한 새로운 자바스크립트 문법, 표현식
- UI 요소를 설명하기 위해 React와 함께 사용되는 Js 구문 확장, JSX 코드는 일반 JavaScript로 트랜스파일 되어야 함
- Babel을 통해 컴파일된다.

- style은 camelCase

```jsx
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

```

### 3. Props

- 컴포넌트 내부의 immutable data를 처리할 때 사용

### 4. state

- 컴포넌트에서 유동적인 데이터를 보여줄 때 필수
- 초기값 설정 필수, 생성자에서 this.state={} 로 설정
- jsx 내부에 {this.state.stateName}
- 값을 수정 할 때는 this.setState....

### 5.Webpack
- webpack은 브라우저에서 실행될 수 있도록 JavaScript 파일을 번들로 제공. 
- 모듈 번들러
- 다른 리소스와 자산으로 변환하거나 패키지화할 수 있다. 
- 종종 JSX 또는 TypeScript 코드를 일반 JavaScript로 트랜스파일하도록 Babel 또는 TypeScript 등의 컴파일러를 지정하는 데 사용됨.



## Install

 (1) node.js 설치(NPM)
  - https://nodejs.org/en/download/
  
 (2) React Project 설정
 ```npm
 npm init -y
 ```
 
 
 (3) webpack 설치
 ```npm
 npm i --save express react react-dom
 npm install --save-dev webpack webpack-dev-server webpack-cli
 ```
 
 (4) babel 설치
  - react component는 ES6의 문법에 따라 작성됨. (브라우저는 ES6를 해석하지 못할 수 있는데, 이를 돕는 것이 babel)
 
 ```npm
 npm install --save-dev @babel/core @babel/preset-env
 npm install --save-dev babel-loader
 npm install --save-dev @babel/preset-react
 ``` 
 
 (5) react 설치 및 설정 (webpack + babel)
 
 ```npm
 npm install --save react react-dom
 ```
 
 (6) Hot module replacement 설치
 
 - webpack-dev-server 는 수정한 내용이 있으면, 새로고침 시 자동으로 렌더링함.
 - 새로고침 없이 수정된 부분만 렌더링하는 것이 hot module replace
 
 ```npm
 npm install --save-dev react-hot-loader
 ```
 
 ### link
 - https://codepen.io/
 
 ### ref 
  - https://reactjs.org/
  - https://pro-self-studier.tistory.com/19 
  - https://www.robinwieruch.de/minimal-react-webpack-babel-setup/