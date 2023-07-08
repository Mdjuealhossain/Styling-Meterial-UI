
"use client"
import "./globals.css"
import ButtonCom from "./MuiStuleComponents/ButtonComponents/index"
import AddCard from "./MuiStuleComponents/CardComponents/Addcard"
import Mui from "./MuiStuleComponents/OverrideMuiComponent/index"
import SimpoleCard from "./OverRideThemeFoeCard/simpoleCard/index"
import Typography from "./MuiStuleComponents/Typography/index"
import {theme} from "./ThemingContainet/createTheme"
import ComplexInterCard from "./OverRideThemeFoeCard/ComplexIntCard/index"
import Inputfild from "./OverRideThemeFoeCard/Input/index"
import BtnGroup from "./MuiStuleComponents/ButtonGroup/index"
import Cheekbox from "./MuiStuleComponents/CheeckBox/index"
import FlButton from "./MuiStuleComponents/FAB/index"
import ListMui from "./MuiStuleComponents/List/index"



export default function Home() {
  return (
<div style={{display:"flex",justifyContent:"center" }}>
<ListMui />

</div>
  )
}
