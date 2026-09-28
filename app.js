// 阅读进度条
window.addEventListener('scroll',()=>{
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const percent = (scrollTop / docHeight) * 100;
  document.getElementById('reading-progress').style.width = percent + "%";
})

// 返回顶部
document.getElementById('to-top').addEventListener('click',()=>{
  window.scrollTo({top:0,behavior:'smooth'})
})

// 页面区块监听
const sections = document.querySelectorAll("section[id]");
const indicator = document.getElementById("section-indicator");
window.addEventListener('scroll',()=>{
  let current = "";
  sections.forEach(sec=>{
    const sectionTop = sec.offsetTop;
    const sectionHeight = sec.offsetHeight;
    if(window.scrollY >= sectionTop - 100){
      current = sec.getAttribute("id");
    }
  })
  if(current){
    indicator.textContent = "当前板块：" + current;
  }
})
