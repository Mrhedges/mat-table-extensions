import { __decorate, __extends, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx/dist/xlsx.mini.min';
import { MIME_EXCEL_XLS, TYPE_ARRAY, XLSX_COLS } from '../../constants';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
var XlsExporterService = /** @class */ (function (_super) {
    __extends(XlsExporterService, _super);
    function XlsExporterService() {
        return _super.call(this) || this;
    }
    XlsExporterService.prototype.workSheetToContent = function (worksheet, options) {
        if (options === void 0) { options = {}; }
        var workBook = XLSX.utils.book_new();
        if (options.columnWidths) {
            worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
        }
        this.correctTypes(options);
        XLSX.utils.book_append_sheet(workBook, worksheet, options.sheet);
        return XLSX.write(workBook, options);
    };
    XlsExporterService.prototype.getMimeType = function () {
        return MIME_EXCEL_XLS;
    };
    XlsExporterService.prototype.correctTypes = function (options) {
        if (!options.type) {
            options.type = TYPE_ARRAY;
        }
        options.bookType = this.getMimeType().extension.replace('.', ''); // sheetjs requires bookingType for excel format
    };
    XlsExporterService.prototype.convertToWch = function (columnWidths) {
        return columnWidths.map(function (width) { return ({ wch: width }); });
    };
    XlsExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
    XlsExporterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], XlsExporterService);
    return XlsExporterService;
}(WorksheetExporter));
export { XlsExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzLWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taW5pLWNkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnRlcnMveGxzLWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLElBQUksTUFBTSx5QkFBeUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFLekQ7SUFBd0Msc0NBQStCO0lBRXJFO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBRU0sK0NBQWtCLEdBQXpCLFVBQTBCLFNBQXlCLEVBQUUsT0FBMEM7UUFBMUMsd0JBQUEsRUFBQSxVQUF3QixFQUFrQjtRQUM3RixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDRSxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRU8seUNBQVksR0FBcEIsVUFBcUIsT0FBcUI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDakIsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7U0FDM0I7UUFDQSxPQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdEQUFnRDtJQUM3SCxDQUFDO0lBRU8seUNBQVksR0FBcEIsVUFBcUIsWUFBMkI7UUFDOUMsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O0lBN0JVLGtCQUFrQjtRQUg5QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUNXLGtCQUFrQixDQThCOUI7NkJBeENEO0NBd0NDLEFBOUJELENBQXdDLGlCQUFpQixHQThCeEQ7U0E5Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4L2Rpc3QveGxzeC5taW5pLm1pbic7XG5pbXBvcnQgeyBNSU1FX0VYQ0VMX1hMUywgVFlQRV9BUlJBWSwgWExTWF9DT0xTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcbmltcG9ydCB7IEV4Y2VsT3B0aW9ucyB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgV29ya3NoZWV0RXhwb3J0ZXIgfSBmcm9tICcuL3dvcmtzaGVldC1leHBvcnRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFhsc0V4cG9ydGVyU2VydmljZSBleHRlbmRzIFdvcmtzaGVldEV4cG9ydGVyPEV4Y2VsT3B0aW9ucz4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgd29ya1NoZWV0VG9Db250ZW50KHdvcmtzaGVldDogWExTWC5Xb3JrU2hlZXQsIG9wdGlvbnM6IEV4Y2VsT3B0aW9ucyA9IHt9IGFzIEV4Y2VsT3B0aW9ucyk6IGFueSB7XG4gICAgY29uc3Qgd29ya0Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgaWYgKG9wdGlvbnMuY29sdW1uV2lkdGhzKSB7XG4gICAgICB3b3Jrc2hlZXRbWExTWF9DT0xTXSA9IHRoaXMuY29udmVydFRvV2NoKG9wdGlvbnMuY29sdW1uV2lkdGhzKTtcbiAgICB9XG4gICAgdGhpcy5jb3JyZWN0VHlwZXMob3B0aW9ucyk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldCh3b3JrQm9vaywgd29ya3NoZWV0LCBvcHRpb25zLnNoZWV0KTtcbiAgICByZXR1cm4gWExTWC53cml0ZSh3b3JrQm9vaywgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XG4gICAgcmV0dXJuIE1JTUVfRVhDRUxfWExTO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3JyZWN0VHlwZXMob3B0aW9uczogRXhjZWxPcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnR5cGUpIHtcbiAgICAgIG9wdGlvbnMudHlwZSA9IFRZUEVfQVJSQVk7XG4gICAgfVxuICAgIChvcHRpb25zIGFzIGFueSkuYm9va1R5cGUgPSB0aGlzLmdldE1pbWVUeXBlKCkuZXh0ZW5zaW9uLnJlcGxhY2UoJy4nLCAnJyk7IC8vIHNoZWV0anMgcmVxdWlyZXMgYm9va2luZ1R5cGUgZm9yIGV4Y2VsIGZvcm1hdFxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9XY2goY29sdW1uV2lkdGhzOiBBcnJheTxudW1iZXI+KTogQXJyYXk8e3djaDogbnVtYmVyfT4ge1xuICAgIHJldHVybiBjb2x1bW5XaWR0aHMubWFwKHdpZHRoID0+ICh7d2NoOiB3aWR0aH0pKTtcbiAgfVxufVxuIl19