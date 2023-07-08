
// for button start here

import { createTheme } from "@mui/material";
import { palette } from "./palette"
import { shadows } from "./boxshadow"
import { typography } from "./typography"
import { components } from "../OverRideThemeFoeCard/simpoleCard/ThemeComponent"



export const theme = createTheme({
    typography: typography,
    palette: palette,
    shadows: shadows,
    components: components


})
// for button end here