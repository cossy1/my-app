

export const sortProducts = (
  data: Record<string, any>,
  price: boolean,
  toggle?: boolean
) => {
    return price
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
};

export const filterProducts = (data: any[], filters: any) => {
  return data.filter(({ category }: { category: string }) => {
    return filters.every(() => {
      if (!filters.length) return true;
      // if category is an array runs this.
      if (Array.isArray(category)) {
        return category.some((keyEle: any) => filters.includes(keyEle));
      }

      return filters.includes(category);
    });
  });
};


// export const filterProductsByPrice = (data: any[], val: any) => {
//     const filterKeys = Object.keys(val);
//     console.log('filterKeys:::', filterKeys);
//
//     return data.filter(({price}: {price: number}) => {
//         return val.every((key: string) => {
//
//             if(!val.length) return true;
//
//             if(key === 'lower than $20')
//                 return data.includes(price < 20);
//
//             if(key === '$20 - $100')
//                 return val.filter((e: any) => e.price >= 20 && e.price <= 100);
//
//             if(key === '$100 - $200')
//                 return val.filter((e: any) => e.price >= 100 && e.price <= 200);
//
//
//             if(key === 'More than $200')
//                 return val.filter((e: any) => e.price > 200);
//
//
//             if (Array.isArray(price)) {
//                 return price.some((keyEle: any) => val.includes(keyEle));
//             }
//
//             return val.filter((e: any) => e.price < 20);
//
//         })
//     })
// };

export const filterProductsByPrice = (
  data: Record<string, any>[],
  val: any
) => {
  for (let k in val) {
    if (val[k] === "lower than $20") {
      return data.filter((item) => item.price < 20);
    }

    if (val[k] === "$20 - $100") {
      return data.filter((item) => item.price >= 20 && item.price <= 100);
    }

    if (val[k] === "$100 - $200") {
      return data.filter((item) => item.price >= 100 && item.price <= 200);
    }

    if (val[k] === "More than $200") {
      return data.filter((item) => item.price > 200);
    }
  }

  return data;
};
