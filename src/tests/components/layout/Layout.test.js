import React from 'react';
import {configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from '../../../components/layout/Layout';
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Route } from "react-router-dom";
configure({adapter:new Adapter()});

export default describe('<Layout/>', () => {
    it('should check is has header,footer and 4 routes',()=>{
        const wrapper=shallow(<Layout/>);
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1) ;
        expect(wrapper.find(Route)).toHaveLength(4);

    });
})

