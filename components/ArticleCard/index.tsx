import Link from 'next/link'
import styles from './ArticleCard.module.css'

export const ArticleCard = () => {
  return (
    <div className={styles.articleCard}>
      <Link href="/post" aria-label="記事「記事の名前」を見る"></Link>
      <h2>記事の名前</h2>
    </div>
  )
}
