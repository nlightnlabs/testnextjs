import styles from "./page.module.css";
import Input from './components/input'
import Image from "next/link"
import CommonNeeds from "./components/CommonNeeds";

const runquery = ()=> {
  console.log("running query")
}

export default function Home() {

  const prompt = ""

  return (
    <main className="flex w-full justify-center">
      <div className="flex flex-col justify-center w-full lg:w-1/2 p-2">


        <div className="flex w-full flex-col justify-center items-center">
          <div className="flex w-[100px] h-[100px] border rounded-full"></div>

          <Input 
            label="" 
            placeholder="What do you need?" 
            value={prompt}
            className = {"mt-3 shadow-md"}
            />

        </div>

          <div className="flex flex-col justify-center w-full mt- p-3">
            <h1 className="flex p-3 w-full justify-center">Help me decide:</h1>
            <CommonNeeds/>
          </div>
      </div>  
    </main>
  );
}
