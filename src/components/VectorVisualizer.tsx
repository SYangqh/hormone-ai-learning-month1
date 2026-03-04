import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei'; // ← removed AxesHelper
import * as THREE from 'three';

interface Props {
  hormones: { energy: number; curiosity: number; stress: number };
  matrix: number[][]; // 新增
}
export default function VectorVisualizer({ hormones, matrix }: Props) {
  const scale = 3;
  const v = new THREE.Vector3(
    hormones.energy * scale,
    hormones.curiosity * scale,
    hormones.stress * scale
  );

  // 计算 M × v
  const modulated = new THREE.Vector3(
    matrix[0][0] * v.x + matrix[0][1] * v.y + matrix[0][2] * v.z,
    matrix[1][0] * v.x + matrix[1][1] * v.y + matrix[1][2] * v.z,
    matrix[2][0] * v.x + matrix[2][1] * v.y + matrix[2][2] * v.z
  );

  return (
    <div style={{ width: '600px', height: '500px', border: '2px solid #333' }}>
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <axesHelper args={[5]} /> {/* ← lowercase + no import needed */}
        <arrowHelper
          args={[
            modulated.clone().normalize(),
            new THREE.Vector3(),
            modulated.length(),
            'purple',
            0.25,
            0.12,
          ]}
        />
        <Text
          position={[modulated.x * 1.1, modulated.y * 1.1, modulated.z * 1.1]}
          fontSize={0.35}
          color="purple"
        >
          Modulated Motive {modulated.length().toFixed(2)}
        </Text>
        {/* day1 */}
        {/* <arrowHelper
          args={[
            totalVec.clone().normalize(),
            new THREE.Vector3(),
            totalVec.length(),
            'purple',
            0.2,
            0.1,
          ]}
        />
        <Text
          position={[totalVec.x * 1.1, totalVec.y * 1.1, totalVec.z * 1.1]}
          fontSize={0.35}
          color="purple"
        >
          Total Motive {totalVec.length().toFixed(2)}
        </Text> */}
        {/* day2*/}
        {/*         
        <arrowHelper
          args={[
            transformed.clone().normalize(),
            new THREE.Vector3(),
            transformed.length(),
            'purple',
            0.2,
            0.1,
          ]}
        />
        <Text
          position={[transformed.x * 1.1, transformed.y * 1.1, transformed.z * 1.1]}
          fontSize={0.35}
          color="purple"
        >
          Modulated Motive
        </Text>
         */}
        {/* // 画中间向量（黄色虚线） */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}
