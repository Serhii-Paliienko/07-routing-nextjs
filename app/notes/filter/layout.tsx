import type { ReactNode } from "react";
import css from "./LayoutNotes.module.css";

const FilterLayout = ({
  children,
  sidebar,
  modal,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <section className={css.notesWrapper}>{children}</section>
      {modal}
    </div>
  );
};

export default FilterLayout;
