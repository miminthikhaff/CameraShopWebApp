import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
    // Limit product name length for consistent card alignment
    const maxNameLength = 40;
    const displayName =
        product.name.length > maxNameLength
            ? product.name.substring(0, maxNameLength - 3) + '...'
            : product.name;

    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong style={{ color: 'black', minHeight: '3em', display: 'block' }}>
                            {displayName}
                        </strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                        />
                    </div>
                </Card.Text>

                <Card.Text as="h3">${product.price}</Card.Text>

                <Card.Text as="div">
                    <div className="my-3">
                        {product.countInStock > 0 ? (
                            <span className="text-success">In Stock</span>
                        ) : (
                            <span className="text-danger">Out of Stock</span>
                        )}
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
