import './App.css';
import React, {useState, useRef, Suspense, useEffect} from "react";
import {Canvas, useLoader, useFrame} from "@react-three/fiber";
import {OrbitControls, Image, Html, PresentationControls, Bounds, useBounds} from "@react-three/drei";
import Desk from "./Components/Desk";
import Bookshelf from "./Components/Bookshelf";
import Chess from "./Components/Chess";
import File from "./Components/File";
import Baseball from "./Components/Baseball";
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
				<a href="https://github.com/enzdor" className="link"><GitHubIcon fontSize="large" color="black" /></a>
				<a href="https://www.linkedin.com/in/enzo-lopes-baitelo-913b121b1/" className="link"><LinkedInIcon fontSize="large" color="black"/></a>
			</Stack>
		</Container>
	)
}

function HtmlBookshelf(){
	return(
		<Container sx={{width: "50%", margin: "0", padding: "0"}}>
			<Typography variant="h1">Books</Typography>
			<Typography variant="h5">hello</Typography>
		</Container>	
	)
}

function App() {

	const [desk, setDesk] = useState(false)
	const [bookshelf, setBookshelf] = useState(false)
	const [baseball, setBaseball] = useState(false)
	const [chess, setChess] = useState(false)
	const [file, setFile] = useState(false)

	const springs = useSpring({
		deskPosition: desk ? [-3, -0.5, 0] : [0,-2,0],
		deskScale: desk ? 0.006 : bookshelf || baseball || chess || file ? 0 : 0.01,
		bookshelfPosition: bookshelf ? [-3,-0.75,0] : [4.15,-1.41,0],
		bookshelfScale: bookshelf ? 0.0027 : desk || baseball || chess || file ? 0 : 0.0037,
		baseballPosition: baseball ? [-3, 0.75, 0] : [5.65,-0.545,0],
		baseballScale: baseball ? 1 : desk || bookshelf || chess || file ? 0 : 1,
		chessPosition: chess ? [-3, 0.4, 0] : [-4.75, -2, 1],
		chessScale: chess ? 0.1 : desk || bookshelf || baseball || file ? 0 : 0.05,
		filePosition: file ? [-3, 0.5, 0] : [-3.6, -1, 0],
		fileScale: file ? 1 : desk || bookshelf || baseball || chess ? 0 : 1,
		htmlPosition: desk || bookshelf || baseball || chess || file ? [0, 0, 0] : [10, 10, 10],
		wallPosition: desk || bookshelf || baseball || chess || file ? [0,-30,-3] : [0,0,-3],
		floorPosition: desk || bookshelf || baseball || chess || file ? [0, -2, 33] : [0, -2, -3]
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
								? <Html position={[0,2.25, -4]} wrapperClass="html-wrapper">
										<HtmlDesk /> 
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
							<File 
								rotation={[0, -Math.PI /2, 0]}
								position={ springs.filePosition }
								scale={ springs.fileScale }
								onClick={(e) => (e.stopPropagation(),setFile(!file))}
							/>
							<Baseball
								position={ springs.baseballPosition }
								rotation={[0,0,0.3]}
								scale={ springs.baseballScale }
								onClick={(e) => (e.stopPropagation(),setBaseball(!baseball))}
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
