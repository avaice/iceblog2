import { SideCategories } from './SideCategories'
import { SideNewArticles } from './SideNewArticles'
import styles from './Sidebar.module.css'

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SideCategories />
      <SideNewArticles />
    </div>
  )
}
