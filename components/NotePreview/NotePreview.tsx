"use client";
import { useParams, useRouter } from "next/navigation";
import css from "./NotePreview.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import ClientLocalTime from "@/components/ClientLocalTime/ClientLocalTime";

const NotePreview = () => {
  const params = useParams<{ id: string }>();
  const noteId = params.id;
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
    enabled: !!noteId,
    refetchOnMount: false,
    staleTime: 5_000,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !note) {
    return <div>Error loading note</div>;
  }

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <div>
            <span className={css.tag}>{note.tag}</span>
            <span className={css.date}>
              <ClientLocalTime iso={note.createdAt} />{" "}
            </span>
          </div>
        </div>
        <p className={css.content}>{note.content}</p>
      </div>
    </div>
  );
};

export default NotePreview;
