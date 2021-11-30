(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+AYc":
/*!************************************************!*\
  !*** ./src/app/generic/menu/menu.component.ts ***!
  \************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 31, vars: 0, consts: [[1, "menu-container"], ["routerLink", "/home", "routerLinkActive", "active"], ["routerLink", "/404", "routerLinkActive", "active"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "work_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Your Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".menu-container[_ngcontent-%COMP%] {\n  padding-top: 120px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n\n.mat-card[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 10px;\n}\n\n.mat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 3px;\n}\n\n.mat-card.selected[_ngcontent-%COMP%] {\n  background-color: #f7f8fc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJpYy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFBRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUU7RUFDRSx5QkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvZ2VuZXJpYy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxMjBweDtcclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgLm1hdC1pY29uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICB9XHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZjO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/jb4":
/*!**************************************************************************!*\
  !*** ./src/app/concept/newfunctiondialog/newfunctiondialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: NewfunctiondialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewfunctiondialogComponent", function() { return NewfunctiondialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_functions_function_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/functions/function.service */ "mqe4");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class NewfunctiondialogComponent {
    constructor(dialogRef, data, functionService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.functionService = functionService;
        this.createFunctionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            ftype: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        console.log(data);
    }
    ngOnInit() {
    }
    createFunction() {
        const formValue = this.createFunctionForm.value;
        this.data.name = formValue.name;
        this.data.ftype = formValue.ftype;
        this.functionService.createFunction(this.data)
            .subscribe((data) => {
            this.dialogRef.close(data);
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
NewfunctiondialogComponent.ɵfac = function NewfunctiondialogComponent_Factory(t) { return new (t || NewfunctiondialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_functions_function_service__WEBPACK_IMPORTED_MODULE_3__["FunctionService"])); };
NewfunctiondialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewfunctiondialogComponent, selectors: [["app-newfunctiondialog"]], decls: 17, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["appearance", "fill", 1, "full-width"], ["matInput", "", "placeholder", "Enter function name", "formControlName", "name", "type", "text", "required", ""], ["matInput", "", "placeholder", "Enter function type", "formControlName", "ftype", "type", "text", "required", ""], ["mat-dialog-actions", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "click"], ["mat-button", "", 3, "disabled", "click"]], template: function NewfunctiondialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create new function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Function Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewfunctiondialogComponent_Template_button_click_13_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "No Thanks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewfunctiondialogComponent_Template_button_click_15_listener() { return ctx.createFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Define new function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createFunctionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.createFunctionForm.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmNlcHQvbmV3ZnVuY3Rpb25kaWFsb2cvbmV3ZnVuY3Rpb25kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewfunctiondialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newfunctiondialog',
                templateUrl: './newfunctiondialog.component.html',
                styleUrls: ['./newfunctiondialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_functions_function_service__WEBPACK_IMPORTED_MODULE_3__["FunctionService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\DEV\DSA\Projects\Divideite\divideite-mvp\ui\divideite-ui\src\main.ts */"zUnb");


/***/ }),

/***/ "3K0J":
/*!************************************************!*\
  !*** ./src/app/solution/solution.component.ts ***!
  \************************************************/
/*! exports provided: SolutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionComponent", function() { return SolutionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SolutionComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SolutionComponent_tr_16_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.removeQuantity(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);
} }
class SolutionComponent {
    constructor(fb) {
        this.fb = fb;
        this.name = 'Angular';
        this.productForm = this.fb.group({
            name: '',
            quantities: this.fb.array([]),
        });
    }
    ngOnInit() {
    }
    quantities() {
        return this.productForm.get("quantities");
    }
    newQuantity() {
        return this.fb.group({
            qty: '',
        });
    }
    addQuantity() {
        this.quantities().push(this.newQuantity());
    }
    removeQuantity(i) {
        this.quantities().removeAt(i);
    }
    onSubmit() {
        console.log(this.productForm.value);
    }
}
SolutionComponent.ɵfac = function SolutionComponent_Factory(t) { return new (t || SolutionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SolutionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SolutionComponent, selectors: [["app-solution"]], decls: 22, vars: 5, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "formControlName", "name"], ["formArrayName", "quantities", 1, "table", "table-bordered"], ["colspan", "2"], ["width", "150px"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-success"], [3, "formGroupName"], ["matInput", "", "formControlName", "qty"], [1, "btn", "btn-danger", 3, "click"]], template: function SolutionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Angular FormArray Example - ItSolutionStuff.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SolutionComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add Multiple Quantity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SolutionComponent_Template_button_click_14_listener() { return ctx.addQuantity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SolutionComponent_tr_16_Template, 9, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quantities().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 3, ctx.productForm.value), "\n");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbHV0aW9uL3NvbHV0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolutionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-solution',
                templateUrl: './solution.component.html',
                styleUrls: ['./solution.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "3QYm":
/*!*******************************************!*\
  !*** ./src/app/widgets/widgets.module.ts ***!
  \*******************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _math_editor_math_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math-editor/math-editor.component */ "Mq8Z");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _math_sym_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./math-sym.pipe */ "3ZNj");
/* harmony import */ var _math_editor_math_quill_button_math_quill_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./math-editor/math-quill-button/math-quill-button.component */ "NT6m");



















class WidgetsModule {
}
WidgetsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WidgetsModule });
WidgetsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WidgetsModule_Factory(t) { return new (t || WidgetsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetsModule, { declarations: [_math_editor_math_editor_component__WEBPACK_IMPORTED_MODULE_2__["MathEditorComponent"], _math_sym_pipe__WEBPACK_IMPORTED_MODULE_16__["MathSymPipe"], _math_editor_math_quill_button_math_quill_button_component__WEBPACK_IMPORTED_MODULE_17__["MathQuillButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]], exports: [_math_editor_math_editor_component__WEBPACK_IMPORTED_MODULE_2__["MathEditorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_math_editor_math_editor_component__WEBPACK_IMPORTED_MODULE_2__["MathEditorComponent"], _math_sym_pipe__WEBPACK_IMPORTED_MODULE_16__["MathSymPipe"], _math_editor_math_quill_button_math_quill_button_component__WEBPACK_IMPORTED_MODULE_17__["MathQuillButtonComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]
                ],
                exports: [
                    _math_editor_math_editor_component__WEBPACK_IMPORTED_MODULE_2__["MathEditorComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "3ZNj":
/*!******************************************!*\
  !*** ./src/app/widgets/math-sym.pipe.ts ***!
  \******************************************/
/*! exports provided: MathSymPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathSymPipe", function() { return MathSymPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MathSymPipe {
    transform(value, ...args) {
        return null;
    }
}
MathSymPipe.ɵfac = function MathSymPipe_Factory(t) { return new (t || MathSymPipe)(); };
MathSymPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "mathSym", type: MathSymPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MathSymPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'mathSym'
            }]
    }], null, null); })();


/***/ }),

/***/ "4FUp":
/*!******************************************************************!*\
  !*** ./src/app/concept/updateconcept/updateconcept.component.ts ***!
  \******************************************************************/
/*! exports provided: UpdateconceptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateconceptComponent", function() { return UpdateconceptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _newfunctiondialog_newfunctiondialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../newfunctiondialog/newfunctiondialog.component */ "/jb4");
/* harmony import */ var _newtermdialog_newtermdialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../newtermdialog/newtermdialog.component */ "otUA");
/* harmony import */ var src_app_subjects_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/subjects/subject.service */ "nbDy");
/* harmony import */ var src_app_parts_part_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/parts/part.service */ "552X");
/* harmony import */ var _concept_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../concept.service */ "yqmc");
/* harmony import */ var src_app_functions_function_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/functions/function.service */ "mqe4");
/* harmony import */ var src_app_terms_term_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/terms/term.service */ "XjXb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _widgets_math_editor_math_editor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../widgets/math-editor/math-editor.component */ "Mq8Z");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");

























function UpdateconceptComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subject_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r5.subject_name, " ");
} }
function UpdateconceptComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const part_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", part_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", part_r6.part_name, " ");
} }
function UpdateconceptComponent_mat_grid_tile_52_mat_chip_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const term_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", term_r9.name, "");
} }
function UpdateconceptComponent_mat_grid_tile_52_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Terms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-chip-list", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UpdateconceptComponent_mat_grid_tile_52_mat_chip_9_Template, 2, 1, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-chip", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateconceptComponent_mat_grid_tile_52_Template_mat_chip_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const func_r7 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openDialogNewFunctionTerm(func_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Constraints");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-chip-list", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-chip", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const func_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Function: ", func_r7.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", func_r7.terms);
} }
class UpdateconceptComponent {
    constructor(subjectService, partService, conceptService, functionService, termService, route, dialog) {
        this.subjectService = subjectService;
        this.partService = partService;
        this.conceptService = conceptService;
        this.functionService = functionService;
        this.termService = termService;
        this.route = route;
        this.dialog = dialog;
        this.mathEquation = "";
        this.updateConceptForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            part: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            symbol: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            optionalSymbol: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            meaning: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            definition: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.changeSymbol = this.onChangeSymbol.bind(this);
    }
    ngOnInit() {
        this.conceptId = this.route.snapshot.paramMap.get('id');
        this.getAndFillConceptData();
    }
    getAndFillConceptData() {
        this.showSubjects();
        this.showParts();
        this.showConcepts();
    }
    showSubjects() {
        this.subjectService.getSubjectsList()
            .subscribe((data) => {
            this.subjects = data;
            this.showSubjectValue();
        });
    }
    showParts() {
        this.partService.getPartsList()
            .subscribe((data) => {
            this.parts = data;
            this.showPartValue();
        });
    }
    displaySubjectName(subject) {
        return subject && subject.subject_name ? subject.subject_name : '';
    }
    displayPartName(part) {
        return part && part.part_name ? part.part_name : '';
    }
    showConcepts() {
        const id = this.route.snapshot.paramMap.get('id');
        this.conceptService.getConceptDetails(id)
            .subscribe((data) => {
            this.concept = data;
            this.fillConceptForm(this.concept);
            this.fillFunctionTiles(this.concept);
        });
    }
    fillConceptForm(concept) {
        this.updateConceptForm.controls['name'].setValue(concept.name);
        this.updateConceptForm.controls['symbol'].setValue(concept.symbol);
        //this.updateConceptForm.controls['optionalSymbol'].setValue(concept.symbol);
        this.updateConceptForm.controls['author'].setValue(concept.author);
        this.updateConceptForm.controls['meaning'].setValue(concept.meaning);
        this.updateConceptForm.controls['definition'].setValue(concept.definition);
    }
    fillFunctionTiles(concept) {
        this.functionService.listConceptFunctions(concept.concept_id)
            .subscribe((data) => {
            this.functions = data;
            if (this.functions.length) {
                document.querySelector('.empty-container').classList.add('display-none');
                document.querySelector('.function-tiles-container').classList.remove('display-none');
                //fill TERMS and Constraints on each function tile
                for (let func of this.functions) {
                    //this.fillFunctionTerms(func);
                    //this.fillFunctionConstraints(func);
                    this.populateFunctionTiles(func);
                }
            }
            else {
                document.querySelector('.function-tiles-container').classList.add('display-none');
                document.querySelector('.empty-container').classList.remove('display-none');
            }
        });
    }
    populateFunctionTiles(func) {
        const funObj = func;
        this.functionService.getFunctionDetails(func.func_id)
            .subscribe((data) => {
            console.log(data);
            if (data.terms.length) {
                funObj.terms = data.terms;
                //this.fillFunctionTerms(data);
            }
            if (data.constraints.length) {
                funObj.constraints = data.constraints;
                //this.fillFunctionConstraints(data);
            }
        });
    }
    fillFunctionTerms(func) {
        if (!(func.terms && func.terms.length)) {
            func.termsDetails = [];
            return;
        }
        const funObj = func;
        let responses = [];
        for (let term_id of func.terms) {
            responses.push(this.termService.getTermDetails(term_id));
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(responses).subscribe((data) => {
            funObj.termsDetails = data;
        });
    }
    fillFunctionConstraints(func) {
    }
    updateConcept() {
        const formValue = this.updateConceptForm.value, data = {
            "name": formValue.name,
            "author": formValue.author,
            "meaning": formValue.meaning,
            "definition": formValue.definition,
            "symbol": formValue.symbol,
        };
        this.fireUpdateConcept(data);
    }
    fireUpdateConcept(data) {
        const id = this.route.snapshot.paramMap.get('id');
        this.conceptService.updateConcept(id, data)
            .subscribe((data) => {
            this.getAndFillConceptData();
        });
    }
    showSubjectValue() {
        let preSelectedSubject = localStorage.getItem("dvp-subject");
        if (preSelectedSubject && preSelectedSubject.length) {
            preSelectedSubject = JSON.parse(preSelectedSubject);
            this.updateConceptForm.controls['subject'].setValue(preSelectedSubject);
            this.updateConceptForm.controls['subject'].disable();
        }
    }
    showPartValue() {
        let preSelectedPart = localStorage.getItem("dvp-part");
        if (preSelectedPart && preSelectedPart.length) {
            preSelectedPart = JSON.parse(preSelectedPart);
            this.updateConceptForm.controls['part'].setValue(preSelectedPart);
            this.updateConceptForm.controls['part'].disable();
        }
    }
    /*
    * Function dialog
     */
    openDialogNewFunction() {
        const formValue = this.updateConceptForm.value, dialogRef = this.dialog.open(_newfunctiondialog_newfunctiondialog_component__WEBPACK_IMPORTED_MODULE_3__["NewfunctiondialogComponent"], {
            width: '400px',
            data: {
                "subject_id": this.updateConceptForm.controls.subject.value.subject_id,
                "part_id": this.updateConceptForm.controls.part.value.part_id,
                "concept_id": this.conceptId,
                "name": "",
                "ftype": "",
                "symbol": formValue.symbol,
                "terms": [],
                "author": formValue.author
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.getAndFillConceptData();
        });
    }
    /**
     * Function term dialog
     */
    openDialogNewFunctionTerm(fun) {
        const funObj = fun;
        const dialogRef = this.dialog.open(_newtermdialog_newtermdialog_component__WEBPACK_IMPORTED_MODULE_4__["NewtermdialogComponent"], {
            width: '80%',
            data: {
                "subject_id": this.updateConceptForm.controls.subject.value.subject_id,
                "part_id": this.updateConceptForm.controls.part.value.part_id,
                "concept_id": this.conceptId,
                "func_id": fun.func_id,
                "name": "",
                "symbol": "",
                "definition": "",
                "location": "",
                "constraints": {
                    "symbol": [],
                    "coefficient": []
                }
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            //fetch latest data
            this.getAndFillConceptData();
        });
    }
    onChangeSymbol(latexValue) {
        this.updateConceptForm.controls.symbol.setValue(latexValue);
        //debugger;
    }
}
UpdateconceptComponent.ɵfac = function UpdateconceptComponent_Factory(t) { return new (t || UpdateconceptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_subjects_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_parts_part_service__WEBPACK_IMPORTED_MODULE_6__["PartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_concept_service__WEBPACK_IMPORTED_MODULE_7__["ConceptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_functions_function_service__WEBPACK_IMPORTED_MODULE_8__["FunctionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_terms_term_service__WEBPACK_IMPORTED_MODULE_9__["TermService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"])); };
UpdateconceptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateconceptComponent, selectors: [["app-updateconcept"]], decls: 71, vars: 12, consts: [[1, "new-concept-form"], [3, "formGroup"], ["appearance", "fill", 1, "width-48", "padding-r-4"], ["type", "text", "placeholder", "Select subject", "aria-label", "Subject", "matInput", "", "formControlName", "subject", "required", "", 3, "matAutocomplete"], [3, "displayWith"], ["autosubject", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "width-48"], ["type", "text", "placeholder", "Select part", "aria-label", "Part", "matInput", "", "formControlName", "part", "required", "", 3, "matAutocomplete"], ["autopart", "matAutocomplete"], ["matInput", "", "placeholder", "Enter name of concept", "formControlName", "name", "type", "text", "required", ""], [1, "width-48", "symbol-holder"], [3, "mathModel", "placeholder", "mathChange"], ["matInput", "", "placeholder", "Add optional symbol for concept", "formControlName", "optionalSymbol", "type", "text"], ["matInput", "", "placeholder", "Enter name of the author", "formControlName", "author", "required", "", "type", "text"], ["matInput", "", "rows", "5", "placeholder", "Enter meaning of the concept", "formControlName", "meaning"], ["matInput", "", "rows", "5", "placeholder", "Enter definition of the concept", "formControlName", "definition"], [2, "height", "36px", "margin-top", "35px"], ["mat-raised-button", "", "color", "primary", 1, "pull-right", 3, "disabled", "click"], ["label", "Functions"], [1, "empty-container"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "function-tiles-container", "display-none"], ["cols", "5"], [4, "ngFor", "ngForOf"], ["label", "Tables"], ["mat-raised-button", "", "color", "primary"], ["label", "Constants"], [3, "value"], [1, "concept-card"], ["aria-label", "Terms selection"], ["color", "accent", "selected", "", 4, "ngFor", "ngForOf"], ["color", "primary", "selected", "", 3, "click"], ["aria-label", "Constraints selection"], ["color", "primary", "selected", ""], ["color", "accent", "selected", ""]], template: function UpdateconceptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UpdateconceptComponent_mat_option_9_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Part");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-autocomplete", 4, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UpdateconceptComponent_mat_option_16_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-math-editor", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Optional symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Meaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Definition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateconceptComponent_Template_button_click_40_listener() { return ctx.updateConcept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Update concept ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "You haven't defined any function inputs yet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateconceptComponent_Template_button_click_48_listener() { return ctx.openDialogNewFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Define new function ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-grid-list", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, UpdateconceptComponent_mat_grid_tile_52_Template, 17, 2, "mat-grid-tile", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateconceptComponent_Template_button_click_55_listener() { return ctx.openDialogNewFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Define new function ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "You haven't defined any table inputs yet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Define new table ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-tab", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "You haven't defined any constants yet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Define new constant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateConceptForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displaySubjectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayPartName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mathModel", ctx.mathEquation)("placeholder", "Add symbol for concept")("mathChange", ctx.changeSymbol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updateConceptForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.functions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _widgets_math_editor_math_editor_component__WEBPACK_IMPORTED_MODULE_16__["MathEditorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTab"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChip"]], styles: [".empty-container[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n.empty-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.function-tiles-container[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.concept-card[_ngcontent-%COMP%] {\n  width: 250px;\n  margin-right: 10px;\n  min-height: 180px;\n  background-color: #f7f8fc;\n}\n.concept-card.empty-tile[_ngcontent-%COMP%] {\n  width: 250px;\n  text-align: center;\n  cursor: pointer;\n}\n.concept-card.empty-tile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 65px;\n}\n.symbol-holder[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  top: -17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uY2VwdC91cGRhdGVjb25jZXB0L3VwZGF0ZWNvbmNlcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVKO0FBRUE7RUFDRSxlQUFBO0FBQ0Y7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQUk7RUFDRSxnQkFBQTtBQUVOO0FBR0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvY29uY2VwdC91cGRhdGVjb25jZXB0L3VwZGF0ZWNvbmNlcHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wdHktY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgaDUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuXHJcbi5mdW5jdGlvbi10aWxlcy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLmNvbmNlcHQtY2FyZCB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtaW4taGVpZ2h0OiAxODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZjO1xyXG4gICYuZW1wdHktdGlsZSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogNjVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zeW1ib2wtaG9sZGVye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTdweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateconceptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-updateconcept',
                templateUrl: './updateconcept.component.html',
                styleUrls: ['./updateconcept.component.scss']
            }]
    }], function () { return [{ type: src_app_subjects_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"] }, { type: src_app_parts_part_service__WEBPACK_IMPORTED_MODULE_6__["PartService"] }, { type: _concept_service__WEBPACK_IMPORTED_MODULE_7__["ConceptService"] }, { type: src_app_functions_function_service__WEBPACK_IMPORTED_MODULE_8__["FunctionService"] }, { type: src_app_terms_term_service__WEBPACK_IMPORTED_MODULE_9__["TermService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "52sJ":
/*!**********************************************************************!*\
  !*** ./src/app/concept/define-solution/define-solution.component.ts ***!
  \**********************************************************************/
/*! exports provided: DefineSolutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefineSolutionComponent", function() { return DefineSolutionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _concept_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../concept.service */ "yqmc");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







const _c0 = ["myEditor"];
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
class DefineSolutionComponent {
    constructor(route, conceptService) {
        this.route = route;
        this.conceptService = conceptService;
        this.conceptId = null;
        this.isNewRecord = true;
        this.uiOutput = {
            html_template: '',
        };
    }
    ngOnInit() {
        this.conceptId = this.route.snapshot.params.id;
        if (this.conceptId)
            this.getUIConfig();
    }
    getUIConfig() {
        this.conceptService.getUIOutputConfig(this.conceptId)
            .subscribe((res) => {
            //.conceptDetails = res;
            if (res && res.config_id) {
                Object.assign(this.uiOutput, res.config_json);
                this.isNewRecord = false;
            }
            else {
                this.isNewRecord = true;
            }
        }, err => {
            this.isNewRecord = true;
        });
    }
    saveSolutionDefinition() {
        let service = this.isNewRecord ? "createUIOutputConfig" : "updateUIOutputConfig";
        this.conceptService[service](this.conceptId, this.uiOutput).subscribe(res => {
            this.isNewRecord = false;
        });
    }
    getContent() {
        if (this.myEditor && this.myEditor.instance) {
            return this.myEditor.instance.getData();
        }
        return '';
    }
}
DefineSolutionComponent.ɵfac = function DefineSolutionComponent_Factory(t) { return new (t || DefineSolutionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_concept_service__WEBPACK_IMPORTED_MODULE_2__["ConceptService"])); };
DefineSolutionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefineSolutionComponent, selectors: [["app-define-solution"]], viewQuery: function DefineSolutionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myEditor = _t.first);
    } }, decls: 8, vars: 1, consts: [[1, "new-concept-form"], [3, "ngModel", "ngModelChange"], ["myEditor", ""], [2, "padding", "35px 0"], ["mat-raised-button", "", "color", "primary", 1, "pull-right", 3, "click"]], template: function DefineSolutionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Solution form builder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ckeditor", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DefineSolutionComponent_Template_ckeditor_ngModelChange_3_listener($event) { return ctx.uiOutput.html_template = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefineSolutionComponent_Template_button_click_6_listener() { return ctx.saveSolutionDefinition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.uiOutput.html_template);
    } }, directives: [ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".page-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 25px;\n  background-color: #f7f8fc;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  width: 430px;\n}\n\n.new-concept-form[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding: 25px;\n  background-color: #ffffff;\n}\n\n.new-concept-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.empty-container[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n\n.empty-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uY2VwdC9kZWZpbmUtc29sdXRpb24vZGVmaW5lLXNvbHV0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb25jZXB0L2RlZmluZS1zb2x1dGlvbi9kZWZpbmUtc29sdXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxufVxyXG5cclxuLnNpZGUtbmF2IHtcclxuICB3aWR0aDogMTUlO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmM7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyIHtcclxuICB3aWR0aDogNDMwcHg7XHJcbn1cclxuXHJcbi5uZXctY29uY2VwdC1mb3JtIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi5lbXB0eS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICBoNSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefineSolutionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-define-solution',
                templateUrl: './define-solution.component.html',
                styleUrls: ['./define-solution.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _concept_service__WEBPACK_IMPORTED_MODULE_2__["ConceptService"] }]; }, { myEditor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myEditor']
        }] }); })();


