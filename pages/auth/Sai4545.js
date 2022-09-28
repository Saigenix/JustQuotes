import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import styles from '../../styles/Sai.module.css'
import { getStorage, ref,getDownloadURL,uploadBytesResumable } from "firebase/storage";
import { app } from "../../lib/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function Sai() {
    const [Text,setText] = useState("")
    const [imgUrl, setImgUrl] = useState(null);
    const [catagory, setCatagory] = useState("motivational");
    const router = useRouter();
    const data = router.query;
    // setData(data);
    console.log(data)
    
const onImageChange = (e) => {
      const [file] = e.target?.files;
      const storage = getStorage(app);
      const storageRef = ref(storage, `${file.name}`);
      const metadata = {
        contentType: 'image/jpeg',
      };
// 'file' comes from the Blob or File API
const uploadTask = uploadBytesResumable(storageRef, file,metadata);
uploadTask.on("state_changed",
      (snapshot) => {
        console.log("Wait till image on screen")
          
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
        });
      }
    )  } 
const handleSubmit = ()=>{
    if(Text == "" || imgUrl == ""){
        alert("enter something or upload img!")
        return 
    }
    const db = getFirestore(app);
    const dbRef = collection(db, catagory);
    const data = {
        quote: Text,
        url: imgUrl
     };
addDoc(dbRef, data)
.then(docRef => {
    alert("Document has been added successfully");
    setText("")
    setImgUrl(null)
})
.catch(error => {
    console.log(error);
})
}
  return (
    <>
    {data?.auth == "true" ? <div className={styles.box}>
    
    <input type="textarea" className={styles.area} placeholder="Quote" id='name' required value={Text} onChange={(e) => setText(e.target.value)}/>
    <select value={catagory}
    onChange={(e)=> setCatagory(e.target.value)}
    >
  <option value="motivational">Motivational</option>
  <option value="love">Love</option>
  </select>
    <input type="file" onChange={onImageChange} className={styles.customfileinput}/>
    <button  onClick={handleSubmit} className={styles.btn}>
            Submit
    </button>

    <img src={imgUrl} className={styles.img} alt="" />
    
    </div> : <div className={styles.txt}>Auth Failed!</div>}
    </>
  )
}

export default Sai