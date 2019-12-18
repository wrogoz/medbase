import React from 'react';
import {configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from './Layout';
import Header from '../Header'
import Footer from '../Footer'
import { Route } from "react-router-dom";
configure({adapter:new Adapter()});

export default describe('<Layout/>', () => {
    it('should check is has header,footer',()=>{
        const wrapper=shallow(<Layout/>);
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1) ;
        expect(wrapper.find(Route)).toHaveLength(4);

    });
})

