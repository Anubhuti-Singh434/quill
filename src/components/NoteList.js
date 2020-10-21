import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../contexts/NoteContext";
import { addNote, getNotes } from "../utils/notes";
import FancyButton from "./FancyButton";

const NoteListItem = ({ note, onClick }) => (
  <div
    style={{ padding: 20, borderBottom: "1px solid #ddd" }}
    onClick={onClick}
  >
    {note.title}
  </div>
);

const NoteList = () => {
  const [noteList, setNoteList] = useState([]);
  const { setSelectedNote } = useContext(NoteContext);

  useEffect(() => {
    refreshNoteList();
  }, []);

  const refreshNoteList = () => {
    setNoteList(getNotes());
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Notes
        <FancyButton
          title="Add"
          onClick={() => {
            addNote("haha", "yes");
            refreshNoteList();
          }}
        />
      </div>
      <div style={{ flexGrow: 1, overflowY: "auto" }}>
        {noteList.map((note, index) => (
          <NoteListItem
            note={note}
            onClick={() => setSelectedNote(noteList[index])}
          />
        ))}
      </div>
    </>
  );
};

export default NoteList;
