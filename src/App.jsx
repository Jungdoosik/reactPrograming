import React, { Component } from 'react';
import './App.css';
import TodaysPlan from './03/TodaysPlan';
import MyComponent from './03/MyComponent';
import PropsComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent';
import ChildComponent2 from './03/ChildComponent2';
import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';

class App extends Component {
  render() {
    const array = [1,2,3];
    const obj = {name : '제목', age: 30};
    const node = <h1>노드</h1>;
    const func = () => {console.log('메세지')};
    
    return (
      <div className='body'>
        <TodaysPlan />
        <MyComponent name="message" />
        <PropsComponent name="두잇 리액트" />
        <ChildComponent 
        boolValue = {false} 
        numValue = {1}
        arrayValue = {array}
        objValue = {obj}
        nodeValue = {node}
        funcValue = {func}
        />
        <div><b>지루할 때 : </b></div><BooleanComponent bored/>
        <div><b>즐거울 때 : </b></div><BooleanComponent />
        {/* 
        참,거짓은 참일때는 저렇게 props를 주고///{true}생략도가능
         거짓일때는 값을 줘도되고 안줘도 되고///그대신 값을 줄때는 정확히 props={false}
         */}
         <br></br>
        <ChildComponent2 
        objValue={{name : '정정정', age: 30}}
        requiredStringValue ="문자"/>
        <br></br>
        <DefaultPropsComponent />

        <ChildProperty>
          <div><span>자식 노드</span></div>
        </ChildProperty>
      </div>
    );
  }
}

export default App;
