import React from 'react'

export default function Filter(props) {

  let filterData = props.filterData
  let category = props.category
  let setCategory = props.setCategory

  function filterHandler(title) {
    setCategory(title)
  }

  return (
    <>
      <div className="filter_button w-full mx-auto flex flex-wrap space-x-4 gap-y-4 py-4 mt-4 justify-center">
        {
          filterData.map( (data) => (
            <button className={`btn text-white font-spaceGrotest border-2 text-[20px] px-2 py-1 
                    ${category === data.title ? 
                    'border-[#7ed993] border-opacity-60' : 
                    'border-transparent'}`}
                    onClick={() =>filterHandler(data.title)}>
              {data.title}
            </button>
          ) )
        }    
      </div>
    </>
  )
}
