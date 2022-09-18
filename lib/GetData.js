import { arrayRemove } from "firebase/firestore";
import { app } from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const GetData = async (catagory) => {
    // const shuffleArray = async (array)=> {
    //     for (var i = array.length - 1; i > 0; i--) {
    //         var j = Math.floor(Math.random() * (i + 1));
    //         var temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    //     return array;
    // }
    const db = getFirestore(app);
    let arr = [];
    const q = query(collection(db, catagory));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty){
        return;
    }
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        arr = [...arr,doc.data()];
       // console.log(data1);
        });  
    return arr;     
  };

  export default GetData;