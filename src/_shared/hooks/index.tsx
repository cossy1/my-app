export const checkImageURL = (url: string) => {
    return(url?.match(/\.(jpeg|jpg|gif|png)$/) !== null);
};

export const sortProducts = (data: Record<string, any>, price: boolean, toggle: boolean) => {
    const sorted = price ? data.sort((a: any, b: any) => {
        if (a.price < b.price) {
            return toggle ? -1 : 1;
        }
        if (a.price > b.price) {
            return toggle ? 1 : -1;
        }
        return 0;
    }) : data.sort((a: any, b: any) => {
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

export const filterProducts = (data: Record<string, any>[], val: string) => {
    const sorted = data.filter((item) => item.category === val);

    return sorted;
};