import React from 'react';
import Tile from '../components/tile.js';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import {Grid, Row} from '../components/grid.js'
import style from '../App.module.css';
// import style from '../styles.scss';

//import {dirt} from '../assets';
const PLOT_SIZE = 9;
const TILE_ASPECT_RATIO = 150.0 / 111.0

export default function Plot({cornArray}) {
    var cornIndex = 0;
    const tiles = [];
    for (let i = PLOT_SIZE; i > 0; i--) {
        tiles.push(Array(PLOT_SIZE).fill("dirt"))
    }
    const yOffset = (1 / PLOT_SIZE) * (TILE_ASPECT_RATIO / 3); 
    return (
    <View style = {{width: 1000, flexDirection: 'column'}}>
        {tiles.map((row, y) => {
            const yBase = y * yOffset;
            const xBase = 50 - (100 / 18) * y;
            return row.map((tile, x) => {

                const z = x + 100;
                const yAbs = yBase + yOffset * x;
                const xAbs = xBase + (100 / 18) * x;
                var corn = false;
                var burning = false;
                if (cornArray[cornIndex] == 1) {
                    corn = true;
                    burning = false;
                } else if (cornArray[cornIndex] == 2) {
                    corn = false;
                    burning = true;
                }
                cornIndex++;
                return <Tile 
                        key = {`${x}${y}`} 
                        corn = {corn}
                        burning = {burning}
                        x = {xAbs} 
                        y = {yAbs} 
                        z = {z} 
                        style = {style.tile}/>;
            })
        })}
    </View>
    // <View style = {{width: 1000}}>
    //     <Grid style = {style.grid}>
    //         {Array(5)
    //         .fill("r")
    //         .map((_, rIndex) => (
    //             <Row key={rIndex} style = {style.row}>
    //             {Array(5)
    //                 .fill("t")
    //                 .map((_, tIndex) => (
    //                 <Tile
    //                     key={tIndex}
    //                     x={30}
    //                     y={30}
    //                     z={30}
    //                 />
    //                 ))}
    //             </Row>
    //         ))}
    //     </Grid>
    // </View>
    )
}