import React from "react"
import scss from "../Sources/Sources.module.scss"

const Sources = ({ sources }) => {
  return (
    <section className={scss.sources__container}>
      <div>
        <h6>SOURCES</h6>
        <ul>
          <li>
            <a href="#">Biography.com: Sojourner Truth - Quotes, Speech & Facts</a>
          </li>
          <li>
            <a href="#">National Women's History Museum: Sojourner Truth</a>
          </li>        
          <li>
            <a href="#">UNESCO: Sojourner Truth biography</a>
          </li>        
          <li>
            <a href="#">History.com: Sojourner Truth - Quotes, Facts & Speech</a>
          </li>        
          <li>
            <a href="#">Sojourner Truth Institute: Sojourner Truth</a>
          </li>        
          <li>
            <a href="#">National Park Service: Sojourner Truth: Ain't I A Woman?</a>
          </li>        
          <li>
            <a href="#">Sojourner Truth Memorial Committee: Her History</a>
          </li>        
          <li>
            <a href="#">Black Women in America: An Historical Encyclopedia. Darlene Clark Hine, Elsa Barkley Brown and Rosalyn Terborg-Penn, editors.</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Sources