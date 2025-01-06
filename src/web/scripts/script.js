document.addEventListener('DOMContentLoaded', () => {
    const collapsibleToggleButtons = document.getElementsByClassName('collapsibleToggleButtonClass');
    
    for (let collapsibleToggleButton of collapsibleToggleButtons) {
   
        collapsibleToggleButton.addEventListener('click', (event) => {
            const buttonParent = event.target.closest('button');
            const slug = buttonParent.dataset.relatedtovalue
            const collapsibleToggleButton = document.getElementById('collapsibleToggleButton-' + slug);
            const content = document.getElementById('collapsibleContent-' + slug);
            const fade = document.getElementById('collapsibleFade-' + slug);
            const isExpanded = content.classList.contains('expanded');
        
            if (isExpanded) {
                content.classList.remove('expanded');
                collapsibleToggleButton.classList.remove('expanded');
                fade.style.display = '';
            } else {
                content.classList.add('expanded');
                collapsibleToggleButton.classList.add('expanded');
                fade.style.display = 'none';
            }


        });
        
    }
  });
  