/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { JSX, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"


type GLTFResult = GLTF & {
  nodes: {
    board: THREE.Mesh
  }
  materials: {
    board: THREE.MeshStandardMaterial
  }
}

export function Board(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/glb/board.glb") as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.board.geometry}
        material={materials.board}
        position={[-1.3089, 0, 0]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={0.15611}
      />
    </group>
  )
}

useGLTF.preload("/board.glb")
