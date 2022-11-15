// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app } from "../../lib/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    console.log(req.body.text)
    const db = getFirestore(app);
    const dbRef = collection(db, req.body.cat);
    const data = {
          quote: req.body.text,
          url: req.body.img_url
       };
  addDoc(dbRef, data)
  .then(docRef => {
    res.status(200).json({ 'msg':'data added !' })
  })
  .catch(error => {
      console.log(error);
      res.status(400).json({ 'msg':'error !' })
  })
  } else {
    // Handle any other HTTP method
  res.status(200).json({ tip: 'make post request to this url with title and image url or image' })
  }
}
