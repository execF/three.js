import './style.css'
import * as THREE from "three";

//Scene
const scene = new THREE.Scene();

//Mesh Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

//Size
const size = {
  width: 800,
  height: 600
};

//Camera
const camera = new THREE.PerspectiveCamera(75, size.width/size.height)
camera.position.z = 3;

scene.add(camera)

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.webgl')
})

renderer.setSize(size.width, size.height);
renderer.render(scene, camera);