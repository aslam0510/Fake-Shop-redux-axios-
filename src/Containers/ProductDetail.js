import axios from 'axios';
import React , { useEffect}from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams , Link} from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../Redux/Actions/ProductAction';

const ProductDetail = () => {
  const product = useSelector(state =>state.product)
  const {id} = useParams();
  const dispatch = useDispatch()
  console.log(product);

   useEffect(() => {
     if(id && id !=='') fetchSelectedProduct();
     return ()=>{
      dispatch(removeSelectedProduct())
     }
   }, []);
   
  const fetchSelectedProduct = async () =>{
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch(selectedProduct(response.data))
  }
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <h2>Loading.......</h2>
      ) : (
      <>
      <Link to='/'><h3 style={{cursor:'pointer'}}>Go to home page</h3></Link>
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img src={product.image} alt={product.title} className="ui fluid image"/>
            </div>
            <div className="column rp">
              <h1>{product.title}</h1>
            
            <h2><p className="ui teal tag label">${product.price}</p></h2>
            <h3 className="ui brown block header">{product.category}</h3>
            <p>{product.description}</p>
            <div className="ui vertical animated button primary" tabIndex="0">
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div className="visible content">Add to cart</div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </>
      )}
    </div>
  )
}

export default ProductDetail
