import React from 'react'

export default function NewPetForm() {
  return (
    <div>
        <h1>New Pet</h1>
        <form>
            <label>Pet Name: </label>
        <input type="text" placeholder='Enter Pet Name' id="name" name="name"/>
        <br></br>
            <label>Pet Kind: </label>
        <input type="text" placeholder="Enter Pet Kind" id="kind" name="kind"/>
        <br></br>
        <button type='submit'>Submit</button>
        </form>
   </div>
  )
}
