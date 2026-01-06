import { useParams } from "react-router-dom";

export default function CasePage() {
  const { id } = useParams();

  return (
    <div style={{ color: "white", padding: 20 }}>
      Case page: {id}
    </div>
  );
}