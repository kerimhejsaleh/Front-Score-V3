(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dossier-dossier-module"],{

/***/ "./src/app/board/dossier/add-dossier/add-dossier.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/board/dossier/add-dossier/add-dossier.component.ts ***!
  \********************************************************************/
/*! exports provided: AddDossierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDossierComponent", function() { return AddDossierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_dossier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dossier.service */ "./src/app/board/dossier/services/dossier.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _doctor_services_doctor_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../doctor/services/doctor-data.service */ "./src/app/board/doctor/services/doctor-data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








function AddDossierComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nom invalide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddDossierComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return { "form-control": true, "error": a1 }; };
class AddDossierComponent {
    constructor(_dossier, toastr, router, _docor) {
        this._dossier = _dossier;
        this.toastr = toastr;
        this.router = router;
        this._docor = _docor;
        this.showSpinner = false;
        this.testName = false;
        this.dossier = {
            name: '',
            added_date: '',
            archived: false,
            status: false,
            idDossier: 'sddddddddddddddgsth25'
        };
        this.allDosssier = [];
    }
    ngOnInit() {
        this._dossier.getAlldossier().subscribe(res => {
            let i = 0;
            res.map((result) => {
                if (result.status)
                    i = i + 1;
                else
                    this.allDosssier.push(result);
            });
            console.log(this.allDosssier);
        }, err => {
        });
    }
    createNewdossier() {
        this.testName = false;
        let countError = 0;
        if (this.dossier.name.length == 0) {
            this.testName = true;
            countError++;
        }
        if (countError === 0) {
            this.showSpinner = true;
            this._dossier.createNewdossier(this.dossier).subscribe(res => {
                /*      console.log(res._id) */
                this.dossier = {
                    name: '',
                    added_date: '',
                    archived: false,
                    status: false,
                    idDossier: ''
                };
                this.showSpinner = false;
                this.toastr.success('dossier créé avec succès! ', 'succès!');
                this.router.navigateByUrl('/admin/dossier');
                /*     this._docor.getAllDoctor().subscribe(
                      ress=>{
                 
                  ress.map((result)=>{
                    result.liste_dossier.push({
                          checkedone: false,
                          dataForms: [],
                          id: res._id,
                          lengthTab: 0,
                          status: false,
                          valLenght: false,
                    })
                  })
                      },
                      err=>{
                        
                      }
                    ); */
                this._docor.getAllDoctor().subscribe(ress => {
                    ress.map((result) => {
                        console.log(result);
                        result.liste_dossier.push({
                            checkedone: false,
                            dataForms: [],
                            id: res._id,
                            lengthTab: 0,
                            status: false,
                            valLenght: false,
                        });
                        console.log(result);
                        this._docor.updateDoctor(result._id, result, result.liste_dossier, "autre").subscribe(res => {
                        }, err => {
                        });
                    });
                }, err => {
                });
            }, err => {
                this.showSpinner = false;
                this.toastr.error('Erreur dans la création du dossier ', 'Erreur!');
            });
        }
    }
}
AddDossierComponent.ɵfac = function AddDossierComponent_Factory(t) { return new (t || AddDossierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dossier_service__WEBPACK_IMPORTED_MODULE_1__["DossierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_doctor_services_doctor_data_service__WEBPACK_IMPORTED_MODULE_4__["DoctorDataService"])); };
AddDossierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddDossierComponent, selectors: [["app-add-dossier"]], decls: 27, vars: 6, consts: [[1, "header", "row"], [1, "col-10"], [1, "header-title"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["routerLink", "/admin/dossiers"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-md-12", 2, "margin-top", "-16px"], [1, "card", "pt-3"], [1, "card-body"], [1, "form-row"], [1, "form-group", "col-md-12"], ["for", "inputEmail4"], ["type", "text", "placeholder", "Nom", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "text-danger", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["class", "spinner-border  ", "role", "status", 4, "ngIf"], [1, "text-danger"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"]], template: function AddDossierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " dossiers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tableau de bord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "dossiers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cr\u00E9er un nouveau dossier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDossierComponent_Template_input_ngModelChange_22_listener($event) { return ctx.dossier.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddDossierComponent_p_23_Template, 2, 0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddDossierComponent_Template_button_click_24_listener() { return ctx.createNewdossier(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Enregistrer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddDossierComponent_div_26_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dossier.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.testName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".error[_ngcontent-%COMP%]{\n\n    border: 1px solid rgb(240, 76, 76);\n    color: rgb(240, 76, 76);\n}\n\n.card-to-add[_ngcontent-%COMP%]{\n    border: 10px dashed #dddddd;\n    border-radius: 7px;\n    background-color: transparent;\n    transform: scale(1.02); \n    cursor: pointer;\n}\n\n.card-to-add[_ngcontent-%COMP%]:hover{\n   \n    transform: scale(1.05); \n    cursor: pointer;\n}\n\ni[_ngcontent-%COMP%]{\n    color: #dddddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib2FyZC9kb3NzaWVyL2FkZC1kb3NzaWVyL2FkZC1kb3NzaWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0NBQWtDO0lBQ2xDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJhcHAvYm9hcmQvZG9zc2llci9hZGQtZG9zc2llci9hZGQtZG9zc2llci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9ye1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0MCwgNzYsIDc2KTtcbiAgICBjb2xvcjogcmdiKDI0MCwgNzYsIDc2KTtcbn1cblxuLmNhcmQtdG8tYWRke1xuICAgIGJvcmRlcjogMTBweCBkYXNoZWQgI2RkZGRkZDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTsgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC10by1hZGQ6aG92ZXJ7XG4gICBcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbml7XG4gICAgY29sb3I6ICNkZGRkZGQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddDossierComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-dossier',
                templateUrl: './add-dossier.component.html',
                styleUrls: ['./add-dossier.component.css']
            }]
    }], function () { return [{ type: _services_dossier_service__WEBPACK_IMPORTED_MODULE_1__["DossierService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _doctor_services_doctor_data_service__WEBPACK_IMPORTED_MODULE_4__["DoctorDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/board/dossier/detail-dossier/detail-dossier.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/board/dossier/detail-dossier/detail-dossier.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetailDossierComponent, NgbdModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDossierComponent", function() { return DetailDossierComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_dossier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dossier.service */ "./src/app/board/dossier/services/dossier.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_endpoint_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/endpoint.service */ "./src/app/services/endpoint.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _form_dossier_form_dossier_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form-dossier/form-dossier.component */ "./src/app/board/dossier/form-dossier/form-dossier.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _doctor_services_doctor_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../doctor/services/doctor-data.service */ "./src/app/board/doctor/services/doctor-data.service.ts");













function DetailDossierComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.dossier == null ? null : ctx_r0.dossier.name);
} }
function DetailDossierComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetailDossierComponent_td_46_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.dossier.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.dossier.name);
} }
function DetailDossierComponent_button_47_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDossierComponent_button_47_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.open(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enregistrer les modifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/admin/dossier/affect", a1]; };
class DetailDossierComponent {
    constructor(route, _dossier, modalService, path) {
        this.route = route;
        this._dossier = _dossier;
        this.modalService = modalService;
        this.path = path;
        this.showSpinner = false;
        this.updateToggle = false;
        this.updateTogglePhoto = false;
    }
    open(i) {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.id = this.id;
        modalRef.componentInstance.i = i;
        modalRef.componentInstance.dossier = this.dossier;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.showSpinner = true;
        this._dossier.getdossierById(this.id).subscribe(res => {
            this.dossier = res;
            /*   console.log("this.dossier",res) */
            this.showSpinner = false;
        }, err => {
        });
    }
}
DetailDossierComponent.ɵfac = function DetailDossierComponent_Factory(t) { return new (t || DetailDossierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dossier_service__WEBPACK_IMPORTED_MODULE_2__["DossierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_endpoint_service__WEBPACK_IMPORTED_MODULE_4__["EndpointService"])); };
DetailDossierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailDossierComponent, selectors: [["app-detail-dossier"]], decls: 50, vars: 7, consts: [[1, "row"], [1, "header", "col-9"], [1, "header-title"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["routerLink", "/admin/dossier"], [1, "col-3"], [1, "row", "mt-1"], ["mat-raised-button", "", 1, "ml-auto", 3, "routerLink"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-actions", "float-right"], ["href", "#", 1, "mr-1"], ["data-feather", "refresh-cw", 1, "align-middle"], [1, "d-inline-block", "dropdown", "show"], ["href", "#", "data-toggle", "dropdown", "data-display", "static"], ["data-feather", "more-vertical", 1, "align-middle"], [1, "ml-auto", 2, "float", "right"], [3, "click"], [1, "align-middle", "fas", "fa-fw", "fa-pen", 2, "margin-left", "8px", "font-size", "20px"], [1, "align-middle", "fas", "fa-fw", "fa-trash", 2, "margin-left", "8px", "font-size", "20px"], [1, "card-title", "mb-0", 2, "color", "#153d77", "font-weight", "bold"], [1, "card-body"], [1, "row", "no-gutters"], [1, "col-sm-9", "col-xl-12", "col-xxl-8"], [1, "table", "table-sm", "my-2"], [4, "ngIf"], ["style", "margin-right: 0px;margin-left: 80%;", "class", "mt-5", "mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", 1, "mt-5", 2, "margin-right", "0px", "margin-left", "80%", 3, "click"]], template: function DetailDossierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " dossiers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tableau de bord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "dossiers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "screen_share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Affecter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDossierComponent_Template_a_click_29_listener() { return ctx.updateToggle = !ctx.updateToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDossierComponent_Template_a_click_31_listener() { return ctx.open(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "A propos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, DetailDossierComponent_td_45_Template, 2, 1, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, DetailDossierComponent_td_46_Template, 2, 1, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DetailDossierComponent_button_47_Template, 2, 0, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-form-dossier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.dossier == null ? null : ctx.dossier._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dossier == null ? null : ctx.dossier.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.updateToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateToggle);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _form_dossier_form_dossier_component__WEBPACK_IMPORTED_MODULE_8__["FormDossierComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]], styles: ["i[_ngcontent-%COMP%]{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib2FyZC9kb3NzaWVyL2RldGFpbC1kb3NzaWVyL2RldGFpbC1kb3NzaWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImFwcC9ib2FyZC9kb3NzaWVyL2RldGFpbC1kb3NzaWVyL2RldGFpbC1kb3NzaWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpe1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailDossierComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-dossier',
                templateUrl: './detail-dossier.component.html',
                styleUrls: ['./detail-dossier.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_dossier_service__WEBPACK_IMPORTED_MODULE_2__["DossierService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: src_app_services_endpoint_service__WEBPACK_IMPORTED_MODULE_4__["EndpointService"] }]; }, null); })();
class NgbdModalContent {
    constructor(activeModal, _dossier, toastr, router, _doctor) {
        this.activeModal = activeModal;
        this._dossier = _dossier;
        this.toastr = toastr;
        this.router = router;
        this._doctor = _doctor;
        this.newAllDossier = [];
    }
    action() {
        if (this.i === 1) {
            this.deletedossier();
        }
        else {
            this.updatedossier();
        }
    }
    deletedossier() {
        //let newAllDossier
        this._dossier.archivedossier(this.id).subscribe(res => {
            this.router.navigate(['/admin/dossier']);
            this._doctor.getAllDoctor().subscribe(ress => {
                ress.map((result) => {
                    console.log(result.liste_dossier);
                    this.newAllDossier = [];
                    result.liste_dossier.filter((resultthree) => {
                        console.log(resultthree.id, this.id);
                        if (resultthree.id != this.id) {
                            return this.newAllDossier.push(resultthree);
                        }
                        else {
                            console.log(2);
                        }
                        return resultthree.id != this.id;
                    });
                    /*     result.liste_dossier.push({
                         checkedone: false,
                         dataForms: [],
                         id: res._id,
                         lengthTab: 0,
                         status: false,
                         valLenght: false,
                   }) */
                    console.log(this.newAllDossier);
                    result.liste_dossier = this.newAllDossier;
                    this._doctor.updateDoctor(result._id, result, result.liste_dossier, "autre").subscribe(res => {
                    }, err => {
                    });
                });
            }, err => {
            });
            /*          this._doctor.getAllDoctor().subscribe(
                       ress=>{
                         console.log(ress)
                         let m = 0;
                         let y = 0;
                         for( let i = 0 ; i <ress.length;i++){
                            m = m + 1;
                           for( let j = 0 ; j <ress[i].liste_dossier.length;j++){
                             y = y +1;
                             console.log(ress[i].liste_dossier[j])
                             console.log(ress[i]._id)
                             console.log("m",m ,"y",y)
                           }
                         }
                         this.newAllDossier=[]
                      ress.filter((result)=>{
                      
                        result.liste_dossier.filter((resulttow)=>{
                         if(this.id!=resulttow.id){
                           console.log(this.newAllDossier)
                         return this.newAllDossier.push(resulttow)}
                        })
                      })
                      console.log("ddddddddddd",this.newAllDossier)
                       },
                       err=>{
                         
                       }
                     ); */
        }, err => {
        });
        setTimeout(() => {
        }, 500);
    }
    updatedossier() {
        console.log(this.dossier);
        this._dossier.updatedossier(this.id, this.dossier).subscribe(res => {
            this.toastr.success('dossier mis à jour avec succès! ', 'succès!');
        }, err => {
            console.log(err);
            this.toastr.error('Erreur dans la modification du dossier ', 'Erreur!');
        });
    }
}
NgbdModalContent.ɵfac = function NgbdModalContent_Factory(t) { return new (t || NgbdModalContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dossier_service__WEBPACK_IMPORTED_MODULE_2__["DossierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_doctor_services_doctor_data_service__WEBPACK_IMPORTED_MODULE_11__["DoctorDataService"])); };
NgbdModalContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgbdModalContent, selectors: [["ngbd-modal-content"]], inputs: { id: "id", dossier: "dossier", i: "i" }, decls: 14, vars: 0, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function NgbdModalContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirmation !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tu es sure d'effectuer cette action ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_10_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "non");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_12_listener() { ctx.action(); return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "oui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdModalContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngbd-modal-content',
                template: `
    <div class="modal-header">
      <h4 class="modal-title">Confirmation !</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Tu es sure d'effectuer cette action  ?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">non</button>
      <button  type="button" class="btn btn-danger" (click)="action(); activeModal.close()">oui</button>


    </div>
  `
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }, { type: _services_dossier_service__WEBPACK_IMPORTED_MODULE_2__["DossierService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _doctor_services_doctor_data_service__WEBPACK_IMPORTED_MODULE_11__["DoctorDataService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dossier: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], i: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/board/dossier/dossier-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/board/dossier/dossier-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DossierRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DossierRoutingModule", function() { return DossierRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_dossier_add_dossier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-dossier/add-dossier.component */ "./src/app/board/dossier/add-dossier/add-dossier.component.ts");
/* harmony import */ var _detail_dossier_detail_dossier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-dossier/detail-dossier.component */ "./src/app/board/dossier/detail-dossier/detail-dossier.component.ts");
/* harmony import */ var _dossier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dossier.component */ "./src/app/board/dossier/dossier.component.ts");
/* harmony import */ var _form_dossier_affect_form_dossier_affect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-dossier-affect/form-dossier-affect.component */ "./src/app/board/dossier/form-dossier-affect/form-dossier-affect.component.ts");
/* harmony import */ var _list_dossier_list_dossier_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-dossier/list-dossier.component */ "./src/app/board/dossier/list-dossier/list-dossier.component.ts");









const routes = [
    { path: '', component: _dossier_component__WEBPACK_IMPORTED_MODULE_4__["DossierComponent"], children: [
            { path: '', component: _list_dossier_list_dossier_component__WEBPACK_IMPORTED_MODULE_6__["ListDossierComponent"] },
            { path: 'add', component: _add_dossier_add_dossier_component__WEBPACK_IMPORTED_MODULE_2__["AddDossierComponent"] },
            { path: 'detail/:id', component: _detail_dossier_detail_dossier_component__WEBPACK_IMPORTED_MODULE_3__["DetailDossierComponent"] },
            { path: 'affect/:id', component: _form_dossier_affect_form_dossier_affect_component__WEBPACK_IMPORTED_MODULE_5__["FormDossierAffectComponent"] }
        ] }
];
class DossierRoutingModule {
}
DossierRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DossierRoutingModule });
DossierRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DossierRoutingModule_Factory(t) { return new (t || DossierRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DossierRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DossierRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/board/dossier/dossier.component.ts":
/*!****************************************************!*\
  !*** ./src/app/board/dossier/dossier.component.ts ***!
  \****************************************************/
/*! exports provided: DossierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DossierComponent", function() { return DossierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



class DossierComponent {
    constructor() { }
    ngOnInit() {
    }
}
DossierComponent.ɵfac = function DossierComponent_Factory(t) { return new (t || DossierComponent)(); };
DossierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DossierComponent, selectors: [["app-dossier"]], decls: 1, vars: 0, template: function DossierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYm9hcmQvZG9zc2llci9kb3NzaWVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DossierComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dossier',
                templateUrl: './dossier.component.html',
                styleUrls: ['./dossier.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/board/dossier/dossier.module.ts":
/*!*************************************************!*\
  !*** ./src/app/board/dossier/dossier.module.ts ***!
  \*************************************************/
/*! exports provided: DossierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DossierModule", function() { return DossierModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dossier_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dossier-routing.module */ "./src/app/board/dossier/dossier-routing.module.ts");
/* harmony import */ var _dossier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dossier.component */ "./src/app/board/dossier/dossier.component.ts");
/* harmony import */ var _add_dossier_add_dossier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-dossier/add-dossier.component */ "./src/app/board/dossier/add-dossier/add-dossier.component.ts");
/* harmony import */ var _list_dossier_list_dossier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-dossier/list-dossier.component */ "./src/app/board/dossier/list-dossier/list-dossier.component.ts");
/* harmony import */ var _detail_dossier_detail_dossier_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-dossier/detail-dossier.component */ "./src/app/board/dossier/detail-dossier/detail-dossier.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/fesm2015/radio.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm2015/datepicker.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_dossier_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/dossier.service */ "./src/app/board/dossier/services/dossier.service.ts");
/* harmony import */ var src_app_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/interceptor.service */ "./src/app/interceptor.service.ts");
/* harmony import */ var _form_dossier_form_dossier_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form-dossier/form-dossier.component */ "./src/app/board/dossier/form-dossier/form-dossier.component.ts");
/* harmony import */ var _form_dossier_affect_form_dossier_affect_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./form-dossier-affect/form-dossier-affect.component */ "./src/app/board/dossier/form-dossier-affect/form-dossier-affect.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var src_app_companent_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/companent/my-dialog/my-dialog.component */ "./src/app/companent/my-dialog/my-dialog.component.ts");
/* harmony import */ var src_app_companent_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/companent/dialog-body/dialog-body.component */ "./src/app/companent/dialog-body/dialog-body.component.ts");



























