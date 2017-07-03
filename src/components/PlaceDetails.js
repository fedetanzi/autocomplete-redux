/**
 * Created by federicotanzi on 7/3/17.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'


class PlaceDetails extends Component{

    static propTypes = {
        comuna: PropTypes.string,
        barrio: PropTypes.string,
        comisaria: PropTypes.string,
        area_hospitalaria: PropTypes.string,
        region_sanitaria: PropTypes.string,
        distrito_escolar: PropTypes.string,
        seccion_catastral: PropTypes.string,
        distrito_economico: PropTypes.string,
        codigo_de_planeamiento_urbano: PropTypes.string,
        partido_amba: PropTypes.string,
        localidad_amba: PropTypes.string
    };

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default PlaceDetails