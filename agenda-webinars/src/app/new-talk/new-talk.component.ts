import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {TalkService} from "../talk.service";

@Component({
  selector: 'app-new-talk',
  templateUrl: './new-talk.component.html',
  styleUrls: ['./new-talk.component.css'],
})
export class NewTalkComponent implements OnInit {

  userForm: any;
  descriptionControl: FormControl;

  condicion: boolean;

  @ViewChild('elemento') elemento: ElementRef;

  constructor(private fb: FormBuilder, private renderer: Renderer2, private talkService: TalkService) {

    this.descriptionControl =
      new FormControl('descripcion', Validators.compose([Validators.required, this.myValidacion]));

    this.userForm = this.fb.group({
      title: 'Valor inicial',
      description: this.descriptionControl
    });

    this.descriptionControl.valueChanges
      .subscribe(x => console.log(x));

    setInterval(() => this.condicion = !this.condicion, 3000);
  }

  myValidacion(formControl: FormControl) {
    if (formControl.value.indexOf('codemotion') !== -1) {
      return {'invalidConference': true};
    }
  }

  ngOnInit() {
    this.renderer.setStyle(this.elemento.nativeElement, 'background-color', 'red');
  }

  onSubmit() {
    console.log(this.userForm);
    console.log(this.userForm.controls.title.touched);


    this.talkService.saveTalk({
      title: this.userForm.value['title'],
      date: new Date()
    }).subscribe(
      x => console.log(x),
      err => console.log(err)
    );
  }

}