/***/ }),

/***/ "552X":
/*!***************************************!*\
  !*** ./src/app/parts/part.service.ts ***!
  \***************************************/
/*! exports provided: PartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartService", function() { return PartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PartService {
    constructor(http) {
        this.http = http;
    }
    getPartsList() {
        return this.http.get(`${location.origin}/dvp/part/s`);
    }
}
PartService.ɵfac = function PartService_Factory(t) { return new (t || PartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PartService, factory: PartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "74lV":
/*!************************************************************************************!*\
  !*** ./src/app/concept/update-concept-stepper/update-concept-stepper.component.ts ***!
  \************************************************************************************/
/*! exports provided: UpdateConceptStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateConceptStepperComponent", function() { return UpdateConceptStepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _concept_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../concept.service */ "yqmc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_subjects_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/subjects/subject.service */ "nbDy");
/* harmony import */ var src_app_parts_part_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/parts/part.service */ "552X");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _generic_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../generic/menu/menu.component */ "+AYc");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _updateconcept_updateconcept_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../updateconcept/updateconcept.component */ "4FUp");
/* harmony import */ var _steps_definesteps_definesteps_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../steps/definesteps/definesteps.component */ "o1+T");
/* harmony import */ var _defineconcept_defineconcept_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../defineconcept/defineconcept.component */ "DWwq");
/* harmony import */ var _define_solution_define_solution_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../define-solution/define-solution.component */ "52sJ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





















function UpdateConceptStepperComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subject_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r5.subject_name, " ");
} }
function UpdateConceptStepperComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const part_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", part_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", part_r6.part_name, " ");
} }
class UpdateConceptStepperComponent {
    constructor(_formBuilder, conceptService, route, subjectService, partService) {
        this._formBuilder = _formBuilder;
        this.conceptService = conceptService;
        this.route = route;
        this.subjectService = subjectService;
        this.partService = partService;
        this.isLinear = false;
        this.showContextForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            part: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    ngOnInit() {
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.showSubjects();
        this.showParts();
        this.fetchConceptDetails();
    }
    showSubjects() {
        this.subjectService.getSubjectsList()
            .subscribe((data) => {
            this.subjects = data;
            this.showSubjectValue();
        });
    }
    showParts() {
        this.partService.getPartsList()
            .subscribe((data) => {
            this.parts = data;
            this.showPartValue();
        });
    }
    fetchConceptDetails() {
        const id = this.route.snapshot.paramMap.get('id');
        this.conceptService.getConceptDetails(id)
            .subscribe((data) => {
            this.concept = data[0];
        });
    }
    displaySubjectName(subject) {
        return subject && subject.subject_name ? subject.subject_name : '';
    }
    displayPartName(part) {
        return part && part.part_name ? part.part_name : '';
    }
    showSubjectValue() {
        let preSelectedSubject = localStorage.getItem("dvp-subject");
        if (preSelectedSubject && preSelectedSubject.length) {
            preSelectedSubject = JSON.parse(preSelectedSubject);
            this.showContextForm.controls['subject'].setValue(preSelectedSubject);
            this.showContextForm.controls['subject'].disable();
        }
    }
    showPartValue() {
        let preSelectedPart = localStorage.getItem("dvp-part");
        if (preSelectedPart && preSelectedPart.length) {
            preSelectedPart = JSON.parse(preSelectedPart);
            this.showContextForm.controls['part'].setValue(preSelectedPart);
            this.showContextForm.controls['part'].disable();
        }
    }
}
UpdateConceptStepperComponent.ɵfac = function UpdateConceptStepperComponent_Factory(t) { return new (t || UpdateConceptStepperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_concept_service__WEBPACK_IMPORTED_MODULE_2__["ConceptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_subjects_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_parts_part_service__WEBPACK_IMPORTED_MODULE_5__["PartService"])); };
UpdateConceptStepperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateConceptStepperComponent, selectors: [["app-update-concept-stepper"]], decls: 32, vars: 9, consts: [[1, "page-container"], ["mode", "side", "opened", "", 1, "side-nav"], [1, "main-content"], [3, "formGroup"], ["appearance", "fill", 1, "width-48", "padding-r-4"], ["type", "text", "placeholder", "Select subject", "aria-label", "Subject", "matInput", "", "formControlName", "subject", "required", "", 3, "matAutocomplete"], [3, "displayWith"], ["autosubject", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "width-48"], ["type", "text", "placeholder", "Select part", "aria-label", "Part", "matInput", "", "formControlName", "part", "required", "", 3, "matAutocomplete"], ["autopart", "matAutocomplete"], [3, "linear"], ["stepper", ""], ["label", "Configure Concept"], ["label", "Define Steps"], ["label", "Configure Input"], ["label", "Configure Output"], [3, "value"]], template: function UpdateConceptStepperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UpdateConceptStepperComponent_mat_option_14_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Part");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-autocomplete", 6, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UpdateConceptStepperComponent_mat_option_21_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-horizontal-stepper", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-step", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-updateconcept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-step", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-definesteps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-step", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-defineconcept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-step", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-define-solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.showContextForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Update ", ctx.concept == null ? null : ctx.concept.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displaySubjectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayPartName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinear);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _generic_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStep"], _updateconcept_updateconcept_component__WEBPACK_IMPORTED_MODULE_14__["UpdateconceptComponent"], _steps_definesteps_definesteps_component__WEBPACK_IMPORTED_MODULE_15__["DefinestepsComponent"], _defineconcept_defineconcept_component__WEBPACK_IMPORTED_MODULE_16__["DefineconceptComponent"], _define_solution_define_solution_component__WEBPACK_IMPORTED_MODULE_17__["DefineSolutionComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"]], styles: [".page-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 25px;\n  background-color: #f7f8fc;\n}\n\n.main-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uY2VwdC91cGRhdGUtY29uY2VwdC1zdGVwcGVyL3VwZGF0ZS1jb25jZXB0LXN0ZXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbmNlcHQvdXBkYXRlLWNvbmNlcHQtc3RlcHBlci91cGRhdGUtY29uY2VwdC1zdGVwcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuXHJcbi5zaWRlLW5hdiB7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZjO1xyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateConceptStepperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-concept-stepper',
                templateUrl: './update-concept-stepper.component.html',
                styleUrls: ['./update-concept-stepper.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _concept_service__WEBPACK_IMPORTED_MODULE_2__["ConceptService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_subjects_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"] }, { type: src_app_parts_part_service__WEBPACK_IMPORTED_MODULE_5__["PartService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subjects_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subjects/subject.service */ "nbDy");
/* harmony import */ var _parts_part_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parts/part.service */ "552X");
/* harmony import */ var _concept_concept_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../concept/concept.service */ "yqmc");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _generic_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generic/menu/menu.component */ "+AYc");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















function HomeComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subject_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r5.subject_name, " ");
} }
function HomeComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const part_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", part_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", part_r6.part_name, " ");
} }
function HomeComponent_mat_grid_tile_32_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_mat_grid_tile_32_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const concept_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.updateConcept(concept_r7.concept_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const concept_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Concept: ", concept_r7.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Author: ", concept_r7.author, "");
} }
class HomeComponent {
    constructor(router, subjectService, partService, conceptService) {
        this.router = router;
        this.subjectService = subjectService;
        this.partService = partService;
        this.conceptService = conceptService;
        this.subjectsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.partsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        this.showSubjects();
        this.showParts();
        this.showConcepts();
    }
    showSubjects() {
        this.subjectService.getSubjectsList()
            .subscribe((data) => {
            this.subjects = data;
            this.showSubjectValue();
        });
    }
    showParts() {
        this.partService.getPartsList()
            .subscribe((data) => {
            this.parts = data;
            this.showPartValue();
        });
    }
    showConcepts() {
        this.conceptService.searchConcepts()
            .subscribe((data) => {
            this.concepts = data || [];
            if (this.concepts.length) {
                document.querySelector('.empty-concepts').classList.add('display-none');
                document.querySelector('.concepts-list').classList.remove('display-none');
            }
            else {
                document.querySelector('.concepts-list').classList.add('display-none');
                document.querySelector('.empty-concepts').classList.remove('display-none');
            }
            console.log(data);
        });
    }
    displaySubjectName(subject) {
        return subject && subject.subject_name ? subject.subject_name : '';
    }
    displayPartName(part) {
        return part && part.part_name ? part.part_name : '';
    }
    addConcept() {
        this.router.navigate(['/create-concept']);
    }
    updateConcept(concept_id) {
        this.router.navigate([`update-concept/${concept_id}`]);
    }
    updateSubject(subject) {
        localStorage.setItem('dvp-subject', JSON.stringify(subject));
    }
    updatePart(part) {
        localStorage.setItem('dvp-part', JSON.stringify(part));
    }
    showSubjectValue() {
        let preSelectedSubject = localStorage.getItem("dvp-subject");
        if (preSelectedSubject && preSelectedSubject.length) {
            preSelectedSubject = JSON.parse(preSelectedSubject);
            this.subjectsControl.setValue(preSelectedSubject);
        }
    }
    showPartValue() {
        let preSelectedPart = localStorage.getItem("dvp-part");
        if (preSelectedPart && preSelectedPart.length) {
            preSelectedPart = JSON.parse(preSelectedPart);
            this.partsControl.setValue(preSelectedPart);
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_subjects_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_parts_part_service__WEBPACK_IMPORTED_MODULE_4__["PartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_concept_concept_service__WEBPACK_IMPORTED_MODULE_5__["ConceptService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 42, vars: 9, consts: [[1, "page-container"], ["mode", "side", "opened", "", 1, "side-nav"], [1, "main-content"], ["appearance", "fill", 1, "search-bar"], ["matInput", "", "placeholder", "Search"], ["matPrefix", ""], [2, "height", "100px", "padding-top", "12px"], [1, "header-card"], [1, "full-width"], ["type", "text", "placeholder", "Subject", "aria-label", "Subject", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith", "optionSelected"], ["autosubject", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Part", "aria-label", "Part", "matInput", "", 3, "formControl", "matAutocomplete"], ["autopart", "matAutocomplete"], [1, "empty-concepts"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "concepts-list", "display-none"], ["cols", "5", "rowHeight", "150px"], [4, "ngFor", "ngForOf"], [3, "value"], ["mat-stroked-button", "", "color", "primary", 1, "pull-right", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-autocomplete", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function HomeComponent_Template_mat_autocomplete_optionSelected_15_listener($event) { return ctx.updateSubject($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_mat_option_17_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-autocomplete", 10, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function HomeComponent_Template_mat_autocomplete_optionSelected_21_listener($event) { return ctx.updatePart($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_mat_option_23_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "You don't have created any concepts yet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_28_listener() { return ctx.addConcept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "+ Define new concept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-grid-list", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HomeComponent_mat_grid_tile_32_Template, 9, 2, "mat-grid-tile", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "New concept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Define new concept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_40_listener() { return ctx.addConcept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "+ Define new concept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.subjectsControl)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displaySubjectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.partsControl)("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayPartName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.concepts);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _generic_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPrefix"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardActions"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".page-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 25px;\n  background-color: #f7f8fc;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  width: 430px;\n}\n\n.header-card[_ngcontent-%COMP%] {\n  width: 400px;\n  margin-right: 30px;\n  float: left;\n}\n\n.align-icons[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n\n.empty-concepts[_ngcontent-%COMP%] {\n  height: 60%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n.concept-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  height: 250px;\n  margin-right: 20px;\n}\n\n.concept-card.empty-tile[_ngcontent-%COMP%] {\n  width: 310px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.concept-card.empty-tile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFESTtFQUNFLGlCQUFBO0FBR04iLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxufVxyXG5cclxuLnNpZGUtbmF2IHtcclxuICB3aWR0aDogMTUlO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmM7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyIHtcclxuICB3aWR0aDogNDMwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY2FyZCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmFsaWduLWljb25zIHtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuLmVtcHR5LWNvbmNlcHRzIHtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29uY2VwdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICYuZW1wdHktdGlsZSB7XHJcbiAgICB3aWR0aDogMzEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _subjects_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"] }, { type: _parts_part_service__WEBPACK_IMPORTED_MODULE_4__["PartService"] }, { type: _concept_concept_service__WEBPACK_IMPORTED_MODULE_5__["ConceptService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DWwq":
/*!******************************************************************!*\
  !*** ./src/app/concept/defineconcept/defineconcept.component.ts ***!
  \******************************************************************/
/*! exports provided: DefineconceptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefineconceptComponent", function() { return DefineconceptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ad_component_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ad-component.directive */ "Ff43");
/* harmony import */ var _concept_form_builder_concept_form_builder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concept-form-builder/concept-form-builder.component */ "QSJN");
/* harmony import */ var _concept_form_concept_form_dialog_concept_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../concept-form/concept-form-dialog/concept-form-dialog.component */ "pnEM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _concept_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../concept.service */ "yqmc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












function DefineconceptComponent_ng_template_5_Template(rf, ctx) { }
function DefineconceptComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefineconceptComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.previewForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DefineconceptComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefineconceptComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.saveDefnition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DefineconceptComponent {
    //conceptDetails: Concept;
    constructor(componentFactoryResolver, router, route, dialog, conceptService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.conceptService = conceptService;
        this.formComponents = [];
        this.currentAdIndex = 0;
        this.conceptId = null;
        this.isNewRecord = true;
    }
    ngOnInit() {
        this.conceptId = this.route.snapshot.params.id;
        if (this.conceptId)
            this.getUIConfig();
    }
    renderConceptDefinitionForm(definition) {
        if (definition) {
            definition.forEach(item => {
                this.loadComponent(item);
            });
        }
    }
    getUIConfig() {
        this.conceptService.getUIInputConfig(this.conceptId)
            .subscribe((res) => {
            //.conceptDetails = res;
            if (res && res.config_id) {
                this.renderConceptDefinitionForm(res.config_json.form_def);
                this.isNewRecord = false;
            }
            else {
                this.isNewRecord = true;
            }
        }, err => {
            this.isNewRecord = true;
        });
    }
    previewForm() {
        const dialogRef = this.dialog.open(_concept_form_concept_form_dialog_concept_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConceptFormDialogComponent"], {
            width: '500px',
            data: this.getConceptDefinition()
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    removeComponent() {
        /*  const viewComponentRef = this.adComponent.viewContainerRef;
         if (this.viewComponentRef.length < 1) return;
         let componentRef = this.componentsReferences.find(x => x.instance.uniqueKey == uniqueKey);
         let vcrIndex: number = this.viewComponentRef.indexOf(componentRef.hostView);
     
         this.viewComponentRef.remove(vcrIndex);
     
         // removing component from the list
         this.componentsReferences = this.componentsReferences.filter(
           x => x.instance.uniqueKey !== uniqueKey
         ); */
    }
    loadComponent(data) {
        this.currentAdIndex++;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_concept_form_builder_concept_form_builder_component__WEBPACK_IMPORTED_MODULE_2__["ConceptFormBuilderComponent"]);
        const viewComponentRef = this.adComponent.viewContainerRef;
        const componentRef = viewComponentRef.createComponent(componentFactory);
        componentRef.instance.data = Object.assign({ count: this.currentAdIndex }, { prefills: data });
        this.formComponents.push(componentRef);
    }
    saveDefnition() {
        let uiConfig = {
            form_def: this.getConceptDefinition()
        };
        if (this.isNewRecord) {
            this.conceptService.createUIInputConfig(this.conceptId, uiConfig).subscribe(res => {
                this.isNewRecord = false;
            });
        }
        else {
            this.conceptService.updateUIInputConfig(this.conceptId, uiConfig).subscribe();
        }
        // this.formComponents
    }
    getConceptDefinition() {
        let controlsDef = [];
        this.formComponents.forEach(component => {
            controlsDef.push(component.instance.getData());
        });
        return controlsDef;
    }
}
DefineconceptComponent.ɵfac = function DefineconceptComponent_Factory(t) { return new (t || DefineconceptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_concept_service__WEBPACK_IMPORTED_MODULE_6__["ConceptService"])); };
DefineconceptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefineconceptComponent, selectors: [["app-defineconcept"]], viewQuery: function DefineconceptComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_ad_component_directive__WEBPACK_IMPORTED_MODULE_1__["AdComponentDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.adComponent = _t.first);
    } }, decls: 11, vars: 2, consts: [[1, "new-concept-form"], [1, "ad-banner-example"], ["appAdComponent", ""], [2, "padding", "35px 0"], ["mat-raised-button", "", "color", "primary", 1, "pull-left", 2, "margin-right", "20px", 3, "click"], ["mat-raised-button", "", "class", "pull-left", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "pull-right", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "pull-left", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "pull-right", 3, "click"]], template: function DefineconceptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Define concept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DefineconceptComponent_ng_template_5_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefineconceptComponent_Template_button_click_7_listener() { return ctx.loadComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add input ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DefineconceptComponent_button_9_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DefineconceptComponent_button_10_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formComponents.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formComponents.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _ad_component_directive__WEBPACK_IMPORTED_MODULE_1__["AdComponentDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: [".page-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 25px;\n  background-color: #f7f8fc;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  width: 430px;\n}\n\n.new-concept-form[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding: 25px;\n  background-color: #ffffff;\n}\n\n.new-concept-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.empty-container[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n\n.empty-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uY2VwdC9kZWZpbmVjb25jZXB0L2RlZmluZWNvbmNlcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbmNlcHQvZGVmaW5lY29uY2VwdC9kZWZpbmVjb25jZXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuXHJcbi5zaWRlLW5hdiB7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZjO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgd2lkdGg6IDQzMHB4O1xyXG59XHJcblxyXG4ubmV3LWNvbmNlcHQtZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZW1wdHktY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgaDUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefineconceptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-defineconcept',
                templateUrl: './defineconcept.component.html',
                styleUrls: ['./defineconcept.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _concept_service__WEBPACK_IMPORTED_MODULE_6__["ConceptService"] }]; }, { adComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_ad_component_directive__WEBPACK_IMPORTED_MODULE_1__["AdComponentDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "ECbk":
/*!******************************************************************!*\
  !*** ./src/app/concept/createconcept/createconcept.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateConceptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateConceptComponent", function() { return CreateConceptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_subjects_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/subjects/subject.service */ "nbDy");
/* harmony import */ var src_app_parts_part_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/parts/part.service */ "552X");
/* harmony import */ var _concept_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../concept.service */ "yqmc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _generic_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../generic/menu/menu.component */ "+AYc");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _widgets_math_editor_math_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../widgets/math-editor/math-editor.component */ "Mq8Z");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















function CreateConceptComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subject_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r4.subject_name, " ");
} }
function CreateConceptComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const part_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", part_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", part_r5.part_name, " ");
} }
class CreateConceptComponent {
    constructor(subjectService, partService, conceptService, router, dialog) {
        this.subjectService = subjectService;
        this.partService = partService;
        this.conceptService = conceptService;
        this.router = router;
        this.dialog = dialog;
        this.mathEquation = "";
        this.createConceptForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            part: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            symbol: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            optionalSymbol: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            meaning: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            definition: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.changeSymbol = this.onChangeSymbol.bind(this);
    }
    ngOnInit() {
        this.showSubjects();
        this.showParts();
    }
    showSubjects() {
        this.subjectService.getSubjectsList()
            .subscribe((data) => {
            this.subjects = data;
            this.showSubjectValue();
        });
    }
    showParts() {
        this.partService.getPartsList()
            .subscribe((data) => {
            this.parts = data;
            this.showPartValue();
        });
    }
    displaySubjectName(subject) {
        return subject && subject.subject_name ? subject.subject_name : '';
    }
    displayPartName(part) {
        return part && part.part_name ? part.part_name : '';
    }
    onChangeSymbol(latexValue) {
        this.createConceptForm.controls.symbol.setValue(latexValue);
        //debugger;
    }
    createConcept() {
        const formValue = this.createConceptForm.value, concept = {
            "subject_id": this.createConceptForm.controls.subject.value.subject_id,
            "part_id": this.createConceptForm.controls.part.value.part_id,
            "name": formValue.name,
            "author": formValue.author,
            "meaning": formValue.meaning,
            "definition": formValue.definition,
            "symbol": formValue.symbol,
            "functions": [],
            "tables": [],
            "constants": [],
            "p_concept_id": "-"
        };
        this.conceptService.createNewConcept(concept)
            .subscribe((data) => {
            this.router.navigate([`/update-concept/${data.concept_id}`]);
        });
    }
    showSubjectValue() {
        let preSelectedSubject = localStorage.getItem("dvp-subject");
        if (preSelectedSubject && preSelectedSubject.length) {
            preSelectedSubject = JSON.parse(preSelectedSubject);
            this.createConceptForm.controls['subject'].setValue(preSelectedSubject);
            this.createConceptForm.controls['subject'].disable();
        }
    }
    showPartValue() {
        let preSelectedPart = localStorage.getItem("dvp-part");
        if (preSelectedPart && preSelectedPart.length) {
            preSelectedPart = JSON.parse(preSelectedPart);
            this.createConceptForm.controls['part'].setValue(preSelectedPart);
            this.createConceptForm.controls['part'].disable();
        }
    }
}
CreateConceptComponent.ɵfac = function CreateConceptComponent_Factory(t) { return new (t || CreateConceptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_subjects_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_parts_part_service__WEBPACK_IMPORTED_MODULE_3__["PartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_concept_service__WEBPACK_IMPORTED_MODULE_4__["ConceptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
CreateConceptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateConceptComponent, selectors: [["app-conceptdetail"]], decls: 55, vars: 11, consts: [[1, "page-container"], ["mode", "side", "opened", "", 1, "side-nav"], [1, "main-content"], ["appearance", "fill", 1, "search-bar"], ["matInput", "", "placeholder", "Search"], ["matPrefix", ""], [1, "new-concept-form"], [3, "formGroup"], ["appearance", "fill", 1, "width-48", "padding-r-4"], ["type", "text", "placeholder", "Select subject", "aria-label", "Subject", "matInput", "", "formControlName", "subject", "required", "", 3, "matAutocomplete"], [3, "displayWith"], ["autosubject", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "width-48"], ["type", "text", "placeholder", "Select part", "aria-label", "Part", "matInput", "", "formControlName", "part", "required", "", 3, "matAutocomplete"], ["autopart", "matAutocomplete"], ["matInput", "", "placeholder", "Enter name of concept", "formControlName", "name", "type", "text", "required", ""], [1, "width-48", "symbol-holder"], [3, "mathModel", "placeholder", "mathChange"], ["matInput", "", "placeholder", "Add optional symbol for concept", "formControlName", "optionalSymbol", "type", "text"], ["matInput", "", "placeholder", "Enter name of the author", "formControlName", "author", "required", "", "type", "text"], ["matInput", "", "rows", "5", "placeholder", "Enter meaning of the concept", "formControlName", "meaning"], ["matInput", "", "rows", "5", "placeholder", "Enter definition of the concept", "formControlName", "definition"], [2, "padding", "35px 0"], ["mat-raised-button", "", "color", "primary", 1, "pull-right", 3, "disabled", "click"], [3, "value"]], template: function CreateConceptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Create new concept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-autocomplete", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CreateConceptComponent_mat_option_22_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Part");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-autocomplete", 10, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CreateConceptComponent_mat_option_29_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-math-editor", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Optional symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Meaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Definition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateConceptComponent_Template_button_click_53_listener() { return ctx.createConcept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Define concept ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createConceptForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displaySubjectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayPartName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mathModel", ctx.mathEquation)("placeholder", "Add symbol for concept")("mathChange", ctx.changeSymbol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.createConceptForm.valid);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _generic_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _widgets_math_editor_math_editor_component__WEBPACK_IMPORTED_MODULE_14__["MathEditorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".page-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 25px;\n  background-color: #f7f8fc;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  width: 430px;\n}\n\n.new-concept-form[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding: 25px;\n  background-color: #ffffff;\n}\n\n.new-concept-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.empty-container[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n\n.empty-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.symbol-holder[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  top: -17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uY2VwdC9jcmVhdGVjb25jZXB0L2NyZWF0ZWNvbmNlcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb25jZXB0L2NyZWF0ZWNvbmNlcHQvY3JlYXRlY29uY2VwdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG59XHJcblxyXG4uc2lkZS1uYXYge1xyXG4gIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYztcclxufVxyXG5cclxuLnNlYXJjaC1iYXIge1xyXG4gIHdpZHRoOiA0MzBweDtcclxufVxyXG5cclxuLm5ldy1jb25jZXB0LWZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuLmVtcHR5LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc3ltYm9sLWhvbGRlcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTE3cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateConceptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-conceptdetail',
                templateUrl: './createconcept.component.html',
                styleUrls: ['./createconcept.component.scss']
            }]
    }], function () { return [{ type: src_app_subjects_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"] }, { type: src_app_parts_part_service__WEBPACK_IMPORTED_MODULE_3__["PartService"] }, { type: _concept_service__WEBPACK_IMPORTED_MODULE_4__["ConceptService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Ff43":
/*!*****************************************************************!*\
  !*** ./src/app/concept/defineconcept/ad-component.directive.ts ***!
  \*****************************************************************/
/*! exports provided: AdComponentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdComponentDirective", function() { return AdComponentDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdComponentDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
AdComponentDirective.ɵfac = function AdComponentDirective_Factory(t) { return new (t || AdComponentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
AdComponentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AdComponentDirective, selectors: [["", "appAdComponent", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdComponentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAdComponent]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "Mq8Z":
/*!**************************************************************!*\
  !*** ./src/app/widgets/math-editor/math-editor.component.ts ***!
  \**************************************************************/
/*! exports provided: MathEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathEditorComponent", function() { return MathEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _math_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math-rules */ "Stgj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







const _c0 = ["ruleInput"];
const _c1 = ["mathquillField"];
const _c2 = ["mathquillSubstituteField"];
const _c3 = ["mathquillLatexField"];
const _c4 = function (a0) { return { "active": a0 }; };
function MathEditorComponent_mat_card_1_mat_tab_2_ul_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathEditorComponent_mat_card_1_mat_tab_2_ul_1_Template_li_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.showButtons($event, "math"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Math");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathEditorComponent_mat_card_1_mat_tab_2_ul_1_Template_li_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.showButtons($event, "abc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u03B1 \u03B2 \u03B3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathEditorComponent_mat_card_1_mat_tab_2_ul_1_Template_li_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.showButtons($event, "trig"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Trig");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c4, ctx_r7.activeBasicTab == "math"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c4, ctx_r7.activeBasicTab == "abc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c4, ctx_r7.activeBasicTab == "trig"));
} }
function MathEditorComponent_mat_card_1_mat_tab_2_li_4_button_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 26);
} if (rf & 2) {
    const rule_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](rule_r13.fontsize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", rule_r13.symbol, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MathEditorComponent_mat_card_1_mat_tab_2_li_4_button_1_sup_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sup", 27);
} if (rf & 2) {
    const rule_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", rule_r13.sup, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MathEditorComponent_mat_card_1_mat_tab_2_li_4_button_1_sub_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sub", 28);
} if (rf & 2) {
    const rule_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", rule_r13.sub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MathEditorComponent_mat_card_1_mat_tab_2_li_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathEditorComponent_mat_card_1_mat_tab_2_li_4_button_1_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const rule_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.onClickMathButton($event, rule_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MathEditorComponent_mat_card_1_mat_tab_2_li_4_button_1_span_1_Template, 1, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MathEditorComponent_mat_card_1_mat_tab_2_li_4_button_1_sup_2_Template, 1, 1, "sup", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MathEditorComponent_mat_card_1_mat_tab_2_li_4_button_1_sub_3_Template, 1, 1, "sub", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rule_r13.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rule_r13.sup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rule_r13.sub);
} }
function MathEditorComponent_mat_card_1_mat_tab_2_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MathEditorComponent_mat_card_1_mat_tab_2_li_4_button_1_Template, 4, 3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_r13 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rule_r13.type == "btn" && (ctx_r8.activeBasicTab && rule_r13.category == ctx_r8.activeBasicTab || !ctx_r8.activeBasicTab));
} }
const _c5 = function (a0) { return { "sub-list-det": a0 }; };
function MathEditorComponent_mat_card_1_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MathEditorComponent_mat_card_1_mat_tab_2_ul_1_Template, 7, 12, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "` ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MathEditorComponent_mat_card_1_mat_tab_2_li_4_Template, 2, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const symbolGroup_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", symbolGroup_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", symbolGroup_r6.title == "Basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c5, symbolGroup_r6.title == "Basic"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", symbolGroup_r6.items);
} }
function MathEditorComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathEditorComponent_mat_card_1_Template_mat_tab_group_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onTabChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MathEditorComponent_mat_card_1_mat_tab_2_Template, 5, 7, "mat-tab", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.inputHolderPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.symbols);
} }
function MathEditorComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.placeholder);
} }
class MathEditorComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.placeholder = "Enter Rule";
        this.symbols = new _math_rules__WEBPACK_IMPORTED_MODULE_1__["MathRules"]().symbols;
        this.isShowSymbols = false;
        this.timeout = null;
        this.isClickedInsideComponent = false;
        this.inputHolderPosition = "top-aligned";
        this.activeBasicTab = "math";
        this.showPlaceholder = true;
        this.MQ = null;
    }
    ngOnInit() {
        if (this.mathModel)
            this.showPlaceholder = false;
        //this.mathModel = "\\frac  \\left ( -b \\pm \\sqrt{b^2-4ac} \\right )  \\left ( 2a  \\right )"; //x = {- b \\pm \\sqrt{ b ^ 2 - 4ac } \\over 2a}.
        //this.mathModel = "\\frac{\\left(-b\\pm\\sqrt{b^2-4ac}\\right)}{\\left(2a\\right)}\\pi "; //x = {- b \\pm \\sqrt{ b ^ 2 - 4ac } \\over 2a}.
    }
    ngAfterViewInit() {
        //this._inputNativeElement = this.renderer.selectRootElement(this.ruleInputElm).nativeElement;
        this.initmathQuill();
    }
    ngOnChanges(changes) {
        if (changes && changes.mathModel && !changes.mathModel.firstChange) {
            if (changes.mathModel.previousValue != this.mathModel) {
                this.MQ.MathField(this.mathField).latex(changes.mathModel.currentValue);
            }
        }
    }
    clickInside() {
        this.isClickedInsideComponent = true;
    }
    clickout() {
        if (this.isClickedInsideComponent) {
            this.isClickedInsideComponent = false;
        }
        else {
            this.isClickedInsideComponent = false;
            this.hideSymbolBox();
        }
    }
    onClickMathButton(e, rule) {
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
        this.MQ = window.MathQuill.getInterface(2);
        const mathEditorComponent = this;
        let mathField = this.MQ.MathField(this.mathField, {
            /*  substituteTextarea: () => {
               return this.renderer.selectRootElement(this.mathquillSubstituteFieldElm).nativeElement;
             }, */
            spaceBehavesLikeTab: true,
            leftRightIntoCmdGoes: 'up',
            supSubsRequireOperand: true,
            handlers: {
                edit: function (v) {
                    component.mathModel = mathField.latex(); // simple API
                    setTimeout(() => {
                        if (component.mathModel)
                            component.showPlaceholder = false;
                        else
                            component.showPlaceholder = true;
                    }, 2);
                    mathEditorComponent.mathChange && mathEditorComponent.mathChange(component.mathModel);
                    // this.MQ.latex(latexSpan.textContent);
                }
            }
        });
        if (this.mathModel)
            mathField.latex(this.mathModel);
    }
    frameRule(value) {
        return `$$${value}$$`;
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
    onTabChange($event) {
        if ($event.target.textContent == "Basic" && !this.activeBasicTab) {
            this.activeBasicTab = "math";
        }
        else {
            if (["Terms", "Constants"].includes($event.target.textContent)) {
                this.activeBasicTab = "";
            }
            else {
                this.activeBasicTab = this.activeBasicTab;
            }
        }
    }
    showButtons($event, type) {
        this.activeBasicTab = type;
        $event.stopPropagation();
        // $event.stop
    }
}
MathEditorComponent.ɵfac = function MathEditorComponent_Factory(t) { return new (t || MathEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
MathEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MathEditorComponent, selectors: [["app-math-editor"]], viewQuery: function MathEditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ruleInputElm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mathquillFieldElm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mathquillSubstituteFieldElm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mathquillLatexFieldElm = _t.first);
    } }, hostBindings: function MathEditorComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathEditorComponent_click_HostBindingHandler() { return ctx.clickInside(); })("click", function MathEditorComponent_click_HostBindingHandler() { return ctx.clickout(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { mathModel: "mathModel", placeholder: "placeholder", mathChange: "mathChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 3, consts: [[1, "eq-edtr"], ["class", "symb-holder sm-window", 3, "class", 4, "ngIf"], [1, "eq-codepad", 3, "click"], ["class", "eq-edtr-eq-placeholder", 4, "ngIf"], [1, "material-icons", "add-icon"], [1, "eq-codepad-wrapper"], ["mathquillField", ""], ["tabindex", "0"], ["mathquillSubstituteField", ""], [1, "wrapper", 3, "hidden"], ["mathquillLatexField", ""], [1, "symb-holder", "sm-window"], ["mat-align-tabs", "sym", 1, "eq-edtr-tabs", 3, "click"], ["class", "symb-tab", 3, "label", 4, "ngFor", "ngForOf"], [1, "pointer"], [1, "symb-tab", 3, "label"], ["class", "symb-sub-list", 4, "ngIf"], [1, "symb-list"], [4, "ngFor", "ngForOf"], [1, "symb-sub-list"], [3, "click"], ["mat-stroked-button", "", "class", "symb-btn", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "symb-btn", 3, "click"], [3, "innerHTML", "class", 4, "ngIf"], ["class", "eq-sup", 3, "innerHTML", 4, "ngIf"], ["class", "eq-sub", 3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [1, "eq-sup", 3, "innerHTML"], [1, "eq-sub", 3, "innerHTML"], [1, "eq-edtr-eq-placeholder"]], template: function MathEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MathEditorComponent_mat_card_1_Template, 4, 3, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathEditorComponent_Template_mat_card_click_2_listener() { return ctx.onClickEditor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MathEditorComponent_span_3_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Rendered Latex: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowSymbols);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .eq-edtr-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .eq-edtr-eq[_ngcontent-%COMP%] {\n  min-height: 68px;\n  padding: 1px;\n  margin-bottom: 11px;\n  animation: none;\n}\n[_nghost-%COMP%]   .eq-edtr-eq[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  animation: none;\n}\n[_nghost-%COMP%]   .eq-edtr-eq-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18px;\n  left: 12px;\n  color: #AAA;\n}\n[_nghost-%COMP%]   .eq-edtr-eq[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  right: 3px;\n  color: #7a7a7a;\n  cursor: pointer;\n  padding: 10px;\n  margin: auto;\n  bottom: 0;\n  height: 10px;\n}\n[_nghost-%COMP%]   .eq-edtr-eq[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]:hover {\n  color: #555;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .symb-holder[_ngcontent-%COMP%] {\n  border-radius: 0;\n  margin-bottom: 15px;\n  padding-top: 0;\n  border: 1px solid #CCC;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .symb-holder[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  background: #f9f9f9;\n  transform: rotate(45deg);\n  border-right: 1px solid #BBB;\n  border-bottom: 1px solid #BBB;\n  left: 20px;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .symb-holder.sm-window[_ngcontent-%COMP%] {\n  max-width: 651px;\n  position: absolute;\n  left: 0;\n  background: #f9f9f9;\n  z-index: 10;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .symb-holder.sm-window.top-aligned[_ngcontent-%COMP%] {\n  bottom: 100%;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .symb-holder.sm-window.top-aligned[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  bottom: -7px;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .symb-holder.sm-window.bottom-aligned[_ngcontent-%COMP%] {\n  top: calc(100% + 11px);\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .symb-holder.sm-window.bottom-aligned[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%] {\n  transform: rotate(-135deg);\n  top: -7px;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .symb-btn[_ngcontent-%COMP%] {\n  margin: 1px;\n  margin-top: 0;\n  margin-right: 0;\n  border-radius: 0;\n  border: 1px solid #DFDFDF;\n  background: #f5f5f5;\n  font-family: Symbola-mq, \"Times New Roman\", serif;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .symb-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin-top: -7px;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .symb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .symb-list.sub-list-det[_ngcontent-%COMP%] {\n  float: left;\n  width: calc(100% - 60px);\n  margin: 0;\n  padding: 0;\n  margin-top: -7px;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .symb-sub-list[_ngcontent-%COMP%] {\n  float: left;\n  list-style: none;\n  padding: 0;\n  background: #dedede;\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .symb-sub-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border-bottom: 1px solid #fff;\n  cursor: pointer;\n  font-weight: 500;\n  box-shadow: 0px 0px 5px -2px #1f1f1f96 inset;\n  font-size: 12px;\n  font-style: italic;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .symb-sub-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #673ab7;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .input-grid[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%] {\n  left: calc(100% - 104px);\n  position: absolute;\n  width: 102px;\n  padding-bottom: 16px;\n}\n[_nghost-%COMP%]   .eq-edtr[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  padding: 6px 5px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .eq-codepad[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 1px solid #ccc;\n}\n[_nghost-%COMP%]   .eq-codepad-wrapper[_ngcontent-%COMP%] {\n  min-height: 46px;\n  width: calc(100% - 20px);\n}\n[_nghost-%COMP%]   .eq-codepad-symbols[_ngcontent-%COMP%] {\n  border: 1px solid #DDD;\n  background: #EEE;\n}\n[_nghost-%COMP%]   .eq-codepad[_ngcontent-%COMP%]   .mq-root-block[_ngcontent-%COMP%], [_nghost-%COMP%]   .eq-codepad[_ngcontent-%COMP%]   .mq-editable-field[_ngcontent-%COMP%] {\n  min-height: 46px;\n  border: 0;\n  font-weight: 500;\n}\n[_nghost-%COMP%]   .eq-codepad[_ngcontent-%COMP%]   .mq-math-mode[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n[_nghost-%COMP%]   .font-lg[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n[_nghost-%COMP%]   .font-md[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n[_nghost-%COMP%]   .eq-sup[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  position: relative;\n  top: -8px;\n}\n[_nghost-%COMP%]   .eq-sub[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  position: relative;\n  top: 4px;\n}\n[_nghost-%COMP%]   .add-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 7px;\n  top: 18px;\n  margin: auto;\n  \n  height: 10px;\n  color: #777;\n}\n[_nghost-%COMP%]   .eq-codepad[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  background: #f5f5f5;\n  box-shadow: none;\n  border-bottom: 1px solid #8e8e8e;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9tYXRoLWVkaXRvci9tYXRoLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUFSO0FBRVE7RUFDSSxXQUFBO0FBQVo7QUFHUTtFQUNJLFdBQUE7QUFEWjtBQUdRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0FBRlo7QUFHWTtFQUNJLGVBQUE7QUFEaEI7QUFJWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRmhCO0FBS1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBSGhCO0FBS2dCO0VBQ0ksV0FBQTtBQUhwQjtBQU9RO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFMWjtBQVFRO0VBQ0ksaUJBQUE7QUFOWjtBQVVZO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQVJoQjtBQVdnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFUcEI7QUFhZ0I7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQVpwQjtBQWdCb0I7RUFDSSxZQUFBO0FBZHhCO0FBZ0J3QjtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtBQWQ1QjtBQWlCb0I7RUFDUSxzQkFBQTtBQWY1QjtBQWdCd0I7RUFDSSwwQkFBQTtFQUNBLFNBQUE7QUFkNUI7QUFzQlk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtBQXBCaEI7QUF1Qlk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQXJCaEI7QUF1QmdCO0VBQ0ksV0FBQTtBQXJCcEI7QUF3QmdCO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQXRCcEI7QUEwQlk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXhCaEI7QUF5QmdCO0VBQ0ksaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBdkJwQjtBQXdCb0I7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUF0QnhCO0FBNEJRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQTFCWjtBQTZCUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUEzQlo7QUE0Qlk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUExQmhCO0FBK0JJO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0FBN0JSO0FBOEJRO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtBQTVCWjtBQWlDUTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUEvQlo7QUFrQ1E7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWhDWjtBQW1DUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFqQ1o7QUFxQ0k7RUFDSSxlQUFBO0FBbkNSO0FBcUNJO0VBQ0ksZUFBQTtBQW5DUjtBQXNDSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBcENSO0FBc0NJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFwQ1I7QUF1Q0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFyQ1I7QUF3Q0k7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUF0Q1IiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRzL21hdGgtZWRpdG9yL21hdGgtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICAuZXEtZWR0cntcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLmZ1bGwtd2lkdGh7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXRhYnN7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWVxe1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA2OHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbiAgICAgICAgICAgIC8vb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgKntcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi1wbGFjZWhvbGRlcntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMThweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0FBQTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFkZHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3YTdhN2E7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdmlkZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3BhY2Vye1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN5bWJ7XHJcblxyXG4gICAgICAgICAgICAmLWhvbGRlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNDQ0M7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC5wb2ludGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0JCQjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0JCQjtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLnNtLXdpbmRvd3tcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY1MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBib3R0b206IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiAyMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAvL292ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYudG9wLWFsaWduZWR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbToxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBvaW50ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IC03cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5ib3R0b20tYWxpZ25lZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY2FsYygxMDAlICsgMTFweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wb2ludGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC03cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1idG57XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RGREZERjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogU3ltYm9sYS1tcSxcIlRpbWVzIE5ldyBSb21hblwiLHNlcmlmO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLWxpc3R7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC03cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5zdWItbGlzdC1kZXR7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYtc3ViLWxpc3R7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RlZGVkZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0ycHggIzFmMWYxZjk2IGluc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjczYWI3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlucHV0LWdyaWR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3Rpb24tYmFye1xyXG4gICAgICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSAxMDRweCk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgLmljb257XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggNXB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5lcS1jb2RlcGFke1xyXG4gICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgJi13cmFwcGVye1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcblxyXG4gICAgICAgICAgICAvL21hcmdpbi10b3A6MTBweFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1zeW1ib2xze1xyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNEREQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFRUU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubXEtcm9vdC1ibG9jaywgLm1xLWVkaXRhYmxlLWZpZWxke1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6MDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tcS1tYXRoLW1vZGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9udC1sZ3tcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB9XHJcbiAgICAuZm9udC1tZHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmVxLXN1cHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC04cHg7XHJcbiAgICB9XHJcbiAgICAuZXEtc3Vie1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGQtaWNvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDdweDtcclxuICAgICAgICB0b3A6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIC8qIGJvdHRvbTogMjBweDsgKi9cclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICB9XHJcblxyXG4gICAgLmVxLWNvZGVwYWR7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ZThlOGU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MathEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-math-editor',
                templateUrl: './math-editor.component.html',
                styleUrls: ['./math-editor.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { mathModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mathModel']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['placeholder']
        }], mathChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mathChange']
        }], ruleInputElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ruleInput']
        }], mathquillFieldElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mathquillField']
        }], mathquillSubstituteFieldElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mathquillSubstituteField']
        }], mathquillLatexFieldElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mathquillLatexField']
        }], clickInside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], clickout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click']
        }] }); })();


