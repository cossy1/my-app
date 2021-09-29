export const checkImageURL = (url: string) => {
    return(url?.match(/\.(jpeg|jpg|gif|png)$/) !== null);
};