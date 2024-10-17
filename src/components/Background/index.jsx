import React, { useRef } from "react";
import { useLayoutEffect } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import { gsap } from 'gsap';
import logoImage from "../../assets/images/logo.png";
import "./styles.css"


const ParticleRing = () => {
  useLayoutEffect(() =>{
    gsap.to(".conteudo-img",{
      opacity: 1,
      rotate: "0deg",
      duration: 3
    })
    gsap.to(".conteudo-h1",{
      x: 0,
      opacity: 1,
      duration: 3
    })

    return () => {
      gsap.killTweensOf(".custom__brand-img");
    };
  }, []);

  return (
    <div className="relative">
        
      <Canvas
        camera={{
          position: [0, 0, 25], // Centraliza câmera diretamente à frente do centro da cena
          fov: 60,
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} enableZoom={false}/>
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

        {/* Conteúdo sobreposto no meio */}
      <div className="conteudo-sobreposto">
        <img src={logoImage} alt="Logo" className="conteudo-img" />
        <h1 className="conteudo-h1">GET WEB</h1>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
        />
    </Sphere>
  );
};

export default ParticleRing;