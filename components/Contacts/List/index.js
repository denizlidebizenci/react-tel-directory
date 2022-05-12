import {useState} from 'react'

function List({contacts}) {
  const [filterText, setFilterText] = useState("")

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
    item[key]
    .toString()
    .toLowerCase()
    .includes(filterText.toLocaleLowerCase())
    );
  });


  return (
    <div>
    <input
    placeholder='Search'
    value={filterText}
    onChange={(e)=> setFilterText(e.target.value)}
    /> 

   
    
      <ul className='list'>
        {filtered.map((contacts, i) =>(
          <li key={i}>{contacts.fullname}</li>
        ))}
      </ul>
    </div>
  )
}

export default List