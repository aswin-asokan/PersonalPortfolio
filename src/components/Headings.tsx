import { useMediaQuery } from "react-responsive";
interface Props {
  head: string;
  id: string;
}
function Headings({ head, id }: Props) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  const pos = !isSmallScreen ? "center" : "left";
  return (
    <div id={id} className="container">
      <h1
        className="display-6"
        style={{
          textAlign: pos,
        }}
      >
        {head}
      </h1>
    </div>
  );
}
export default Headings;
