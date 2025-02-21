import { Handle, Node, NodeProps, Position } from "@xyflow/react";

type CircularNodeProps = Node<
  { label: string; imgUrl: string; width: number },
  "circularNode"
>;

export const CircularNode = ({ data }: NodeProps<CircularNodeProps>) => {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        // background: "rgba(52,152,219,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px dashed #2980b9",
        // color: "white",
        // fontWeight: "bold",
        // border: "1px green solid",
        userSelect: "none",
        cursor: "grab",
      }}
    >
      <div
        className="tooltip font-light"
        data-tip={data.label}
        style={{ fontSize: "1px !important" }}
      >
        <img style={{ width: data.width }} src={data.imgUrl} alt={data.label} />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        style={{ opacity: 0, width: 0, height: 0, pointerEvents: "none" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        style={{ opacity: 0, width: 0, height: 0, pointerEvents: "none" }}
      />
    </div>
  );
};
