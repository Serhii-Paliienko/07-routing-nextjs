"use client";

import Modal from "@/components/Modal/Modal";
import NotePreview from "@/app/@modal/(.)notes/[id]/NotePreview.client";
import { useRouter } from "next/navigation";

const NoteModal = () => {
  const router = useRouter();
  return (
    <Modal onClose={() => router.back()}>
      <NotePreview />
    </Modal>
  );
};

export default NoteModal;
