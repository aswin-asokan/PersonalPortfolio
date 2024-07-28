import { useMediaQuery } from "react-responsive";

interface Props {
  icon: React.ComponentType<{
    size?: string | number;
    className?: string;
    style?: React.CSSProperties;
  }>;
  title: string;
  content: string;
}

function ContactIcon({ icon: Icon, title, content }: Props) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  const iconMargin = isSmallScreen ? "0 10px 0 0" : "0";
  let size, head, ic1, ic2, alignment;
  if (!isSmallScreen) {
    size = "12%";
    head = <h4 style={{ marginTop: "20px" }}>{title}</h4>;
    ic1 = <Icon size={size} />;
    alignment = "align-items-center";
  } else {
    size = "1em";
    ic2 = <Icon size={size} style={{ margin: iconMargin }} />;
    alignment = "align-items-start";
  }
  return (
    <>
      <div
        className={`d-flex flex-column ${
          !isSmallScreen ? "align-items-center" : "align-items-start"
        } justify-content-center `}
      >
        <div
          className={`d-flex ${
            !isSmallScreen ? "flex-column" : "flex-row"
          } align-items-center justify-content-center `}
        >
          {" "}
          {ic1}
          {head}
          <p>
            {ic2}
            {content}
          </p>
        </div>
      </div>
    </>
  );
}
export default ContactIcon;
