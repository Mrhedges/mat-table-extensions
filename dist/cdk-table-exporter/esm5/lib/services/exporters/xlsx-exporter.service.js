import { __decorate, __extends, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { XlsExporterService } from './xls-exporter.service';
import { MIME_EXCEL_XLSX } from '../../constants';
import * as i0 from "@angular/core";
var XlsxExporterService = /** @class */ (function (_super) {
    __extends(XlsxExporterService, _super);
    function XlsxExporterService() {
        return _super.call(this) || this;
    }
    // override
    XlsxExporterService.prototype.getMimeType = function () {
        return MIME_EXCEL_XLSX;
    };
    XlsxExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(); }, token: XlsxExporterService, providedIn: "root" });
    XlsxExporterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], XlsxExporterService);
    return XlsxExporterService;
}(XlsExporterService));
export { XlsxExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWluaS1jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3hsc3gtZXhwb3J0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBS2xEO0lBQXlDLHVDQUFrQjtJQUV6RDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUVELFdBQVc7SUFDSix5Q0FBVyxHQUFsQjtRQUNFLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7O0lBVFUsbUJBQW1CO1FBSC9CLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csbUJBQW1CLENBVS9COzhCQWxCRDtDQWtCQyxBQVZELENBQXlDLGtCQUFrQixHQVUxRDtTQVZZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFhsc0V4cG9ydGVyU2VydmljZSB9IGZyb20gJy4veGxzLWV4cG9ydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xuaW1wb3J0IHsgTUlNRV9FWENFTF9YTFNYIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgWGxzeEV4cG9ydGVyU2VydmljZSBleHRlbmRzIFhsc0V4cG9ydGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8vIG92ZXJyaWRlXG4gIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcbiAgICByZXR1cm4gTUlNRV9FWENFTF9YTFNYO1xuICB9XG59XG4iXX0=