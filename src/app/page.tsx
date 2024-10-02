// import Image from "next/image";
import Image from "next/image";
import codeImage from "./public/pic.jpg";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="parent">
        <div className="child1">
          Hey,
          <br/> My Name is<span className="color"> Laraib</span> 
          <br/>
          I am a student at <span className="color">GIAIC</span>
        </div>
        <div className="child2">
        <Image src={codeImage} alt="My Image" width={500} height={300} />
        
        </div>
        
      </div>
      <Footer/>
      </div>
  );
}
