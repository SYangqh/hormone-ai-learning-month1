import { useState } from 'react';
import VectorVisualizer from './components/VectorVisualizer';
import HormoneSliders from './components/HormoneSliders';
import './App.css';

function App() {
  const [hormones, setHormones] = useState({
    energy: 0.8,
    curiosity: 0.5,
    stress: 0.3,
  });

  const handleChange = (name: string, value: number) => {
    if (name === 'reset') {
      setHormones({ energy: 0.8, curiosity: 0.5, stress: 0.3 });
      return;
    }
    setHormones((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="app">
      <h1>人工激素系统 · 第1周可视化仪表盘</h1>
      <p>拖动滑块 = 改变激素浓度（向量） → 观察3D箭头如何“驱动”机器人行为</p>

      <div className="dashboard">
        <VectorVisualizer hormones={hormones} />
        <HormoneSliders hormones={hormones} onChange={handleChange} />
      </div>

      <div className="note">
        <h3>本周思考题：</h3>
        <p>1. 为什么激素浓度可以看作一个3D向量？</p>
        <p>2. 如果curiosity向量增大，如何用线性变换“加速探索”？</p>
      </div>
    </div>
  );
}

export default App;
