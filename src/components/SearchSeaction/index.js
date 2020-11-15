import React, { Component } from "react";
import ResultsCard from "../../components/ResultsCard/index";
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchResults,
} from "./SearchElements";


class ResultsSection extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      products: [],
    };

    this.queryChange = this.queryChange.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
    this.handleProductUpdate = this.handleProductUpdate.bind(this);
  }

  loadProducts(productName) {
    fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${productName}&search_simple=1&json=true`
    )
      .then((data) => data.json())
      .then((response) => {
        this.setState({ products: response.products });
      })
      .catch((error) => {
        console.error("Load Products Error!", error);
      });
  }

  componentDidMount() {}

  queryChange(event) {
    this.setState({ query: event.target.value });
  }

  searchProducts() {
    this.loadProducts(this.state.query);
    
  }

  handleProductUpdate(products) {
    
    this.setState(products);
    
  }

  


  render() {
    return (
      <>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Find products"
            onChange={this.queryChange}
          />
          <SearchButton onClick={this.searchProducts}>Search</SearchButton>
        </SearchContainer>
        <SearchResults>
          {this.state.products.map((item) => {
            
            return (
              <>
                <ResultsCard
                  key={item.code} 
                  productName={item.product_name}
                  brand={item.brands}
                  image={item.image_small_url}
                  code={item.code}
                /> 
              </>
            );
          })}
        </SearchResults>
      </>
    );
  }
}

export default ResultsSection