/***/ }),

/***/ "NT6m":
/*!**************************************************************************************!*\
  !*** ./src/app/widgets/math-editor/math-quill-button/math-quill-button.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MathQuillButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathQuillButtonComponent", function() { return MathQuillButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["mathquillBtn"];
const _c1 = ["mathquillSubstituteField"];
class MathQuillButtonComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.MQ = null;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        //this._inputNativeElement = this.renderer.selectRootElement(this.ruleInputElm).nativeElement;
        // this.initmathQuill();
    }
    initmathQuill() {
        this.mathField = this.renderer.selectRootElement(this.mathquillFieldElm).nativeElement;
        //let latexSpan = this.renderer.selectRootElement(this.mathquillLatexFieldElm).nativeElement;
        this.MQ = window.MathQuill.getInterface(2);
        let mathField = this.MQ.MathField(this.mathField, {
            /*  substituteTextarea: () => {
               return this.renderer.selectRootElement(this.mathquillSubstituteFieldElm).nativeElement;
             }, */
            spaceBehavesLikeTab: true,
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
MathQuillButtonComponent.ɵfac = function MathQuillButtonComponent_Factory(t) { return new (t || MathQuillButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
MathQuillButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MathQuillButtonComponent, selectors: [["app-math-quill-button"]], viewQuery: function MathQuillButtonComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mathquillFieldElm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mathquillSubstituteFieldElm = _t.first);
    } }, inputs: { label: "label" }, decls: 9, vars: 1, consts: [[1, "mth-quill-wrapper"], ["mathquillBtn", ""], ["tabindex", "0", 3, "hidden"], ["mathquillSubstituteField", ""]], template: function MathQuillButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "var");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
    } }, styles: [".mth-quill-wrapper[_ngcontent-%COMP%] {\n  font-family: \"Lobster Two\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9tYXRoLWVkaXRvci9tYXRoLXF1aWxsLWJ1dHRvbi9tYXRoLXF1aWxsLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRzL21hdGgtZWRpdG9yL21hdGgtcXVpbGwtYnV0dG9uL21hdGgtcXVpbGwtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm10aC1xdWlsbC13cmFwcGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyIFR3bycsIGN1cnNpdmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MathQuillButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-math-quill-button',
                templateUrl: './math-quill-button.component.html',
                styleUrls: ['./math-quill-button.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['label']
        }], mathquillFieldElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mathquillBtn']
        }], mathquillSubstituteFieldElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mathquillSubstituteField']
        }] }); })();


