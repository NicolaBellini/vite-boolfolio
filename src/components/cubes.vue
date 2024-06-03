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

    const light = new THREE.PointLight(0xffffff, 80, 100);
    light.position.set(4, 15, 12);
    scene.add(light);

    const renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;

    const geometry = new THREE.TorusGeometry(20, 20, 20);
    const material = new THREE.PointsMaterial({ color: 0x040000 });
    const cube = new THREE.Points(geometry, material);
    scene.add(cube);

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
