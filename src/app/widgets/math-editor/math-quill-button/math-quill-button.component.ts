import { Component, OnInit, Input, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-math-quill-button',
  templateUrl: './math-quill-button.component.html',
  styleUrls: ['./math-quill-button.component.scss']
})
export class MathQuillButtonComponent implements OnInit {
  @Input('label') label: string;

  @ViewChild('mathquillBtn') mathquillFieldElm: ElementRef;
  @ViewChild('mathquillSubstituteField') mathquillSubstituteFieldElm: ElementRef;

  MQ = null;
  mathField;
  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //this._inputNativeElement = this.renderer.selectRootElement(this.ruleInputElm).nativeElement;
   // this.initmathQuill();
  }

  initmathQuill() {



    this.mathField = this.renderer.selectRootElement(this.mathquillFieldElm).nativeElement;
    //let latexSpan = this.renderer.selectRootElement(this.mathquillLatexFieldElm).nativeElement;
    this.MQ = (window as any).MathQuill.getInterface(2);

    let mathField = this.MQ.MathField(this.mathField, {
     /*  substituteTextarea: () => {
        return this.renderer.selectRootElement(this.mathquillSubstituteFieldElm).nativeElement;
      }, */
      spaceBehavesLikeTab: true, // configurable
      handlers: {
        /* edit: function () { // useful event handlers
          //latexSpan.textContent = mathField.latex(); // simple API
        } */
      }
    });
    this.MQ.MathField(this.mathField).latex(this.label);
   // e.preventDefault();
  }

}
