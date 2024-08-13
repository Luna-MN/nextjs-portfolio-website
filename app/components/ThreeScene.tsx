'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ModelViewer: React.FC = () => {
    return (
        <Canvas style={{ height: '500px', width: '100%' }}>
            <Model />
        </Canvas>
    );
};

export const Model: React.FC = () => {
    const myModel = useLoader(GLTFLoader, '/Dagger.glb');
    const modelRef = useRef<Mesh>(null);

    useFrame((_state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.z += delta / 2;
            modelRef.current.rotation.x += delta / 2;
        }
    });

    return (
        <>
            <pointLight
                position={[-10, -10, -10]}
                color="#ffffff"
                intensity={500}
            />
            <pointLight
                position={[10, 10, 10]}
                color="#ffffff"
                intensity={500}
            />
            <primitive object={myModel.scene} ref={modelRef} />
        </>
    );
};
