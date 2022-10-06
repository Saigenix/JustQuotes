import { useEffect, useState } from "react";
import QuoteCard from "../../components/QuoteCard";
import Sppiner from "../../components/Sppiner";
import GetData from "../../lib/GetData";
import styles from "./Love.module.css"
export default function Love() {
    const [data1, setdata] = useState([]);
    const [loding, setloading] = useState(true);
    const [Last1,setLast1]= useState(null);
    const getdata = async () => {
    const [arr,last1] =  await GetData("love",Last1);
    if(last1 == 'sai'){
      // alert("DONE")
      return;
    } 
    setLast1(last1);
    setdata(prev => prev.concat(arr));
    setloading(false);
    };

 useEffect(()=>{
 getdata();
 },[])

 const loadmore = async () =>{
  getdata();
}


return (
<div>
{ loding ? <Sppiner/> : <> <div className={styles.box}>
    { data1.map((d,key) => {
       return (
        <QuoteCard key={key} url={d.url} quote={d.quote}/>
       )

    })} </div>
    <div className={styles.btnBox}>
    <button className={styles.btn} onClick={loadmore}>
    Load More
    </button>
    </div></>
}
</div>
  );
}
