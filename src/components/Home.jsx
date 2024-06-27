import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Form, FormControl, Button, Navbar, Container, DropdownButton, Dropdown, Pagination  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/Shop-Smart-With-Aaron.png';
import "./Home.css";

const Home = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Sports', 'Toys'];

  // Add these states for pagination
const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 12;

const handleSearch = () => {
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === 'All' || product.category === selectedCategory)
  );
  setFilteredProducts(filtered);
  setCurrentPage(1); // Reset to first page after filtering
};

// Calculate products to display on the current page
const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);


  useEffect(() => {
    handleSearch();
  }, [searchQuery, selectedCategory]);

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" height="30" className="d-inline-block align-top" /> Shop Smart With Aaron
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="my-4">
        {/* <div className="marquee mb-4 text-center text-white bg-info p-2 rounded">
          <p className="marquee-text">
            The product links are affiliate links, which means I may earn a commission if you decide to make a purchase through these links, at no extra cost to you.
          </p>
        </div> */}
        <Form className="d-flex mb-4 justify-content-center">
          <FormControl
            type="search"
            placeholder="Search product"
            className="me-2"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
              }
            }}
            style={{ width: '60%' }}
          />
          <Button
            variant="danger"
            onClick={handleSearch}
            style={{ fontSize: '1.2rem', padding: '10px 20px' }}
          >
            Search
          </Button>
        </Form>

        <DropdownButton id="dropdown-basic-button" title={`Category: ${selectedCategory}`} className="mb-4" variant='danger'>
          {categories.map((category) => (
            <Dropdown.Item key={category} onClick={() => setSelectedCategory(category)}>
              {category}
            </Dropdown.Item>
          ))}
        </DropdownButton>

        {filteredProducts.length > 0 ? (
  <>
    <Row>
      {currentProducts.map((product, index) => (
        <Col xl={4} lg={4} md={6} sm={12} xs={12} key={index} className="mb-4">
          <Card className="h-100 text-center">
            <Link to={`/product/${product.id}`}>
              <Card.Img variant="top" src={product.images} alt={product.name} className="img-fluid" />
            </Link>
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
                {/* {product.mrp && (
                  <div className="mrp">M.R.P.: {product.mrp}</div>
                )} */}
              </div>
              <div className="product-rating">
                <span className="stars">
                  {Array(Math.floor(product.rating)).fill('⭐').join('')}
                </span>
                <span className="rating-number">
                  {product.rating.toFixed(1)}
                </span>
                <span className="rating-count">
                  ({product.ratingCount})
                </span>
              </div>
              <div className="bought-last-month">
                <span>{product.boughtLastMonth}+ people bought this last month</span>
              </div>
              <Button
                variant="success"
                as={Link}
                to={`/product/${product.id}`}
                className="mt-auto align-self-center"
                style={{ fontSize: '1.2rem', padding: '10px 20%' }}
              >
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    {filteredProducts.length > productsPerPage && (
      <Pagination className="justify-content-center mt-4">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
          <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )}
  </>
) : (
  <Col>No products found.</Col>
)}

      </Container>

      <footer className="bg-dark text-white text-center py-4 mt-4">
        <Container>
          <Row>
            <Col>
              <FontAwesomeIcon icon={faFacebook} size="2x" className="me-3" />
              <FontAwesomeIcon icon={faInstagram} size="2x" className="me-3" />
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <p>&copy; 2024 Shop Smart With Aaron. All rights reserved.</p>
              <p>
                <a href="mailto:immanuelaaron1@gmail.com" className="text-white">immanuelaaron1@gmail.com</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;