/***/ }),

/***/ "PsIP":
/*!****************************************************************!*\
  !*** ./src/app/concept/concept-form/concept-form.component.ts ***!
  \****************************************************************/
/*! exports provided: ConceptFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptFormComponent", function() { return ConceptFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _concept_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concept-form.service */ "XmHZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _concept_form_control_concept_form_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./concept-form-control/concept-form-control.component */ "V9no");







function ConceptFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-concept-form-control", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const definition_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("definition", definition_r1)("form", ctx_r0.conceptForm);
} }
class ConceptFormComponent {
    constructor(conceptFormService) {
        this.conceptFormService = conceptFormService;
        this.conceptsDefinitions = [];
    }
    ngOnInit() {
        this.conceptForm = this.conceptFormService.toFormGroup(this.conceptsDefinitions);
    }
}
ConceptFormComponent.ɵfac = function ConceptFormComponent_Factory(t) { return new (t || ConceptFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_concept_form_service__WEBPACK_IMPORTED_MODULE_1__["ConceptFormService"])); };
ConceptFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConceptFormComponent, selectors: [["app-concept-form"]], inputs: { conceptsDefinitions: "conceptsDefinitions" }, decls: 4, vars: 2, consts: [[1, "frm", 3, "formGroup"], ["class", "form-row", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "pull-right"], [1, "form-row"], [3, "definition", "form"]], template: function ConceptFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConceptFormComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.conceptForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.conceptsDefinitions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _concept_form_control_concept_form_control_component__WEBPACK_IMPORTED_MODULE_5__["ConceptFormControlComponent"]], styles: [".frm[_ngcontent-%COMP%] {\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uY2VwdC9jb25jZXB0LWZvcm0vY29uY2VwdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0c7Ozs7Ozt3QkFBQTtBQU9IIiwiZmlsZSI6InNyYy9hcHAvY29uY2VwdC9jb25jZXB0LWZvcm0vY29uY2VwdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZybXtcclxuICAgLyogIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICNFRUU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConceptFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-concept-form',
                templateUrl: './concept-form.component.html',
                styleUrls: ['./concept-form.component.scss']
            }]
    }], function () { return [{ type: _concept_form_service__WEBPACK_IMPORTED_MODULE_1__["ConceptFormService"] }]; }, { conceptsDefinitions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QSJN":
/*!**********************************************************************************************!*\
  !*** ./src/app/concept/defineconcept/concept-form-builder/concept-form-builder.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ConceptFormBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptFormBuilderComponent", function() { return ConceptFormBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-item/list-item.component */ "qW4P");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












