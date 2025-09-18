import {getContext} from "../utils/context.jsx";
import {scroller} from "react-scroll"; 

export default function useHandleSubmit() {
    const {
        answer,
        setAnswer,
        sampleNFTs,
        setState,
        setRevealNFT,
        setProofStatus
      } = getContext();
          console.log("works");
      return ()=>{
        if (answer.toUpperCase() === "A") {
        let time1 = 2000;
        let time2 = 2000;
        let time3 = 1500;
        time2 += time1;
        time3 += time2;
        setProofStatus({
            poh: "idle",
            answer: "idle",
            signature: "idle",
            verified: "idle",
        });
        setState("generatingProofs");
        scroller.scrollTo("progressSection", {
            duration: 1000,
            delay: 0,
            smooth: "easeIn",
            offset: -50,
        });
        }

        setAnswer("");
    }
}