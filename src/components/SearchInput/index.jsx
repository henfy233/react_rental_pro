import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import './index.less'

function SearchInput (props) {
  const navigate = useNavigate()
  const [keywords, setKeywords] = useState("")

  function keyUpHandle (e) {

    if (keywords.length > 0) {
      if (e.keyCode === 13) {
        //useNavigate需要在函数组件内部使用
        navigate("/search/" + keywords);
        // props.history.push("/search/" + keywords)
        // dispatch(searchAction.updateSearch(keywords))
      }
    }
  }

  function changeHandle (e) {
    setKeywords(e.target.value)
  }

  return (
    <input
      className='search-input'
      type="text"
      onKeyUp={keyUpHandle}
      value={keywords}
      onChange={changeHandle} />
  )
}

export default SearchInput
