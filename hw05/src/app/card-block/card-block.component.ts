import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild, DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit,
                                          DoCheck,
                                          AfterContentInit,
                                          AfterContentChecked,
                                          AfterViewInit,
                                          AfterViewChecked
                                                            {

  colorB = 'grey';
  @Input() giveCars: any;


  constructor() { }
  @Output()
  public myEvent: EventEmitter<number> = new EventEmitter<number>();

  public pushId(elem: number) {
    this.myEvent.emit(elem)
  }

  @ViewChildren('two') bloksPrice!: QueryList<ElementRef>
  newPrice() {
    this.bloksPrice.forEach(function (el) {
      let item = el.nativeElement.innerText *0.85;
      el.nativeElement.innerText = item;
    })
      console.log(this.giveCars)
    console.log()
  }

  @ContentChild('el') meEl!: ElementRef;




  ngOnChanges() {


  }

  ngOnInit(): void {


  }

  ngDoCheck() {

  }

  ngAfterContentInit() {


  }

  ngAfterContentChecked() {
    this.meEl.nativeElement.style.background = 'red'
  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {

  }

}
