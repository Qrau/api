import styled from 'styled-components'


export const SearchContainer = styled.div`
  
`
export const SearchWrap = styled.div`
    background-color: rgba(245, 102, 157, 1);
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    
    
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(180deg, rgba(249, 154, 190, 1) 0%, transparent 100%);
        z-index: 2;
    }
`

export const SearchInput = styled.input`
  padding: 10px;
`

export const SearchButton = styled.button`
  padding: 10px;
`


export const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  margin: 15px;
  font-size: 14px;
`
