import React from 'react'
import {GridCell} from '@rmwc/grid'
import '@material/layout-grid/dist/mdc.layout-grid.css';

export default class Specialization extends React.Component<{},{}>{
    render(){
        return(
        <>
            <GridCell span={4} phone={6}>Neurolog</GridCell>
            <GridCell span={4} phone={6}>Ortopedia</GridCell>
            <GridCell span={4} phone={6}>Pediatra</GridCell>
            <GridCell span={4} phone={6}>Neurolog</GridCell>
            <GridCell span={4} phone={6}>Ortopedia</GridCell>
            <GridCell span={4} phone={6}>Pediatra</GridCell>
            <GridCell span={4} phone={6}>Neurolog</GridCell>
            <GridCell span={4} phone={6}>Ortopedia</GridCell>
            <GridCell span={4} phone={6}>Pediatra</GridCell>
         
        </>    
        )
    }
}

