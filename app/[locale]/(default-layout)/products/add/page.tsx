import React from "react";
import ProductForm from "../_components/product-form";
import { useTranslations } from "next-intl";

const AddProductPage = () => {
  const t = useTranslations("ProductDetailAndAddPage");
  return (
    <>
      <ProductForm title={t("addProductTitle")} />
    </>
  );
};

export default AddProductPage;
