import { useState } from "react";
import App from "./App";
import Help from "./Components/Help";
import Typography from "@mui/material/Typography";

export default function Preapp(){
	const [showHelp, setShowHelp] = useState(true)

	return(
		<>
			<App />
			<Typography variant="h5" color={showHelp ? 'white' : 'black'} sx={{position: 'absolute', top: '0', left: '0', zIndex: '100', m: '0.5rem', cursor: 'pointer', opacity: showHelp ? '1' : '0.3'}} onClick={() => {setShowHelp(!showHelp)}}>{showHelp ? 'Close' : 'Help'}</Typography>
			{showHelp
				? <Help />
				: <></>
			}
		</>
	)
}
