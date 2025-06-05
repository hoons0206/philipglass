const app = document.getElementById('app');

const pages = {
    index: `
     <div class="logo">
    <p><img src="html/media/1.jpg" width="300px"></p>
  </div>
  `,


  about: `
    <div class="CV">
    <h1 class>About</h1>
    <p>Philip Glass is one of the most influential composers of the late 20th century...<p>Philip Morris Glass is a highly influential American composer known for his</p>
    <p> minimalist style and his prolific output in various genres </p>
    <p>including opera, film scores, and symphonies. </p>
    <p>He has written 15 operas, numerous chamber operas and </p>
    <p>musical theatre works, 14 symphonies, 12 concertos, 9 string quartets, and scores for film. </p>
    <p>Glass has been nominated for multiple Grammy and Academy Awards, </p>
    <p>and he has received the Praemium Imperiale, the U.S. National Medal of the Arts, 
    and the Kennedy Center Honors.</p></p>

    </div>
  `,
  works: `
    <div class="CV">
  <h1>Works</h1>
  <div class="work-item">
    <h2>Einstein on the Beach</h2>
    <p>A groundbreaking opera composed with Robert Wilson. </p>
    <p>Minimalist in style and nearly five hours long, </p>
    <p>it explores nonlinear storytelling through repeated motifs, numbers, and abstract visuals.
    </p>
  </div>

  <div class="work-item">
    <h2>Koyaanisqatsi</h2>
    <p>A hauntingly rhythmic score for Godfrey Reggio’s film, </p>
    <p>combining time-lapse imagery with hypnotic music to critique modern industrial life.</p>
    <p>One of the most iconic film scores in minimalist music.
    </p>
  </div>

  <div class="work-item">
    <h2>Glassworks</h2>
    <p>A more accessible album intended for personal listening, </p>
    <p>blending repetitive patterns with melodic simplicity. </p>
    <p>It introduced Glass’s music to a wider audience in the early 1980s.
    </p>
  </div>
</div>

  `,
  contact: `
    <div class="CV">
    <h1>Contact</h1>
    <p>For booking or inquiries, please email us at</p>
    <p><H4>contact-Philipglass@gmail.com</H4></p>
    
      </div>
  `,
  schedules: `
    <div class="CV">
    <h1>Schedules</h1>
    <p>Upcoming concerts and lectures will be listed here.</p>
      </div>
<div class="header">
  <table>
    <thead>
      <tr><th colspan="7"><h3>June 2025</h3></th></tr>
      <tr>
        <th>Sun</th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td><td class="highlight">2<div class="tooltip">Lecture: Modern Composition @ 3PM</div></td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
      </tr>
      <tr>
        <td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td>
      </tr>
      <tr>
        <td class="highlight">15<div class="tooltip">Lecture: Classic Composition @ 1PM</div></td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td>
      </tr>
      <tr>
        <td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td>
      </tr>
      <tr>
        <td>29</td><td>30</td><td></td><td></td><td></td><td></td><td></td>
      </tr>
    </tbody>
  </table>
</div>
  `
};

function renderPage() {
  const hash = location.hash.replace('#', '');
  app.innerHTML = pages[hash] || `<h1>Welcome</h1><p>This is the homepage of Philip Glass.</p>`;
}

// 초기 로딩 시
window.addEventListener('DOMContentLoaded', renderPage);
// 해시 변경 시
window.addEventListener('hashchange', renderPage);
