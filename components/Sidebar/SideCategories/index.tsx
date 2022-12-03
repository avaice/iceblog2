import styles from './SideCatergories.module.css'
export const SideCategories = () => {
  return (
    <div>
      <h2>カテゴリー</h2>
      <div className={styles.categoryList}>
        <a href="#">焼き肉</a>
        <a href="#">釣り</a>
        <a href="#">JavaScript</a>
        <a href="#">チョコミント</a>
        <a href="#">ゲーム</a>
        <a href="#">ラーメン</a>
      </div>
    </div>
  )
}
