import React,{ useEffect, useMemo, useState } from 'react';

function Work() {
  const [apiVal , setApiVal] = useState([]);
  const [optionValue, setOptionValue] = useState("fName")
  const [searchVal, setSearchVal] = useState("")

useEffect(()=>{
apiCall();
},[])

  const apiCall = async() =>{
    const response = await fetch('https://jsonplaceholder.org/users')
    const responseVal = await response.json();
    setApiVal(responseVal);
}

const filteredValue = useMemo(()=>{
    return apiVal.filter((person)=>{
        // console.log("person",person.firstname)
        if(optionValue === "fName"){
            return person.firstname.toLowerCase().includes(searchVal.toLowerCase())
        } else {
            return person.lastname.toLowerCase().includes(searchVal.toLowerCase())
        }
    })
},[apiVal,optionValue,searchVal])

  return (
    <div>
      <h1>api</h1>
      <select value={optionValue} onChange={(e)=>{setOptionValue(e.target.value)}}>
        <option value={"fName"}>First Name</option>
        <option value={"lName"}>Last Name</option>
      </select>
      <input type='search' value={searchVal} onChange={(e)=>{setSearchVal(e.target.value)}} style={{marginLeft: "10px"}} placeholder='Enter Search Value'/>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-start', marginTop: "10px" }}>
            {filteredValue.map(val=>{
              return  <div key={val.id} 
              style={{ 
                width: 'calc(25% - 10px)',
              padding: '10px', 
              border: '1px solid #ccc', 
              borderRadius: '4px', 
              boxSizing: 'border-box' }}
              >
                {console.log(val.firstname)}

                {val.firstname} {val.lastname}
                </div>
            })}
    </div>
    </div>
    
  )
}

export default Work