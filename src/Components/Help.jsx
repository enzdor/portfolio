import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
	palette: {
		primary: {
			main: '#000000'
		}, 
		secondary: {
			main: '#ffffff'
		}
	}
})

export default function Help(){
	return(
		<ThemeProvider theme={theme}>
			<div className="help-container">
				<Container sx={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
					<Container>
						<Typography variant="h3" color="white">
							Welcome to my website!
						</Typography>
						<Typography variant="h6" color="white">
							For you to explore the different sections of the website, just click the different objects (bookshelf, desk, cabinet, etc.). If you don't know where to go, just click an object!	
						</Typography>
					</Container>
				</Container>
			</div>
		</ThemeProvider>
	)
}
