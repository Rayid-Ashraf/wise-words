import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import ConfettiExplosion from "react-confetti-explosion";

export default function Home() {
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);
  const [isExploding, setIsExploding] = useState(false);

  const addWords = async () => {
    setIsExploding(false);

    const docRef = await addDoc(collection(db, "words"), {
      words: text,
      timestamp: new Date(),
    });
    setIsExploding(true);
    retriveWords();

    console.log("Document written with ID: ", docRef.id);
  };

  const retriveWords = async () => {
    let data = [];
    const q = query(collection(db, "words"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    setWords(data);
  };

  useEffect(() => {
    retriveWords();
  }, []);

  return (
    <>
      <div className="px-5 pt-8 bg-concrete">
        <div className="w-full max-w-md m-auto">
          <div className="flex items-center justify-between w-full h-16 px-4 bg-white rounded-2xl ">
            <img src="./assets/logo.svg" alt="logo" />
            <div>
              {isExploding && <ConfettiExplosion />}
              <img src="./assets/wisewords.svg" alt="wisewords" />
            </div>
            <img src="./assets/logo(flip).svg" alt="logo" />
          </div>
          <div className="flex flex-col gap-4 mt-32 mb-20">
            <textarea
              type="text"
              className="h-32 p-3 rounded-lg text-dark-gray outline-emerald"
              placeholder="Share some wise words !"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button
              onClick={addWords}
              className="h-12 text-lg font-medium text-white rounded-md bg-emerald"
            >
              Share
            </button>
          </div>
          <div>
            {words.map((word, index) => (
              <Card text={word.words} key={index} />
            ))}
          </div>
          <footer className="pt-20">
            <p className="text-center text-dark-gray">
              Designed and Developed by <span className="underline">Rayid</span>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
