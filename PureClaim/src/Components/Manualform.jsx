import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Manualform.module.css";
import bannerimg from "../Images/form.png";
import logo from "../Images/Logo.png";
function Manualform() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate();
  function handleAnalyse() {
    const Claims = document.querySelector("#Claims").value;
    const Ingredients = document.querySelector("#Ingredients").value;
    const Analysebtn=document.querySelector("#Analyse");
    
    if(Claims=="" || Ingredients==""){
      alert("All Fields are mandatory!")
      return;
    }
    const encodedClaim = encodeURIComponent(Claims);
    const encodedIngredients = encodeURIComponent(Ingredients);
    const apiUrl = `https://cwbackend-a3332a655e1f.herokuapp.com/claims/analyze?claim=${encodedClaim}&ingredients=${encodedIngredients}`;
    setIsLoading(true);
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        console.log(data);
        if (data){
          navigate("/ClaimCheckOptions/Manualform/Output", { state: { data: data } });
        }
        
      });
  }



  return (
    <div className={styles.CheckClaims}>
    

      <div className={styles.inputBox}>
        <img src={logo} className="image"/>
        <span className={styles.Tag}>UNCOVER</span>
        <span className={styles.Title}>The FACTS In Label</span>

        <div className={styles.FormBox}>
          <textarea rows="2" type="text" id="Claims" placeholder="Enter Claims"/>
          <textarea rows="4" type="text" id="Ingredients" placeholder="Enter Ingredients"/>
        </div>

        <button className={styles.Button} id="Analyse" disabled={isLoading} onClick={handleAnalyse}>{isLoading?`Checking...`:`Analyze`}</button>
      </div>

      <div className={styles.formBanner}>
        <img src={bannerimg} className={styles.image} />
        <span className={styles.BannerTitle}>Because food claims should be more than just words!</span>
      </div>
    </div>
  );
}
export default Manualform;
// MAGGI 2-Minute Instant Noodles, Masala Noodles With Goodness Of Iron, Made With Choicest Quality Spices, Favourite Masala Taste, 70G ( Pack Of 12 ), 840 Gram

// Refined wheat flour (Maida), Palm oil, Iodized salt, Wheat gluten, Thickeners (508 & 412), Acidity regulators (501(i) & 500(i)) & Humectant (451(i)). MASALA TASTEMAKER: Mixed spices (25.6%) (Onion powder, Coriander powder, Turmeric powder, Red chili powder, Garlic powder, Cumin powder, Aniseed powder, Ginger powder, Fenugreek powder, Black pepper powder, Clove powder, Green cardamom powder & Nutmeg powder), Refined wheat flour (Maida), Hydrolyzed groundnut protein, Sugar, Palm oil, Starch, Iodized salt, Thickener (508), Flavor enhancer (635), Toasted onion flakes, Acidity regulator (330), Colour (150d), Mineral and Wheat gluten. Allergen Note: Contains Wheat & Nut. May contain Milk, Mustard, Oats and Soy.
