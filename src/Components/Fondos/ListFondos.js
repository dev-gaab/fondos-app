import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import axios from 'axios'

import Paper from '@material-ui/core/Paper';
import {
  SortingState,
  SearchState,
  IntegratedFiltering,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  Toolbar,
  SearchPanel,
  TableHeaderRow,
  VirtualTable,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';

export default class ListFondos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {name: 'fma_run_fondo', title: 'Run'},
        {name: 'fma_nombre', title: 'Entidad'},
        {name: 'fma_razon_social_administradora', title: 'Administrador'},
        {name: 'fma_rut_administrador', title: 'R.U.T Administrador'},
        {name: 'fma_fecha_deposito', title: 'Fecha Deposito'},
        {name: 'fma_fecha_ini_operaciones', title: 'Fecha Ini. Ope.'},
        {name: 'fma_resolucion_aprobatoria', title: 'Resolución Aprob.'},
        {name: 'fma_nro_registro', title: 'Nro. Registro'},
        {name: 'fma_vigencia', title: 'Vigencia'},
        {name: 'actions', title: 'Acciones'}
      ],
      fondos: [],
      tableColumnExtensions: [
        { columnName: 'fma_nombre', wordWrapEnabled: true },
        { columnName: 'fma_razon_social_administradora', wordWrapEnabled: true },
        { columnName: 'fma_resolucion_aprobatoria', wordWrapEnabled: true },
      ],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3100/api/fondos')
      .then((res) => {
        let data = res.data.map((item) => {
          item.actions =
            <div>
              <a className="btn-floating waves-effect waves-light btn-small blue darken-2" style={{marginRight:"2px"}}><i className="material-icons">visibility</i></a>
              <a className="btn-floating waves-effect waves-light btn-small blue darken-2"><i className="material-icons">trending_up</i></a>
            </div>
          ;
          return item;
        });
        this.setState({
          fondos: data
        });
      })
      .catch((err) => {
        console.log(err)
      });
  }

  render() {
    const { columns, fondos, tableColumnExtensions } = this.state;
    return (
      <div>
        <Layout/>
        <main>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col s12 m10 offset-m1">
              <Paper>

                <Grid
                  rows={fondos}
                  columns={columns}
                >
                  <PagingState
                    defaultCurrentPage={0}
                    pageSize={20}
                  />
                  <IntegratedPaging />
                  <SortingState/>
                  <IntegratedSorting />
                  <SearchState />
                  <IntegratedFiltering/>
                  <VirtualTable columnExtensions={tableColumnExtensions}/>
                  <TableHeaderRow showSortingControls/>
                  <Toolbar />
                  <SearchPanel />
                  <PagingPanel />
                </Grid>
              </Paper>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
