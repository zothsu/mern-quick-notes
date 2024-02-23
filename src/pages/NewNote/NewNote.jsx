import { useState } from "react"
import * as notesAPI from '../../utilities/notes-api'


export default function NewNote() {
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote({...newNote, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
      await notesAPI.createNote({ text: newNote.text })
      setNewNote({text: ''})
  }


  return (
    <>
      <hr />
      <h1>New Note</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
      <input 
        type="text"
        name="text"
        value={newNote.text || ''}
        onChange={handleChange}
        placeholder="Enter a Note" />
      <button type="submit">ADD NOTE</button>
      </form>
    </>
  );
}