import { useEffect, useRef, useState } from "react";
import ProfileSection from "../../components/ProfileSection";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

// Define model type for selection
interface CADModel {
  id: string;
  name: string;
  file: string;
  type: "gltf" | "obj" | "stl";
  description: string;
}

export default function CAD() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sample CAD models - you would replace these with your actual models
  const models: CADModel[] = [
    {
      id: "model1",
      name: "Tackpad Holder",
      file: "models/Trackpad Holder 2.stl", // You'll need to add these files to your public folder
      type: "stl",
      description: "An ergonomic holder for a Apple Trackpad.",
    },
  ];

  useEffect(() => {
    if (!containerRef.current || !selectedModel) return;

    // Find the selected model
    const model = models.find((m) => m.id === selectedModel);
    if (!model) return;

    setIsLoading(true);

    // Set up Three.js scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    );

    // Clear any previous renderers
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    containerRef.current.appendChild(renderer.domElement);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;

    // Load the appropriate model based on type
    let loader;
    switch (model.type) {
      case "gltf":
        loader = new GLTFLoader();
        loader.load(
          model.file,
          (gltf) => {
            scene.add(gltf.scene);

            // Center the model
            const box = new THREE.Box3().setFromObject(gltf.scene);
            const center = box.getCenter(new THREE.Vector3());
            gltf.scene.position.x = -center.x;
            gltf.scene.position.y = -center.y;
            gltf.scene.position.z = -center.z;

            // Adjust camera to fit model
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            camera.position.z = maxDim * 2.5;

            setIsLoading(false);
          },
          (xhr) => {
            // Progress update if needed
          },
          (error) => {
            console.error("Error loading GLTF model:", error);
            setIsLoading(false);
          },
        );
        break;

      case "obj":
        loader = new OBJLoader();
        loader.load(
          model.file,
          (obj) => {
            scene.add(obj);

            // Center the model
            const box = new THREE.Box3().setFromObject(obj);
            const center = box.getCenter(new THREE.Vector3());
            obj.position.x = -center.x;
            obj.position.y = -center.y;
            obj.position.z = -center.z;

            // Adjust camera to fit model
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            camera.position.z = maxDim * 2.5;

            setIsLoading(false);
          },
          (xhr) => {
            // Progress update if needed
          },
          (error) => {
            console.error("Error loading OBJ model:", error);
            setIsLoading(false);
          },
        );
        break;

      case "stl":
        loader = new STLLoader();
        loader.load(
          model.file,
          (geometry) => {
            const material = new THREE.MeshStandardMaterial({
              color: 0x1976d2,
              metalness: 0.5,
              roughness: 0.5,
            });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            // Center the model
            geometry.computeBoundingBox();
            const box = geometry.boundingBox;
            if (box) {
              const center = new THREE.Vector3();
              box.getCenter(center);
              mesh.position.x = -center.x;
              mesh.position.y = -center.y;
              mesh.position.z = -center.z;

              // Adjust camera to fit model
              const size = new THREE.Vector3();
              box.getSize(size);
              const maxDim = Math.max(size.x, size.y, size.z);
              camera.position.z = maxDim * 2.5;
            }

            setIsLoading(false);
          },
          (xhr) => {
            // Progress update if needed
          },
          (error) => {
            console.error("Error loading STL model:", error);
            setIsLoading(false);
          },
        );
        break;
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;

      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight,
      );
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
    };
  }, [selectedModel, models]);

  return (
    <ProfileSection title={"CAD Designs"} sectionId={"cad"}>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Model selection sidebar */}
        <div className="lg:w-1/3">
          <h3 className="text-xl font-semibold mb-4">My CAD Models</h3>
          <div className="space-y-4">
            {models.map((model) => (
              <div
                key={model.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedModel === model.id
                    ? "bg-primary/10 border-primary"
                    : "hover:bg-base-200"
                }`}
                onClick={() => setSelectedModel(model.id)}
              >
                <h4 className="font-medium text-lg">{model.name}</h4>
                <p className="text-sm opacity-70">{model.description}</p>
                <div className="flex justify-between mt-2">
                  <span className="badge badge-outline">
                    {model.type.toUpperCase()}
                  </span>
                  {selectedModel === model.id && (
                    <span className="badge badge-primary">Selected</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">About My CAD Work</h3>
            <p>
              I design mechanical parts, architectural concepts, and prototypes
              using industry-standard CAD software. My designs focus on
              efficiency, sustainability, and practical applications.
            </p>
            <p className="mt-4">
              Browse through my portfolio of 3D models and interact with them
              directly in your browser. Click and drag to rotate, scroll to
              zoom, and right-click to pan.
            </p>
          </div>
        </div>

        {/* 3D Model viewer */}
        <div className="lg:w-2/3">
          {selectedModel ? (
            <div className="relative">
              <div
                ref={containerRef}
                className="w-full h-[500px] rounded-lg bg-base-200 shadow-inner"
              ></div>

              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-base-100/50">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              )}

              <div className="mt-4 text-sm text-center opacity-70">
                Click and drag to rotate • Scroll to zoom • Right-click and drag
                to pan
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-[500px] rounded-lg bg-base-200 shadow-inner">
              <div className="text-center p-6">
                <svg
                  className="w-24 h-24 mx-auto text-base-content/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="mt-4 text-xl font-medium">Select a model</h3>
                <p className="mt-2 text-base-content/70">
                  Choose a CAD model from the list to view it in 3D
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProfileSection>
  );
}
