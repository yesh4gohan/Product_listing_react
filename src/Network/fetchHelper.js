import {indexProducts} from './products';
const results_per_page = 10;
const products_data = indexProducts();
const products_count = products_data.length;
const total_pages = Math.floor(products_count/results_per_page);
const response_template = {
    total_pages,
    results:[],
    status:''
}
export const getPagintatedProducts = async page => {
    await apiSimulator();
    response_template.results = products_data.filter(product=>(
         page <= total_pages && product.index > ((page-1)*results_per_page) && product.index <= (((page-1)*results_per_page)+results_per_page)
    ))
    response_template.status = 'success';
    return response_template;
}

export const fetchSearchResult = async query => {
    await apiSimulator();
    response_template.results = getSearchResults(query);
    if(Array.isArray(response_template.results) && response_template.results.length){
        response_template.status = 'success'
    }
    else {
        response_template.status = 'failed'
    }
    return response_template;
}

const getSearchResults = query => {
    const trimmedQuery = query.trim().toLowerCase();
    return products_data.filter(product=>{
        const {title,subTitle} = product;
        return title.trim().toLowerCase().includes(trimmedQuery)
    })
}
const apiSimulator = delay => {
    delay = delay || 1000;
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve()
        }, delay);
    })
}