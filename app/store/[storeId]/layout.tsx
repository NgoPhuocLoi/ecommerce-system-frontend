import React, { ReactNode } from "react";
import StoreHeader from "./store-header";
import Image from "next/image";
import banner1 from "@/static/images/banner-1.svg";
import product1 from "@/static/images/product-1.jpeg";
import visa from "@/static/images/visa.svg";
import mastercard from "@/static/images/mastercard.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="text-center py-2 border-b text-sm">Welcome to our store</div>

      <StoreHeader />

      <div className="bg-[#B1ABAB] w-full flex justify-center py-14">
        <Image alt="banner" src={banner1} />
      </div>

      <div className="px-10 mt-10 pb-9 border-b">
        <h1 className="mb-8 text-2xl font-bold">Featured products</h1>

        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col gap-2">
              <Image src={product1} alt="product" />

              <h4>Gift card</h4>

              <p>From 10 USD</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <Button>View all</Button>
        </div>
      </div>

      <div className="py-9 flex flex-col items-center gap-4 border-b">
        <h2>Subscribe to our emails</h2>
        <div className="flex gap-4">
          <Input className="w-[360px]" placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </div>

      <div className="py-9 flex justify-between px-10">
        <div className="flex gap-2 items-center">
          <Image src={visa} width={36} alt="visa" />
          <Image src={mastercard} width={36} alt="visa" />
        </div>

        <p> © 2024, test-store-nploi Powered by NgoPhuocLoi </p>
      </div>
    </>
  );
};

export default Layout;
