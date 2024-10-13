import styles from "./ImageForm.module.css";
import AddImg from "../Images/AddImage.png";
import Button from  "./Button";
function ImageForm() {
  return (
    <div className={styles.ImageForm}>
      <div className={styles.MediaUploader}>
        <img src={AddImg} className={styles.AddImg} />
        <p className={styles.AddImgText}>Drop Image Here Or Browse</p>
      </div>
      <Button btn_label="Upload" />
    </div>
  );
}

export default ImageForm;
