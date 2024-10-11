import VerificationCard from "./VerificationCard";
import Vurl from "../Images/approved.png";
import Vtext from "../Images/clipboard.png";
import Vimage from "../Images/camera.png";
import "../App.css";
import Vbarcode from "../Images/barcode.png";

function ClaimCheckOptions() {
  const methods = [
    {
      path: "/ClaimCheckOptions/urlform",
      img: Vurl,
      text: "Url Verification",
    },
    {
      path: "/ClaimCheckOptions/Manualform",
      img: Vtext,
      text: "Manual Verification",
    },
    {
      path: "/ClaimCheckOptions/MediaVeriFy",
      img: Vimage,
      text: "Image Verification",
    },
    {
      path:"/ClaimCheckOptions/BarcodeVerify",
      img: Vbarcode,
      text: "Barcode Verification",
    },
  ];

  return (
    <section className="VerificationMethods text-center">
      <h2 className="Heading">Select Verification Method</h2>

      <div className="cardContainer">
        {methods.map((item) => (
          <VerificationCard key={item} val={item} />
        ))}
      </div>
    </section>
  );
}
export default ClaimCheckOptions;
