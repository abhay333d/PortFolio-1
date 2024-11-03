import { OrbitControls, useGLTF } from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );
  return (
    <>
      <color args={["#1a1a24"]} attach={"background"} />
      <OrbitControls makeDefault />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      <primitive object={computer.scene} />
    </>
  );
}
