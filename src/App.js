import './App.css';
import React, { useEffect, useState } from "react";
import {Canvas} from "@react-three/fiber";
import Scene from "./Scene";

function App() {

	return (
			<div id="canvas-wrapper">
				<Canvas camera={{position: [0, 1.5, 12], pov: 70, zoom: 2.5}} dpr={[1,2]} shadows>
					<Scene />
				</Canvas>
			</div>
	);
}

export default App;
