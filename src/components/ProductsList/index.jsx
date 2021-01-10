import ProductTile from '../productTile';
import React from 'react';
import {ProductsContainer} from './styles'
import {getPagintatedProducts} from '../../Network/fetchHelper'
//import {throttle} from '../../utils/deviceInfo'
// const pixel_offset = 200;
// function useScroll(page,setPage,products,setProductsData) {
//     React.useEffect(() => {
//         let handleScroll = throttle(async () => {
//             // console.log((window.innerHeight + window.scrollY),(document.body.offsetHeight-100))
//             if((window.innerHeight + window.scrollY) >= (document.body.offsetHeight-pixel_offset)){
//                 setPage(prevPage=>(prevPage+1));
//                 const existing_products = [...products];
//                 const results = await getPagintatedProducts(page);
//                 existing_products.push(...results);
//                 setProductsData(existing_products);
//             }
//         }, 100)
//         window.addEventListener('scroll', handleScroll)
//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, [page,setPage,products,setProductsData])
// }
const ProductList = (props) => {
    const {searchResults,searchSuccess} = props
    const observer = React.useRef()
    const [total_pages,setTotalPages] = React.useState(0);
    const [loading,setLoading] = React.useState(false);
    const [page,setPage] = React.useState(1);
    const [products,setProductsData] = React.useState();
    const lastProduct = React.useCallback(node => {
        if(loading) return;
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(async entries => {
          if (entries[0].isIntersecting && page <= total_pages) {
            setPage(prevPageNumber => prevPageNumber + 1)
          }
        })
        if (node) observer.current.observe(node)
      }, [loading,total_pages])

    // React.useEffect(() => {
    //     if(Array.isArray(searchResults) && searchResults.length){
    //         setProductsData(searchResults)
    //     }
    //     return () => {
    //     }
    // }, [searchResults])

    React.useEffect(() => {
        fetchData(page)
        return () => {
        }
    }, [page])

    const fetchData = async (page = 1)=>{
        setLoading(true);
        const existing_products = Array.isArray(products) && [...products];
        const {total_pages,results} = await getPagintatedProducts(page);
        setTotalPages(total_pages);
        if(Array.isArray(existing_products) && existing_products.length){
            setProductsData([...existing_products,...results]);
        }
        else {
            setProductsData(results);
        }
        setLoading(false);
    }
    React.useEffect(() => {
        fetchData(1);
      }, []);

    const handleProductsShow = () => {
        let data = [];
        if(Array.isArray(searchResults) && searchResults.length){
            data = searchResults;
        }
        else {
            data = products;
        }
        return Array.isArray(data) &&
        data.length > 0 &&
        data.map((product,ind)=>{
            const {sku} = product
            if(ind === products.length-1){
                return <ProductTile key={`${ind}_${sku}`} ref = {lastProduct} id={`${ind}_${sku}`} {...product}/>
            }
            return <ProductTile key={`${ind}_${sku}`} {...product}/>
        })
    }
    //useScroll(page,setPage,products,setProductsData);
    return (
        <>
        {!searchSuccess?<div>No results found</div>:''}
        <ProductsContainer>
            {
                handleProductsShow()
            }
        </ProductsContainer>
        <div>{loading && 'loading.....'}</div>
        </>
    )
}

export default ProductList;