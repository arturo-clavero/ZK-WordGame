import {getContext} from "../utils/context.jsx";

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
        setTimeout(()=>setState("proovingProofs"), time1);
        // setKYCproved();
        // setSignatureProved();
        // setAnswerProved();
        console.log("answer correct...");
        setTimeout(()=>setCompleted(true), time2);
        setTimeout(()=>setRevealNFT(sampleNFTs[Math.floor(Math.random() * sampleNFTs.length)]), time2);

        // setCompleted(true);
        // setRevealNFT(sampleNFTs[Math.floor(Math.random() * sampleNFTs.length)]);
        }
        setAnswer("");
    }
}