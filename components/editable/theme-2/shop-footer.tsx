import React from "react";

const FOOTER_ITEMS = [
  {
    id: 1,
    title: "Chính sách",
    items: [
      { id: 1, name: "Chính sách vận chuyển" },
      { id: 2, name: "Chính sách đổi trả" },
      { id: 3, name: "Chính sách bảo hành" },
    ],
  },
  {
    id: 2,
    title: "Hỗ trợ",
    items: [
      { id: 1, name: "Hướng dẫn mua hàng" },
      { id: 2, name: "Hướng dẫn thanh toán" },
      { id: 3, name: "Hướng dẫn đổi trả" },
    ],
  },
  {
    id: 3,
    title: "Liên hệ",
    items: [
      { id: 1, name: "Hotline: 1900 1234" },
      { id: 2, name: "Email: test@gmail.com" },
    ],
  },
  {
    id: 4,
    title: "Theo dõi",
    items: [
      { id: 1, name: "Facebook" },
      { id: 2, name: "Instagram" },
      { id: 3, name: "Youtube" },
    ],
  },
];

export const ShopFooter = () => {
  return (
    <div className="grid w-full grid-cols-4 bg-gray-900 px-4 py-10 text-center text-white">
      {FOOTER_ITEMS.map((item) => (
        <div key={item.id}>
          <h3 className="mb-4 text-lg font-bold uppercase">{item.title}</h3>
          <ul>
            {item.items.map((subItem) => (
              <li key={subItem.id} className="mb-2">
                {subItem.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

ShopFooter.craft = {
  displayName: "Shop Footer",
  props: {
    editable: false,
  },
  rules: {
    canDrag: () => false,
  },
};
