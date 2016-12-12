import React from 'react'
import { connect } from 'react-redux'

const CategoryDetail = ({ categories, onChange, category }) => {
    const option = categories.map(category => <option key={category} value={category}>{category}</option>)
    return (
        <select id="dropdown-menu" className="form-control" onChange={onChange} value={category} name='category' required>
            {option}
        </select>
    )
} 

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, null)(CategoryDetail)
