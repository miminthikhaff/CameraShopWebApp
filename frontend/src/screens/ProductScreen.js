import React, { useEffect, useState,  } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'


const ProductScreen = () => {
  const { id } = useParams() // ✅ get the product ID from the URL
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`) // ✅ use id here
      setProduct(data)
    }

    fetchProduct()
  }, [id]) // ✅ include id as dependency just in case
    
    // Empty dependency array means this effect runs once when the component mounts
    // If you want to use the static products array, you can comment out the above useEffect and use the static import instead
    // setProducts(products) // Uncomment this line if you want to use the static products array
    // setProducts(products) // Uncomment this line if you want to use the static products array
    // setProducts(products) // Uncomment this line if you want to use the static products array                

    


  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? (
                      <span className='text-success'>In Stock</span>
                    ) : (
                      <span className='text-danger'>Out of Stock</span>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <div className="d-flex justify-content-center">
                  <Button
                    className='btn-block align-items-center'
                    type='button'
                    disabled={product.countInStock === 0}
                    style={{ backgroundColor: 'black', color: 'white', border: 'black' }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
