import * as THREE from 'three';

const sizes = {
  width: 800,
  height: 600,
}

const canvas = document.getElementById("webgl");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

// pixel ratio = 2 => per CSS pixel will be renderd by 2x2 (4pixel) on physical display device
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.render(scene, camera);
