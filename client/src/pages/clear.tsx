import Image from "next/image";
import pizza from "../../public/pizza.jpg";
import spratt from "../../public/spratt.jpg";
import {Quicksand} from "next/font/google";

const quicksand = Quicksand({subsets: []})
const Clear = () => {
  return (
    <>
      <menu className={`h-screen w-full bg-red-200 ${quicksand.className}`}><div className="text-4xl">gbbygbbh</div>

        <div className="w-full bg-stone-800 h-full scale-50 translate-y-6">
          <Image
            src={spratt}
            alt=""
            className="w-full h-full  translate-x-16 -translate-y-16 object-cover object-left-bottom"
          /> 
        </div>
        {/* <h2 className="absolute top-0 right-0 mt-16 text-4xl font-semiboldå">Lumpia</h2> */}
  
      </menu>
    </>
  );
};

export default Clear;
