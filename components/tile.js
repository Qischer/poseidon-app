import { TimelineList } from "react-native-calendars"
import {Image} from 'react-native'


export default function Tile({corn, burning, x, y, z}) {
    if (corn) {
        return <Image
        source = {require("../assets/dirt_with_corn.png")}
        className = "tile"
        style = {{left: `${x}%`, top: `${y}%`, zIndex: z, 
        width: 50, height: 75, marginTop: (-35 )}}
        />
    } else if (burning) {
        return <Image
        source = {require("../assets/dirt_with_corn_fire.png")}
        className = "tile"
        style = {{left: `${x}%`, top: `${y}%`, zIndex: z, 
        width: 50, height: 75, marginTop: (-35 )}}
        />
    } else {
        return <Image
        source = {require("../assets/dirt.png")}
        className = "tile"
        style = {{left: `${x}%`, top: `${y}%`, zIndex: z, 
        width: 50, height: 50, marginTop: (-35 )}}
        />
    }
    
}

