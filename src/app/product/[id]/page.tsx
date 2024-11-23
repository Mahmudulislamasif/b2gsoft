import Layout from "@/components/Layout/Layout";
import Product from "@/components/product/details";
import ReviewAndRating from "@/components/product/reviews";
import React from "react";

const page = () => {
  return (
    <Layout>
      <Product />
      <ReviewAndRating />
    </Layout>
  );
};

export default page;
