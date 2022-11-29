import * as THREE from "three";
import "./style.css";


const container = document.querySelector(".cont");

//Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

//sphere 
const top = new THREE.TorusGeometry( 0.9, 0.07, 30, 200 );
const mat = new THREE.PointsMaterial({
    size: 0.01,
});
const sphere = new THREE.Points(top, mat);
scene.add(sphere);


//sphere 1
const tup = new THREE.TorusGeometry( 0.7, 0.05, 30, 200 );
const mit = new THREE.PointsMaterial({
    size: 0.01,
});
const sphere1 = new THREE.Points(tup, mit);
scene.add(sphere1);

//sphere 2
const txp = new THREE.TorusGeometry( 0.4, 0.05, 30, 200 );
const mzt = new THREE.PointsMaterial({
    size: 0.01,
});
const sphere2 = new THREE.Points(txp, mzt);
scene.add(sphere2);

//sphere 3
const tpp = new THREE.TorusGeometry( 0.2, 0.05, 30, 200 );
const mtt = new THREE.PointsMaterial({
    size: 0.01,
});
const sphere3 = new THREE.Points(tpp, mtt);
scene.add(sphere3);

//sphere 4
const tppp = new THREE.TorusGeometry( 1.2, 0.1, 15, 50 );
const mttt = new THREE.MeshPhysicalMaterial({
    color: 0x575757,
    emissive: 0x000000,
    wireframe: true
})
mttt.reflectivity = 0
mttt.roughness = 0
mttt.metalness = 0.4
mttt.clearcoat = 0
const sphere4 = new THREE.Mesh(tppp, mttt);
scene.add(sphere4);


//Circle
const tip = new THREE.SphereGeometry( 0.1, 8, 8 );
const mut = new THREE.MeshPhysicalMaterial( {
    color: 0x0032FF,
    emissive: 0x000000,
    flatShading: true,
    wireframe: true
} );
mut.reflectivity = 0
mut.roughness = 0
mut.metalness = 0.4
mut.clearcoat = 0
const circle = new THREE.Mesh(tip, mut);
scene.add(circle);


//Light
const directionalLight = new THREE.DirectionalLight( 0xFFFFFF, 2 );
scene.add( directionalLight );

const light = new THREE.PointLight( 0xB3BAFF, 1.5, 50 );
light.position.set( 10, 0, 20 );
scene.add( light );

const light1 = new THREE.PointLight( 0xFFFFFF, 0.75, 50 );
light1.position.set( -20, 0, 20 );
scene.add( light1 );



//Particles1
const particlesGeometry = new THREE.BufferGeometry();
const counts = 20000;

const positions = new Float32Array(counts * 5);
for ( let i = 0; i < counts * 100; i++){
    positions[i + 1] = (Math.random() -0.5) * 35;
}

particlesGeometry.setAttribute(
    'position', 
    new THREE.BufferAttribute(positions, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    emissive: 0xFFFFFF
});
particlesMaterial.size = 0.02;
particlesMaterial.sizeAttenuation = true;

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);


//Renderer
const renderer = new THREE.WebGL1Renderer({ antialias: true, alpha: true});
renderer.setSize(window.innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);




//Animate
function animate() {

    particles.rotation.y += 0.003;

    circle.rotation.z -= 0.02;
    circle.rotation.x += 0.02;

    sphere.rotation.z -= 0.002;
    sphere.rotation.x += 0.03;
    sphere.rotation.y += 0.03;

    sphere1.rotation.z += 0.002;
    sphere1.rotation.y -= 0.03;

    sphere2.rotation.z += 0.002;
    sphere2.rotation.x -= 0.03;

    sphere3.rotation.z += 0.002;
    sphere3.rotation.y -= 0.03;

    sphere4.rotation.x = 2;
    sphere4.rotation.z -= 0.002;


    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();