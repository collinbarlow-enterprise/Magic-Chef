import React from 'react'
import Note from '../Note/Note'

export default function Notes({notes}) {
  return (
    <>
        {notes.map(note => 
            <Note note={note}/>)} 
    </>
  )
}
