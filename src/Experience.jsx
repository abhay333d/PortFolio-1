import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );
  return (
    <>
      <color args={["#1a1a24"]} attach={"background"} />
      <Environment preset="city" />
      <OrbitControls makeDefault />

      <Float>
        <primitive object={computer.scene} position-y={-1.2} />
      </Float>
    </>
  );
}
