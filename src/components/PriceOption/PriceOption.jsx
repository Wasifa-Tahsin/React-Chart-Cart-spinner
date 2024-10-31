import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {name,price,features}=option
    return (
        <div className="bg-blue-300 flex flex-col justify-center items-center  rounded-xl p-4">
           <h2 className="text-center">
            <span className="text-6xl font-extrabold">{price}</span>
            <span className="text-2xl">/mon</span>
           </h2>
           <h4 className="text-2xl font-bold py-3 text-center my-8">{name}</h4>

         <div className="pl-6">
         {
            features.map((feature,idx)=><Feature key={idx} feature={feature} ></Feature>)
           }
         </div>
         <button className="mt-12 bg-green-500 font-bold w-full py-2 rounded-lg hover:bg-green-800 text-white">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes={
    option:PropTypes.object
}
export default PriceOption;