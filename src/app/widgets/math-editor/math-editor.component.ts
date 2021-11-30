import { Component, OnInit, Renderer2, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import { MathRules } from './math-rules';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-math-editor',
  templateUrl: './math-editor.component.html',
  styleUrls: ['./math-editor.component.scss']
})
export class MathEditorComponent implements OnInit {

  @Input('mathModel') mathModel: string;
  @Input('placeholder') placeholder: string = "Enter Rule";
  @Input('mathChange') mathChange: Function;

  @ViewChild('ruleInput') ruleInputElm: ElementRef;
  @ViewChild('mathquillField') mathquillFieldElm: ElementRef;
  @ViewChild('mathquillSubstituteField') mathquillSubstituteFieldElm: ElementRef;
  @ViewChild('mathquillLatexField') mathquillLatexFieldElm: ElementRef;

  symbols = new MathRules().symbols;
  form: FormGroup;
  isShowSymbols: boolean = false;
  timeout: any = null;
  isClickedInsideComponent = false;
  inputHolderPosition = "top-aligned";
  activeBasicTab = "math";
  showPlaceholder = true

  MQ = null;
  mathField;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    if (this.mathModel) this.showPlaceholder = false;
    //this.mathModel = "\\frac  \\left ( -b \\pm \\sqrt{b^2-4ac} \\right )  \\left ( 2a  \\right )"; //x = {- b \\pm \\sqrt{ b ^ 2 - 4ac } \\over 2a}.
    //this.mathModel = "\\frac{\\left(-b\\pm\\sqrt{b^2-4ac}\\right)}{\\left(2a\\right)}\\pi "; //x = {- b \\pm \\sqrt{ b ^ 2 - 4ac } \\over 2a}.

  }

  ngAfterViewInit() {
    //this._inputNativeElement = this.renderer.selectRootElement(this.ruleInputElm).nativeElement;
    this.initmathQuill()
  }

  ngOnChanges(changes: any){
    if (changes && changes.mathModel && !changes.mathModel.firstChange){
      if (changes.mathModel.previousValue != this.mathModel){
        this.MQ.MathField(this.mathField).latex(changes.mathModel.currentValue);
      }
    }
  }

  @HostListener('click')
  clickInside() {
    this.isClickedInsideComponent = true;
  }

  @HostListener('document:click')
  clickout() {
    if (this.isClickedInsideComponent) {
      this.isClickedInsideComponent = false;
    } else {
      this.isClickedInsideComponent = false;
      this.hideSymbolBox()
    }
  }

  onClickMathButton(e: any, rule) {
    let content = rule.laTexValue;



    switch (rule.actionType) {
      case "write":
        this.MQ.MathField(this.mathField).write(content);
        e.stopPropagation();
        break;

      case "cmd":
        this.MQ.MathField(this.mathField).cmd(content);
        e.stopPropagation();
        break;

      default:
        this.MQ.MathField(this.mathField).latex(content);
        e.stopPropagation();
        break;



    }
    /*  if (rule.actionType == "write"){
     }else id(actionT){
       this.MQ.MathField(this.mathField).cmd(content);
     } */
    this.MQ.MathField(this.mathField).focus();
    e.preventDefault();
  }

  initmathQuill() {

    let component = this;
    this.mathField = this.renderer.selectRootElement(this.mathquillFieldElm).nativeElement;
    let latexSpan = this.renderer.selectRootElement(this.mathquillLatexFieldElm).nativeElement;
    this.MQ = (window as any).MathQuill.getInterface(2);
    const mathEditorComponent = this;

    let mathField = this.MQ.MathField(this.mathField, {
      /*  substituteTextarea: () => {
         return this.renderer.selectRootElement(this.mathquillSubstituteFieldElm).nativeElement;
       }, */
      spaceBehavesLikeTab: true, // configurable
      leftRightIntoCmdGoes: 'up',
      supSubsRequireOperand: true,
      handlers: {
        edit: function (v) { // useful event handlers
          component.mathModel = mathField.latex(); // simple API
          setTimeout(() => {
            if (component.mathModel) component.showPlaceholder = false;
            else component.showPlaceholder  = true;

          }, 2);
          mathEditorComponent.mathChange && mathEditorComponent.mathChange(component.mathModel)
          // this.MQ.latex(latexSpan.textContent);
        }
      }
    });

    if (this.mathModel) mathField.latex(this.mathModel);
  }

  public frameRule(value) {
    return `$$${value}$$`
  }

  onClickEditor() {
    this.isShowSymbols = true;
  }

  showSymbolBox() {
    this.isShowSymbols = true;
  }
  hideSymbolBox() {
    this.isShowSymbols = false;
  }

  onTabChange($event){
    if ($event.target.textContent == "Basic" && !this.activeBasicTab){
      this.activeBasicTab = "math"
    }else{
      if (["Terms", "Constants"].includes($event.target.textContent)) {
        this.activeBasicTab = "";
      }else{

        this.activeBasicTab = this.activeBasicTab;
      }
    }
  }

  showButtons($event, type){
    this.activeBasicTab = type;
    $event.stopPropagation();
   // $event.stop
  }
}
