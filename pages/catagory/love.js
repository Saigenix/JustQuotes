import { useEffect, useState } from "react";
import QuoteCard from "../../components/QuoteCard";
import Sppiner from "../../components/Sppiner";
import GetData from "../../lib/GetData";

export default function Love() {
    const [data1, setdata] = useState([]);
    const [loding, setloading] = useState(true);
    const getdata = async () => {
    const arr =  await GetData("love");
    setdata(arr);
    setloading(false);
    };

 useEffect(()=>{
 getdata();
 },[])


return (
<div>
{ loding ? <Sppiner/> : <div>
    { data1.map((d,key) => {
       return (
        <QuoteCard key={key} url={d.url} quote={d.quote}/>
       )

    })} </div>
}
</div>
  );
}
