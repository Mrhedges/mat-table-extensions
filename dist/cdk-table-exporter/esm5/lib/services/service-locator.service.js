import { __decorate, __metadata } from "tslib";
import { CsvExporterService } from './exporters/csv-exporter.service';
import { TxtExporterService } from './exporters/txt-exporter.service';
import { Injectable, Injector } from '@angular/core';
import { ExportType } from './../export-type';
import { XlsExporterService } from './exporters/xls-exporter.service';
import { JsonExporterService } from './exporters/json-exporter.service';
import { XlsxExporterService } from './exporters/xlsx-exporter.service';
import * as i0 from "@angular/core";
var ServiceLocatorService = /** @class */ (function () {
    function ServiceLocatorService(injector) {
        this.injector = injector;
    }
    ServiceLocatorService.prototype.getService = function (exportType) {
        switch (exportType) {
            case ExportType.XLS.valueOf():
                return this.injector.get(XlsExporterService);
            case ExportType.XLSX.valueOf():
                return this.injector.get(XlsxExporterService);
            case ExportType.JSON.valueOf():
                return this.injector.get(JsonExporterService);
            case ExportType.TXT.valueOf():
                return this.injector.get(TxtExporterService);
            case ExportType.CSV.valueOf():
                return this.injector.get(CsvExporterService);
            case ExportType.OTHER.valueOf():
                return null;
            default:
                return this.injector.get(XlsxExporterService);
        }
    };
    ServiceLocatorService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    ServiceLocatorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ServiceLocatorService_Factory() { return new ServiceLocatorService(i0.ɵɵinject(i0.INJECTOR)); }, token: ServiceLocatorService, providedIn: "root" });
    ServiceLocatorService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Injector])
    ], ServiceLocatorService);
    return ServiceLocatorService;
}());
export { ServiceLocatorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1sb2NhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taW5pLWNkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2aWNlLWxvY2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUl4RTtJQUVFLCtCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUksQ0FBQztJQUVwQywwQ0FBVSxHQUFqQixVQUFrQixVQUEwRTtRQUMxRixRQUFRLFVBQVUsRUFBRTtZQUNsQixLQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFxQixrQkFBa0IsQ0FBQyxDQUFDO1lBQ25FLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXNCLG1CQUFtQixDQUFDLENBQUM7WUFDdkUsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBc0IsbUJBQW1CLENBQUMsQ0FBQztZQUNyRSxLQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFxQixrQkFBa0IsQ0FBQyxDQUFDO1lBQ25FLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXFCLGtCQUFrQixDQUFDLENBQUM7WUFDbkUsS0FBSyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDN0IsT0FBTyxJQUFJLENBQUM7WUFDZDtnQkFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFzQixtQkFBbUIsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7Z0JBbkI2QixRQUFROzs7SUFGM0IscUJBQXFCO1FBSGpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBRzhCLFFBQVE7T0FGM0IscUJBQXFCLENBc0JqQztnQ0FsQ0Q7Q0FrQ0MsQUF0QkQsSUFzQkM7U0F0QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3N2RXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9leHBvcnRlcnMvY3N2LWV4cG9ydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHh0RXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9leHBvcnRlcnMvdHh0LWV4cG9ydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi9vcHRpb25zJztcbmltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuLy4uL2V4cG9ydC10eXBlJztcbmltcG9ydCB7IEV4cG9ydGVyIH0gZnJvbSAnLi9leHBvcnRlcnMvZXhwb3J0ZXInO1xuaW1wb3J0IHsgWGxzRXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9leHBvcnRlcnMveGxzLWV4cG9ydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSnNvbkV4cG9ydGVyU2VydmljZSB9IGZyb20gJy4vZXhwb3J0ZXJzL2pzb24tZXhwb3J0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBYbHN4RXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9leHBvcnRlcnMveGxzeC1leHBvcnRlci5zZXJ2aWNlJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VMb2NhdG9yU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHsgfVxuXG4gIHB1YmxpYyBnZXRTZXJ2aWNlKGV4cG9ydFR5cGU6IEV4cG9ydFR5cGUgfCAneGxzJyB8ICd4bHN4JyB8ICdjc3YnIHwgJ3R4dCcgfCAnanNvbicgfCAnb3RoZXInKTogRXhwb3J0ZXI8T3B0aW9ucz4ge1xuICAgIHN3aXRjaCAoZXhwb3J0VHlwZSkge1xuICAgICAgY2FzZSBFeHBvcnRUeXBlLlhMUy52YWx1ZU9mKCk6XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxYbHNFeHBvcnRlclNlcnZpY2U+KFhsc0V4cG9ydGVyU2VydmljZSk7XG4gICAgICBjYXNlIEV4cG9ydFR5cGUuWExTWC52YWx1ZU9mKCk6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFhsc3hFeHBvcnRlclNlcnZpY2U+KFhsc3hFeHBvcnRlclNlcnZpY2UpO1xuICAgICAgY2FzZSBFeHBvcnRUeXBlLkpTT04udmFsdWVPZigpOlxuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8SnNvbkV4cG9ydGVyU2VydmljZT4oSnNvbkV4cG9ydGVyU2VydmljZSk7XG4gICAgICBjYXNlIEV4cG9ydFR5cGUuVFhULnZhbHVlT2YoKTpcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFR4dEV4cG9ydGVyU2VydmljZT4oVHh0RXhwb3J0ZXJTZXJ2aWNlKTtcbiAgICAgIGNhc2UgRXhwb3J0VHlwZS5DU1YudmFsdWVPZigpOlxuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8Q3N2RXhwb3J0ZXJTZXJ2aWNlPihDc3ZFeHBvcnRlclNlcnZpY2UpO1xuICAgICAgY2FzZSBFeHBvcnRUeXBlLk9USEVSLnZhbHVlT2YoKTpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8WGxzeEV4cG9ydGVyU2VydmljZT4oWGxzeEV4cG9ydGVyU2VydmljZSk7XG4gICAgfVxuICB9XG59XG4iXX0=