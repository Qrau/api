import React from 'react'
import { ResultsContainer, ResultsWrap, ResultsImg, ProductName, ProductBrand } from './ListCardElements'

const ResultsCard = (props) => {
  return (
    <>
      <a href={"./code/" + props.code}>
        <ResultsWrap>
          <ResultsContainer>
            <ResultsImg
              src={props.image}
              alt={props.productName}
            />
          </ResultsContainer>
          <ProductName>{props.productName}</ProductName>
          <ProductBrand>{props.brand}</ProductBrand>
        </ResultsWrap>
      </a>
    </>
  )
}

export default ResultsCard
