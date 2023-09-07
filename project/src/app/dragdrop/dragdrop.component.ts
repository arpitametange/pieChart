import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent {


  todo=['get to work',
'pick up teeth',
'go home',
'go to shop']

done=['get to work',
'pick up teeth',
'go home',
'go to shop']
drop(event:CdkDragDrop<string[]>){
  if(event.previousContainer===event.container){
    moveItemInArray(event.container.data,event.previousIndex,event.currentIndex)
  }else{
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex)
  }
 
}
}


