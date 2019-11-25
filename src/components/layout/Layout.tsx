import React from 'react'
import Header from './../Header'
import {GridCell,Grid, GridCellProps} from '@rmwc/grid'
import Specialization from '../Specialization';
import styled from 'styled-components';
import '@material/layout-grid/dist/mdc.layout-grid.css';

export default class Layout extends React.Component<{},{}>{
    render(){
        return(
            <Grid>

               
                    <HeaderCell span={12}>
                        <Header/>
                    </HeaderCell>
               

              
                    <ChooseCell span={12}>
                    <h2>Wybierz:</h2>
                    </ChooseCell>
               

               
                    <Specialization/>
                  

                
                    <GridCell span={12}>
                    <p>go to the next page</p>
                    </GridCell>
               


       
       
        
       
            </Grid>
        )
    }
}

const HeaderCell = styled (GridCell as React.ComponentType<GridCellProps>
  )`
    display:flex;
    justify-content:flex-end;
    padding-right:15px;
`

const ChooseCell = styled (GridCell as React.ComponentType<GridCellProps>
    )`
    display:flex;
    justify-content:center;
`