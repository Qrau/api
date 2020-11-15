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
            <div className='testItem'>
              {product.map((testItem)=>
                <div>{testItem.unknown_nutrients_tags}</div>)}
            </div>
          </div>
        )
    }
    
    const TransactionManagerView = function(props) {
        return (
          
          <div>
            <div>
              {
                nutriments.map(function(nutrItem) {
                   return <> nutirments info:
                     <li>energy: {nutrItem.energy} kcal</li>
                     <li>calcium: {nutrItem.calcium} mg</li>
                     <li>potassium: {nutrItem.potassium} mg</li>
                   </>
                })
              }
            </div>
          </div>
        )
    }

    const people = [
      {
        name: 'Mike Smith',
        family: {
          mother: 'Jane Smith',
          father: 'Harry Smith',
          sister: 'Samantha Smith'
        },
        age: 35
      },
      {
        name: 'Tom Jones',
        family: {
          mother: 'Norah Jones',
          father: 'Richard Jones',
          brother: 'Howard Jones'
        },
        age: 25
      }
    ];
    
    for (const {name: n, family: {father: f}} of people) {
      console.log('Name: ' + n + ', Father: ' + f);
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
      </>
    );
  }
}


export default ResultsSection
