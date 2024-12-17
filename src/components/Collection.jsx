import React from "react";
import Car from "./Car";

const Collection = () => {
  return (
    <div>
      <Car img="https://americarprestige.com/wp-content/uploads/2019/07/location-jaguar-xj-1.jpg" title="Jaguar" caption="Black Jaguar" />
      <Car img="https://res.cloudinary.com/dsxfn6o4q/image/upload/c_fill,g_center,h_510,w_659/v1611131734/jmn0smvlwfi1hehvsxt2.jpg" title="Aston Martin" caption="Red Aston Martin" />
      <Car img="https://www.moteurnature.com/zvisu/1815/92/vert-Porsche-911.jpg" title="Porsche" caption="Green Porsche" />
    </div>
  );
};

export default Collection;