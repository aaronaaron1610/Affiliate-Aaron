import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
// import CategoryPage from './components/CategoryPage';

function App() {
  const products = [
    {
      "id": "1",
      "brand": "WishCare",
      "name": "WishCare Hair Growth Serum Concentrate",
      "images": ["https://m.media-amazon.com/images/I/61ntnWS5XTL._SX569_.jpg", "https://m.media-amazon.com/images/I/61s+SgsmauL._SY450_.jpg", "https://m.media-amazon.com/images/I/61Vuvry4P3L._SL1080_.jpg", "https://m.media-amazon.com/images/I/5145i9QIjxL._SY450_.jpg"],
      warranty: "No warranty",
      "currentPrice": "₹676",
      "discountPercentage": 32,
      "mrp": "₹999",
      "rating": 4.1,
      "ratingCount": 4797,
      "boughtLastMonth": 20000,
      "returnPolicy": "Non-Returnable",
      "amazonUrl": "https://amzn.to/4cgiLrw",
      "flipkartUrl": "https://fktr.in/dVzgkjP",
      "youtubeUrl": "https://youtube.com/shorts/Wo4i7-MsZR4?si=nOhJ_GYdypldiEIL",
      "problemItSolves": ["Hair loss", "thinning hair"],
      "advantages": [
        "Boosts hair growth with concentrated formula",
        "Reduces hairfall and prolongs hair life cycle",
        "Lightweight leave-on formula with rice water base",
        "Contains powerful ingredients like Redensyl, Anagain, Baicapil, Caffeine, Biotin, and Plant Keratin",
        "Safe and non-toxic ingredients: cruelty-free, paraben-free, vegan, gluten-free, fragrance-free"
      ],
      "disadvantages": [
        "Slow results, not for immediate drastic changes",
        "Non-returnable product",
        // "Packaging issues reported by some customers"
      ],
      "specialFeatures": [
        "Micro-spray for direct scalp application",
        "Effective penetration without greasy residue",
        "Formulated with Redensyl, Anagain, Baicapil, Caffeine, Biotin, Keratin, and Rice Water",
        "Clean and non-toxic formulation"
      ],
      "includedComponents": [
        "Hair Growth Serum (30 ml)",
        "Micro-spray applicator",
        "User Manual"
      ],
      "recommendedUses": [
        "Hair Growth",
        "Hair Fall Control",
        "Thickening Hair",
        "Improving Hair Health",
        "Daily Use"
      ],
      "itemWeight": "80 Grams",
      "countryOfOrigin": "India",
      "manufacturer": "WishCare",
      "productDimensions": "3 x 3 x 5 cm",
      "ingredients": [
        "Caffeine",
        "Biotin",
        "Plant Keratin",
        "3% Redensyl",
        "4% Anagain",
        "2% Baicapil",
        "Rice Water"
      ],
      "steps": [
        "Use the micro spray to apply serum directly to the affected scalp area",
        "Massage the serum into the scalp using the fingertips",
        "Let it stay overnight for best results"
      ]
    }
,    
{
  "id": "2",
  "brand": "Garnier",
  "name": "Garnier Skin Naturals Bright Complete Vitamin C Booster Face Serum",
  "images": [
    "https://m.media-amazon.com/images/I/51wERqBeGLL._SL1080_.jpg", 
    "https://m.media-amazon.com/images/I/51sKHCFycnL._SL1080_.jpg",
    "https://m.media-amazon.com/images/I/51K3KIuf73L._SL1080_.jpg", 
    "https://m.media-amazon.com/images/I/61bbfmMZg4L._SL1080_.jpg", 
  ],
  "warranty": "No warranty",
  "currentPrice": "₹321",
  "discountPercentage": 48,
  "mrp": "₹619",
  "rating": 4.0,
  "ratingCount": 31103,
  "boughtLastMonth": 4000,
  "returnPolicy": "Non-Returnable",
  "amazonUrl": "https://amzn.to/3VFYyGc",
  "flipkartUrl": "https://fktr.in/wLlDtV7",
  "youtubeUrl": "https://youtube.com/shorts/Wo4i7-MsZR4?si=nOhJ_GYdypldiEIL",
  "problemItSolves": ["Dull skin", "dark spots", "uneven skin tone"],
  "advantages": [
    "Instantly brightens skin and reduces dark spots",
    "Contains 30X Vitamin C and lemon extracts",
    "Lightweight, non-oily formula",
    "Infused with Niacinamide and Salicylic Acid",
    "Suitable for all skin types"
  ],
  "disadvantages": [
    "Results take time to show",
    "Non-returnable product"
  ],
  "specialFeatures": [
    "Penetrates deeply to target dark spots",
    "Lightweight and non-oily formula",
    "Contains Vitamin C and lemon extracts",
    "Suitable for daily use"
  ],
  "includedComponents": [
    "Face Serum (30 ml)"
  ],
  "recommendedUses": [
    "Brightening Skin",
    "Reducing Dark Spots",
    "Evening Skin Tone",
    "Daily Use"
  ],
  "itemWeight": "30 Grams",
  "countryOfOrigin": "Indonesia",
  "manufacturer": "Garnier Skin Naturals",
  "productDimensions": "4.5 x 3.7 x 15.2 cm",
  "ingredients": [
    "Vitamin C",
    "Niacinamide",
    "Salicylic Acid",
    "Lemon Extracts"
  ],
  "steps": [
    "Cleanse your face using a face wash",
    "Apply 3-4 drops of the serum and spread evenly over the face and neck",
    "Use twice a day and follow up with moisturizing cream for best results"
  ]
}
,
{
  "id": "3",
  "brand": "POND'S",
  "name": "POND's Super Light Gel, Oil-Free Moisturizer",
  "images": [
    "https://m.media-amazon.com/images/I/51tj3Znd0JL._SX679_.jpg", 
    "https://m.media-amazon.com/images/I/61wjfZzpsBL._SX679_.jpg", 
    "https://m.media-amazon.com/images/I/61NTNFZR4WL._SX679_.jpg", 
    "https://m.media-amazon.com/images/I/61n62tYNKNL._SX679_.jpg"
  ],
  "warranty": "No warranty",
  "currentPrice": "₹374",
  "discountPercentage": 21,
  "mrp": "₹475",
  "rating": 4.4,
  "ratingCount": 50462,
  "boughtLastMonth": 10000,
  "returnPolicy": "Non-Returnable",
  "amazonUrl": "https://amzn.to/3VjCa3Y",
  "flipkartUrl": "https://fktr.in/5gfV4wQ",
  "youtubeUrl": "https://youtube.com/shorts/Wo4i7-MsZR4?si=nOhJ_GYdypldiEIL",
  "problemItSolves": ["Dry skin", "dull skin"],
  "advantages": [
    "Super lightweight and non-oily formula",
    "24-hour moisture lock",
    "Suitable for all skin types and all-year-round use",
    "Instant absorption without greasy residue",
    "Leaves skin soft and glowing"
  ],
  "disadvantages": [
    "Small size for the price",
    "Not sufficient for winter use for some users",
    "Non-returnable product"
  ],
  "specialFeatures": [
    "Infused with Hyaluronic Acid and Vitamin E",
    "Deeply nourishes and hydrates skin",
    "Improves skin's natural moisture-holding capacity",
    "Non-oily texture keeps skin non-sticky"
  ],
  "includedComponents": [
    "Gel Moisturizer (200 g)"
  ],
  "recommendedUses": [
    "Hydrating Skin",
    "Moisturizing",
    "Daily Use",
    "Non-Sticky Moisturizer"
  ],
  "itemWeight": "200 Grams",
  "countryOfOrigin": "India",
  "manufacturer": "L.B.C.P.Pvt Ltd",
  "productDimensions": "9.8 x 4.5 x 9.8 cm",
  "ingredients": [
    "Hyaluronic Acid",
    "Vitamin E"
  ],
  "steps": [
    "Cleanse your face using a face wash",
    "Apply a small amount of the gel moisturizer and spread evenly over the face and neck",
    "Use daily for best results"
  ]
}

    
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/product/:productId" element={<ProductDetail products={products} />} />
        {/* <Route path="/category/:categoryName" element={<CategoryPage products={products} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
