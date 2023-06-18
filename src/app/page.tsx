import styles from './page.module.css'
import Post from "../components/Post"


export default async function Home() {


const data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
const res = await data.json()
console.log(res);

  return (
    <main className={styles.main}>
     {res.map((val) => {
        return<Post
        key={val.id}
        title={val.title}
        body={val.body}
        />
      })}

    </main>
  )
}
