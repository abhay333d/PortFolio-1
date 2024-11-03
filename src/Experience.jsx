import { OrbitControls } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <color args={["#1a1a24"]} attach={"background"} />
      <OrbitControls makeDefault />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
