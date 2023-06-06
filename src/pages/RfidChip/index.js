import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const loader = new GLTFLoader();
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export const initRFID = () => {
  // 获取canvas元素
  const canvas = document.getElementById('webgl');

  // 创建场景
  const scene = new THREE.Scene();

  // 创建相机
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000045, window.innerWidth / window.innerHeight, 1, 100000);
  camera.position.set(0, 0, 200); //设置相机位置
  scene.add(camera)

  // 添加灯光
  // const directionLight = new THREE.DirectionalLight(0xffffff)
  // directionLight.position.set(5, 0, 0)
  // scene.add(directionLight);
  // 添加灯光
  // const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  // scene.add(ambientLight);


  // 创建渲染器
  const renderer = new THREE.WebGLRenderer({ canvas })
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 设置像素比
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  // 设置场景颜色
  // renderer.setClearColor(new THREE.Color(0xf65144), 1)

  // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // const cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );

  // camera.position.z = 5;
  
  loader.load('/gltf/key_card_lvl_1/scene.gltf', function (gltf) {
    gltf.scene.scale.set(10, 10, 10);
    // myScene = gltf.scene
    scene.add(gltf.scene);
  }, undefined, function (error) {
    console.error(error);
  });
  const spotLight = new THREE.SpotLight( 0xffffff,3,20,Math.PI / 3,1,2 );
  spotLight.position.set( 100, 10, 100 );
  spotLight.visible = true
  scene.add(spotLight);
  // 添加控制器
  new OrbitControls(camera, document.body);
  const start = () => {
    // 渲染场景
    renderer.render(scene, camera)

    requestAnimationFrame(start);
  }

  start();
}