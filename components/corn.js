import { TimelineList } from "react-native-calendars"
import {Image} from 'react-native'


export default function Corn({src, x, y, row_num, z}) {
    return <Image
        source = {require("../assets/corn.png")}
        className = "corn"
        style = {{left: `${x}%`, top: 0, zIndex: z, 
                width: 50, height: 50, marginTop: -(`${y}%`), position: 'absolute'}}
    />
}

