import {getContext} from "../utils/context.jsx";
import {scroller} from "react-scroll"; 

export default function useHandleSubmit() {
    const {
        answer,
        setAnswer,
        setCompleted,
        setRevealNFT,
        sampleNFTs,
        setState
      } = getContext();
          console.log("works");
      return ()=>{
        if (answer.toUpperCase() === "A") {
        let time1 = 5000;
        let time2 = 3000;
        let time3 = 1500;
        time2 += time1;
        time3 += time2;
        setState("generatingProofs");
        scroller.scrollTo("progressSection", {
            duration: 500,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -50,
        });
        setTimeout(()=>setState("proovingProofs"), time1);
        // setKYCproved();
        // setSignatureProved();
        // setAnswerProved();
        console.log("answer correct...");
        setTimeout(()=>{
            setCompleted(true);
            setRevealNFT(sampleNFTs[Math.floor(Math.random() * sampleNFTs.length)]);
            scroller.scrollTo("revealNFTSection", {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -50,
            });
        }, time2);

        // setCompleted(true);
        // setRevealNFT(sampleNFTs[Math.floor(Math.random() * sampleNFTs.length)]);
        }
        setAnswer("");
    }
}