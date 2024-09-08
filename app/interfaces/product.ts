import { UploadedContentPreview } from "../(default-layout)/products/_components/product-image-list";

export interface Product {
  id: number;
  category_id: number;
  name: string;
  description: string;
  is_active: true;
  cost: number;
  price: number;
  compare_at_price: number;
  available_quantity: number;
  incoming_quantity: number;
  sold_number: number;
  custom_product_type_id: string | null;
  category: {
    id: number;
    name: string;
  };
  link?: string;
  images: {
    id: string;
    product_id: number;
    uploaded_image_public_id: string;
    url: string;
  }[];
}

export interface CreateProductData {
  name: string;
  description: string;
  price: number;
  compareAtPrice: number;
  cost: number;
  isActive: boolean;
  categoryId: number;
  availableQuantity: number;
  uploadedImages: UploadedContentPreview[];
}
