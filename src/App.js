import './App.css';
import React from "react";
import {Canvas} from "@react-three/fiber";
import Scene from "./Scene"


function App() {
	return (
		<div id="canvas-wrapper">
			<Canvas camera={{position: [0.5, 0, 4.5], pov: 70, zoom: 2.5}} dpr={[1,2]} shadows>
				<Scene />
			</Canvas>
		</div>
	);
}

export default App;