class DossierModule {
}
DossierModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DossierModule });
DossierModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DossierModule_Factory(t) { return new (t || DossierModule)(); }, providers: [_services_dossier_service__WEBPACK_IMPORTED_MODULE_17__["DossierService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
            useClass: src_app_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["InterceptorService"],
            multi: true
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dossier_routing_module__WEBPACK_IMPORTED_MODULE_2__["DossierRoutingModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbAlertModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DossierModule, { declarations: [_dossier_component__WEBPACK_IMPORTED_MODULE_3__["DossierComponent"], _add_dossier_add_dossier_component__WEBPACK_IMPORTED_MODULE_4__["AddDossierComponent"], _list_dossier_list_dossier_component__WEBPACK_IMPORTED_MODULE_5__["ListDossierComponent"], _detail_dossier_detail_dossier_component__WEBPACK_IMPORTED_MODULE_6__["DetailDossierComponent"], _form_dossier_form_dossier_component__WEBPACK_IMPORTED_MODULE_19__["FormDossierComponent"], _form_dossier_affect_form_dossier_affect_component__WEBPACK_IMPORTED_MODULE_20__["FormDossierAffectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dossier_routing_module__WEBPACK_IMPORTED_MODULE_2__["DossierRoutingModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbAlertModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DossierModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dossier_component__WEBPACK_IMPORTED_MODULE_3__["DossierComponent"], _add_dossier_add_dossier_component__WEBPACK_IMPORTED_MODULE_4__["AddDossierComponent"], _list_dossier_list_dossier_component__WEBPACK_IMPORTED_MODULE_5__["ListDossierComponent"], _detail_dossier_detail_dossier_component__WEBPACK_IMPORTED_MODULE_6__["DetailDossierComponent"], _form_dossier_form_dossier_component__WEBPACK_IMPORTED_MODULE_19__["FormDossierComponent"], _form_dossier_affect_form_dossier_affect_component__WEBPACK_IMPORTED_MODULE_20__["FormDossierAffectComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dossier_routing_module__WEBPACK_IMPORTED_MODULE_2__["DossierRoutingModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbAlertModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"]
                ],
                providers: [_services_dossier_service__WEBPACK_IMPORTED_MODULE_17__["DossierService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
                        useClass: src_app_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["InterceptorService"],
                        multi: true
                    }
                ],
                entryComponents: [src_app_companent_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_25__["DialogBodyComponent"],
                    src_app_companent_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_24__["MyDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/board/dossier/form-dossier-affect/form-dossier-affect.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/board/dossier/form-dossier-affect/form-dossier-affect.component.ts ***!
  \************************************************************************************/
/*! exports provided: FormDossierAffectComponent, NgbdModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDossierAffectComponent", function() { return FormDossierAffectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_dossier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dossier.service */ "./src/app/board/dossier/services/dossier.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _forms_services_forms_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/services/forms-data.service */ "./src/app/board/forms/services/forms-data.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");










function FormDossierAffectComponent_tr_41_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormDossierAffectComponent_tr_41_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const f_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.open(f_r1._id, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormDossierAffectComponent_tr_41_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormDossierAffectComponent_tr_41_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const f_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.open(f_r1._id, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " cancel_schedule_send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormDossierAffectComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormDossierAffectComponent_tr_41_button_9_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormDossierAffectComponent_tr_41_button_11_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", f_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, f_r1.created_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.checkIfFormAffectedTodossier(f_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.checkIfFormAffectedTodossier(f_r1));
} }
class FormDossierAffectComponent {
    constructor(_dossier, router, modalService, _formData) {
        this._dossier = _dossier;
        this.router = router;
        this.modalService = modalService;
        this._formData = _formData;
        this.affectedToast = false;
        this.affectedToastWithSuccess = false;
        this.selecteddossier = 0;
    }
    ngOnInit() {
        /* console.log("iddd",this.router.snapshot.paramMap.get('id')) */
        this.id = this.router.snapshot.paramMap.get('id');
        this._dossier.getdossierById(this.id).subscribe(res => {
            this.dossier = res;
            this._dossier.getAllForm().subscribe(res => {
                this.getdossierAffectation();
                this.allForms = res;
            }, err => {
            });
        }, err => {
        });
    }
    open(id, i) {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.iddossier = this.id;
        modalRef.componentInstance.idForm = id;
        modalRef.componentInstance.i = i;
    }
    getdossierAffectation() {
        this._dossier.getdossierAffectaion(this.id).subscribe(res => {
            /*       console.log("res",res) */
            this.formAffectations = res;
        }, err => {
        });
    }
    checkIfFormAffectedTodossier(form) {
        var _a;
        let toReturn = false;
        for (let i = 0; i < ((_a = this.formAffectations) === null || _a === void 0 ? void 0 : _a.length); i++) {
            if (this.formAffectations[i].form === form._id) {
                toReturn = true;
                break;
            }
        }
        return toReturn;
    }
}
FormDossierAffectComponent.ɵfac = function FormDossierAffectComponent_Factory(t) { return new (t || FormDossierAffectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dossier_service__WEBPACK_IMPORTED_MODULE_1__["DossierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_forms_services_forms_data_service__WEBPACK_IMPORTED_MODULE_4__["FormsDataService"])); };
FormDossierAffectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormDossierAffectComponent, selectors: [["app-form-dossier-affect"]], decls: 42, vars: 2, consts: [[1, "header", "row"], [1, ""], [1, "header-title"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["routerLink", "/admin/dossier"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ml-auto"], ["routerLink", "/admin/dossiers", "mat-raised-button", ""], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-actions", "float-right"], ["href", "#", 1, "mr-1"], ["data-feather", "refresh-cw", 1, "align-middle"], [1, "d-inline-block", "dropdown", "show"], ["href", "#", "data-toggle", "dropdown", "data-display", "static"], ["data-feather", "more-vertical", 1, "align-middle"], [1, "card-title", "mb-0"], [1, "card-body"], ["id", "datatables-clients", 1, "table", "table-striped", 2, "width", "100%"], [4, "ngFor", "ngForOf"], [1, "table-action", "row"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], [2, "width", "4px"], ["mat-raised-button", "", 3, "click"], [2, "font-size", "30px", "margin", "4px", "margin-bottom", "8px"]], template: function FormDossierAffectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Affecter ce formulaire aux professionnels de sant\u00E9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tableau de bord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dossiers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Affecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "G\u00E9rer les dossiers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "date de cr\u00E9ation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, FormDossierAffectComponent_tr_41_Template, 12, 7, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Affecter formulaire \u00E0 ", ctx.dossier == null ? null : ctx.dossier.name, " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allForms);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYm9hcmQvZG9zc2llci9mb3JtLWRvc3NpZXItYWZmZWN0L2Zvcm0tZG9zc2llci1hZmZlY3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormDossierAffectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-dossier-affect',
                templateUrl: './form-dossier-affect.component.html',
                styleUrls: ['./form-dossier-affect.component.css']
            }]
    }], function () { return [{ type: _services_dossier_service__WEBPACK_IMPORTED_MODULE_1__["DossierService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _forms_services_forms_data_service__WEBPACK_IMPORTED_MODULE_4__["FormsDataService"] }]; }, null); })();
class NgbdModalContent {
    constructor(activeModal, _dossier, toastr, router, _formData) {
        this.activeModal = activeModal;
        this._dossier = _dossier;
        this.toastr = toastr;
        this.router = router;
        this._formData = _formData;
    }
    action() {
        if (this.i == 1) {
            this.affect(this.idForm);
        }
        else {
            this.disaffect(this.idForm);
        }
    }
    affect(id) {
        this._formData.getFormById(id).subscribe((resForm) => {
            if (resForm.nameAff.length == 1 && resForm.nameAff2.length == 1 && resForm.nameAff[0].Aff1 == "Aucune dossier" && resForm.nameAff2[0].Aff1 == "Aucune dossier") {
                this._dossier.getdossierById(this.iddossier).subscribe(res => {
                    /*  console.log(res) */
                    let affectation = {
                        dossier: this.iddossier,
                        form: id,
                        nameDossier: [{ Aff1: res.name, checked: true }],
                    };
                    this._dossier.affect(affectation).subscribe(res => {
                        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/admin/dossier/affect', this.iddossier]));
                    }, err => {
                        console.log(err);
                    });
                });
            }
            else {
                this._dossier.getdossierById(this.iddossier).subscribe(res => {
                    resForm.nameAff.push({ Aff1: res.name, cheked: true });
                    resForm.nameAff2.push({ Aff1: res.name, cheked: true });
                    let affectation = {
                        dossier: this.iddossier,
                        form: id,
                        nameDossier: resForm.nameAff,
                    };
                    this._dossier.affect(affectation).subscribe(res => {
                        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/admin/dossier/affect', this.iddossier]));
                    }, err => {
                        console.log(err);
                    });
                });
            }
        });
    }
    disaffect(f) {
        /* console.log("hhhhhddd",f) */
        this._formData.getFormById(f).subscribe((resForm) => {
            //console.log("hhhhhddd",resForm.nameAff.length,resForm.nameAff2.length)
            this._dossier.getdossierById(this.iddossier).subscribe(res => {
                if (resForm.nameAff.length > 1 && resForm.nameAff2.length > 1) {
                    /*   let i=0;
                       resForm.nameAff.map((resMap)=>{
                        console.log("res",res.name,resMap.Aff1)
                         i++;
                          if(resMap.Aff1==res.name){
                            console.log(i,resForm.nameAff)
                            resForm.nameAff.splice(i-1,i)
                            resForm.nameAff2.splice(i-1,i)
                            console.log(i,resForm.nameAff)
                          }
                       }) */
                }
            });
        });
        this._dossier.disaffect(this.iddossier, f, "test").subscribe(res => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/admin/dossier/affect', this.iddossier]));
        }, err => {
        });
    }
}
NgbdModalContent.ɵfac = function NgbdModalContent_Factory(t) { return new (t || NgbdModalContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dossier_service__WEBPACK_IMPORTED_MODULE_1__["DossierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_forms_services_forms_data_service__WEBPACK_IMPORTED_MODULE_4__["FormsDataService"])); };
NgbdModalContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgbdModalContent, selectors: [["ngbd-modal-content"]], inputs: { iddossier: "iddossier", idForm: "idForm", i: "i" }, decls: 14, vars: 0, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function NgbdModalContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirmation !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tu es sure d'effectuer cette action ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_10_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "non");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_12_listener() { ctx.action(); return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "oui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdModalContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngbd-modal-content',
                template: `
    <div class="modal-header">
      <h4 class="modal-title">Confirmation !</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Tu es sure d'effectuer cette action  ?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">non</button>
      <button  type="button" class="btn btn-danger" (click)="action(); activeModal.close()">oui</button>


    </div>
  `
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }, { type: _services_dossier_service__WEBPACK_IMPORTED_MODULE_1__["DossierService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _forms_services_forms_data_service__WEBPACK_IMPORTED_MODULE_4__["FormsDataService"] }]; }, { iddossier: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], idForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], i: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/board/dossier/form-dossier/form-dossier.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/board/dossier/form-dossier/form-dossier.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormDossierComponent, NgbdModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDossierComponent", function() { return FormDossierComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var src_app_companent_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/companent/my-dialog/my-dialog.component */ "./src/app/companent/my-dialog/my-dialog.component.ts");
/* harmony import */ var _services_dossier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dossier.service */ "./src/app/board/dossier/services/dossier.service.ts");
/* harmony import */ var _forms_services_forms_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../forms/services/forms-data.service */ "./src/app/board/forms/services/forms-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");















const _c0 = function (a1) { return ["/admin/forms/detail", a1]; };
function FormDossierComponent_tr_24_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormDossierComponent_tr_24_ng_container_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const f_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.open(f_r2._id, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " cancel_schedule_send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r3 = ctx_r8.index;
    const f_r2 = ctx_r8.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, f_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", f_r2 == null ? null : f_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, f_r2 == null ? null : f_r2.created_date));
} }
function FormDossierComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormDossierComponent_tr_24_ng_container_1_Template, 14, 8, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", f_r2);
} }
function FormDossierComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormDossierComponent_tr_48_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.getdata(ctx_r11.ListeDossier2[i_r10], i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormDossierComponent_tr_48_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.updateNameDossier(ctx_r13.ListeDossier2[i_r10], i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormDossierComponent_tr_48_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const f_r9 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.deletedossier(f_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", f_r9.name, "");
} }
class FormDossierComponent {
    constructor(_dossier, _formData, router, modalService, dialog, dialogAff) {
        this._dossier = _dossier;
        this._formData = _formData;
        this.router = router;
        this.modalService = modalService;
        this.dialog = dialog;
        this.dialogAff = dialogAff;
        this.affectedToast = false;
        this.affectedToastWithSuccess = false;
        this.selecteddossier = 0;
        this.ListeDossier = [];
        this.ListeDossier2 = [];
        this.dossier1 = {
            name: '',
            added_date: '',
            archived: false,
            status: true,
            idDossier: ''
        };
    }
    VerfierForm(data, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let j = 0;
            data.map((res) => {
                j = j + 1;
                if (id == res.id) {
                    /*  console.log(res) */
                    data.splice(j - 1, 1);
                }
            });
            return data;
        });
    }
    deletedossier(id) {
        this.allForms.map((result) => {
            this.VerfierForm(result.dossierAff, id._id).then((test) => {
                result.dossierAff = test;
                this._formData.updateForm(result._id, result).subscribe((res) => {
                }, (err) => {
                });
            });
        });
        this.id = this.router.snapshot.paramMap.get('id');
        this._dossier.archivedossierSousDossier(id).subscribe(res => {
            this.id = this.router.snapshot.paramMap.get('id');
            this._dossier.getMyForm(this.id).subscribe(res => {
                this.allForms = res;
            }, err => {
            });
        }, err => {
        });
        setTimeout(() => {
            this.ListeDossier2 = [];
            this._dossier.getAlldossier().subscribe(res => {
                res.map((result) => {
                    if (result.status && result.idDossier == this.id && !result.archived) {
                        this.ListeDossier2.push(result);
                    }
                });
            }, err => {
            });
        }, 500);
    }
    ngOnInit() {
        this._dossier.getAlldossier().subscribe(res => {
            res.map((result) => {
                if (result.status && result.idDossier == this.id) {
                    this.ListeDossier2.push(result);
                }
            });
        }, err => {
        });
    }
    getdata(data, i) {
        /*   console.log(data,this.allForms ) */
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: data._id,
            title: data.name,
            forms: this.allForms,
            formId: data,
            index: i
        };
        dialogConfig.backdropClass = 'backdropBackground';
        dialogConfig.panelClass = 'dialog-container-custom';
        dialogConfig.hasBackdrop = false;
        dialogConfig.backdropClass = "cdk-overlay-backdrop";
        dialogConfig.autoFocus = true;
        dialogConfig.width = "100%";
        const dialogRef = this.dialog.open(src_app_companent_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MyDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.id = this.router.snapshot.paramMap.get('id');
                this._dossier.getMyForm(this.id).subscribe(res => {
                    this.allForms = res;
                }, err => {
                });
            }
        });
    }
    updateNameDossier(data, i) {
        /*   console.log(data,this.allForms ) */
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: data._id,
            title: data.name,
            forms: this.allForms,
            formId: data,
            index: i,
            update: "name"
        };
        dialogConfig.backdropClass = 'backdropBackground';
        dialogConfig.panelClass = 'dialog-container-custom';
        dialogConfig.hasBackdrop = false;
        dialogConfig.backdropClass = "cdk-overlay-backdrop";
        dialogConfig.autoFocus = true;
        dialogConfig.width = "100%";
        const dialogRef = this.dialog.open(src_app_companent_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MyDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.id = this.router.snapshot.paramMap.get('id');
                this._dossier.getMyForm(this.id).subscribe(res => {
                    this.allForms = res;
                }, err => {
                });
            }
        });
    }
    updateInput() {
        if (this.dossier1.name != '') {
            this.dossier1.idDossier = this.id;
            /*     this.ListeDossier2.push({name:this.dossier1.name}); */
            this.ListeDossier2 = [];
            this._dossier.createNewdossier(this.dossier1).subscribe(res => {
                /*  console.log("res",this.id) */
                this.dossier = {
                    name: '',
                    added_date: '',
                    archived: false,
                };
                this._dossier.getAlldossier().subscribe(res => {
                    res.map((result) => {
                        if (result.status && result.idDossier == this.id) {
                            this.ListeDossier2.push(result);
                        }
                    });
                }, err => {
                });
            }, err => {
            });
        }
        setTimeout(() => {
            this.dossier1.name = '';
        }, 100);
    }
    ngAfterViewInit() {
        this.id = this.router.snapshot.paramMap.get('id');
        this._dossier.getdossierById(this.id).subscribe(res => {
            this.dossier = res;
        }, err => {
        });
        this._dossier.getMyForm(this.id).subscribe(res => {
            /* console.log("cc",this.id) */
            this.allForms = res;
            /* console.log("this.allForms",this.allForms) */
        }, err => {
        });
    }
    open(id, i) {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.iddossier = this.id;
        modalRef.componentInstance.idForm = id;
        modalRef.componentInstance.i = i;
    }
}
FormDossierComponent.ɵfac = function FormDossierComponent_Factory(t) { return new (t || FormDossierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dossier_service__WEBPACK_IMPORTED_MODULE_4__["DossierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_forms_services_forms_data_service__WEBPACK_IMPORTED_MODULE_5__["FormsDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
FormDossierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormDossierComponent, selectors: [["app-form-dossier"]], decls: 56, vars: 5, consts: [[1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-actions", "float-right"], ["href", "#", 1, "mr-1"], ["data-feather", "refresh-cw", 1, "align-middle"], [1, "d-inline-block", "dropdown", "show"], ["href", "#", "data-toggle", "dropdown", "data-display", "static"], ["data-feather", "more-vertical", 1, "align-middle"], [1, "card-title", "mb-0"], [1, "card-body"], ["id", "datatables-clients", 1, "table", "table-striped", 2, "width", "100%"], [4, "ngFor", "ngForOf"], [1, "table"], ["scope", "col"], ["type", "text", "placeholder", "Nom", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 1, "ml-auto", 3, "click"], [4, "ngIf"], [2, "cursor", "pointer", 3, "routerLink"], [1, "table-action", "row"], [2, "width", "4px"], ["mat-raised-button", "", 3, "click"], [2, "font-size", "30px", "margin", "4px", "margin-bottom", "8px"], ["scope", "row"], [1, "ml-auto", 2, "float", "left"], [2, "cursor", "pointer", 3, "click"], [1, "align-middle", "fas", "fa-fw", "fa-pen", 2, "margin-left", "8px", "font-size", "20px"], [1, "align-middle", "fas", "fa-fw", "fa-trash", 2, "margin-left", "8px", "font-size", "20px"]], template: function FormDossierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "date de cr\u00E9ation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, FormDossierComponent_tr_24_Template, 2, 1, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Affecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, FormDossierComponent_tr_48_Template, 16, 2, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormDossierComponent_Template_input_ngModelChange_50_listener($event) { return ctx.dossier1.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormDossierComponent_Template_button_click_52_listener() { return ctx.updateInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Ajouter Dossier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Formulaires affect\u00E9es \u00E0 ", ctx.dossier == null ? null : ctx.dossier.name, " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allForms);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Liste Dossier \u00E0 ", ctx.dossier == null ? null : ctx.dossier.name, " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ListeDossier2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dossier1.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["button[_ngcontent-%COMP%]{\r\n    \r\n    display: block;\r\n    margin: auto;\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n    }\r\n.backdropBackground[_ngcontent-%COMP%] {\r\n \r\n        background-color: transparent;\r\n    \r\n      }\r\n.dialog-container-custom[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%] {\r\n        outline: 2px solid transparent;\r\n      }\r\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\r\n        background-color: transparent;\r\n        opacity: 0;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib2FyZC9kb3NzaWVyL2Zvcm0tZG9zc2llci9mb3JtLWRvc3NpZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSTtnREFDNEM7SUFDNUMsY0FBYztJQUNkLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCO0FBQ0o7O1FBRVEsNkJBQTZCOztNQUUvQjtBQUdBO1FBQ0UsOEJBQThCO01BQ2hDO0FBRUE7UUFDRSw2QkFBNkI7UUFDN0IsVUFBVTtJQUNkIiwiZmlsZSI6ImFwcC9ib2FyZC9kb3NzaWVyL2Zvcm0tZG9zc2llci9mb3JtLWRvc3NpZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5idXR0b257XHJcbiAgICAvKkNoYW5nZSB0aGUgd2lkdGggYXMgbXVjaCBhcyB5b3UgbGlrZSwgYnV0IG1ha2Ugc3VyZS5cclxuICAgIG1hcmdpbi1sZWZ0IGFuZCBtYXJnaW4tcmlnaHQgKyB3aWR0aCA9IDEwMCUqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbi5iYWNrZHJvcEJhY2tncm91bmQge1xyXG4gXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICAgIC5kaWFsb2ctY29udGFpbmVyLWN1c3RvbSAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormDossierComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-form-dossier',
                templateUrl: './form-dossier.component.html',
                styleUrls: ['./form-dossier.component.css']
            }]
    }], function () { return [{ type: _services_dossier_service__WEBPACK_IMPORTED_MODULE_4__["DossierService"] }, { type: _forms_services_forms_data_service__WEBPACK_IMPORTED_MODULE_5__["FormsDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();
class NgbdModalContent {
    constructor(activeModal, _dossier, toastr, router) {
        this.activeModal = activeModal;
        this._dossier = _dossier;
        this.toastr = toastr;
        this.router = router;
    }
    action() {
        if (this.i == 1) {
            this.affect(this.idForm);
        }
        else {
            this.disaffect(this.idForm);
        }
    }
    affect(id) {
        let affectation = {
            dossier: this.iddossier,
            form: id
        };
        this._dossier.affect(affectation).subscribe(res => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/admin/dossier/detail', this.iddossier]));
        }, err => {
        });
    }
    disaffect(f) {
        this._dossier.disaffect(this.iddossier, f, "test").subscribe(res => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/admin/dossier/detail', this.iddossier]));
        }, err => {
        });
    }
}
NgbdModalContent.ɵfac = function NgbdModalContent_Factory(t) { return new (t || NgbdModalContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dossier_service__WEBPACK_IMPORTED_MODULE_4__["DossierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
NgbdModalContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgbdModalContent, selectors: [["ngbd-modal-content"]], inputs: { iddossier: "iddossier", idForm: "idForm", i: "i" }, decls: 14, vars: 0, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function NgbdModalContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Confirmation !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Tu es sure d'effectuer cette action ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_10_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "non");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_12_listener() { ctx.action(); return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "oui");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgbdModalContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngbd-modal-content',
                template: `
    <div class="modal-header">
      <h4 class="modal-title">Confirmation !</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Tu es sure d'effectuer cette action  ?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">non</button>
      <button  type="button" class="btn btn-danger" (click)="action(); activeModal.close()">oui</button>


    </div>
  `
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"] }, { type: _services_dossier_service__WEBPACK_IMPORTED_MODULE_4__["DossierService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { iddossier: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], idForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], i: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/board/dossier/list-dossier/list-dossier.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/board/dossier/list-dossier/list-dossier.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListDossierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDossierComponent", function() { return ListDossierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var src_app_companent_my_dialog_affect_list_my_dialog_affect_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/companent/my-dialog-affect-list/my-dialog-affect-list.component */ "./src/app/companent/my-dialog-affect-list/my-dialog-affect-list.component.ts");
/* harmony import */ var _services_dossier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dossier.service */ "./src/app/board/dossier/services/dossier.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");











function ListDossierComponent_div_25_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListDossierComponent_div_25_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListDossierComponent_div_25_div_1_div_16_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const dossier_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r6.openModal(dossier_r2._id); return ctx_r6.getIdDossier(dossier_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "playlist_play");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/admin/dossier/detail", a1]; };
function ListDossierComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListDossierComponent_div_25_div_1_div_15_Template, 3, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListDossierComponent_div_25_div_1_div_16_Template, 3, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dossier_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, dossier_r2.added_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, dossier_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dossier_r2.name.slice(0, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.spinerLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.spinerLoading);
} }
function ListDossierComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListDossierComponent_div_25_div_1_Template, 17, 9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dossier_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", dossier_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !dossier_r2.status);
} }
function ListDossierComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination-controls", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ListDossierComponent_div_27_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a1, a2) { return { itemsPerPage: 8, currentPage: a1, totalItem: a2 }; };
class ListDossierComponent {
    constructor(_dossierData, dialog) {
        this._dossierData = _dossierData;
        this.dialog = dialog;
        this.page = 1;
        this.allDosssier = [];
        this.spinerLoading = true;
    }
    ngOnInit() {
        /*     this. openModal() */
        setTimeout(() => {
            this.spinerLoading = false;
        }, 4500);
        this._dossierData.getAlldossier().subscribe(res => {
            let i = 0;
            res.map((result) => {
                if (result.status)
                    i = i + 1;
                else
                    this.allDosssier.push(result);
            });
            this.dossiers = res;
            this.totalLength = this.allDosssier.length;
            this.allDossier = res;
            /*  console.log(this.allDosssier);   */
        }, err => {
        });
    }
    openModal(id) {
        this._dossierData.getdossierById(id).subscribe(result => {
            this._dossierData.getMyForm(id).subscribe(res => {
                if (res) {
                    /*     console.log("this.listIdAffection0",this.listIdAffection) */
                    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
                    dialogConfig.backdropClass = 'backdropBackground';
                    dialogConfig.panelClass = 'dialog-container-custom';
                    dialogConfig.hasBackdrop = false;
                    dialogConfig.backdropClass = "cdk-overlay-backdrop";
                    dialogConfig.autoFocus = true;
                    dialogConfig.disableClose = true;
                    dialogConfig.width = "100%";
                    dialogConfig.data = {
                        id: 1,
                        title: result.name,
                        idAffection: res,
                        dossier: result
                    };
                    const dialogRef = this.dialog.open(src_app_companent_my_dialog_affect_list_my_dialog_affect_list_component__WEBPACK_IMPORTED_MODULE_2__["MyDialogAffectListComponent"], dialogConfig);
                    dialogRef.afterClosed().subscribe(result => {
                        console.log('Dialog was closed');
                        console.log(result);
                        if (result) {
                            this.spinerLoading = true;
                            setTimeout(() => {
                                this.spinerLoading = false;
                            }, 5500);
                        }
                    });
                }
                /* console.log("this.allForms",this.allForms) */
            }, err => {
            });
        }, err => {
        });
    }
    filterItem(value) {
        this.allDosssier = this.dossiers.filter(p => {
            return (p.name.toLowerCase().includes(value.toLowerCase()) ||
                p.name.toLowerCase().includes(value.toLowerCase()) ||
                p.name.toLowerCase().includes(value));
        });
    }
    getIdDossier(id) {
        /*     console.log(id)
            this._dossierData.getMyForm(id).subscribe(
              res=>{
        console.log("cc",res)
      
          
          },
          err=>{
          
          }
          );
            this._dossierData.getdossierById(id).subscribe(
              res=>{
             console.log(res)
              
              },
              err=>{
              
              }
              ); */
    }
}
ListDossierComponent.ɵfac = function ListDossierComponent_Factory(t) { return new (t || ListDossierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dossier_service__WEBPACK_IMPORTED_MODULE_3__["DossierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
ListDossierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListDossierComponent, selectors: [["app-list-dossier"]], decls: 28, vars: 8, consts: [[1, "header", "row"], [1, "header-title"], [1, "ml-auto", "col-2"], [1, "box"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["type", "text", "placeholder", "Nom dossier ...", 3, "input"], [1, "row"], [1, "col-md-6", "col-lg-2", "col-sm-5"], ["routerLink", "/admin/dossier/add"], ["width", "333", "height", "200", "viewBox", "0 0 333 262", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 2, "cursor", "pointer"], ["filter", "url(#filter0_d_22_85)"], ["d", "M291.265 40.4443H168.223L143.716 11.337C142.984 10.4587 141.888 9.9662 140.745 10.0018H41.7353C26.915 10.1487 14.9829 22.1988 15 37.0025V215.029C14.9993 229.821 26.9269 241.854 41.7353 242H291.265C306.073 241.854 318.001 229.821 318 215.029V67.4154C318.001 52.6236 306.073 40.5912 291.265 40.4443Z", "fill", "white"], ["d", "M176.5 123.5H167.5V132.5H164.5V123.5H155.5V120.5H164.5V111.5H167.5V120.5H176.5V123.5Z", "fill", "#11698E"], ["d", "M94.0657 163.21H88.5937L87.5857 166H85.8577L90.3937 153.526H92.2837L96.8017 166H95.0737L94.0657 163.21ZM93.5977 161.878L91.3297 155.542L89.0617 161.878H93.5977ZM99.6606 154.534C99.3486 154.534 99.0846 154.426 98.8686 154.21C98.6646 153.994 98.5626 153.73 98.5626 153.418C98.5626 153.106 98.6646 152.842 98.8686 152.626C99.0846 152.41 99.3486 152.302 99.6606 152.302C99.9726 152.302 100.231 152.41 100.435 152.626C100.651 152.842 100.759 153.106 100.759 153.418C100.759 153.73 100.651 153.994 100.435 154.21C100.231 154.426 99.9726 154.534 99.6606 154.534ZM100.471 168.142C100.471 169.018 100.249 169.66 99.8046 170.068C99.3606 170.476 98.7126 170.68 97.8606 170.68H96.9066V169.294H97.5906C98.0466 169.294 98.3646 169.204 98.5446 169.024C98.7366 168.844 98.8326 168.538 98.8326 168.106V156.136H100.471V168.142ZM107.545 166.162C106.621 166.162 105.781 165.952 105.025 165.532C104.281 165.112 103.693 164.518 103.261 163.75C102.841 162.97 102.631 162.07 102.631 161.05C102.631 160.042 102.847 159.154 103.279 158.386C103.723 157.606 104.323 157.012 105.079 156.604C105.835 156.184 106.681 155.974 107.617 155.974C108.553 155.974 109.399 156.184 110.155 156.604C110.911 157.012 111.505 157.6 111.937 158.368C112.381 159.136 112.603 160.03 112.603 161.05C112.603 162.07 112.375 162.97 111.919 163.75C111.475 164.518 110.869 165.112 110.101 165.532C109.333 165.952 108.481 166.162 107.545 166.162ZM107.545 164.722C108.133 164.722 108.685 164.584 109.201 164.308C109.717 164.032 110.131 163.618 110.443 163.066C110.767 162.514 110.929 161.842 110.929 161.05C110.929 160.258 110.773 159.586 110.461 159.034C110.149 158.482 109.741 158.074 109.237 157.81C108.733 157.534 108.187 157.396 107.599 157.396C106.999 157.396 106.447 157.534 105.943 157.81C105.451 158.074 105.055 158.482 104.755 159.034C104.455 159.586 104.305 160.258 104.305 161.05C104.305 161.854 104.449 162.532 104.737 163.084C105.037 163.636 105.433 164.05 105.925 164.326C106.417 164.59 106.957 164.722 107.545 164.722ZM123.505 156.136V166H121.867V164.542C121.555 165.046 121.117 165.442 120.553 165.73C120.001 166.006 119.389 166.144 118.717 166.144C117.949 166.144 117.259 165.988 116.647 165.676C116.035 165.352 115.549 164.872 115.189 164.236C114.841 163.6 114.667 162.826 114.667 161.914V156.136H116.287V161.698C116.287 162.67 116.533 163.42 117.025 163.948C117.517 164.464 118.189 164.722 119.041 164.722C119.917 164.722 120.607 164.452 121.111 163.912C121.615 163.372 121.867 162.586 121.867 161.554V156.136H123.505ZM128.269 157.486V163.3C128.269 163.78 128.371 164.122 128.575 164.326C128.779 164.518 129.133 164.614 129.637 164.614H130.843V166H129.367C128.455 166 127.771 165.79 127.315 165.37C126.859 164.95 126.631 164.26 126.631 163.3V157.486H125.353V156.136H126.631V153.652H128.269V156.136H130.843V157.486H128.269ZM141.827 160.69C141.827 161.002 141.809 161.332 141.773 161.68H133.889C133.949 162.652 134.279 163.414 134.879 163.966C135.491 164.506 136.229 164.776 137.093 164.776C137.801 164.776 138.389 164.614 138.857 164.29C139.337 163.954 139.673 163.51 139.865 162.958H141.629C141.365 163.906 140.837 164.68 140.045 165.28C139.253 165.868 138.269 166.162 137.093 166.162C136.157 166.162 135.317 165.952 134.573 165.532C133.841 165.112 133.265 164.518 132.845 163.75C132.425 162.97 132.215 162.07 132.215 161.05C132.215 160.03 132.419 159.136 132.827 158.368C133.235 157.6 133.805 157.012 134.537 156.604C135.281 156.184 136.133 155.974 137.093 155.974C138.029 155.974 138.857 156.178 139.577 156.586C140.297 156.994 140.849 157.558 141.233 158.278C141.629 158.986 141.827 159.79 141.827 160.69ZM140.135 160.348C140.135 159.724 139.997 159.19 139.721 158.746C139.445 158.29 139.067 157.948 138.587 157.72C138.119 157.48 137.597 157.36 137.021 157.36C136.193 157.36 135.485 157.624 134.897 158.152C134.321 158.68 133.991 159.412 133.907 160.348H140.135ZM145.628 157.738C145.916 157.174 146.324 156.736 146.852 156.424C147.392 156.112 148.046 155.956 148.814 155.956V157.648H148.382C146.546 157.648 145.628 158.644 145.628 160.636V166H143.99V156.136H145.628V157.738ZM164.251 156.136V166H162.613V164.542C162.301 165.046 161.863 165.442 161.299 165.73C160.747 166.006 160.135 166.144 159.463 166.144C158.695 166.144 158.005 165.988 157.393 165.676C156.781 165.352 156.295 164.872 155.935 164.236C155.587 163.6 155.413 162.826 155.413 161.914V156.136H157.033V161.698C157.033 162.67 157.279 163.42 157.771 163.948C158.263 164.464 158.935 164.722 159.787 164.722C160.663 164.722 161.353 164.452 161.857 163.912C162.361 163.372 162.613 162.586 162.613 161.554V156.136H164.251ZM171.823 155.956C173.023 155.956 173.995 156.322 174.739 157.054C175.483 157.774 175.855 158.818 175.855 160.186V166H174.235V160.42C174.235 159.436 173.989 158.686 173.497 158.17C173.005 157.642 172.333 157.378 171.481 157.378C170.617 157.378 169.927 157.648 169.411 158.188C168.907 158.728 168.655 159.514 168.655 160.546V166H167.017V156.136H168.655V157.54C168.979 157.036 169.417 156.646 169.969 156.37C170.533 156.094 171.151 155.956 171.823 155.956ZM182.717 161.032C182.717 160.024 182.921 159.142 183.329 158.386C183.737 157.618 184.295 157.024 185.003 156.604C185.723 156.184 186.527 155.974 187.415 155.974C188.183 155.974 188.897 156.154 189.557 156.514C190.217 156.862 190.721 157.324 191.069 157.9V152.68H192.725V166H191.069V164.146C190.745 164.734 190.265 165.22 189.629 165.604C188.993 165.976 188.249 166.162 187.397 166.162C186.521 166.162 185.723 165.946 185.003 165.514C184.295 165.082 183.737 164.476 183.329 163.696C182.921 162.916 182.717 162.028 182.717 161.032ZM191.069 161.05C191.069 160.306 190.919 159.658 190.619 159.106C190.319 158.554 189.911 158.134 189.395 157.846C188.891 157.546 188.333 157.396 187.721 157.396C187.109 157.396 186.551 157.54 186.047 157.828C185.543 158.116 185.141 158.536 184.841 159.088C184.541 159.64 184.391 160.288 184.391 161.032C184.391 161.788 184.541 162.448 184.841 163.012C185.141 163.564 185.543 163.99 186.047 164.29C186.551 164.578 187.109 164.722 187.721 164.722C188.333 164.722 188.891 164.578 189.395 164.29C189.911 163.99 190.319 163.564 190.619 163.012C190.919 162.448 191.069 161.794 191.069 161.05ZM199.795 166.162C198.871 166.162 198.031 165.952 197.275 165.532C196.531 165.112 195.943 164.518 195.511 163.75C195.091 162.97 194.881 162.07 194.881 161.05C194.881 160.042 195.097 159.154 195.529 158.386C195.973 157.606 196.573 157.012 197.329 156.604C198.085 156.184 198.931 155.974 199.867 155.974C200.803 155.974 201.649 156.184 202.405 156.604C203.161 157.012 203.755 157.6 204.187 158.368C204.631 159.136 204.853 160.03 204.853 161.05C204.853 162.07 204.625 162.97 204.169 163.75C203.725 164.518 203.119 165.112 202.351 165.532C201.583 165.952 200.731 166.162 199.795 166.162ZM199.795 164.722C200.383 164.722 200.935 164.584 201.451 164.308C201.967 164.032 202.381 163.618 202.693 163.066C203.017 162.514 203.179 161.842 203.179 161.05C203.179 160.258 203.023 159.586 202.711 159.034C202.399 158.482 201.991 158.074 201.487 157.81C200.983 157.534 200.437 157.396 199.849 157.396C199.249 157.396 198.697 157.534 198.193 157.81C197.701 158.074 197.305 158.482 197.005 159.034C196.705 159.586 196.555 160.258 196.555 161.05C196.555 161.854 196.699 162.532 196.987 163.084C197.287 163.636 197.683 164.05 198.175 164.326C198.667 164.59 199.207 164.722 199.795 164.722ZM210.499 166.162C209.743 166.162 209.065 166.036 208.465 165.784C207.865 165.52 207.391 165.16 207.043 164.704C206.695 164.236 206.503 163.702 206.467 163.102H208.159C208.207 163.594 208.435 163.996 208.843 164.308C209.263 164.62 209.809 164.776 210.481 164.776C211.105 164.776 211.597 164.638 211.957 164.362C212.317 164.086 212.497 163.738 212.497 163.318C212.497 162.886 212.305 162.568 211.921 162.364C211.537 162.148 210.943 161.938 210.139 161.734C209.407 161.542 208.807 161.35 208.339 161.158C207.883 160.954 207.487 160.66 207.151 160.276C206.827 159.88 206.665 159.364 206.665 158.728C206.665 158.224 206.815 157.762 207.115 157.342C207.415 156.922 207.841 156.592 208.393 156.352C208.945 156.1 209.575 155.974 210.283 155.974C211.375 155.974 212.257 156.25 212.929 156.802C213.601 157.354 213.961 158.11 214.009 159.07H212.371C212.335 158.554 212.125 158.14 211.741 157.828C211.369 157.516 210.865 157.36 210.229 157.36C209.641 157.36 209.173 157.486 208.825 157.738C208.477 157.99 208.303 158.32 208.303 158.728C208.303 159.052 208.405 159.322 208.609 159.538C208.825 159.742 209.089 159.91 209.401 160.042C209.725 160.162 210.169 160.3 210.733 160.456C211.441 160.648 212.017 160.84 212.461 161.032C212.905 161.212 213.283 161.488 213.595 161.86C213.919 162.232 214.087 162.718 214.099 163.318C214.099 163.858 213.949 164.344 213.649 164.776C213.349 165.208 212.923 165.55 212.371 165.802C211.831 166.042 211.207 166.162 210.499 166.162ZM219.903 166.162C219.147 166.162 218.469 166.036 217.869 165.784C217.269 165.52 216.795 165.16 216.447 164.704C216.099 164.236 215.907 163.702 215.871 163.102H217.563C217.611 163.594 217.839 163.996 218.247 164.308C218.667 164.62 219.213 164.776 219.885 164.776C220.509 164.776 221.001 164.638 221.361 164.362C221.721 164.086 221.901 163.738 221.901 163.318C221.901 162.886 221.709 162.568 221.325 162.364C220.941 162.148 220.347 161.938 219.543 161.734C218.811 161.542 218.211 161.35 217.743 161.158C217.287 160.954 216.891 160.66 216.555 160.276C216.231 159.88 216.069 159.364 216.069 158.728C216.069 158.224 216.219 157.762 216.519 157.342C216.819 156.922 217.245 156.592 217.797 156.352C218.349 156.1 218.979 155.974 219.687 155.974C220.779 155.974 221.661 156.25 222.333 156.802C223.005 157.354 223.365 158.11 223.413 159.07H221.775C221.739 158.554 221.529 158.14 221.145 157.828C220.773 157.516 220.269 157.36 219.633 157.36C219.045 157.36 218.577 157.486 218.229 157.738C217.881 157.99 217.707 158.32 217.707 158.728C217.707 159.052 217.809 159.322 218.013 159.538C218.229 159.742 218.493 159.91 218.805 160.042C219.129 160.162 219.573 160.3 220.137 160.456C220.845 160.648 221.421 160.84 221.865 161.032C222.309 161.212 222.687 161.488 222.999 161.86C223.323 162.232 223.491 162.718 223.503 163.318C223.503 163.858 223.353 164.344 223.053 164.776C222.753 165.208 222.327 165.55 221.775 165.802C221.235 166.042 220.611 166.162 219.903 166.162ZM226.662 154.534C226.35 154.534 226.086 154.426 225.87 154.21C225.654 153.994 225.546 153.73 225.546 153.418C225.546 153.106 225.654 152.842 225.87 152.626C226.086 152.41 226.35 152.302 226.662 152.302C226.962 152.302 227.214 152.41 227.418 152.626C227.634 152.842 227.742 153.106 227.742 153.418C227.742 153.73 227.634 153.994 227.418 154.21C227.214 154.426 226.962 154.534 226.662 154.534ZM227.454 156.136V166H225.816V156.136H227.454ZM239.245 160.69C239.245 161.002 239.227 161.332 239.191 161.68H231.307C231.367 162.652 231.697 163.414 232.297 163.966C232.909 164.506 233.647 164.776 234.511 164.776C235.219 164.776 235.807 164.614 236.275 164.29C236.755 163.954 237.091 163.51 237.283 162.958H239.047C238.783 163.906 238.255 164.68 237.463 165.28C236.671 165.868 235.687 166.162 234.511 166.162C233.575 166.162 232.735 165.952 231.991 165.532C231.259 165.112 230.683 164.518 230.263 163.75C229.843 162.97 229.633 162.07 229.633 161.05C229.633 160.03 229.837 159.136 230.245 158.368C230.653 157.6 231.223 157.012 231.955 156.604C232.699 156.184 233.551 155.974 234.511 155.974C235.447 155.974 236.275 156.178 236.995 156.586C237.715 156.994 238.267 157.558 238.651 158.278C239.047 158.986 239.245 159.79 239.245 160.69ZM237.553 160.348C237.553 159.724 237.415 159.19 237.139 158.746C236.863 158.29 236.485 157.948 236.005 157.72C235.537 157.48 235.015 157.36 234.439 157.36C233.611 157.36 232.903 157.624 232.315 158.152C231.739 158.68 231.409 159.412 231.325 160.348H237.553ZM243.045 157.738C243.333 157.174 243.741 156.736 244.269 156.424C244.809 156.112 245.463 155.956 246.231 155.956V157.648H245.799C243.963 157.648 243.045 158.644 243.045 160.636V166H241.407V156.136H243.045V157.738Z", "fill", "#11698E"], ["id", "filter0_d_22_85", "x", "0", "y", "0", "width", "333", "height", "262", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["flood-opacity", "0", "result", "BackgroundImageFix"], ["in", "SourceAlpha", "type", "matrix", "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", "result", "hardAlpha"], ["dy", "5"], ["stdDeviation", "7.5"], ["in2", "hardAlpha", "operator", "out"], ["type", "matrix", "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"], ["mode", "normal", "in2", "BackgroundImageFix", "result", "effect1_dropShadow_22_85"], ["mode", "normal", "in", "SourceGraphic", "in2", "effect1_dropShadow_22_85", "result", "shape"], ["class", "row", "style", "padding-bottom: 5%;", "matTooltipPosition", "above", 3, "matTooltip", 4, "ngFor", "ngForOf"], ["class", "text-center mt-5", 4, "ngIf"], ["matTooltipPosition", "above", 1, "row", 2, "padding-bottom", "5%", 3, "matTooltip"], ["class", "card1", "style", "height: 150px;", 4, "ngIf"], [1, "card1", 2, "height", "150px"], ["src", "assets/dossier.svg", "alt", "", "srcset", ""], [1, "card-header"], [1, "row", "mt-1", "info", 2, "margin-left", "1px", "display", "flex"], [2, "font-size", "20px", "color", "grey"], [1, "col-sm", 2, "cursor", "pointer", "background", "transparent", "border-color", "transparent", 3, "routerLink"], [1, "card-title", "mb-0"], [1, "col-sm"], ["class", "spinner-border spinner-border-sm", "role", "status", 4, "ngIf"], ["class", "col-sm", 4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "sr-only"], [2, "padding-top", "25%", "cursor", "pointer", 3, "click"], [1, "text-center", "mt-5"], ["previousLabel", "Pr\u00E9c\u00E9dent", "nextLabel", "Suivant", 1, "my-pagination", 3, "pageChange"]], template: function ListDossierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Liste des dossiers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ListDossierComponent_Template_input_input_6_listener($event) { return ctx.filterItem($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "filter", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "feFlood", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "feColorMatrix", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "feOffset", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "feGaussianBlur", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "feComposite", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "feColorMatrix", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "feBlend", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "feBlend", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ListDossierComponent_div_25_Template, 2, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ListDossierComponent_div_27_Template, 2, 0, "div", 24);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 2, ctx.allDosssier, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, ctx.page, ctx.totalLength)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalLength > 8);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".card1[_ngcontent-%COMP%]{\n    position: relative;\n \n    margin-left: 28%;\n}\n.box[_ngcontent-%COMP%]{\n\n\twidth: 300px;\n\n\theight: 50px;\n\n\tbackground-color: white;\n\n\tborder-radius: 3px;\n\n\tdisplay: flex;\n\n\talign-items: center;\n\n\tpadding: 20px;\n\n}\n.box[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n\n\tfont-size: 20px;\n\n\tcolor: #777;\n\n}\n.box[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\n\n\tflex: 1;\n  width: 200px;\n\theight: 40px;\nbackground-color: transparent;\n\tborder: none;\n\n\toutline: none;\n\n\tfont-size: 15px;\n\n\tpadding-left: 10px;\n\n\n}\n.card-header[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 13%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-left: 62px;\n    width: 300px;\n\n\n}\nh3[_ngcontent-%COMP%]{\n    font-weight: 600;\n    margin-top: 12px;\n}\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\n    background: #153d77;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib2FyZC9kb3NzaWVyL2xpc3QtZG9zc2llci9saXN0LWRvc3NpZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjs7SUFFbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7O0NBRUMsWUFBWTs7Q0FFWixZQUFZOztDQUVaLHVCQUF1Qjs7Q0FFdkIsa0JBQWtCOztDQUVsQixhQUFhOztDQUViLG1CQUFtQjs7Q0FFbkIsYUFBYTs7QUFFZDtBQUVBOztDQUVDLGVBQWU7O0NBRWYsV0FBVzs7QUFFWjtBQUVBOztDQUVDLE9BQU87RUFDTixZQUFZO0NBQ2IsWUFBWTtBQUNiLDZCQUE2QjtDQUM1QixZQUFZOztDQUVaLGFBQWE7O0NBRWIsZUFBZTs7Q0FFZixrQkFBa0I7OztBQUduQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTs7O0FBR2hCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTs7O0dBR0ciLCJmaWxlIjoiYXBwL2JvYXJkL2Rvc3NpZXIvbGlzdC1kb3NzaWVyL2xpc3QtZG9zc2llci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQxe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiBcbiAgICBtYXJnaW4tbGVmdDogMjglO1xufVxuLmJveHtcblxuXHR3aWR0aDogMzAwcHg7XG5cblx0aGVpZ2h0OiA1MHB4O1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0cGFkZGluZzogMjBweDtcblxufVxuXG4uYm94ID4gaSB7XG5cblx0Zm9udC1zaXplOiAyMHB4O1xuXG5cdGNvbG9yOiAjNzc3O1xuXG59XG5cbi5ib3ggPiBpbnB1dHtcblxuXHRmbGV4OiAxO1xuICB3aWR0aDogMjAwcHg7XG5cdGhlaWdodDogNDBweDtcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRib3JkZXI6IG5vbmU7XG5cblx0b3V0bGluZTogbm9uZTtcblxuXHRmb250LXNpemU6IDE1cHg7XG5cblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXG5cbn1cbi5jYXJkLWhlYWRlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMyU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogNjJweDtcbiAgICB3aWR0aDogMzAwcHg7XG5cblxufVxuXG5oM3tcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xuICAgIGJhY2tncm91bmQ6ICMxNTNkNzc7XG59XG4vKiAuc3Bpbm5lci1ib3JkZXIge1xuICAgIHdpZHRoOiAxMHB4OyBcbiAgICBoZWlnaHQ6IDEwcHg7XG59ICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListDossierComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-dossier',
                templateUrl: './list-dossier.component.html',
                styleUrls: ['./list-dossier.component.css']
            }]
    }], function () { return [{ type: _services_dossier_service__WEBPACK_IMPORTED_MODULE_3__["DossierService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dossier-dossier-module.js.map