import React from 'react'

export default function Note({note}) {
  return (
    <>
    <div>{note.timestamps}</div>
    <div>{note.string}</div>
    <div>Hopefully this works</div>
    </>
    
  )
}
