import { __decorate, __extends, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { FileExporter } from './file-exporter';
import { MIME_JSON } from '../../constants';
import * as i0 from "@angular/core";
var JsonExporterService = /** @class */ (function (_super) {
    __extends(JsonExporterService, _super);
    function JsonExporterService() {
        return _super.call(this) || this;
    }
    JsonExporterService.prototype.createContent = function (rows, options) {
        return JSON.stringify(rows);
    };
    JsonExporterService.prototype.getMimeType = function () {
        return MIME_JSON;
    };
    JsonExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
    JsonExporterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JsonExporterService);
    return JsonExporterService;
}(FileExporter));
export { JsonExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWluaS1jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL2pzb24tZXhwb3J0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUs1QztJQUF5Qyx1Q0FBcUI7SUFFNUQ7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFTSwyQ0FBYSxHQUFwQixVQUFxQixJQUFXLEVBQUUsT0FBaUI7UUFDakQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTyx5Q0FBVyxHQUFsQjtRQUNDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7O0lBWFUsbUJBQW1CO1FBSC9CLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csbUJBQW1CLENBYS9COzhCQXRCRDtDQXNCQyxBQWJELENBQXlDLFlBQVksR0FhcEQ7U0FiWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBGaWxlRXhwb3J0ZXIgfSBmcm9tICcuL2ZpbGUtZXhwb3J0ZXInO1xuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xuaW1wb3J0IHsgTUlNRV9KU09OIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkV4cG9ydGVyU2VydmljZSBleHRlbmRzIEZpbGVFeHBvcnRlcjxPcHRpb25zPiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVDb250ZW50KHJvd3M6IGFueVtdLCBvcHRpb25zPzogT3B0aW9ucykge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyb3dzKTtcbiAgfVxuICAgcHVibGljIGdldE1pbWVUeXBlKCk6IE1pbWUge1xuICAgIHJldHVybiBNSU1FX0pTT047XG4gIH1cblxufVxuIl19