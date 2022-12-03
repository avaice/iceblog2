import styles from './Custom404.module.css'
export default function Custom404() {
  return (
    <div className={styles.notFound}>
      <div>
        <h2>404 Not Found</h2>
        <p>
          ページが見つかりませんでした。削除されたか、非公開になっている可能性があります。
        </p>
      </div>
    </div>
  )
}
