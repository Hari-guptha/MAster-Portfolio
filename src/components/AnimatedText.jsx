import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Vector3 } from "three";

const AnimatedText = ({ 
    text, 
    position = [0, 0, 0], 
    fontSize, 
    font, 
    delay = 0,
    children 
}) => {
    const textRef = useRef();
    const startPosition = new Vector3(-10, position[1], position[2]);
    const targetPosition = new Vector3(position[0], position[1], position[2]);
    const velocity = useRef(new Vector3());

    useEffect(() => {
        if (textRef.current) {
            textRef.current.position.copy(startPosition);
        }
    }, []);

    useFrame((state, delta) => {
        if (textRef.current && state.clock.elapsedTime > delay) {
            const direction = new Vector3().subVectors(targetPosition, textRef.current.position);
            const distance = direction.length();
            const speed = Math.min(0.05, distance / 20); // Reduced speed for smoother transition
            direction.normalize().multiplyScalar(speed);
            velocity.current.lerp(direction, 0.05); // Increased smoothing factor
            textRef.current.position.add(velocity.current);
        }
    });

    return (
        <Text
            ref={textRef}
            fontSize={fontSize}
            letterSpacing={-0.06}
            font={font}
            anchorX="center"
            anchorY="middle"
        >
            {text}
            {children}
        </Text>
    );
};

export default AnimatedText; 