const _c0 = ["viewContainerRef"];
function ConceptFormBuilderComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inputType_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", inputType_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", inputType_r4.label, " ");
} }
function ConceptFormBuilderComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConceptFormBuilderComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.loadComponent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConceptFormBuilderComponent_ng_template_18_Template(rf, ctx) { }
class ConceptFormBuilderComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.data = {};
        //private listItemComponents = [];
        this.componentsReferences = Array();
        this.uniqueKey = 0;
        this.conceptDefineForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            controlName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            controlType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.inputTypes = [
            {
                value: "Text",
                label: "Text"
            },
            {
                value: "List",
                label: "List"
            }
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (this.data && this.data.prefills) {
            this.renderForm();
        }
    }
    renderForm() {
        this.data.prefills;
        this.conceptDefineForm.controls.controlName.setValue(this.data.prefills.label);
        this.conceptDefineForm.controls.controlType.setValue(this.data.prefills.type);
        if (this.data.prefills.options && this.data.prefills.options.length) {
            this.data.prefills.options.forEach(item => {
                this.loadComponent(item);
            });
        }
    }
    loadComponent(data) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__["ListItemComponent"]);
        //const viewComponentRef = this.VCR;
        let componentRef = this.VCR.createComponent(componentFactory);
        componentRef.instance.parent = this;
        componentRef.instance.uniqueKey = ++this.uniqueKey;
        componentRef.instance.data = data;
        this.componentsReferences.push(componentRef);
    }
    removeComponent(uniqueKey) {
        if (this.VCR.length < 1)
            return;
        let componentRef = this.componentsReferences.find(x => x.instance.uniqueKey == uniqueKey);
        let vcrIndex = this.VCR.indexOf(componentRef.hostView);
        this.VCR.remove(vcrIndex);
        // removing component from the list
        this.componentsReferences = this.componentsReferences.filter(x => x.instance.uniqueKey !== uniqueKey);
    }
    onTypeChange(value) {
        if (value == "List") {
        }
        else {
            this.VCR.clear();
            this.componentsReferences.splice(0);
        }
    }
    getData() {
        let condeptDefinition = {
            key: "CONCEPT_DEF_" + this.data.count,
            label: this.conceptDefineForm.controls.controlName.value,
            type: this.conceptDefineForm.controls.controlType.value,
            required: false,
            isValid: this.validateForm(),
            options: []
        };
        this.componentsReferences.forEach(component => {
            condeptDefinition.options.push(component.instance.getData());
        });
        return condeptDefinition;
    }
    validateForm() {
        if (this.conceptDefineForm.controls.controlName.invalid ||
            this.conceptDefineForm.controls.controlName.invalid) {
            return true;
        }
        return false;
    }
}
ConceptFormBuilderComponent.ɵfac = function ConceptFormBuilderComponent_Factory(t) { return new (t || ConceptFormBuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
ConceptFormBuilderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConceptFormBuilderComponent, selectors: [["app-concept-form-builder"]], viewQuery: function ConceptFormBuilderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.VCR = _t.first);
    } }, inputs: { data: "data" }, decls: 20, vars: 4, consts: [[1, "frm", 3, "formGroup"], ["mat-icon-button", "", "aria-label", "Example icon button with a vertical three dot icon", 1, "frm-close"], [1, "frm-row"], [1, "frm-col", "count"], [1, "frm-col", "content"], ["appearance", "fill", 1, "width-22", "padding-r-1"], ["type", "text", "placeholder", "Enter Label", "aria-label", "Label", "matInput", "", "formControlName", "controlName", "required", ""], ["appearance", "fill", 1, "width-22", "padding-r-2"], ["formControlName", "controlType", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", "aria-label", "Example icon button with a menu icon", "class", "add-item", 3, "click", 4, "ngIf"], ["viewContainerRef", ""], [3, "value"], ["mat-mini-fab", "", "aria-label", "Example icon button with a menu icon", 1, "add-item", 3, "click"]], template: function ConceptFormBuilderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ConceptFormBuilderComponent_Template_mat_select_selectionChange_15_listener($event) { return ctx.onTypeChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ConceptFormBuilderComponent_mat_option_16_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ConceptFormBuilderComponent_button_17_Template, 3, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ConceptFormBuilderComponent_ng_template_18_Template, 0, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.conceptDefineForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conceptDefineForm.controls.controlType.value == "List");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: [".frm[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  border: 1px solid #DDD;\n  padding: 20px;\n  box-shadow: 0px 0px 5px 0px #EEE;\n  padding-bottom: 1px;\n  width: 43%;\n  position: relative;\n}\n.frm-close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 5px;\n}\n.frm-col[_ngcontent-%COMP%] {\n  display: inline-table;\n}\n.frm-col.count[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.frm-col.count[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 10px;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  text-align: center;\n}\n.frm-col.count[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: relative;\n  top: -1px;\n}\n.frm-col.content[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.frm[_ngcontent-%COMP%]   .add-item[_ngcontent-%COMP%] {\n  position: relative;\n  top: -4px;\n}\n.frm[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uY2VwdC9kZWZpbmVjb25jZXB0L2NvbmNlcHQtZm9ybS1idWlsZGVyL2NvbmNlcHQtZm9ybS1idWlsZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUFDUjtBQUdJO0VBQ0kscUJBQUE7QUFEUjtBQUVRO0VBQ0ksV0FBQTtBQUFaO0FBQ1k7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDaEI7QUFBZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUFFcEI7QUFFUTtFQUNJLFVBQUE7QUFBWjtBQU1JO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBSlI7QUFPSTtFQUNJLGtCQUFBO0FBTFIiLCJmaWxlIjoic3JjL2FwcC9jb25jZXB0L2RlZmluZWNvbmNlcHQvY29uY2VwdC1mb3JtLWJ1aWxkZXIvY29uY2VwdC1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJte1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggI0VFRTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgICB3aWR0aDogNDMlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICYtY2xvc2V7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgJi1yb3d7XHJcbiAgICB9XHJcbiAgICAmLWNvbHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICAgICAgJi5jb3VudHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICY+ZGl2e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICY+c3BhbntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuY29udGVudHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLWxpc3R7XHJcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmFkZC1pdGVte1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAvLyBsZWZ0OiAtMTBweDtcclxuICAgIH1cclxuICAgIC5saXN0LWhlYWRlcntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConceptFormBuilderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-concept-form-builder',
                templateUrl: './concept-form-builder.component.html',
                styleUrls: ['./concept-form-builder.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], VCR: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["viewContainerRef", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }] }); })();


/***/ }),

/***/ "SBxm":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class SignupComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            loginId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() { }
    signup() {
        const data = this.signupForm.value;
        this.authService.signup({
            "lid": data.loginId,
            "fn": data.firstName,
            "ln": data.lastName,
            "eml": data.email,
            "bd": data.phone,
            "adr": data.address,
            "pwd": data.password
        }).subscribe((data) => {
            if (data['logged_in'] == true &&
                data['onboard'] === true) {
                this.router.navigate(['/home']);
            }
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 34, vars: 2, consts: [[3, "formGroup"], ["appearance", "legacy", 1, "full-width"], ["matInput", "", "placeholder", "Enter your first name", "formControlName", "loginId", "type", "text"], ["matInput", "", "placeholder", "Enter your first name", "formControlName", "firstName", "type", "text"], ["matInput", "", "placeholder", "Enter your first name", "formControlName", "lastName", "type", "text"], ["matInput", "", "placeholder", "Enter your email", "formControlName", "email", "type", "email"], ["matPrefix", ""], ["type", "tel", "matInput", "", "placeholder", "555-555-1234", "formControlName", "phone"], ["matInput", "", "placeholder", "Enter your address", "formControlName", "address"], ["matInput", "", "placeholder", "Enter your password", "formControlName", "password", "required", "", "type", "password"], [1, "btn-container"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled", "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "+91 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_32_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " SIGNUP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signupForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["form[_ngcontent-%COMP%] {\n  width: 500px;\n  padding: 15px;\n}\n\n.btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss'],
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "So4L":
/*!**********************************************************!*\
  !*** ./src/app/steps/createstep/createstep.component.ts ***!
  \**********************************************************/
/*! exports provided: CreatestepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatestepComponent", function() { return CreatestepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_evalfunctions_evalfunction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/evalfunctions/evalfunction.service */ "XKSY");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















function CreatestepComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const func_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", func_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", func_r7.func_name, " ");
} }
function CreatestepComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const argument_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](argument_r8.value.argKey);
} }
function CreatestepComponent_mat_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const func_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", func_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", func_r10.func_name, " ");
} }
function CreatestepComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatestepComponent_div_84_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Thanks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatestepComponent_div_84_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.createEvalStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Define evaluation step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatestepComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatestepComponent_div_85_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Thanks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatestepComponent_div_85_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.createConditionStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Define conditional step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreatestepComponent {
    constructor(funcService, fb, dialogRef) {
        this.funcService = funcService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.selectedTabIndex = 0;
        this.panelOpenState = false; //evalFunction list panel open/collapse
        //for condition form
        this.createConditionStepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('conditional'),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            evalFunction: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lhs: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            rhs: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            trueIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            falseIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            entryDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            exitDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.createEvalStepForm = this.fb.group({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('evaluation'),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            evalFunction: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            entryDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            exitDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            arguments: this.fb.array([]),
        });
    }
    ngOnInit() {
        this.fillEvalFunctions();
    }
    fillEvalFunctions() {
        this.funcService.getListEvalFunctions()
            .subscribe((data) => {
            this.functions = data;
        });
    }
    displayFunctionName(func) {
        return func && func.func_name ? func.func_name : '';
    }
    functionSelected() {
        const selectedFunction = this.createEvalStepForm.controls.evalFunction.value;
        //clear existing data
        this.panelOpenState = false;
        this.arguments().clear();
        this.funcService.getEvaluationFunction(selectedFunction)
            .subscribe((data) => {
            const funcDetails = data;
            //push new arguments from slected function
            if (Object.keys(funcDetails.func_args).length === 0 && funcDetails.func_args.constructor === Object) {
                //empty object
                this.addArgument('e');
            }
            else {
                for (const property in funcDetails.func_args) {
                    this.addArgument(property);
                }
            }
            //open collapsable panel
            this.panelOpenState = true;
        });
    }
    functionConditionSelected() { }
    //logic to fill dynamic arguments
    newArgument(key) {
        return this.fb.group({
            argValue: '',
            argKey: key
        });
    }
    addArgument(key) {
        this.arguments().push(this.newArgument(key));
    }
    arguments() {
        return this.createEvalStepForm.get("arguments");
    }
    //onTabIndexChange
    onTabIndexChange($event) {
        this.selectedTabIndex = $event;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    createEvalStep() {
        this.dialogRef.close(this.createEvalStepForm.value);
    }
    createConditionStep() {
        this.dialogRef.close(this.createConditionStepForm.value);
    }
}
CreatestepComponent.ɵfac = function CreatestepComponent_Factory(t) { return new (t || CreatestepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_evalfunctions_evalfunction_service__WEBPACK_IMPORTED_MODULE_2__["EvalfunctionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"])); };
CreatestepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatestepComponent, selectors: [["app-createstep"]], decls: 86, vars: 12, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "selectedIndexChange"], ["label", "Evaluation Step"], [1, "mat-elevation-z4", 3, "formGroup"], ["appearance", "fill", 1, "width-100"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "description"], ["matInput", "", "formControlName", "entryDesc"], ["matInput", "", "formControlName", "exitDesc"], [1, "switch-container"], ["type", "text", "placeholder", "Select evaluation function", "aria-label", "Evaluation Function", "matInput", "", "formControlName", "evalFunction", "required", "", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["autofunction", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "accordian-container"], [3, "expanded"], ["formArrayName", "arguments"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["label", "Conditional Step"], ["matInput", "", "formControlName", "lhs"], ["matInput", "", "formControlName", "rhs"], ["matInput", "", "formControlName", "trueIndex"], ["matInput", "", "formControlName", "falseIndex"], ["mat-dialog-actions", "", 4, "ngIf"], [3, "value"], [3, "formGroupName"], ["matInput", "", "formControlName", "argValue"], ["mat-dialog-actions", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function CreatestepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create new step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function CreatestepComponent_Template_mat_tab_group_selectedIndexChange_3_listener($event) { return ctx.onTabIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Entry Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Exit Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-slide-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Expose step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Evaluation Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-autocomplete", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreatestepComponent_Template_mat_autocomplete_optionSelected_29_listener() { return ctx.functionSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CreatestepComponent_mat_option_31_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-expansion-panel", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Map evaluation function arguments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CreatestepComponent_div_39_Template, 5, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Evaluation Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-autocomplete", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreatestepComponent_Template_mat_autocomplete_optionSelected_54_listener() { return ctx.functionConditionSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, CreatestepComponent_mat_option_56_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "LHS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "RHS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "True index step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "False index step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-slide-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Expose step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Entry Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Exit Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, CreatestepComponent_div_84_Template, 5, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, CreatestepComponent_div_85_Template, 5, 0, "div", 24);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createEvalStepForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFunctionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.functions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.panelOpenState === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arguments().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createConditionStepForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFunctionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.functions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTabIndex === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTabIndex === 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggle"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]], styles: [".width-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.accordian-container[_ngcontent-%COMP%] {\n  padding: 0 3px 5px 3px;\n}\n\n.switch-container[_ngcontent-%COMP%] {\n  padding: 0 0 15px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlcHMvY3JlYXRlc3RlcC9jcmVhdGVzdGVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zdGVwcy9jcmVhdGVzdGVwL2NyZWF0ZXN0ZXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkdGgtMTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFjY29yZGlhbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgM3B4IDVweCAzcHg7XHJcbn1cclxuXHJcbi5zd2l0Y2gtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwIDAgMTVweCAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatestepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-createstep',
                templateUrl: './createstep.component.html',
                styleUrls: ['./createstep.component.scss']
            }]
    }], function () { return [{ type: src_app_evalfunctions_evalfunction_service__WEBPACK_IMPORTED_MODULE_2__["EvalfunctionService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "Stgj":
/*!***************************************************!*\
  !*** ./src/app/widgets/math-editor/math-rules.ts ***!
  \***************************************************/
/*! exports provided: MathRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathRules", function() { return MathRules; });
class MathRules {
    constructor() {
        this._symbols = [
            {
                title: "Basic",
                items: [
                    {
                        symbol: "x",
                        fontsize: "font-sm",
                        laTexValue: "x",
                        actionType: "write",
                        type: "btn",
                        category: "abc"
                    },
                    {
                        symbol: "&#945;",
                        laTexValue: "\\alpha",
                        actionType: "write",
                        type: "btn",
                        category: "abc"
                    },
                    {
                        symbol: "&#946;",
                        laTexValue: "\\beta",
                        actionType: "write",
                        type: "btn",
                        category: "abc"
                    },
                    {
                        symbol: "&#947;",
                        laTexValue: "\\gamma",
                        actionType: "write",
                        type: "btn",
                        category: "abc"
                    },
                    {
                        symbol: "&#9633;",
                        fontsize: "font-lg",
                        sup: "2",
                        laTexValue: "^2",
                        actionType: "write",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "x",
                        sup: "&#9633;",
                        laTexValue: "^",
                        actionType: "cmd",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "&#8730;",
                        laTexValue: "\\sqrt",
                        actionType: "cmd",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "&#9633; &#8730;",
                        laTexValue: "\\nthroot",
                        actionType: "cmd",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "&#8723;",
                        laTexValue: "\\pm",
                        actionType: "cmd",
                        type: "btn",
                        category: "abc"
                    },
                    {
                        symbol: "+",
                        laTexValue: "+",
                        actionType: "cmd",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "-",
                        laTexValue: "-",
                        actionType: "cmd",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "*",
                        laTexValue: "\\times",
                        actionType: "cmd",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "&#247;",
                        laTexValue: "\\div",
                        actionType: "cmd",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "/",
                        laTexValue: "\\frac",
                        actionType: "cmd",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "&#60;",
                        laTexValue: "\\lt",
                        actionType: "cmd",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "&#62;",
                        laTexValue: "\\gt",
                        actionType: "cmd",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "&#8804;",
                        laTexValue: "\\le",
                        actionType: "cmd",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "&#8805;",
                        laTexValue: "\\ge",
                        actionType: "cmd",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "&#8512;",
                        laTexValue: "\\sum _{n=0}^ { }\\left( \\right)",
                        actionType: "write",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "&#8747;",
                        laTexValue: "\\int",
                        actionType: "cmd",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "&#40; &#41;",
                        laTexValue: "(",
                        actionType: "cmd",
                        type: "btn",
                        category: "abc"
                    },
                    {
                        symbol: " &#123; &#125;",
                        laTexValue: "{",
                        actionType: "cmd",
                        type: "btn",
                        category: "abc"
                    },
                    {
                        symbol: " &#91; &#93;",
                        laTexValue: "[",
                        actionType: "cmd",
                        type: "btn",
                        category: "abc"
                    },
                    {
                        symbol: "log",
                        laTexValue: "\\log_{} \\left ( \\right )",
                        actionType: "write",
                        sub: "&#9633;",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "&#8734;",
                        fontsize: "font-md",
                        laTexValue: "\\infty",
                        actionType: "write",
                        type: "btn",
                        category: "abc"
                    },
                    {
                        symbol: "&#46;",
                        fontsize: "font-md",
                        laTexValue: "\\cdot",
                        actionType: "write",
                        type: "btn",
                        category: "abc"
                    },
                    {
                        symbol: "&#8594;",
                        fontsize: "font-md",
                        laTexValue: "\\rightarrow",
                        actionType: "write",
                        type: "btn",
                        category: "abc"
                    },
                    {
                        symbol: "&#8592;",
                        fontsize: "font-md",
                        laTexValue: "\\leftarrow",
                        actionType: "write",
                        type: "btn",
                        category: "abc"
                    },
                    {
                        symbol: "&#952;",
                        fontsize: "font-md",
                        laTexValue: "\\theta",
                        actionType: "write",
                        type: "btn",
                        category: "trig"
                    },
                    {
                        symbol: "f(x)",
                        fontsize: "font-md",
                        laTexValue: "f \\left ( x \\right )",
                        actionType: "write",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "d/dx",
                        // sup:"d",
                        // sub:"dx",
                        fontsize: "font-md",
                        laTexValue: "\\frac {d} {dx}",
                        actionType: "write",
                        type: "btn",
                        category: "math"
                    },
                    {
                        symbol: "sin",
                        laTexValue: "\\sin \\left ( \\right )",
                        type: "btn",
                        actionType: "write",
                        category: "trig"
                    },
                    {
                        symbol: "cos",
                        laTexValue: "\\cos \\left ( \\right )",
                        type: "btn",
                        actionType: "write",
                        category: "trig"
                    },
                    {
                        symbol: "tan",
                        laTexValue: "\\tan \\left ( \\right )",
                        type: "btn",
                        actionType: "write",
                        category: "trig"
                    },
                    {
                        symbol: "sec",
                        laTexValue: "\\sec \\left ( \\right )",
                        type: "btn",
                        actionType: "write",
                        category: "trig"
                    },
                    {
                        symbol: "csc",
                        laTexValue: "\\csc \\left ( \\right )",
                        type: "btn",
                        actionType: "write",
                        category: "trig"
                    },
                    {
                        symbol: "cot",
                        laTexValue: "\\cot \\left ( \\right )",
                        type: "btn",
                        actionType: "write",
                        category: "trig"
                    },
                    {
                        symbol: "sinh",
                        laTexValue: "\\sinh \\left ( \\right )",
                        type: "btn",
                        actionType: "write",
                        category: "trig"
                    },
                    {
                        symbol: "cosh",
                        laTexValue: "\\cosh \\left ( \\right )",
                        type: "btn",
                        actionType: "write",
                        category: "trig"
                    },
                    {
                        symbol: "tanh",
                        laTexValue: "\\tanh \\left ( \\right )",
                        type: "btn",
                        actionType: "write",
                        category: "trig"
                    },
                    {
                        symbol: "sech",
                        laTexValue: "\\sech \\left ( \\right )",
                        type: "btn",
                        actionType: "write",
                        category: "trig"
                    },
                    {
                        symbol: "csch",
                        laTexValue: "\\csch \\left ( \\right )",
                        type: "btn",
                        actionType: "write",
                        category: "trig"
                    },
                    {
                        symbol: "coth",
                        laTexValue: "\\coth \\left ( \\right )",
                        type: "btn",
                        actionType: "write",
                        category: "trig"
                    },
                ]
            },
            {
                title: "Terms",
                items: []
            },
            {
                title: "Constants",
                items: [
                    {
                        symbol: "&#928;",
                        laTexValue: "\\pi",
                        actionType: "write",
                        type: "btn",
                    },
                ]
            }
        ];
    }
    get symbols() {
        return this._symbols;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'divideite-ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "V9no":
/*!*********************************************************************************************!*\
  !*** ./src/app/concept/concept-form/concept-form-control/concept-form-control.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ConceptFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptFormControlComponent", function() { return ConceptFormControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");








function ConceptFormControlComponent_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.definition.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "Enter ", ctx_r0.definition.label, " value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r0.definition.key)("type", ctx_r0.definition.type);
} }
function ConceptFormControlComponent_mat_form_field_3_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opt_r3.label, " ");
} }
function ConceptFormControlComponent_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConceptFormControlComponent_mat_form_field_3_mat_option_4_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.definition.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r1.definition.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.definition.options);
} }
class ConceptFormControlComponent {
    constructor() { }
    ngOnInit() {
        this.definition;
    }
}
ConceptFormControlComponent.ɵfac = function ConceptFormControlComponent_Factory(t) { return new (t || ConceptFormControlComponent)(); };
ConceptFormControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConceptFormControlComponent, selectors: [["app-concept-form-control"]], inputs: { definition: "definition", form: "form" }, decls: 4, vars: 4, consts: [[3, "formGroup"], [3, "ngSwitch"], ["appearance", "fill", "class", "full-width padding-r-4", 4, "ngSwitchCase"], ["appearance", "fill", 1, "full-width", "padding-r-4"], ["matInput", "", 3, "placeholder", "formControlName", "type"], [3, "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ConceptFormControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConceptFormControlComponent_mat_form_field_2_Template, 4, 4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConceptFormControlComponent_mat_form_field_3_Template, 5, 3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.definition.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "List");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmNlcHQvY29uY2VwdC1mb3JtL2NvbmNlcHQtZm9ybS1jb250cm9sL2NvbmNlcHQtZm9ybS1jb250cm9sLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConceptFormControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-concept-form-control',
                templateUrl: './concept-form-control.component.html',
                styleUrls: ['./concept-form-control.component.scss']
            }]
    }], function () { return []; }, { definition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "VFgG":
/*!*********************************************!*\
  !*** ./src/app/auth/auth/auth.component.ts ***!
  \*********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "bsvf");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup/signup.component */ "SBxm");





class AuthComponent {
    constructor() { }
    ngOnInit() { }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 5, vars: 0, consts: [["mat-stretch-tabs", "", "dynamicHeight", "", "color", "accent", "backgroundColor", "primary", 1, "mat-elevation-z4"], ["label", "Login"], ["label", "Signup"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f7f8fc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZjO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XKSY":
/*!*******************************************************!*\
  !*** ./src/app/evalfunctions/evalfunction.service.ts ***!
  \*******************************************************/
/*! exports provided: EvalfunctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvalfunctionService", function() { return EvalfunctionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class EvalfunctionService {
    constructor(http) {
        this.http = http;
    }
    getListEvalFunctions() {
        return this.http.get(`${location.origin}/dvp/a/mdm/functions/all`);
    }
    getEvaluationFunction(func) {
        return this.http.get(`${location.origin}/dvp/a/mdm/functions/${func.func_id}`);
    }
}
EvalfunctionService.ɵfac = function EvalfunctionService_Factory(t) { return new (t || EvalfunctionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EvalfunctionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EvalfunctionService, factory: EvalfunctionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvalfunctionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "XjXb":
/*!***************************************!*\
  !*** ./src/app/terms/term.service.ts ***!
  \***************************************/
/*! exports provided: TermService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermService", function() { return TermService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class TermService {
    constructor(http) {
        this.http = http;
    }
    getTermDetails(term_id) {
        return this.http.get(`${location.origin}/dvp/tm/g/${term_id}`);
    }
    createFunctionTerm(term) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(`${location.origin}/dvp/tm/new`, term, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    updateFunctionTerm(term_id, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(`${location.origin}/dvp/tm/m/${term_id}`, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
TermService.ɵfac = function TermService_Factory(t) { return new (t || TermService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TermService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TermService, factory: TermService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TermService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "XmHZ":
/*!**************************************************************!*\
  !*** ./src/app/concept/concept-form/concept-form.service.ts ***!
  \**************************************************************/
/*! exports provided: ConceptFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptFormService", function() { return ConceptFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ConceptFormService {
    constructor() { }
    toFormGroup(definitions) {
        const group = {};
        definitions.forEach(definition => {
            group[definition.key] = definition.required ? new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
                : new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    }
}
ConceptFormService.ɵfac = function ConceptFormService_Factory(t) { return new (t || ConceptFormService)(); };
ConceptFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConceptFormService, factory: ConceptFormService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConceptFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/signup/signup.component */ "SBxm");
/* harmony import */ var _auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth/auth/auth.component */ "VFgG");
/* harmony import */ var _generic_menu_menu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./generic/menu/menu.component */ "+AYc");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _concept_createconcept_createconcept_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./concept/createconcept/createconcept.component */ "ECbk");
/* harmony import */ var _concept_newfunctiondialog_newfunctiondialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./concept/newfunctiondialog/newfunctiondialog.component */ "/jb4");
/* harmony import */ var _concept_updateconcept_updateconcept_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./concept/updateconcept/updateconcept.component */ "4FUp");
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./widgets/widgets.module */ "3QYm");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _concept_defineconcept_concept_form_builder_concept_form_builder_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./concept/defineconcept/concept-form-builder/concept-form-builder.component */ "QSJN");
/* harmony import */ var _concept_defineconcept_defineconcept_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./concept/defineconcept/defineconcept.component */ "DWwq");
/* harmony import */ var _concept_defineconcept_ad_component_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./concept/defineconcept/ad-component.directive */ "Ff43");
/* harmony import */ var _concept_defineconcept_concept_form_builder_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./concept/defineconcept/concept-form-builder/list-item/list-item.component */ "qW4P");
/* harmony import */ var _concept_newtermdialog_newtermdialog_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./concept/newtermdialog/newtermdialog.component */ "otUA");
/* harmony import */ var _steps_definesteps_definesteps_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./steps/definesteps/definesteps.component */ "o1+T");
/* harmony import */ var _concept_update_concept_stepper_update_concept_stepper_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./concept/update-concept-stepper/update-concept-stepper.component */ "74lV");
/* harmony import */ var _concept_concept_form_concept_form_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./concept/concept-form/concept-form.component */ "PsIP");
/* harmony import */ var _concept_concept_form_concept_form_control_concept_form_control_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./concept/concept-form/concept-form-control/concept-form-control.component */ "V9no");
/* harmony import */ var _concept_concept_form_concept_form_dialog_concept_form_dialog_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./concept/concept-form/concept-form-dialog/concept-form-dialog.component */ "pnEM");
/* harmony import */ var _concept_define_solution_define_solution_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./concept/define-solution/define-solution.component */ "52sJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _solution_solution_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./solution/solution.component */ "3K0J");
/* harmony import */ var _steps_createstep_createstep_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./steps/createstep/createstep.component */ "So4L");



















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_47__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_34__["WidgetsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__["MatBadgeModule"],
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_35__["CKEditorModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"],
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
        _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_26__["SignupComponent"],
        _auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_27__["AuthComponent"],
        _generic_menu_menu_component__WEBPACK_IMPORTED_MODULE_28__["MenuComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_30__["PageNotFoundComponent"],
        _concept_createconcept_createconcept_component__WEBPACK_IMPORTED_MODULE_31__["CreateConceptComponent"],
        _concept_newfunctiondialog_newfunctiondialog_component__WEBPACK_IMPORTED_MODULE_32__["NewfunctiondialogComponent"],
        _concept_updateconcept_updateconcept_component__WEBPACK_IMPORTED_MODULE_33__["UpdateconceptComponent"],
        _concept_newtermdialog_newtermdialog_component__WEBPACK_IMPORTED_MODULE_40__["NewtermdialogComponent"],
        _concept_defineconcept_concept_form_builder_concept_form_builder_component__WEBPACK_IMPORTED_MODULE_36__["ConceptFormBuilderComponent"],
        _concept_defineconcept_defineconcept_component__WEBPACK_IMPORTED_MODULE_37__["DefineconceptComponent"],
        _concept_defineconcept_ad_component_directive__WEBPACK_IMPORTED_MODULE_38__["AdComponentDirective"],
        _concept_defineconcept_concept_form_builder_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_39__["ListItemComponent"],
        _concept_newtermdialog_newtermdialog_component__WEBPACK_IMPORTED_MODULE_40__["NewtermdialogComponent"],
        _concept_concept_form_concept_form_component__WEBPACK_IMPORTED_MODULE_43__["ConceptFormComponent"],
        _concept_concept_form_concept_form_control_concept_form_control_component__WEBPACK_IMPORTED_MODULE_44__["ConceptFormControlComponent"],
        _concept_concept_form_concept_form_dialog_concept_form_dialog_component__WEBPACK_IMPORTED_MODULE_45__["ConceptFormDialogComponent"],
        _concept_define_solution_define_solution_component__WEBPACK_IMPORTED_MODULE_46__["DefineSolutionComponent"],
        _steps_definesteps_definesteps_component__WEBPACK_IMPORTED_MODULE_41__["DefinestepsComponent"],
        _concept_update_concept_stepper_update_concept_stepper_component__WEBPACK_IMPORTED_MODULE_42__["UpdateConceptStepperComponent"],
        _solution_solution_component__WEBPACK_IMPORTED_MODULE_48__["SolutionComponent"],
        _steps_createstep_createstep_component__WEBPACK_IMPORTED_MODULE_49__["CreatestepComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_47__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_34__["WidgetsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__["MatBadgeModule"],
        ckeditor4_angular__WEBPACK_IMPORTED_MODULE_35__["CKEditorModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"],
                    _auth_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                    _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_26__["SignupComponent"],
                    _auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_27__["AuthComponent"],
                    _generic_menu_menu_component__WEBPACK_IMPORTED_MODULE_28__["MenuComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_30__["PageNotFoundComponent"],
                    _concept_createconcept_createconcept_component__WEBPACK_IMPORTED_MODULE_31__["CreateConceptComponent"],
                    _concept_newfunctiondialog_newfunctiondialog_component__WEBPACK_IMPORTED_MODULE_32__["NewfunctiondialogComponent"],
                    _concept_updateconcept_updateconcept_component__WEBPACK_IMPORTED_MODULE_33__["UpdateconceptComponent"],
                    _concept_newtermdialog_newtermdialog_component__WEBPACK_IMPORTED_MODULE_40__["NewtermdialogComponent"],
                    _concept_defineconcept_concept_form_builder_concept_form_builder_component__WEBPACK_IMPORTED_MODULE_36__["ConceptFormBuilderComponent"],
                    _concept_defineconcept_defineconcept_component__WEBPACK_IMPORTED_MODULE_37__["DefineconceptComponent"],
                    _concept_defineconcept_ad_component_directive__WEBPACK_IMPORTED_MODULE_38__["AdComponentDirective"],
                    _concept_defineconcept_concept_form_builder_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_39__["ListItemComponent"],
                    _concept_newtermdialog_newtermdialog_component__WEBPACK_IMPORTED_MODULE_40__["NewtermdialogComponent"],
                    _concept_concept_form_concept_form_component__WEBPACK_IMPORTED_MODULE_43__["ConceptFormComponent"],
                    _concept_concept_form_concept_form_control_concept_form_control_component__WEBPACK_IMPORTED_MODULE_44__["ConceptFormControlComponent"],
                    _concept_concept_form_concept_form_dialog_concept_form_dialog_component__WEBPACK_IMPORTED_MODULE_45__["ConceptFormDialogComponent"],
                    _concept_define_solution_define_solution_component__WEBPACK_IMPORTED_MODULE_46__["DefineSolutionComponent"],
                    _steps_definesteps_definesteps_component__WEBPACK_IMPORTED_MODULE_41__["DefinestepsComponent"],
                    _concept_update_concept_stepper_update_concept_stepper_component__WEBPACK_IMPORTED_MODULE_42__["UpdateConceptStepperComponent"],
                    _solution_solution_component__WEBPACK_IMPORTED_MODULE_48__["SolutionComponent"],
                    _steps_createstep_createstep_component__WEBPACK_IMPORTED_MODULE_49__["CreatestepComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_47__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_34__["WidgetsModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__["MatBadgeModule"],
                    ckeditor4_angular__WEBPACK_IMPORTED_MODULE_35__["CKEditorModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class LoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ngOnInit() { }
    login() {
        const data = this.loginForm.value;
        this.authService.login({
            'un': data.email,
            'pw': data.password,
        }).subscribe(data => {
            if (data['logged_in'] == true) {
                this.router.navigate(['/home']);
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 12, vars: 2, consts: [[3, "formGroup"], ["appearance", "fill", 1, "full-width"], ["matInput", "", "placeholder", "Enter your email", "formControlName", "email", "type", "email", "required", ""], ["matInput", "", "placeholder", "Enter your password", "formControlName", "password", "required", "", "type", "password"], [1, "btn-container"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_10_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " LOGIN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["form[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "ivMx":
/*!***************************************!*\
  !*** ./src/app/steps/step.service.ts ***!
  \***************************************/
/*! exports provided: StepService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepService", function() { return StepService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");






class StepService {
    constructor(http) {
        this.http = http;
    }
    createStepSuite(concept_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(`${location.origin}/dvp/c/solve/ss/new/${concept_id}`, {}, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getStepSuite(conceptId) {
        return this.http.get(`${location.origin}/dvp/c/solve/ss/${conceptId}?steps=True`);
    }
    createNewStepEval(conceptId, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(`${location.origin}/dvp/c/solve/st/${conceptId}/1/e`, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    createNewStepConditional(conceptId, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(`${location.origin}/dvp/c/solve/st/${conceptId}/2/c`, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
}
StepService.ɵfac = function StepService_Factory(t) { return new (t || StepService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
StepService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StepService, factory: StepService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StepService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "mqe4":
/*!***********************************************!*\
  !*** ./src/app/functions/function.service.ts ***!
  \***********************************************/
/*! exports provided: FunctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionService", function() { return FunctionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class FunctionService {
    constructor(http) {
        this.http = http;
    }
    getFunctionDetails(function_id) {
        return this.http.get(`${location.origin}/dvp/fn/g/${function_id}`);
    }
    listConceptFunctions(concept_id) {
        return this.http.get(`${location.origin}/dvp/fn/l/${concept_id}`);
    }
    createFunction(fun) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(`${location.origin}/dvp/fn/new`, fun, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    updateFunction(function_id, fun) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(`${location.origin}/dvp/fn/m/${function_id}`, fun, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    }
}
FunctionService.ɵfac = function FunctionService_Factory(t) { return new (t || FunctionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
FunctionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FunctionService, factory: FunctionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FunctionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nbDy":
/*!*********************************************!*\
  !*** ./src/app/subjects/subject.service.ts ***!
  \*********************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SubjectService {
    constructor(http) {
        this.http = http;
    }
    getSubjectsList() {
        return this.http.get(`${location.origin}/dvp/sub/s`);
    }
}
SubjectService.ɵfac = function SubjectService_Factory(t) { return new (t || SubjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SubjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubjectService, factory: SubjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "o1+T":
/*!************************************************************!*\
  !*** ./src/app/steps/definesteps/definesteps.component.ts ***!
  \************************************************************/
/*! exports provided: DefinestepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinestepsComponent", function() { return DefinestepsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _createstep_createstep_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createstep/createstep.component */ "So4L");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _step_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../step.service */ "ivMx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");











function DefinestepsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You haven't defined your solution yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefinestepsComponent_section_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.createStepSuiteAndAddNewStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Define new solution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DefinestepsComponent_section_1_mat_expansion_panel_2_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Entry Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Exit Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", step_r5.value.step_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", step_r5.value.step_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", step_r5.value.step_entry_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", step_r5.value.step_exit_desc);
} }
function DefinestepsComponent_section_1_mat_expansion_panel_2_section_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Entry Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Exit Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "LHS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "RHS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "True Index");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "False Index");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", step_r5.value.step_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", step_r5.value.step_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", step_r5.value.step_entry_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", step_r5.value.step_exit_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", step_r5.value.step_func_args.lval);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", step_r5.value.step_func_args.rval);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", step_r5.value.route_true_index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", step_r5.value.route_false_index);
} }
function DefinestepsComponent_section_1_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DefinestepsComponent_section_1_mat_expansion_panel_2_section_6_Template, 21, 4, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DefinestepsComponent_section_1_mat_expansion_panel_2_section_7_Template, 37, 8, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", step_r5.key, ". ", step_r5.value.step_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", step_r5.value.step_desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", step_r5.value.step_type === "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", step_r5.value.step_type === "C");
} }
function DefinestepsComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DefinestepsComponent_section_1_mat_expansion_panel_2_Template, 8, 5, "mat-expansion-panel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefinestepsComponent_section_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openDialogNewSteps(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add new step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r1.stepSuitDetails == null ? null : ctx_r1.stepSuitDetails.steps));
} }
class DefinestepsComponent {
    constructor(dialog, route, stepService) {
        this.dialog = dialog;
        this.route = route;
        this.stepService = stepService;
        this.steps = [];
    }
    ngOnInit() {
        this.conceptId = this.route.snapshot.paramMap.get('id');
        this.checkForStepSuiteAndProceed();
    }
    checkForStepSuiteAndProceed() {
        this.stepService.getStepSuite(this.conceptId)
            .subscribe((data) => {
            if (data) {
                this.stepSuitDetails = data;
                this.stepSuitId = data.step_suite_id;
            }
        });
    }
    createStepSuiteAndAddNewStep() {
        if (this.stepSuitId && this.stepSuitId.length) {
            this.openDialogNewSteps();
            return;
        }
        this.stepService.createStepSuite(this.conceptId)
            .subscribe((data) => {
            if (data['status'].toLowerCase() === "success") {
                this.stepSuitId = data['suite_id'] || '';
                if (this.stepSuitId && this.stepSuitId.length) {
                    this.openDialogNewSteps();
                }
            }
        });
    }
    openDialogNewSteps() {
        const dialogRef = this.dialog.open(_createstep_createstep_component__WEBPACK_IMPORTED_MODULE_1__["CreatestepComponent"], {
            width: '500px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) {
                return;
            }
            if (result.type === 'evaluation') {
                this.createEvaluationStep(result);
            }
            else {
                this.createConditionalStep(result);
            }
        });
    }
    createEvaluationStep(step) {
        let funcArgs = {};
        for (const arg of step.arguments) {
            funcArgs[arg.argKey] = funcArgs[arg.argValue];
        }
        this.stepService.createNewStepEval(this.conceptId, {
            "step_name": step.name,
            "step_desc": step.description,
            "eval_func_id": step.evalFunction.func_id,
            "func_args": funcArgs,
            "return_args": {},
            "expose": true,
            "entry_desc": step.entryDesc,
            "exit_desc": step.exitDesc
        }).subscribe(data => {
            if (data['status'].toLowerCase() === 'success') {
                this.checkForStepSuiteAndProceed();
            }
        });
    }
    createConditionalStep(step) {
        this.stepService.createNewStepConditional(this.conceptId, {
            "step_name": step.name,
            "step_desc": step.description,
            "eval_func_id": step.evalFunction.func_id,
            "lhs_value": step.lhs,
            "rhs_value": step.rhs,
            "true_index": step.trueIndex,
            "false_index": step.falseIndex,
            "expose": true,
            "entry_desc": step.entryDesc,
            "exit_desc": step.exitDesc,
        }).subscribe(data => {
            if (data['status'].toLowerCase() === 'success') {
                this.checkForStepSuiteAndProceed();
            }
        });
    }
}
DefinestepsComponent.ɵfac = function DefinestepsComponent_Factory(t) { return new (t || DefinestepsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_step_service__WEBPACK_IMPORTED_MODULE_4__["StepService"])); };
DefinestepsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefinestepsComponent, selectors: [["app-definesteps"]], decls: 2, vars: 2, consts: [["class", "empty-container", 4, "ngIf"], [4, "ngIf"], [1, "empty-container"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "steps-container"], [4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "width-48", "padding-r-2"], ["matInput", "", "disabled", "", "value", "Evaluation"], ["appearance", "fill", 1, "width-48"], ["matInput", "", "disabled", "", 3, "value"], ["appearance", "fill", 1, "full-width"]], template: function DefinestepsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DefinestepsComponent_section_0_Template, 6, 0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DefinestepsComponent_section_1_Template, 7, 3, "section", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.stepSuitDetails && ctx.stepSuitDetails.steps));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stepSuitDetails && ctx.stepSuitDetails.steps);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelDescription"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"]], styles: [".empty-container[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n.empty-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.steps-container[_ngcontent-%COMP%] {\n  padding: 0 5px 10px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlcHMvZGVmaW5lc3RlcHMvZGVmaW5lc3RlcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVKO0FBRUE7RUFDRSx1QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3RlcHMvZGVmaW5lc3RlcHMvZGVmaW5lc3RlcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wdHktY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgaDUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuXHJcbi5zdGVwcy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgNXB4IDEwcHggNXB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefinestepsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-definesteps',
                templateUrl: './definesteps.component.html',
                styleUrls: ['./definesteps.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _step_service__WEBPACK_IMPORTED_MODULE_4__["StepService"] }]; }, null); })();


/***/ }),

