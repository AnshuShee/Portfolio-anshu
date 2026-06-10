import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useScroll, useTransform, useSpring } from 'framer-motion';

const SkillFlower = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    // Track scroll progress of the section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress to rotation (e.g., 4 full spins)
    const rawRotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2 * 4]);
    const smoothRotation = useSpring(rawRotation, { stiffness: 50, damping: 20 });

    useEffect(() => {
        if (!canvasRef.current) return;

        // ─── Renderer ──────────────────────────────────────────────────────────
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;

        const width = canvasRef.current.parentElement.clientWidth;
        const height = canvasRef.current.parentElement.clientHeight;
        renderer.setSize(width, height);

        // ─── Scene & Camera ───────────────────────────────────────────────────
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 2, 6);
        camera.lookAt(0, 0, 0);

        // ─── Lighting ─────────────────────────────────────────────────────────
        scene.add(new THREE.AmbientLight(0xffffff, 0.3));

        const key = new THREE.DirectionalLight(0xffffff, 2.5);
        key.position.set(3, 6, 4);
        scene.add(key);

        const rim = new THREE.DirectionalLight(0x8899ff, 1.0);
        rim.position.set(-4, 2, -3);
        scene.add(rim);

        const fill = new THREE.PointLight(0xffffff, 0.8, 15);
        fill.position.set(0, 4, 2);
        scene.add(fill);

        // ─── Material ─────────────────────────────────────────────────────────
        const mat = new THREE.MeshStandardMaterial({
            color: 0x111111,
            roughness: 0.1,
            metalness: 0.9,
        });

        // ─── Petal geometry ───────────────────────────────────────────────────
        function makePetalGeo() {
            const shape = new THREE.Shape();
            shape.moveTo(0, 0);
            shape.bezierCurveTo(-0.3, 0.5, -0.55, 1.4, 0, 2.2);
            shape.bezierCurveTo(0.3, 1.4, 0.55, 0.5, 0, 0);

            return new THREE.ExtrudeGeometry(shape, {
                depth: 0.08,
                bevelEnabled: true,
                bevelThickness: 0.04,
                bevelSize: 0.04,
                bevelSegments: 4,
                curveSegments: 24,
            });
        }

        const petalGeo = makePetalGeo();
        petalGeo.center();

        // ─── Assemble flower ──────────────────────────────────────────────────
        const PETAL_COUNT = 10;
        const flower = new THREE.Group();
        scene.add(flower);

        for (let i = 0; i < PETAL_COUNT; i++) {
            const angle = (i / PETAL_COUNT) * Math.PI * 2;
            const layer = Math.floor(i / 5);

            const petal = new THREE.Mesh(petalGeo, mat);

            const spread = 0.55 + layer * 0.15;
            petal.position.set(
                Math.sin(angle) * spread,
                -0.2 + layer * 0.05,
                Math.cos(angle) * spread
            );
            petal.rotation.y = -angle;
            petal.rotation.z = (Math.PI / 2) * 0.55 + layer * 0.15;

            const s = 0.85 + layer * 0.15;
            petal.scale.setScalar(s);

            flower.add(petal);
        }

        const bud = new THREE.Mesh(
            new THREE.SphereGeometry(0.22, 32, 32),
            new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.05, metalness: 0.95 })
        );
        flower.add(bud);

        flower.rotation.x = 0.3;

        // ─── Resize Handler ───────────────────────────────────────────────
        function handleResize() {
            if (!canvasRef.current) return;
            const w = canvasRef.current.parentElement.clientWidth;
            const h = canvasRef.current.parentElement.clientHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        }
        window.addEventListener('resize', handleResize);

        // ─── Animation Loop ───────────────────────────────────────────────
        let animationId;
        let time = 0;

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            time += 0.008;

            // Sync rotation with Framer Motion spring
            flower.rotation.y = smoothRotation.get();
            
            // Subtle breathing
            flower.rotation.x = 0.3 + Math.sin(time * 0.4) * 0.04;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
            // Clean up geometries/materials
            petalGeo.dispose();
            mat.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full relative" style={{ position: 'relative' }}>
            <canvas 
                ref={canvasRef} 
                className="w-full h-full block touch-none"
                style={{ filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.5))' }}
            />
        </div>
    );
};

export default SkillFlower;
