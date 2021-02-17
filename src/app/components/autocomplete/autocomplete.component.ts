import { Component, OnInit } from '@angular/core';
import { PorderService } from 'src/app/services/porder.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  text: string='';

  results:any=[];

  constructor(private po:PorderService) {  }

  ngOnInit(): void {
  }
 
  search(event:any) {
    this.po.get(event.query,1).subscribe(data => {
        this.results = data;
        console.log(this.results);
    });
  }

   
  test(event:any) {
    console.log(event);
  }
}
