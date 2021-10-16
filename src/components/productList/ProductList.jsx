import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data.js";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
          Donde la tecnologia se mezcla con la creatividad.
        </h1>
        <p className="pl-desc">
          Toda mi vida la he dedicado a buscar respuestas acerca de que era lo
          que verdaderamente me apasionaba.
        </p>
      </div>
      <div className="pl-list">
        {products.map(element => 
          <Product key={element.id} img={element.img} link={element.link} />
        )}
      </div>
    </div>
  );
};

export default ProductList;
