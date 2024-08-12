import React from 'react'

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, img } = person
        return (
          <div key={id} className="flex items-center space-x-4 mb-4">
            <img 
              src={img} 
              alt={name} 
              className="w-16 h-16 rounded-full object-cover" 
            />
            <div>
              <h4 className="text-lg font-semibold">{name}</h4>
              <p className="text-gray-500">{age} years old</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default List
