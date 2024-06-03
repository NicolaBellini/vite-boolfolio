<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default {
  mounted() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.lookAt(scene.position);

    let object;

    // let controls2;

    let objectToRender = "stereo";

    const loader = new GLTFLoader();

    loader.load(
      `model/${objectToRender}/scene.gltf`,
      function (gltf) {
        object = gltf.scene;
        scene.add(object);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100) + "% loaded";
      },
      function (error) {
        console.error(error);
      }
    );

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Aumenta il secondo parametro (0.5) per aumentare l'intensità
    scene.add(ambientLight);

    const light = new THREE.PointLight(0xffffff, 800, 1000); // Aumenta il secondo parametro (800) per aumentare l'intensità
    light.position.set(2, 4, 10);
    scene.add(light);
    // const rectLightHelper = new RectAreaLightHelper(rectLight);
    // rectLight.add(rectLightHelper);

    const renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setClearColor(0x888888, 1);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.5;

    // const sphereGeometry = new THREE.SphereGeometry(10, 32, 30);
    // const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xf6ffff });
    // const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    // sphere.position.set(0, 0, -10);
    // scene.add(sphere);

    camera.position.z = 2;

    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", onWindowResize);

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();
  },
};
</script>

<template>
  <canvas ref="canvas" class="canva" />
</template>

<style scoped>
.three-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
