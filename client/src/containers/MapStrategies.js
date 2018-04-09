import React, { Component }     from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Containers
import {Trainc}         from '../containers/Trainc';
import {Miragec}        from '../containers/Miragec';
import {Infernoc}       from '../containers/Infernoc';
import {Nukec}          from '../containers/Nukec';
import {Cobblestonec}   from '../containers/Cobblestonec';
import {Overpassc}      from '../containers/Overpassc';
import {Dust2c}         from '../containers/Dust2c';
import {Cachec}         from '../containers/Cachec';

// Images
import miragehd         from '../images/hd/miragehd.jpg';
import trainhd          from '../images/hd/trainhd.jpg';
import infernohd        from '../images/hd/infernohd.jpg';
import nukehd           from '../images/hd/nukehd.jpg';
import cachehd          from '../images/hd/cachehd.jpg';
import overpasshd       from '../images/hd/overpasshd.png';
import cobblestonehd    from '../images/hd/cobblestonehd.jpg';
import dust2hd          from '../images/hd/dust2hd.png';

import index            from '../index';

import {MiddlePicker}   from '../containers/MiddlePicker';


import Home             from '../Home'


import ReactDOM         from 'react-dom';
import { Link }         from 'react-router-dom';
import {App}            from '../index';


export class MapStrategies extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentMap: null,
        }
    }

    componentDidMount(){
        this.getMapPick()
    }

    text; 
    getMapPick = () => {
        let maps = ['train', 'cache', 'overpass', 'mirage', 'nuke', 'cobblestone', 'inferno', 'dust2'];
        let mapImages = [trainhd, cachehd, overpasshd, miragehd, nukehd, cobblestonehd, infernohd, dust2hd];

        switch(this.props.map) {
            case "train":
            this.text = "Train is good!";
              break;
            case "cache":
            this.text = `I am not a fan of ${this.props.map}.`; // We should run a fetch function to get the strategies/setups from the Mongo DB.
              break;
            case "overpass":
            this.text = `I am not a fan of ${this.props.map}.`;
              break;
            case "mirage":
            this.text = `I am not a fan of ${this.props.map}.`;
              break;
            case "nuke":
            this.text = `I am not a fan of ${this.props.map}.`;
              break;
            case "cobblestone":
            this.text = `I am not a fan of ${this.props.map}.`;
              break;
            case "inferno":
            this.text = `I am not a fan of ${this.props.map}.`;
              break;
            case "dust2":
            this.text = `I am not a fan of ${this.props.map}.`;
              break;
            // Default
            this.text = 'Map';
          }
          this.setState({
              currentMap: this.props.map
          })
    }
    render(){

        return(
            <h1>{`I am not a fan of ${this.state.currentMap}`}</h1>
        )
    }
}