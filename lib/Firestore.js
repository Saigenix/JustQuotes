import { useEffect, useState } from "react";
import QuoteCard from "../components/QuoteCard";
import Sppiner from "../components/Sppiner";
import GetData from "./GetData";
import styles from "./Firestore.module.css";
import toast, { Toaster } from "react-hot-toast";
import { async } from "@firebase/util";
export default function Firestore() {
  const [data1, setdata] = useState([]);
  const [loding, setloading] = useState(true);
  const [Last1, setLast1] = useState(null);
  const [Last2, setLast2] = useState(null);
  // const [arr,setArr] =useState([]);
  // const [arr1,setArr1] =useState([]);
  const shuffleArray = async (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  const getdata = async (toastId) => {
    let arr=[],arr1=[],last1,last2;
    if(Last1 != 'sai'){
      [arr,last1] =  await GetData("love",Last1);
      setLast1(last1);
    }
    if(Last2 !='sai'){
      [arr1,last2] =  await GetData("motivational",Last2);
      setLast2(last2);
    }
  if(Last1 == 'sai' && Last2 == 'sai'){
    // alert("DONE")
    if (toastId)  toast.dismiss(toastId);
    return;
  }

  const newarr = await shuffleArray(arr.concat(arr1));
  setdata(prev => prev.concat(newarr));
  setloading(false);
  if (toastId)  toast.dismiss(toastId);
};
  // const getdata = async (toastId) => {

  //   const [arr, last1] = await GetData("love", Last1);
  //   const [arr1, last2] = await GetData("motivational", Last2);
  //   setLast1(last1);
  //   setLast2(last2);
  //   const newarr = await shuffleArray(arr.concat(arr1));
  //   setdata((prev) => prev.concat(newarr));
  //   setloading(false);
  //   if (toastId) toast.dismiss(toastId);
  // };
  useEffect(() => {
    getdata();
  }, []);

  //  const loadmore1 = async ()=>{
  //   toast.promise(loadmore, {
  //     loading: 'Loading',
  //     success: 'Got the data',
  //     error: 'Error when fetching',
  //   });
  //  }

  const loadmore = async () => {
    const toastId = toast.loading("Waiting...");
    getdata(toastId);
  };

  return (
    <>
      {loding ? (
        <Sppiner />
      ) : (
        <>
          <div className={styles.box}>
            {data1.map((d, key) => {
              return <QuoteCard key={key} url={d.url} quote={d.quote} />;
            })}
          </div>
          <div className={styles.btnBox}>
            <Toaster />
            <button className={styles.btn} onClick={loadmore}>
              Load More
            </button>
          </div>
        </>
      )}
    </>
  );
}
