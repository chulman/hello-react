console.log('mapping is starting...');

import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component{
    render() {
        let div = (
            <div>
                <li>
                {this.props.user.name}
                {this.props.user.phone}
                </li>
            </div>
        );
        return div;
    }
}

User.defaultProps = {
    name:"park",
    phone:"010-5555"
}

class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            contactData:[
                {name:'choi', phone:'010-2222'},
                {name:'kim', phone:'010-3333'},
                {name:'lee', phone:'010-4444'},
            ]
        }
    }
    render(){
        /**
         * arr.map(callback, [thisArg])
         *
         * callback :새로운 배열의 요소를 생성하는 함수
         *  - CurrentValue: 현재 처리되는 요소
         *  - index : 현재 처리되고 있는 요소의 index
         *  - array : 메소드가 불려진 배열
         * @param data
         * @returns {*}
         */
        const mapToComponent = (data) => {
            return data.map((contact,i)=>{
                return (<User user={contact} key={i}/>);
            });
        };

        return(
            <div>
                <div><h1>User InFo</h1></div>
                <div>
                    <ul>
                        {mapToComponent(this.state.contactData)}
                    </ul>
                </div>

            </div>

        );
    }
}

class Mapping extends React.Component{
    render(){
        return(
            <Contact/>
        );
    }
}

ReactDOM.render(
    <Mapping></Mapping>,
    document.getElementById('mapping')
);



