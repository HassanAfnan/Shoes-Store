import React from 'react';
import TitlebarGridList from './GridList';

export const Home = () => {
    return (
        <header style={{height:'100vh'}}>
          <img src='https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000' height='auto' width="100%" alt="pic"/>
          <TitlebarGridList/>
        </header>
    )
}
