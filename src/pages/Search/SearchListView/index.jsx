import React from 'react'

import Item from './Item'

function SearchListView (props) {
  console.log(props.search);

  return (
    <div>
      {
        props.searchData.map((item, index) => {
          return <Item data={item} key={index} />
        })
      }
    </div>
  )
}

export default SearchListView


