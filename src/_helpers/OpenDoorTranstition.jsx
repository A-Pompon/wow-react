import { useState } from "react";

const OpenDoorTranstition = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={handleOpen}
      className={"door"}
      style={
        isOpen
          ? {
              backgroundColor: "var(--black)",
              boxShadow: "none",
              transform:
                "perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-105deg)",
            }
          : {
              boxShadow: "0.5rem 0.5rem 0.5rem  var(--black)",
              transform: "none",
            }
      }
    >
      {children}
    </div>
  );
};

export default OpenDoorTranstition;
