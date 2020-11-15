import React, { Component } from "react";



class ResultsSection extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      nutriments: [],
    };
  }


  getProductInformation(code) {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}`)
      .then((data) => data.json())
      .then((response) => {
        this.setState({
          product: response.product,
          nutriments: response.product.nutriments
        })
    })
  }

  componentDidMount() { 
    let productCode = this.props.match.params.code;
    this.getProductInformation(productCode);
  }


  render() {
    const nutriments = [this.state.nutriments]
    const product = [this.state.product]

    const TestManagerView = function(props) {
        return (
          
          <div>
            <div>
              {
                props.product && props.product.map(function(testItem) {
                   return <div> testItem :
                     <li>novagroup: {testItem.nova_groups} </li>
                   </div>
                })
              }
            </div>
          </div>
        )
    }
    
    const TransactionManagerView = function(props) {
        return (
          
          <div>
            <div>
              {
                props.nutriments && props.nutriments.map(function(nutrItem) {
                   return <div> nutirments info:
                     <li>energy: {nutrItem.energy} kcal</li>
                     <li>calcium: {nutrItem.calcium} mg</li>
                     <li>potassium: {nutrItem.potassium} mg</li>
                   </div>
                })
              }
            </div>
          </div>
        )
    }
    

  
      

    return (
      <>
        <div>{console.log(product)} </div>
        <div ><TestManagerView product={product}/></div>
        <div ><TransactionManagerView nutriments={nutriments}/></div>
        
        
        <img className='imgLarge'
              src={this.state.product?.image_front_url}
              alt={`${this.state.product?.product_name}`}
            />

        {/* <div> Nutirnet Levels Section:
        <h4>proteins_100g: {this.state.nutriments.proteins_100g}g</h4>
        <h4>carbohydrates: {this.state.product.carbohydrates}g</h4>
        <h4>fat_100g: {this.state.product.fat_100g}g</h4>
        <h4>sugars_100g: {this.state.product.sugars_100g}g</h4>
        </div>
        <h4>_keywords: {this.state.product._keywords} </h4>
        <h4>Nova group: {this.state.product.nova_groups_tags}</h4>
        <h4>countries: {this.state.product.countries_tags}</h4>
        <h4>nutriscore_score: {this.state.product.nutriscore_score} </h4>
        <h4>nutrition_grades: {this.state.product.nutrition_grades} </h4>
        <h4>allergens_tags: {this.state.product.allergens_tags}</h4>
        <h4>allergens_from_ingredients: {this.state.product.allergens_from_ingredients}</h4>
        <h4>pnns_groups_1: {this.state.product.pnns_groups_1}</h4>
        <h4>pnns_groups_2: {this.state.product.pnns_groups_2}</h4>
        <h4>carbon_footprint_from_known_ingredients_debug: {this.state.product.carbon_footprint_from_known_ingredients_debug}</h4>
        <h4>ingredients_text: {this.state.product.ingredients_text}</h4>
        <h4>categories_tags: {this.state.product.categories_tags}</h4>
        <h4>packaging: {this.state.product.packaging}</h4>
        <h4>known_ingredients_n: {this.state.product.known_ingredients_n}</h4>
        <h4>unknown_ingredients_n: {this.state.product.unknown_ingredients_n}</h4>
        <h4>ingredients_original_tags: {this.state.product.ingredients_original_tags}</h4>
        <h4>serving_size: {this.state.product.serving_size}</h4>
        <h4>ingredients_analysis_tags: {this.state.product.ingredients_analysis_tags}</h4>
        <h4>additives_original_tags: {this.state.product.additives_original_tags}</h4>
        <h4>traces: {this.state.product.traces}</h4>
        <h4>nutrition_score_warning: {this.state.product.nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients}</h4>
        <h4>nutriscore_grade: {this.state.product.nutriscore_grade}</h4>
        <h4>nutrient_levels_tags: {this.state.product.nutrient_levels_tags}</h4>
        <h4>data_quality_tags: {this.state.product.data_quality_tags}</h4>
        <h4>carbon_footprint_percent: {this.state.product.carbon_footprint_percent_of_known_ingredients}</h4>
        <h4>vitamins_tags: {this.state.product.vitamins_tags}</h4>
        <h4>last_edit_dates_tags: {this.state.product.last_edit_dates_tags}</h4>
        <h4>nutrition_score_estimate: {this.state.product.nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value}</h4>
        <h4>ingredients_original_tags: {this.state.product.ingredients_original_tags}</h4>
        <div className='imgContainer'>
          <div className='imgFront'>
            <img className='imgSmall'
              src={this.state.product?.image_front_small_url}
              alt={`${this.state.product?.product_name}`}
            />
            <img className='imgLarge'
              src={this.state.product?.image_front_url}
              alt={`${this.state.product?.product_name}`}
            />
          </div>
          <div className='imgNutrition'>
            <img className='imgSmall'
              src={this.state.product?.image_thumb_url}
              alt={`${this.state.product?.product_name}`}
            />
            <img className='imgLarge'
              src={this.state.product?.image_front_url}
              alt={`${this.state.product?.product_name}`}
            />
          </div>
          <div className='imgIngredients'>
            <img className='imgSmall'
              src={this.state.product?.image_thumb_url}
              alt={`${this.state.product?.product_name}`}
            />
            <img className='imgLarge'
              src={this.state.product?.image_front_url}
              alt={`${this.state.product?.product_name}`}
            />
          </div>
        </div> */}
        
      </>
    );
  }
}


export default ResultsSection
