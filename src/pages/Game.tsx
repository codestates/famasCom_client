import React, { useState } from "react";
import Navbar from "components/common/navbar";
import Siderbar from "components/common/siderbar";
import ComSection from "components/computerSection/ComSection";

const Game = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  return (
    <>
      <Navbar toggle={toggle}/>
      <Siderbar isOpen={isOpen} toggle={toggle} />
      <ComSection />
    </>
  )
}
export default Game