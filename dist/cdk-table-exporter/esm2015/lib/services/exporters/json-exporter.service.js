import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { FileExporter } from './file-exporter';
import { MIME_JSON } from '../../constants';
import * as i0 from "@angular/core";
let JsonExporterService = class JsonExporterService extends FileExporter {
    constructor() {
        super();
    }
    createContent(rows, options) {
        return JSON.stringify(rows);
    }
    getMimeType() {
        return MIME_JSON;
    }
};
JsonExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
JsonExporterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], JsonExporterService);
export { JsonExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWluaS1jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL2pzb24tZXhwb3J0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUs1QyxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLFlBQXFCO0lBRTVEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRU0sYUFBYSxDQUFDLElBQVcsRUFBRSxPQUFpQjtRQUNqRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNPLFdBQVc7UUFDakIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUVGLENBQUE7O0FBYlksbUJBQW1CO0lBSC9CLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7O0dBQ1csbUJBQW1CLENBYS9CO1NBYlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgRmlsZUV4cG9ydGVyIH0gZnJvbSAnLi9maWxlLWV4cG9ydGVyJztcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcbmltcG9ydCB7IE1JTUVfSlNPTiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEpzb25FeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBGaWxlRXhwb3J0ZXI8T3B0aW9ucz4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQ29udGVudChyb3dzOiBhbnlbXSwgb3B0aW9ucz86IE9wdGlvbnMpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocm93cyk7XG4gIH1cbiAgIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcbiAgICByZXR1cm4gTUlNRV9KU09OO1xuICB9XG5cbn1cbiJdfQ==