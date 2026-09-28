let sortNewFirst = true;
function renderWorks(){
  const container = document.querySelector('.portfolio-list');
  const tagsBox = document.getElementById('works-tags');
  let data = [...worksData];
  if(sortNewFirst){
    data.sort((a,b)=>b.year - a.year);
  }else{
    data.sort((a,b)=>a.year - b.year);
  }
  container.innerHTML = '';
  data.forEach(item=>{
    const li = document.createElement('li');
    li.className = "work-card";
    li.innerHTML = `
      <a href="${item.link}" target="_blank" rel="noopener noreferrer">
        <div class="work-cover">
          <img src="${item.img}" alt="${item.title}" width="1200" height="800" decoding="async">
        </div>
        <div class="work-copy">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      </a>
    `;
    container.appendChild(li);
  })
}
document.getElementById('works-sort').addEventListener('click',()=>{
  sortNewFirst = !sortNewFirst;
  const btn = document.getElementById('works-sort');
  btn.innerText = sortNewFirst ? "按年份：新→旧" : "按年份：旧→新";
  renderWorks();
})
document.addEventListener('DOMContentLoaded',renderWorks);
