
import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from "@mui/material/Typography";
import {createTheme, ThemeProvider} from "@mui/material/styles"

const theme = createTheme({
	palette: {
		primary: {
			main: "#000000"
		},
		secondary: {
			main: "#000dff" 
		}
	}
})

export function HtmlDesk(){
	return(
		<Container sx={{width: "50%", margin: "0", padding: "0"}}>
			<Typography variant="h1" sx={{mb: 2}}>About</Typography> 	
			<Typography variant="h5" sx={{width: "100%"}}>Hi! My name is Enzo and I am a web developer. I love working with new technologies and learning how to use them. I have experience with React, SQL databases, firebase, building REST APIs and Stripe. Some of the libraries that I really like are mui and react-three-fiber. You can find me here: </Typography>
			<Stack direction="row" spacing={3} sx={{mt: 2}}>
				<a href="https://github.com/enzdor" target="_blank" className="link"><GitHubIcon fontSize="large" color="black" /></a>
				<a href="https://www.linkedin.com/in/enzo-lopes-baitelo-913b121b1/" target="_blank" className="link"><LinkedInIcon fontSize="large" color="black"/></a>
			</Stack>
		</Container>
	)
}

export function HtmlBookshelf(){
	return(
		<Container sx={{width: "50%", margin: "0", padding: "0"}}>
			<Typography variant="h1" sx={{mb: 2}}>Books</Typography>
			<Typography variant="h5" sx={{width: "100%"}}>One of the things that I really like to do in my free time is to read. Some of my favourite books are The Old Man and the Sea, Crime and Punishment and A Clockwork Orange. You can see all of the books I've read and want to read here:</Typography>
			<Typography variant="h5" sx={{mt: 2}} className="underline"><a className="link" href="https://www.goodreads.com/user/show/137633524-enzo" target="_blank">goodreads</a></Typography>
		</Container>	
	)
}
export function HtmlBaseball(){ 
	return( 
		<Container sx={{width: "50%", margin: "0", padding: "0"}}> 
			<Typography variant="h1" sx={{mb: 2}}>Baseball</Typography> 
			<Typography variant="h5" sx={{width: "100%"}}>I really like baseball, I think it is my favourite sport to watch. I have no idea how to swing a bat or throw a curveball but I love it anyway. I'm a Mariners fan, I hope we reach the playoffs! I really like stats, here are some websites that I like:</Typography> 
			<Stack direction="row" spacing={3} sx={{mt: 2}}>
				<Typography variant="h5" className="underline"><a href="https://www.baseball-reference.com/" className="link" target="_blank">baseball-reference</a></Typography> 
				<Typography variant="h5" className="underline"><a href="https://baseballsavant.mlb.com/" className="link" target="_blank">baseball savant</a></Typography> 
			</Stack>
		</Container>	
	)
}

export function HtmlChess(){ 
	return( 
		<Container sx={{width: "50%", margin: "0", padding: "0"}}> 
			<Typography variant="h1" sx={{mb: 2}}>Chess</Typography> 
			<Typography variant="h5" sx={{width: "100%"}}>I also really like chess. Most of the time I am solving puzzles but I also like playing games. There is nothing similar to the feeling of losing and winning a game of chess. You can see my lichess profile below:</Typography>
			<Typography variant="h5" className="underline" sx={{mt: 2}}><a href="https://lichess.org/@/enzdor" className="link" target="_blank">lichess</a></Typography>
		</Container>
	)
}

export function HtmlBooks(){
	return(
		<ThemeProvider theme={theme}>
			<Container sx={{width: "50%", margin: "0", padding: "0"}}>
				<Typography variant="h1" sx={{mb: 2}}>Alejandría</Typography>
				<Typography variant="h5" sx={{width: "100%"}}>Alejandría is an ecommerce for selling and buying books. I created this project to gain a deeper understanding of React in general. I also wanted to implement popular libraries like Stripe, Auth0 and MUI. This was a great experience and very fun project to work on. You can visit the website and see the code below:</Typography>
				<Stack direction="row" spacing={3} sx={{mt: 2}}>
					<Typography variant="h5" className="underline"><a href="https://alejandria-website.vercel.app/" className="link" target="_blank">website</a></Typography>
					<Typography variant="h5" className="underline"><a href="https://github.com/enzdor/alejandria-website" className="link" target="_blank">github</a></Typography>
				</Stack>
			</Container>
		</ThemeProvider>
	)
}

export function HtmlFolder(){
	return(
		<ThemeProvider theme={theme}>
			<Container sx={{width: "50%", margin: "0", padding: "0"}}>
				<Typography variant="h1" sx={{mb: 2}}>Portfolio</Typography>
				<Typography variant="h5" sx={{width: "100%"}}>This website was the follow up to Alejandría. I had discovered three.js and react-three-fiber and wanted to learn how to use it. This was great experience and learned a lot from it. You can visit the source code below:</Typography>
				<Typography variant="h5" className="underline" sx={{mt: 2}}><a href="https://github.com/enzdor/portfolio" className="link" target="_blank">github</a></Typography>
			</Container>
		</ThemeProvider>
	)
}
