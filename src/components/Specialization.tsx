import React from 'react'
import {GridCell} from '@rmwc/grid'
import '@material/layout-grid/dist/mdc.layout-grid.css';
import {Button} from '@rmwc/button'
import '@material/button/dist/mdc.button.css';
import styled from 'styled-components'


export default class Specialization extends React.Component<{},{}>{
    render(){
        return(
        <>
            <SpecializeCell desktop={3} span={4} phone={6} >
                <Button label="Unelevated" unelevated />
            </SpecializeCell>
            <SpecializeCell desktop={3} span={4} phone={6} >
                <Button label="Unelevated" unelevated />
            </SpecializeCell>
            <SpecializeCell desktop={3} span={4} phone={6} >
                <Button label="Unelevated" unelevated />
            </SpecializeCell>
            <SpecializeCell desktop={3} span={4} phone={6} >
                <Button label="Unelevated" unelevated />
            </SpecializeCell>
            <SpecializeCell desktop={3} span={4} phone={6} >
                <Button label="Unelevated" unelevated />
            </SpecializeCell>
            <SpecializeCell  desktop={3} span={4} phone={6} >
                <Button label="Unelevated" unelevated />
            </SpecializeCell>
            <SpecializeCell desktop={3} span={4} phone={6} >
                <Button label="Unelevated" unelevated />
            </SpecializeCell>
            <SpecializeCell desktop={3} span={4} phone={6} >
                <Button label="Unelevated" unelevated />
            </SpecializeCell>
            
            
         
        </>    
        )
    }
}


const SpecializeCell = styled(GridCell as any)`
    display:flex;
    justify-content:center;
`

