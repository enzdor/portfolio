import './App.css';
import React, {useState, Suspense, useEffect} from "react";
import {OrbitControls, Html, Bounds} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Desk from "./Components/Desk";
import Bookshelf from "./Components/Bookshelf";
import Chess from "./Components/Chess";
import Baseball from "./Components/Baseball";
import Books from "./Components/Books";
import Folders from "./Components/Folders";
import Cabinet from "./Components/Cabinet";
import Typography from "@mui/material/Typography";
import {useSpring, animated} from "@react-spring/three";
import {HtmlDesk, HtmlChess, HtmlBooks, HtmlFolder, HtmlBaseball, HtmlBookshelf, HtmlVertical} from "./Html";

function Plane(props){
	return (
		<animated.mesh 
			receiveShadow
			castShadow
			{...props} 
		>
			<planeGeometry args={[40,40]}/>
			<meshStandardMaterial color={props.color}  roughness={0.5}/>
		</animated.mesh>
	)
}


function Scene(){
	const [desk, setDesk] = useState(false)
	const [bookshelf, setBookshelf] = useState(false)
	const [baseball, setBaseball] = useState(false)
	const [chess, setChess] = useState(false)
	const [cabinet, setCabinet] = useState(false)
	const [folder, setFolder] = useState(false)
	const [books, setBooks] = useState(false)
	const [vertical, setVertical] = useState(false)
	
	const springs = useSpring({
		deskPosition: desk ? [-3.5, -1, 0] : [-0.3,-2,0],
		deskScale: desk ? 0.006 : bookshelf || baseball || chess || cabinet || books || folder || vertical ? 0 : 0.01,
		bookshelfPosition: bookshelf ? [-3.5,-1,0] : [3.85,-1.41,0],
		bookshelfScale: bookshelf ? 0.0027 : desk || baseball || chess || cabinet || books || folder || vertical ? 0 : 0.0037,
		baseballPosition: baseball ? [-3.5, 0.5, 0] : [5.35,-0.545,0],
		baseballScale: baseball ? 1.5 : desk || bookshelf || chess || cabinet || books || folder || vertical ? 0 : 1,
		chessPosition: chess ? [-3.5, -0.1, 0] : [-5.05, -2, 1],
		chessScale: chess ? 0.15 : desk || bookshelf || baseball || cabinet || books || folder || vertical ? 0 : 0.05,
		cabinetPosition: cabinet ? [-4.5, -0.2, 0] : [-3.9, -1.01, 0],
		cabinetScale: cabinet ? 0.45 : desk || bookshelf || baseball || chess || books || folder || vertical ? 0 : 0.45,
		htmlPosition: desk || bookshelf || baseball || chess || cabinet || books || folder || vertical ? [0, 0, 0] : [10, 10, 10],
		wallPosition: desk || bookshelf || baseball || chess || cabinet || books || folder || vertical ? [0,-30,-3] : [0,0,-3],
		floorPosition: desk || bookshelf || baseball || chess || cabinet || books || folder || vertical ? [0, -2, 33] : [0, -2, -3],
		booksPosition: books ? [-3.5, -0.5, 0] : [0, -1, 0],
		booksScale: cabinet || books ? 1 : 0,
		folderPosition: folder ? [-3.5, -1, 0] : [4, -1, 0],
		folderScale: cabinet || folder ? 7 : 0,
	})

	const { size } = useThree()

	useEffect(() => {
		function checkVertical(){
			if (size.width < size.height){
				setDesk(false)
				setBookshelf(false)
				setBaseball(false)
				setCabinet(false)
				setChess(false)
				setFolder(false)
				setBooks(false)
				setVertical(true)
			} else {
				setVertical(false)
			}
		}

		checkVertical()

	}, [size])

	return(
		<>
			<spotLight position={[0,10,10]} intensity={0.8} castShadow penumbra={1} shadowBias={-0.001}/>
			<spotLight position={[-5,10,0]} intensity={0.3} castShadow penumbra={1}/>
			<Suspense fallback={null}>
				<Bounds>
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
							<Typography variant="h1" sx={{fontSize: {xs: '2rem', lg: '6rem'}}}>Projects</Typography>
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
					{ vertical
						? <Html position={[0, 0, 0]} wrapperClass="html-wrapper" center>
							<HtmlVertical />
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
			</Suspense>
		</>
	)
}


export default Scene
