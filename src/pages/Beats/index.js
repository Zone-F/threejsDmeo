import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// const loader = new FBXLoader();

export const init = () => {
  const canvas = document.getElementById('webgl');


  // 创建相机
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(1000, 500, 100)
  scene.add(camera)


  // 创建渲染器
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 创建场景
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xeaeaea);

  // 添加灯光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);


  // 添加控制器
  const controls = new OrbitControls(camera, document.body);
  // 是否有惯性
  controls.enableDamping = true;
  // 是否可以缩放
  controls.enableZoom = false;
  // 最近和最远距离
  controls.minDistance = 100;
  controls.maxDistance = 2000;
  // 开启右键拖动
  controls.enablePan = true;

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  const loader = new GLTFLoader();
  // loader.load('/gltf/small_residental_house/scene.gltf', (gltf) => {
  loader.load('/gltf/key_card_lvl_1/scene.gltf', (gltf) => {
    scene.add(gltf.scene);
  });


}