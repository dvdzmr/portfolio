
async function loadProjects(){
  const res = await fetch('projects/projects.json');
  const list = await res.json();
  const container = document.getElementById('project-list');
  container.innerHTML = '';

  list.forEach(p=>{
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
    div.onclick = ()=>openProject(p);
    container.appendChild(div);
  });
}

async function openProject(p){
  const modal = document.getElementById('project-modal');
  const body = document.getElementById('modal-body');
  const text = await fetch(p.file).then(r=>r.text());
  body.innerHTML = marked.parse(text);
  modal.classList.remove('hidden');

  modal.onclick = (e)=>{
    if(e.target === modal){
      modal.classList.add('hidden');
    }
  };
}

document.getElementById('modal-close').onclick =
  ()=>document.getElementById('project-modal').classList.add('hidden');

loadProjects();
