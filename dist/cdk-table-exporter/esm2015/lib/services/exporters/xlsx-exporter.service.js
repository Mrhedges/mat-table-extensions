import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { XlsExporterService } from './xls-exporter.service';
import { MIME_EXCEL_XLSX } from '../../constants';
import * as i0 from "@angular/core";
let XlsxExporterService = class XlsxExporterService extends XlsExporterService {
    constructor() {
        super();
    }
    // override
    getMimeType() {
        return MIME_EXCEL_XLSX;
    }
};
XlsxExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(); }, token: XlsxExporterService, providedIn: "root" });
XlsxExporterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], XlsxExporterService);
export { XlsxExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWluaS1jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3hsc3gtZXhwb3J0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBS2xELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW9CLFNBQVEsa0JBQWtCO0lBRXpEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRUQsV0FBVztJQUNKLFdBQVc7UUFDaEIsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztDQUNGLENBQUE7O0FBVlksbUJBQW1CO0lBSC9CLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7O0dBQ1csbUJBQW1CLENBVS9CO1NBVlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgWGxzRXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi94bHMtZXhwb3J0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5pbXBvcnQgeyBNSU1FX0VYQ0VMX1hMU1ggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBYbHN4RXhwb3J0ZXJTZXJ2aWNlIGV4dGVuZHMgWGxzRXhwb3J0ZXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGVcbiAgcHVibGljIGdldE1pbWVUeXBlKCk6IE1pbWUge1xuICAgIHJldHVybiBNSU1FX0VYQ0VMX1hMU1g7XG4gIH1cbn1cbiJdfQ==