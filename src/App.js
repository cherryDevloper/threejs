import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Float, OrbitControls } from '@react-three/drei';

const Scene1 = ({ animate }) => {
  return (
    <div className={`fade ${animate ? 'fade-in' : 'fade-out'}`}>
      <Canvas >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />


        <mesh >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
        <Float />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
const Scene2 = ({ animate }) => {
  return (
    <div className={`fade ${animate ? 'fade-in' : 'fade-out'}`}>
      <Canvas >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <mesh >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="green" />
        </mesh>

        <Float />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
const App = () => {

  const [animate, setAnimate] = useState(true);

  const Nav = () => {
    return (
      <div>
        <ul>
          <li>
            <Link to="/scene1" onClick={() => setAnimate(true)}>
              Scene 1
            </Link>
          </li>
          <li>
            <Link to="/scene2" onClick={() => setAnimate(true)}>
              Scene 2
            </Link>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <Router>
      <Nav />
      <div className={`fade ${animate ? 'fade-in' : 'fade-out'}`}>

        <Routes>

          <Route path="/scene1" element={<Scene1 animate={animate} />} />

          <Route path="/scene2" element={<Scene2 animate={animate} />} />
        </Routes>

      </div>

    </Router>
  );
};

export default App;
