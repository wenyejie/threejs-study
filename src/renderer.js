/**
 *
 *
 * @author: Storm
 * @date: 2018-12-29
 */


// 渲染器
const renderer = new THREE.WebGLRenderer({
  antialias : true
})

// 设置渲染器的尺寸
renderer.setSize(window.innerWidth, window.innerHeight)

// 把canvas画布载入页面
const $app = document.querySelector('#app')
$app.appendChild(renderer.domElement)

renderer.setClearColor(0xffffff, 1)

export default renderer
