import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );
  return (
    <>
      <color args={["#1a1a24"]} attach={"background"} />
      <Environment preset="city" />
      <OrbitControls makeDefault />

      <primitive object={computer.scene} />
    </>
  );
}
