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

export const filterProducts = (data: Record<string, any>[], val: any) => {
    console.log('see my datas:::::', val);

  for (let k in val) {
    if (val[k] === "animal"){
        return data.filter((item) => item.category === 'animal');
    }

    if (val[k] === "landmarks"){
        return data.filter((item) => item.category === 'landmarks');
    }

    if (val[k] === "food"){
        return data.filter((item) => item.category === 'food');

    }

    if (val[k] === "pets"){
        return data.filter((item) => item.category === 'pets');
    }

    if (val[k] === "nature"){
        return data.filter((item) => item.category === 'nature');
    }

    if (val[k] === "people"){
        return data.filter((item) => item.category === 'people');
    }
  }
  // const sorted = data.filter((item) => item.category === val);

    return data;
};


export const filterProductsByPrice = (data: Record<string, any>[], val: any) => {
  for (let k in val) {
    if (val[k] === "Lower $20"){
        return data.filter((item) => item.price < 20);
    }

    if (val[k] === "$20 - $100"){
        return data.filter((item) => (item.price >= 20 && item.price <= 100));
    }

    if (val[k] === "$100 - $200"){
        return data.filter((item) =>  (item.price >= 100 && item.price <= 200));
    }

    if (val[k] === "More than $200"){
        return data.filter((item) => item.category > 200);
    }
  }

    return data;
};
