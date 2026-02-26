import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei'; // ← removed AxesHelper
import * as THREE from 'three';

interface Props {
  hormones: { energy: number; curiosity: number; stress: number };
}

export default function VectorVisualizer({ hormones }: Props) {
  const energyVec = new THREE.Vector3(hormones.energy * 3, 0, 0);
  const curiosityVec = new THREE.Vector3(0, hormones.curiosity * 3, 0);
  const stressVec = new THREE.Vector3(0, 0, hormones.stress * 3);
  // 总动机向量 = energy + curiosity + stress
  const totalVec = new THREE.Vector3(
    hormones.energy * 3,
    hormones.curiosity * 3,
    hormones.stress * 3
  );
  return (
    <div style={{ width: '600px', height: '500px', border: '2px solid #333' }}>
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <axesHelper args={[5]} /> {/* ← lowercase + no import needed */}
        {/* energy vector (red) */}
        <arrowHelper
          args={[energyVec.clone().normalize(), new THREE.Vector3(), energyVec.length(), 'red']}
        />
        <Text position={[energyVec.x + 0.5, 0, 0]} fontSize={0.3} color="red">
          Energy {hormones.energy.toFixed(2)}
        </Text>
        {/* curiosity (green) */}
        <arrowHelper
          args={[
            curiosityVec.clone().normalize(),
            new THREE.Vector3(),
            curiosityVec.length(),
            'lime',
          ]}
        />
        <Text position={[0, curiosityVec.y + 0.5, 0]} fontSize={0.3} color="lime">
          Curiosity {hormones.curiosity.toFixed(2)}
        </Text>
        {/* stress (blue) */}
        <arrowHelper
          args={[stressVec.clone().normalize(), new THREE.Vector3(), stressVec.length(), 'blue']}
        />
        <Text position={[0, 0, stressVec.z + 0.5]} fontSize={0.3} color="blue">
          Stress {hormones.stress.toFixed(2)}
        </Text>
        <arrowHelper
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
        </Text>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
