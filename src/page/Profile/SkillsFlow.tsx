import "@xyflow/react/dist/style.css";
import {
  Background,
  BackgroundVariant,
  ConnectionMode,
  Node,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import { SKILLS } from "../../data/SkillsList";
import { CircularNode } from "../../components/CircularNode";

export default function SkillsFlow() {
  const skills = SKILLS;
  const nodeTypes = { circularNode: CircularNode };
  const initialNodes: Node[] = [
    {
      id: "1",
      type: "circularNode",
      position: { x: 100, y: 100 },
      data: {
        label: "React",
        imgUrl: "https://logotyp.us/file/react.svg",
        width: 30,
      },
    },
    {
      id: "2",
      type: "circularNode",
      position: { x: 200, y: 100 },
      data: {
        label: "Redux",
        imgUrl: "https://www.svgrepo.com/show/303557/redux-logo.svg",
        width: 15,
      },
    },
  ];
  const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div
      style={{
        width: "100%",
        height: "35vh",
        // border: "1px red solid",
        marginTop: "10px",
      }}
    >
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        fitView={true}
        defaultEdgeOptions={{ animated: true }}
      >
        <Background color={"#ffffff"} variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  );
}
