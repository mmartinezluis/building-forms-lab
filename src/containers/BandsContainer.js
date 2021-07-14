import React from 'react'
import Bands from '../components/Bands'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends React.Component {
    render() {
        return(
            <div>
                < BandInput addBand = {this.props.addBand} />
                < Bands bands = {this.props.bands} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       bands: state.bands
    }
}

const mapDispatchToProps = dispatch => ({ addBand: formData => dispatch( {type: 'ADD_BAND', payload: formData }) } )
  


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)