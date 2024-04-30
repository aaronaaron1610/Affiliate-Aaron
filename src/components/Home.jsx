import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  Pagination,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import logo from '../assets/Logo.png';

const Home = () => {
  // Placeholder data for products
  const products = [
    {
      name: 'Double bedsheets',
      image: 'https://m.media-amazon.com/images/I/715WzjL1N8L._SX679_.jpg',
      currentPrice: '₹199',
      discountPercentage: 75,
      mrp: '₹799',
      rating: 4.0,
      ratingCount: 714,
      returnPolicy: '10-day replacement',
      deliveryOption: 'Free delivery',
      warranty: 'No warranty',
      amazonUrl: 'https://www.amazon.com/example-product',
      youtubeUrl: 'https://www.youtube.com/watch?v=example',
    },
    {
      name: 'Callas Foldable Laptop Table',
      image: 'https://m.media-amazon.com/images/I/61GQUtqKIpS._SX679_.jpg',
      currentPrice: '₹497',
      discountPercentage: 93,
      mrp: '₹6,999',
      rating: 3.9,
      ratingCount: 25150,
      returnPolicy: '7-day replacement',
      deliveryOption: 'Free delivery',
      warranty: '6 month warranty',
      amazonUrl: 'https://www.amazon.com/example-product',
      youtubeUrl: 'https://www.youtube.com/watch?v=example',
    },
    {
      name: 'Safari Small Cabin Luggage Trolley',
      image: 'https://m.media-amazon.com/images/I/61piNi70giL._SX679_.jpg',
      currentPrice: '₹1,699',
      discountPercentage: 78,
      mrp: '₹7,775',
      rating: 4.2,
      ratingCount: 17264,
      returnPolicy: '10-day replacement',
      deliveryOption: 'Free delivery',
      warranty: '5 years warranty',
      amazonUrl: 'https://www.amazon.com/example-product', // Example Amazon URL
      youtubeUrl: 'https://www.youtube.com/watch?v=example',
    },
  ];

  // State for managing search query and filtered results
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Call handleSearch initially to load all products by default
  // If you're fetching products from an API, you'd call this after fetching
  //   React.useEffect(() => {
  //     handleSearch();
  //   }, [products]);

  return (
    <div className="container my-3">
      <div className="top-gradient">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="ms-3" height="30" />{' '}
            <div className="affiliate-disclosure">
              <p>
                The product links are affiliate links, which means I may earn a
                commission if you decide to make a purchase through these links,
                at no extra cost to you.
              </p>
            </div>
          </a>
          <span className="text-light navbar-brand">Affiliate Aaron</span>
        </nav>

        <Form className="d-flex justify-content-between mb-4">
          <FormControl
            type="search"
            placeholder="Search product"
            className="search-input"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault(); // Prevent the default action to avoid refreshing the page
                handleSearch();
              }
            }}
          />
          <Button
            variant="danger"
            className="search-button"
            onClick={handleSearch}
          >
            Search
          </Button>
        </Form>
      </div>
      {console.log('filteredProducts ', filteredProducts)}
      {filteredProducts.length > 0 ? (
        <Row>
          {filteredProducts.map((product, index) => (
            <Col xl={4} lg={4} md={6} sm={12} key={index} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <div className="product-price">
                    {product.discountPercentage && (
                      <span className="discount">
                        -{product.discountPercentage}%{' '}
                      </span>
                    )}
                    <span className="current-price">
                      {product.currentPrice}
                    </span>
                    {product.mrp && (
                      <div className="mrp">M.R.P.: {product.mrp}</div>
                    )}
                  </div>
                  <div className="product-rating">
                    {Array(Math.floor(product.rating)).fill('⭐')}
                    <span className="rating-number">
                      {product.rating.toFixed(1)}
                    </span>
                    <span className="rating-count">
                      ({product.ratingCount})
                    </span>
                  </div>
                  {product.deliveryOption && (
                    <div className="product-delivery">
                      {product.deliveryOption}
                    </div>
                  )}
                  {product.returnPolicy && (
                    <div className="product-return-policy">
                      {product.returnPolicy}
                    </div>
                  )}
                  {product.warranty && (
                    <div className="product-warranty">
                      <b>Warranty:</b> {product.warranty}
                    </div>
                  )}
                  <Button
                    variant="primary"
                    href={product.amazonUrl}
                    className="mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon
                  </Button>
                  <Button
                    variant="secondary"
                    href={product.youtubeUrl}
                    className="mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on YouTube
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Col>No products found.</Col>
      )}
      <Pagination className="justify-content-center">
        <Pagination.First>First</Pagination.First>
        <Pagination.Prev>Previous</Pagination.Prev>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Next>Next</Pagination.Next>
        <Pagination.Last>Last</Pagination.Last>
      </Pagination>
      <div className="social-media-background">
        <div className="d-flex justify-content-between align-items-center social-media-icons ">
          <div className="">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </div>
          <div className="flex-grow-1 text-center">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div>
          <div className="">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </div>
        </div>

        {/* <div className="promotion-contact text-center">
          <p>For paid promotion contact</p>
          <p>
            <a href="mailto:immanuelaaron1@gmail.com">
              immanuelaaron1@gmail.com
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
