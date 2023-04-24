//First Scene
const scene = new THREE.Scene();

//second 3d images

const geometry = new THREE.SphereGeometry(3, 64, 64);  // (radius, width, height) create geomentry
const material = new THREE.MeshStandardMaterial({ color: "#00ff83" }); //for view of the objects looks like
const mesh = new THREE.Mesh(geometry, material); // Mesh combine both geomentry and material
scene.add(mesh);  //the object added in a scene

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

//set size for the entire window
const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

//camera
const camera = new THREE.PerspectiveCamera(45, size.width / size.height, 0.1, 100);  //(degree, divided by width and height aspect ratio (view from the camera) otherwise the image is strech,near,far)
camera.position.z = 15; //camera position
scene.add(camera);


//Renderer
const canvas = document.querySelector(".web"); // get class from page
const renderer = new THREE.WebGLRenderer({ canvas }); //call the html page
renderer.setSize(size.width, size.height); //800,600
renderer.render(scene, camera);


//resize
window.addEventListener("resize", () => {
    size.width = window.innerWidth;
    size.height = window.innerHeight;
    //update camera
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    renderer.setSize(size.width, size.height);
});

const loop = () => {
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}

loop();
