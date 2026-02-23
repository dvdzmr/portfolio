
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

async function submitContactForm(e){
  e.preventDefault();

  const form = document.getElementById('contact-form');
  const button = document.getElementById('contact-submit');
  const status = document.getElementById('contact-status');
  const formData = new FormData(form);

  if (formData.get('_gotcha')) {
    return;
  }

  button.disabled = true;
  button.textContent = 'Sending...';
  status.textContent = 'Sending...';
  status.className = 'contact-status';

  try {
    const response = await fetch('https://formspree.io/f/mknllkkw', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      })
    });

    if (!response.ok) {
      throw new Error('submit_failed');
    }

    form.reset();
    status.textContent = 'Message sent. Thanks for reaching out.';
    status.className = 'contact-status ok';
  } catch {
    status.textContent = 'Could not send right now. Please try again.';
    status.className = 'contact-status err';
  } finally {
    button.disabled = false;
    button.textContent = 'Send Message';
  }
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

document.getElementById('contact-form').addEventListener('submit', submitContactForm);

loadProjects();