/***/ "otUA":
/*!******************************************************************!*\
  !*** ./src/app/concept/newtermdialog/newtermdialog.component.ts ***!
  \******************************************************************/
/*! exports provided: NewtermdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewtermdialogComponent", function() { return NewtermdialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_terms_term_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/terms/term.service */ "XjXb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function NewtermdialogComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4, " ");
} }
function NewtermdialogComponent_div_26_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const operator_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", operator_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", operator_r9, " ");
} }
function NewtermdialogComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "LHS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewtermdialogComponent_div_26_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.symbol = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Operator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-autocomplete", 9, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NewtermdialogComponent_div_26_mat_option_11_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "RHS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.index;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.symbolOperators);
} }
function NewtermdialogComponent_div_33_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const operator_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", operator_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", operator_r16, " ");
} }
function NewtermdialogComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Operator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-autocomplete", 9, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewtermdialogComponent_div_33_mat_option_7_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "RHS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.index;
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.coefficientOperators);
} }
class NewtermdialogComponent {
    constructor(dialogRef, data, termService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.termService = termService;
        this.fb = fb;
        this.options = ['LHS', 'RHS'];
        this.symbolOperators = ['=', '<', '>', '<=', '>='];
        this.coefficientOperators = ['=', '<', '>', '<=', '>='];
        this.createTermForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            symbol: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            definition: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            side: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            symbolConstraints: this.fb.array([]),
            coefficientConstraints: this.fb.array([]),
        });
    }
    ngOnInit() {
    }
    symbolConstraints() {
        return this.createTermForm.get('symbolConstraints');
    }
    newSymbolConstraint() {
        const formValue = this.createTermForm.value;
        return this.fb.group({
            "name": formValue.name,
            "symbol": formValue.symbol,
            "comparator": '',
            "value": '',
            "value_type": "constant"
        });
    }
    addSymbolConstraint() {
        this.symbolConstraints().push(this.newSymbolConstraint());
    }
    coefficientConstraints() {
        return this.createTermForm.get('coefficientConstraints');
    }
    newCoefficientConstraint() {
        const formValue = this.createTermForm.value;
        return this.fb.group({
            "name": formValue.name,
            "symbol": formValue.symbol,
            "comparator": '',
            "value": '',
            "value_type": "constant"
        });
    }
    addCoefficientConstraint() {
        this.coefficientConstraints().push(this.newCoefficientConstraint());
    }
    createTerm() {
        const formValue = this.createTermForm.value;
        this.data.name = formValue.name;
        this.data.symbol = formValue.symbol;
        this.data.definition = formValue.definition;
        this.data.location = formValue.side;
        this.data.constraints.symbol = formValue.symbolConstraints;
        this.data.constraints.coefficient = formValue.coefficientConstraints;
        this.termService.createFunctionTerm(this.data)
            .subscribe((data) => {
            this.dialogRef.close(data);
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
NewtermdialogComponent.ɵfac = function NewtermdialogComponent_Factory(t) { return new (t || NewtermdialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_terms_term_service__WEBPACK_IMPORTED_MODULE_3__["TermService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
NewtermdialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewtermdialogComponent, selectors: [["app-newtermdialog"]], decls: 42, vars: 7, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["appearance", "fill", 1, "width-48", "padding-r-4"], ["matInput", "", "placeholder", "Enter term name", "formControlName", "name", "type", "text", "required", ""], ["appearance", "fill", 1, "width-48"], ["matInput", "", "placeholder", "Enter symbol", "formControlName", "symbol", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Enter definition", "formControlName", "definition", "type", "text"], ["type", "text", "placeholder", "Pick one", "aria-label", "Side", "matInput", "", "formControlName", "side", 3, "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["formArrayName", "symbolConstraints"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [2, "height", "38px"], ["mat-stroked-button", "", "color", "primary", 1, "pull-right", 3, "click"], ["formArrayName", "coefficientConstraints"], ["mat-dialog-actions", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "click"], ["mat-button", "", 3, "disabled", "click"], [3, "value"], [3, "formGroupName"], ["appearance", "fill", 1, "width-30", "padding-r-5"], ["matInput", "", "placeholder", "Enter symbol constraint", "formControlName", "symbol", "type", "text", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Pick one", "aria-label", "Operators", "matInput", "", "formControlName", "comparator", 3, "matAutocomplete"], ["autoOperator", "matAutocomplete"], ["appearance", "fill", 1, "width-30"], ["matInput", "", "placeholder", "Enter symbol constraint", "formControlName", "value", "type", "text"], ["autoCoefficientOperator", "matAutocomplete"], ["matInput", "", "placeholder", "Enter coefficient constraint", "formControlName", "value", "type", "text"]], template: function NewtermdialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Adding new term to function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Term Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewtermdialogComponent_Template_input_ngModelChange_11_listener($event) { return ctx.symbol = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Definition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-autocomplete", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NewtermdialogComponent_mat_option_22_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Symbol Constraint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NewtermdialogComponent_div_26_Template, 16, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewtermdialogComponent_Template_button_click_28_listener() { return ctx.addSymbolConstraint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "+Add Constraint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Coefficient Constraint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, NewtermdialogComponent_div_33_Template, 12, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewtermdialogComponent_Template_button_click_35_listener() { return ctx.addCoefficientConstraint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "+ Add Constraint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewtermdialogComponent_Template_button_click_38_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "No Thanks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewtermdialogComponent_Template_button_click_40_listener() { return ctx.createTerm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Define new term");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createTermForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.symbol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.symbolConstraints().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.coefficientConstraints().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.createTermForm.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]], styles: [".width-30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.padding-r-5[_ngcontent-%COMP%] {\n  padding-right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uY2VwdC9uZXd0ZXJtZGlhbG9nL25ld3Rlcm1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29uY2VwdC9uZXd0ZXJtZGlhbG9nL25ld3Rlcm1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkdGgtMzAge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXItNSB7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewtermdialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newtermdialog',
                templateUrl: './newtermdialog.component.html',
                styleUrls: ['./newtermdialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_terms_term_service__WEBPACK_IMPORTED_MODULE_3__["TermService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "pnEM":
/*!*******************************************************************************************!*\
  !*** ./src/app/concept/concept-form/concept-form-dialog/concept-form-dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ConceptFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptFormDialogComponent", function() { return ConceptFormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _concept_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../concept-form.component */ "PsIP");





class ConceptFormDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
}
ConceptFormDialogComponent.ɵfac = function ConceptFormDialogComponent_Factory(t) { return new (t || ConceptFormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConceptFormDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConceptFormDialogComponent, selectors: [["app-concept-form-dialog"]], decls: 1, vars: 1, consts: [[3, "conceptsDefinitions"]], template: function ConceptFormDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-concept-form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("conceptsDefinitions", ctx.data);
    } }, directives: [_concept_form_component__WEBPACK_IMPORTED_MODULE_2__["ConceptFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmNlcHQvY29uY2VwdC1mb3JtL2NvbmNlcHQtZm9ybS1kaWFsb2cvY29uY2VwdC1mb3JtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConceptFormDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-concept-form-dialog',
                templateUrl: './concept-form-dialog.component.html',
                styleUrls: ['./concept-form-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "qW4P":
/*!*********************************************************************************************!*\
  !*** ./src/app/concept/defineconcept/concept-form-builder/list-item/list-item.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








class ListItemComponent {
    constructor() {
        this.listItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    ngOnInit() {
        if (this.data) {
            this.renderComponents();
        }
    }
    renderComponents() {
        this.listItemForm.controls.label.setValue(this.data.label);
        this.listItemForm.controls.value.setValue(this.data.value);
    }
    removeComponent() {
        this.parent && this.parent.removeComponent && this.parent.removeComponent(this.uniqueKey);
    }
    getData() {
        return {
            label: this.listItemForm.controls.label.value,
            value: this.listItemForm.controls.value.value
        };
    }
}
ListItemComponent.ɵfac = function ListItemComponent_Factory(t) { return new (t || ListItemComponent)(); };
ListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListItemComponent, selectors: [["app-list-item"]], inputs: { parent: "parent", uniqueKey: "uniqueKey", data: "data" }, decls: 13, vars: 1, consts: [[1, "frm", 3, "formGroup"], ["appearance", "fill", 1, "width-22", "padding-r-1"], ["type", "text", "placeholder", "Enter Label", "aria-label", "Label", "matInput", "", "required", "", "formControlName", "label"], ["appearance", "fill", 1, "width-22", "padding-r-2"], ["type", "text", "placeholder", "Enter Label", "aria-label", "Label", "matInput", "", "required", "", "formControlName", "value"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a menu icon", 1, "add-btn", 3, "click"]], template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListItemComponent_Template_button_click_10_listener() { return ctx.removeComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.listItemForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".add-btn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uY2VwdC9kZWZpbmVjb25jZXB0L2NvbmNlcHQtZm9ybS1idWlsZGVyL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29uY2VwdC9kZWZpbmVjb25jZXB0L2NvbmNlcHQtZm9ybS1idWlsZGVyL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWJ0bntcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-item',
                templateUrl: './list-item.component.html',
                styleUrls: ['./list-item.component.scss']
            }]
    }], function () { return []; }, { parent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], uniqueKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AuthService {
    constructor(http) {
        this.http = http;
    }
    signup(data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(`${location.origin}/dvp/signup`, data, httpOptions);
    }
    login(data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(`${location.origin}/dvp/login`, data, httpOptions);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _generic_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generic/menu/menu.component */ "+AYc");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");





class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 6, vars: 0, consts: [[1, "page-container"], ["mode", "side", "opened", "", 1, "side-nav"], [1, "main-content"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Page not found!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _generic_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"]], styles: [".page-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 25px;\n  background-color: #f7f8fc;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  width: 430px;\n}\n\n.header-card[_ngcontent-%COMP%] {\n  width: 400px;\n  margin-right: 30px;\n  float: left;\n}\n\n.align-icons[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n\n.empty-concepts[_ngcontent-%COMP%] {\n  height: 60%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n.concept-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  height: 110px;\n}\n\n.concept-card.empty-tile[_ngcontent-%COMP%] {\n  width: 200px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.concept-card.empty-tile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUFJO0VBQ0UsZ0JBQUE7QUFFTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuXHJcbi5zaWRlLW5hdiB7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZjO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgd2lkdGg6IDQzMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWNhcmQge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hbGlnbi1pY29ucyB7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5lbXB0eS1jb25jZXB0cyB7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbmNlcHQtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG5cclxuICAmLmVtcHR5LXRpbGUge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth/auth.component */ "VFgG");
/* harmony import */ var _concept_createconcept_createconcept_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./concept/createconcept/createconcept.component */ "ECbk");
/* harmony import */ var _concept_update_concept_stepper_update_concept_stepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./concept/update-concept-stepper/update-concept-stepper.component */ "74lV");
/* harmony import */ var _concept_updateconcept_updateconcept_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./concept/updateconcept/updateconcept.component */ "4FUp");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _steps_definesteps_definesteps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./steps/definesteps/definesteps.component */ "o1+T");
/* harmony import */ var _concept_defineconcept_defineconcept_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./concept/defineconcept/defineconcept.component */ "DWwq");
/* harmony import */ var _concept_concept_form_concept_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./concept/concept-form/concept-form.component */ "PsIP");
/* harmony import */ var _concept_define_solution_define_solution_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./concept/define-solution/define-solution.component */ "52sJ");
/* harmony import */ var _solution_solution_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./solution/solution.component */ "3K0J");















const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: '', component: _auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    { path: 'login', component: _auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    { path: 'create-concept', component: _concept_createconcept_createconcept_component__WEBPACK_IMPORTED_MODULE_3__["CreateConceptComponent"] },
    { path: 'update-concept/:id', component: _concept_update_concept_stepper_update_concept_stepper_component__WEBPACK_IMPORTED_MODULE_4__["UpdateConceptStepperComponent"] },
    { path: 'define-steps', component: _steps_definesteps_definesteps_component__WEBPACK_IMPORTED_MODULE_8__["DefinestepsComponent"] },
    { path: 'update-concept/:id', component: _concept_updateconcept_updateconcept_component__WEBPACK_IMPORTED_MODULE_5__["UpdateconceptComponent"] },
    { path: 'define-concept/:id', component: _concept_defineconcept_defineconcept_component__WEBPACK_IMPORTED_MODULE_9__["DefineconceptComponent"] },
    { path: 'concept-form', component: _concept_concept_form_concept_form_component__WEBPACK_IMPORTED_MODULE_10__["ConceptFormComponent"] },
    { path: 'define-solution/:id', component: _concept_define_solution_define_solution_component__WEBPACK_IMPORTED_MODULE_11__["DefineSolutionComponent"] },
    { path: '404', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] },
    { path: 'solution', component: _solution_solution_component__WEBPACK_IMPORTED_MODULE_12__["SolutionComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yqmc":
/*!********************************************!*\
  !*** ./src/app/concept/concept.service.ts ***!
  \********************************************/
/*! exports provided: ConceptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptService", function() { return ConceptService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class ConceptService {
    constructor(http) {
        this.http = http;
    }
    searchConcepts() {
        return this.http.get(`${location.origin}/dvp/c/s`);
    }
    getConceptDetails(concept_id) {
        return this.http.get(`${location.origin}/dvp/c/g/${concept_id}`);
    }
    createNewConcept(concept) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(`${location.origin}/dvp/c/new`, concept, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    updateConcept(concept_id, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(`${location.origin}/dvp/c/m/${concept_id}`, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //UI input services
    createUIInputConfig(concept_id, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(`${location.origin}/dvp/c/i/new/${concept_id}`, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        // http://divideite.dev/dvp/c/i/new/de546acc-200b-11eb-8a67-0028f89245b3
    }
    updateUIInputConfig(definition_id, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(`${location.origin}/dvp/c/i/${definition_id}`, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getUIInputConfig(concept_id) {
        return this.http.get(`${location.origin}/dvp/c/i/${concept_id}`);
    }
    //UI output services
    createUIOutputConfig(concept_id, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(`${location.origin}/dvp/c/o/new/${concept_id}`, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        // http://divideite.dev/dvp/c/i/new/de546acc-200b-11eb-8a67-0028f89245b3
    }
    updateUIOutputConfig(definition_id, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(`${location.origin}/dvp/c/o/${definition_id}`, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getUIOutputConfig(concept_id) {
        return this.http.get(`${location.origin}/dvp/c/o/${concept_id}`);
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
ConceptService.ɵfac = function ConceptService_Factory(t) { return new (t || ConceptService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ConceptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConceptService, factory: ConceptService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConceptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map