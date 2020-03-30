import { __decorate, __extends, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { MIME_TXT, RETURN, TAB } from './../../constants';
import { FileExporter } from './file-exporter';
import * as i0 from "@angular/core";
var TxtExporterService = /** @class */ (function (_super) {
    __extends(TxtExporterService, _super);
    function TxtExporterService() {
        return _super.call(this) || this;
    }
    TxtExporterService.prototype.createContent = function (rows, options) {
        var _this = this;
        var content = '';
        rows.forEach(function (element) {
            content += Object.values(element).join(_this.getDelimiter(options)) + RETURN;
        });
        return content;
    };
    TxtExporterService.prototype.getMimeType = function () {
        return MIME_TXT;
    };
    TxtExporterService.prototype.getDelimiter = function (options) {
        if (options && options.delimiter) {
            return options.delimiter;
        }
        else {
            return TAB;
        }
    };
    TxtExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
    TxtExporterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TxtExporterService);
    return TxtExporterService;
}(FileExporter));
export { TxtExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHh0LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taW5pLWNkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnRlcnMvdHh0LWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUsvQztJQUF3QyxzQ0FBd0I7SUFFOUQ7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFTSwwQ0FBYSxHQUFwQixVQUFxQixJQUFXLEVBQUUsT0FBb0I7UUFBdEQsaUJBTUM7UUFMQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDbEIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDRSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRU8seUNBQVksR0FBcEIsVUFBcUIsT0FBb0I7UUFDdkMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUNoQyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDMUI7YUFBTTtZQUNMLE9BQU8sR0FBRyxDQUFDO1NBQ1o7SUFDSCxDQUFDOztJQXhCVSxrQkFBa0I7UUFIOUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzs7T0FDVyxrQkFBa0IsQ0EwQjlCOzZCQW5DRDtDQW1DQyxBQTFCRCxDQUF3QyxZQUFZLEdBMEJuRDtTQTFCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5pbXBvcnQgeyBUeHRPcHRpb25zIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBNSU1FX1RYVCwgUkVUVVJOLCBUQUIgfSBmcm9tICcuLy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBGaWxlRXhwb3J0ZXIgfSBmcm9tICcuL2ZpbGUtZXhwb3J0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUeHRFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBGaWxlRXhwb3J0ZXI8VHh0T3B0aW9ucz4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQ29udGVudChyb3dzOiBhbnlbXSwgb3B0aW9ucz86IFR4dE9wdGlvbnMpIHtcbiAgICBsZXQgY29udGVudCA9ICcnO1xuICAgIHJvd3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnRlbnQgKz0gT2JqZWN0LnZhbHVlcyhlbGVtZW50KS5qb2luKHRoaXMuZ2V0RGVsaW1pdGVyKG9wdGlvbnMpKSArIFJFVFVSTjtcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcbiAgICByZXR1cm4gTUlNRV9UWFQ7XG4gIH1cblxuICBwcml2YXRlIGdldERlbGltaXRlcihvcHRpb25zPzogVHh0T3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZGVsaW1pdGVyKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5kZWxpbWl0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBUQUI7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==