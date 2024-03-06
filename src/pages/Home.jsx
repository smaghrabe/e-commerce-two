import React, { useContext } from "react";
// import products
import { ProductContext } from "../context/ProductContext";
// import product from components
import Product from "../components/Product";
// import hero section
import Hero from "../components/Hero";

const Home = () => {
  //get product from product context
  const { products } = useContext(ProductContext);
  // console.log(products);
  // get only men & women
  const filterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filterProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
