<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default {
  mounted() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.lookAt(scene.position);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    // const light = new THREE.PointLight(0xffffff, 80, 100);
    // light.position.set(4, 15, 12);
    // scene.add(light);

    const width = 10;
    const height = 10;
    const intensity = 1;
    const rectLight = new THREE.RectAreaLight(
      0xffffff,
      intensity,
      width,
      height
    );
    rectLight.position.set(0, 10, 10);
    rectLight.lookAt(0, 0, 0);
    scene.add(rectLight);

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
    controls.autoRotateSpeed = 4.5;

    const sphereGeometry = new THREE.SphereGeometry(10, 32, 30);
    const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xf6ffff });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(0, 0, 0);
    scene.add(sphere);

    camera.position.z = 50;

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

<style lang="scss" scoped></style>
