import React from 'react'

const AddRestaurant = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" placeholder="name" />
        </div>
        <div>
          <input type="text" placeholder="location" />
        </div>
        <div>
          <select>
            <option>Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>
        <div className="btn">Add</div>
      </form>
    </div>
  )
}

export default AddRestaurant
