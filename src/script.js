import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


//Clock
const clock= new THREE.Clock()


//Animation 
const tick = () =>
{

    //Clock 
    const elapsedTime= clock.getElapsedTime()
    console.log(elapsedTime);
   


    //Update objects

    // mesh.position.x -= 0.01
    // mesh.position.y += 0.01
    //mesh.rotation.y =elapsedTime  * Math.PI *2 // i could play with rotation also
    
    // mesh.position.y =Math.sin(elapsedTime )
    // mesh.position.x =Math.cos(elapsedTime )

    //i can do the same thing to my camera
    camera.position.y =Math.sin(elapsedTime )
    camera.position.x =Math.cos(elapsedTime )
    camera.lookAt(mesh.position)


    //Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()