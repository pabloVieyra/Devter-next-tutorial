import AppLayout from "../../components/AppLayout"
import { useEffect, useState } from "react"
import Devit from "../../components/Devit"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, username, avatar, message }) => {
            return (
              <Devit
                key={id}
                username={username}
                avatar={avatar}
                message={message}
                id={id}
              ></Devit>
            )
          })}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>
        {`
          header {
            align-items: center;
            border-bottom: 1px solid #ccc;
            height: 49px;
            display: flex;
            position: sticky;
            top: 0;
            width: 100%;
          }

          h2 {
            font-weight: 800;
            font-size: 21px;
          }

          section {
            padding-top: 49px;
          }

          nav {
            bottom: 0;
            border-top: 1px solid #ccc;
            height: 49px;
            position: sticky;
            width: 100%;
          }
        `}
      </style>
    </>
  )
}
