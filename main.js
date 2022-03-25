const fill = document.querySelector('.fill');

const empties = document.querySelectorAll('.empty');


fill.addEventListener("dragStart",dragStart);

fill.addEventListener('dragend',dragEnd);


for(const empty of empties){
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
}

function dragStart(){
        this.className.add('hold');
        setTimeout(() => (this.className = ' invisible'), 1000);
    
}
function dragEnd(){
   this.className =' fill'; 
}


function dragOver(e){
   e.preventDefault();

}
function dragEnter(){
    this.className.add('hovered');
    
}
function dragLeave(){
    this.className = 'empty';
}
function dragDrop(){
      this.className= 'empty';
      this.append(fill)
}