import React, { Component } from "react";
import Header from "./header";
class Gallery extends Component {

    render() {

        return (

<div>

<main className="main">

    <section id="recent-posts" className="recent-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
      </div>

      <div className="container">
          <table cellPadding={20} cellSpacing={20}>
            <tr>
              <th>
              <img src="assets/img/Pic1.jpg" alt width={400} height={300}/>
              </th>
              <th>
              <img src="assets/img/Pic2.jpg" alt width={400} height={300}/>
              </th>
              <th>
              <img src="assets/img/Pic3.png" alt width={400} height={300}/>
              </th>
            </tr>
            <tr>
              <th>
              <img src="assets/img/Pic4.jpg" alt width={400} height={300}/>
              </th>
              <th>
              <img src="assets/img/Pic5.jpg" alt width={400} height={300}/>
              </th>
              <th>
              <img src="assets/img/Pic6.jpg" alt width={400} height={300}/>
              </th>
            </tr>
            <tr>
              <th>
              <img src="assets/img/Pic7.jpg" alt width={400} height={300}/>
              </th>
              <th>
              <img src="assets/img/Pic8.webp" alt width={400} height={300}/>
              </th>
              <th>
              <img src="assets/img/Pic9.png" alt width={400} height={300}/>
              </th>
            </tr>
          </table>
      </div>

    </section>

</main>
</div>
)

    }

}

export default Gallery;