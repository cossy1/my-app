import { Empty } from "antd";
import React from "react";

export const checkImageURL = (url: string) => {
  return url?.match(/\.(jpeg|jpg|gif|png)$/) !== null;
};

export const sortProducts = (
  data: Record<string, any>,
  price: boolean,
  toggle?: boolean
) => {
  const sorted = price
    ? data.sort((a: any, b: any) => {
        if (a.price < b.price) {
          return toggle ? -1 : 1;
        }
        if (a.price > b.price) {
          return toggle ? 1 : -1;
        }
        return 0;
      })
    : data.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return toggle ? 1 : -1;
        }
        if (a.name > b.name) {
          return toggle ? -1 : 1;
        }
        return 0;
      });

  return sorted;
};

export const filterProducts = (data: any[], filters: any) => {
  return data.filter(({ category }: { category: string }) => {
    return filters.every((key: string) => {
      if (!filters.length) return true;
      // if category is an array runs this.
      if (Array.isArray(category)) {
        return category.some((keyEle: any) => filters.includes(keyEle));
      }

      return filters.includes(category)
    });
  });
};


export const filterProductsByPrice = (
  data: Record<string, any>[],
  val: any
) => {
  console.log(val);
  for (let k in val) {
    if (val[k] === "Lower $20") {
      return data.filter((item) => item.price < 20);
    }

    if (val[k] === "$20 - $100") {
      return data.filter((item) => item.price >= 20 && item.price <= 100);
    }

    if (val[k] === "$100 - $200") {
      return data.filter((item) => item.price >= 100 && item.price <= 200);
    }

    if (val[k] === "More than $200") {
      return data.filter((item) => item.category > 200);
    }
  }

  return data;
};
