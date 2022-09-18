import { useEffect, useState } from "react";
import QuoteCard from "../components/QuoteCard";
import Sppiner from "../components/Sppiner";
import GetData from "./GetData";
import styles from './Firestore.module.css'
export default function Firestore() {
    const [data1, setdata] = useState([]);
    const [loding, setloading] = useState(true);
    const shuffleArray = async (array)=> {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }
    const getdata = async () => {
    const arr =  await GetData("love");
    const arr1 =  await GetData("motivational");
    setdata(await shuffleArray(arr.concat(arr1)));
    setloading(false);
    };

 useEffect(()=>{
 getdata();
 },[])


return (
<>
{ loding ? <Sppiner/> : <div className={styles.box}>
    { data1.map((d,key) => {
       return (
        <QuoteCard key={key} url={d.url} quote={d.quote}/>
       )

    })} </div>
}
</>
  );
}
