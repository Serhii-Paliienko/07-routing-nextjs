import type { ReactNode } from "react";
import css from "./LayoutNotes.module.css";
interface FilterLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
  modal?: ReactNode;
}

const FilterLayout = ({ children, sidebar, modal }: FilterLayoutProps) => {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <section className={css.notesWrapper}>{children}</section>
      {modal}
    </div>
  );
};

export default FilterLayout;
