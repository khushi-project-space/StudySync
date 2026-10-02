document.addEventListener('submit',e=>{const f=e.target;if(f.matches('[data-confirm]')&&!confirm(f.dataset.confirm))e.preventDefault()});
