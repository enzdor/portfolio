import './App.css';
import React, {useState, useRef, Suspense} from "react";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {OrbitControls, Html, Bounds, Text} from "@react-three/drei";
import Desk from "./Components/Desk";
import Bookshelf from "./Components/Bookshelf";
import Chess from "./Components/Chess";
import Baseball from "./Components/Baseball";
import Books from "./Components/Books";
import Folders from "./Components/Folders";
import Cabinet from "./Components/Cabinet";
import {useSpring, animated} from "@react-spring/three";
import {createTheme, ThemeProvider} from "@mui/material/styles"
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


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

function Plane(props){
	return (
		<animated.mesh 
			receiveShadow
			castShadow
			{...props} 
		>
			<planeGeometry args={[23,23]}/>
			<meshStandardMaterial color={props.color}  roughness={0.5}/>
		</animated.mesh>
	)
}


function Box(props){
	const ref = useRef()

	useFrame(() => {
		ref.current.rotation.y += 0.01
	})

	return(
		<mesh {...props} ref={ref}>
			<boxGeometry args={[1, 1, 1]}/>
			<meshStandardMaterial color="green" roughness={0.7} />
		</mesh>
	)
}


function HtmlDesk(){
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

function HtmlBookshelf(){
	return(
		<Container sx={{width: "50%", margin: "0", padding: "0"}}>
			<Typography variant="h1" sx={{mb: 2}}>Books</Typography>
			<Typography variant="h5" sx={{width: "100%"}}>One of the things that I really like to do in my free time is to read. Some of my favourite books are The Old Man and the Sea, Crime and Punishment and A Clockwork Orange. You can see all of the books I've read and want to read here:</Typography>
			<Typography variant="h5" sx={{mt: 2}} className="underline"><a className="link" href="https://www.goodreads.com/user/show/137633524-enzo" target="_blank">goodreads</a></Typography>
		</Container>	
	)
}
function HtmlBaseball(){ 
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

function HtmlChess(){ 
	return( 
		<Container sx={{width: "50%", margin: "0", padding: "0"}}> 
			<Typography variant="h1" sx={{mb: 2}}>Chess</Typography> 
			<Typography variant="h5" sx={{width: "100%"}}>I also really like chess. Most of the time I am solving puzzles but I also like playing games. There is nothing similar to the feeling of losing and winning a game of chess. You can see my lichess profile below:</Typography>
			<Typography variant="h5" className="underline" sx={{mt: 2}}><a href="https://lichess.org/@/enzdor" className="link" target="_blank">lichess</a></Typography>
		</Container>
	)
}

function HtmlBooks(){
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

function HtmlFolder(){
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

function App() {

	const [desk, setDesk] = useState(false)
	const [bookshelf, setBookshelf] = useState(false)
	const [baseball, setBaseball] = useState(false)
	const [chess, setChess] = useState(false)
	const [cabinet, setCabinet] = useState(false)
	const [folder, setFolder] = useState(false)
	const [books, setBooks] = useState(false)

	const springs = useSpring({
		deskPosition: desk ? [-3, -0.5, 0] : [0,-2,0],
		deskScale: desk ? 0.006 : bookshelf || baseball || chess || cabinet || books || folder ? 0 : 0.01,
		bookshelfPosition: bookshelf ? [-3,-0.75,0] : [4.15,-1.41,0],
		bookshelfScale: bookshelf ? 0.0027 : desk || baseball || chess || cabinet || books || folder ? 0 : 0.0037,
		baseballPosition: baseball ? [-3, 0.75, 0] : [5.65,-0.545,0],
		baseballScale: baseball ? 1 : desk || bookshelf || chess || cabinet || books || folder ? 0 : 1,
		chessPosition: chess ? [-3, 0.4, 0] : [-4.75, -2, 1],
		chessScale: chess ? 0.15 : desk || bookshelf || baseball || cabinet || books || folder ? 0 : 0.05,
		cabinetPosition: cabinet ? [-4, -0.5, 0] : [-3.6, -1.01, 0],
		cabinetScale: cabinet ? 0.45 : desk || bookshelf || baseball || chess || books || folder ? 0 : 0.45,
		htmlPosition: desk || bookshelf || baseball || chess || cabinet || books || folder ? [0, 0, 0] : [10, 10, 10],
		wallPosition: desk || bookshelf || baseball || chess || cabinet || books || folder ? [0,-30,-3] : [0,0,-3],
		floorPosition: desk || bookshelf || baseball || chess || cabinet || books || folder ? [0, -2, 33] : [0, -2, -3],
		booksPosition: books ? [-3, 0, 0] : [0, -1, 0],
		booksScale: cabinet || books ? 1 : 0,
		folderPosition: folder ? [-3, -0.5, 0] : [4, -1, 0],
		folderScale: cabinet || folder ? 7 : 0,
	})

	return (
		<ThemeProvider theme={theme}>
			<div id="canvas-wrapper">
				<Canvas camera={{position: [0.5, 0, 4.5], pov: 70, zoom: 2.5}} dpr={[1,2]} shadows>
					<spotLight position={[0,10,10]} intensity={0.8} castShadow penumbra={1} shadowBias={-0.001}/>
					<spotLight position={[-5,10,0]} intensity={0.3} castShadow penumbra={1}/>
					<Suspense fallback={null}>
						<Bounds fit clip observe>
							{ desk 
								? <>
									<Html position={[0,2.75, -4]} wrapperClass="html-wrapper" >
										<HtmlDesk /> 
									</Html>
								</>
								: <></>
							}
							{ bookshelf 
								? <Html position={[0,2.75, -4]} wrapperClass="html-wrapper">
									<HtmlBookshelf /> 
								</Html>
								: <></>
							}
							{ baseball 
								? <Html position={[0,2.75, -4]} wrapperClass="html-wrapper">
										<HtmlBaseball /> 
								</Html>
								: <></>
							}
							{ chess 
								? <Html position={[0,2.75, -4]} wrapperClass="html-wrapper">
										<HtmlChess /> 
								</Html>
								: <></>
							}
							{ cabinet
								? <Html position={[0, 2, 0]} center>
									<Typography variant="h1">Projects</Typography>
								</Html>
								: <></>

							}
							{ books 
								? <Html position={[0,2.75, -4]} wrapperClass="html-wrapper">
										<HtmlBooks /> 
								</Html>
								: <></>
							}
							{ folder 
								? <Html position={[0,2.75, -4]} wrapperClass="html-wrapper">
										<HtmlFolder /> 
								</Html>
								: <></>
							}
							<Desk 
								position={ springs.deskPosition } 
								scale={ springs.deskScale } 
								rotation={[0, -Math.PI/2,0]}
								onClick={(e) => (e.stopPropagation(), setDesk(!desk))}
								castShadow receiveShadow
							/>	
							<Bookshelf
								position={ springs.bookshelfPosition }
								scale={ springs.bookshelfScale }
								onClick={(e) =>(e.stopPropagation(),setBookshelf(!bookshelf))}
							/>
							<Chess
								scale={ springs.chessScale }
								position={ springs.chessPosition }
								rotation={[0, -Math.PI /1, 0]}
								onClick={(e) => (e.stopPropagation(),setChess(!chess))}
							/>
							<Cabinet
								rotation={[0, -Math.PI /2, 0]}
								position={ springs.cabinetPosition }
								scale={ springs.cabinetScale}
								onClick={(e) => (e.stopPropagation(),setCabinet(!cabinet))}
							/>
							<Baseball
								position={ springs.baseballPosition }
								rotation={[0,0,0.3]}
								scale={ springs.baseballScale }
								onClick={(e) => (e.stopPropagation(),setBaseball(!baseball))}
							/>
							<Folders
								position={ springs.folderPosition }
								rotation={[0, -Math.PI /2, 0]}
								scale={ springs.folderScale }
								onClick={(e) => (e.stopPropagation(), setCabinet(!cabinet), setFolder(!folder))}
							/>
							<Books
								position={ springs.booksPosition }
								scale={ springs.booksScale }
								onClick={(e) => (e.stopPropagation(), setCabinet(!cabinet), setBooks(!books))}
							/>
						</Bounds>
						<Plane position={ springs.floorPosition } rotation={[-Math.PI/2 , 0,0]} color="grey" receiveShadow castShadow/>
						<Plane position={ springs.wallPosition } color="white" receiveShadow castShadow/>
						<OrbitControls maxPolarAngle={Math.PI / 2.25} minPolarAngle={0} makeDefault/>
					</Suspense>
				</Canvas>
			</div>
		</ThemeProvider> 
	);
}

export default App;
