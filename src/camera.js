/**
 *
 *
 * @author: Storm
 * @date: 2018-12-29
 */

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 0, 100)
camera.lookAt(0, 0, 0)

export default camera
