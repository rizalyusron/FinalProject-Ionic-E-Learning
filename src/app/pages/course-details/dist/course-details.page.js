"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CourseDetailsPage = void 0;
var core_1 = require("@angular/core");
var CourseDetailsPage = /** @class */ (function () {
    function CourseDetailsPage(route, courseService) {
        this.route = route;
        this.courseService = courseService;
    }
    CourseDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.courseService.getCourseDetails(id).subscribe(function (data) {
                _this.course = data;
            });
        }
        else {
            // Handle the case where id is null
            console.error('Course ID is null');
        }
    };
    CourseDetailsPage = __decorate([
        core_1.Component({
            selector: 'app-course-details',
            templateUrl: './course-details.page.html',
            styleUrls: ['./course-details.page.scss']
        })
    ], CourseDetailsPage);
    return CourseDetailsPage;
}());
exports.CourseDetailsPage = CourseDetailsPage;
