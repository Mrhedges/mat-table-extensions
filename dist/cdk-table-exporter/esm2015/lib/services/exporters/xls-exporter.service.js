import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx/dist/xlsx.mini.min';
import { MIME_EXCEL_XLS, TYPE_ARRAY, XLSX_COLS } from '../../constants';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
let XlsExporterService = class XlsExporterService extends WorksheetExporter {
    constructor() {
        super();
    }
    workSheetToContent(worksheet, options = {}) {
        const workBook = XLSX.utils.book_new();
        if (options.columnWidths) {
            worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
        }
        this.correctTypes(options);
        XLSX.utils.book_append_sheet(workBook, worksheet, options.sheet);
        return XLSX.write(workBook, options);
    }
    getMimeType() {
        return MIME_EXCEL_XLS;
    }
    correctTypes(options) {
        if (!options.type) {
            options.type = TYPE_ARRAY;
        }
        options.bookType = this.getMimeType().extension.replace('.', ''); // sheetjs requires bookingType for excel format
    }
    convertToWch(columnWidths) {
        return columnWidths.map(width => ({ wch: width }));
    }
};
XlsExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
XlsExporterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], XlsExporterService);
export { XlsExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzLWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taW5pLWNkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnRlcnMveGxzLWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLElBQUksTUFBTSx5QkFBeUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFLekQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBbUIsU0FBUSxpQkFBK0I7SUFFckU7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxTQUF5QixFQUFFLFVBQXdCLEVBQWtCO1FBQzdGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxZQUFZLENBQUMsT0FBcUI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDakIsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7U0FDM0I7UUFDQSxPQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdEQUFnRDtJQUM3SCxDQUFDO0lBRU8sWUFBWSxDQUFDLFlBQTJCO1FBQzlDLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFBOztBQTlCWSxrQkFBa0I7SUFIOUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQzs7R0FDVyxrQkFBa0IsQ0E4QjlCO1NBOUJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeC9kaXN0L3hsc3gubWluaS5taW4nO1xuaW1wb3J0IHsgTUlNRV9FWENFTF9YTFMsIFRZUEVfQVJSQVksIFhMU1hfQ09MUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5pbXBvcnQgeyBFeGNlbE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcbmltcG9ydCB7IFdvcmtzaGVldEV4cG9ydGVyIH0gZnJvbSAnLi93b3Jrc2hlZXQtZXhwb3J0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBYbHNFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBXb3Jrc2hlZXRFeHBvcnRlcjxFeGNlbE9wdGlvbnM+IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIHdvcmtTaGVldFRvQ29udGVudCh3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0LCBvcHRpb25zOiBFeGNlbE9wdGlvbnMgPSB7fSBhcyBFeGNlbE9wdGlvbnMpOiBhbnkge1xuICAgIGNvbnN0IHdvcmtCb29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgIGlmIChvcHRpb25zLmNvbHVtbldpZHRocykge1xuICAgICAgd29ya3NoZWV0W1hMU1hfQ09MU10gPSB0aGlzLmNvbnZlcnRUb1djaChvcHRpb25zLmNvbHVtbldpZHRocyk7XG4gICAgfVxuICAgIHRoaXMuY29ycmVjdFR5cGVzKG9wdGlvbnMpO1xuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQod29ya0Jvb2ssIHdvcmtzaGVldCwgb3B0aW9ucy5zaGVldCk7XG4gICAgcmV0dXJuIFhMU1gud3JpdGUod29ya0Jvb2ssIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldE1pbWVUeXBlKCk6IE1pbWUge1xuICAgIHJldHVybiBNSU1FX0VYQ0VMX1hMUztcbiAgfVxuXG4gIHByaXZhdGUgY29ycmVjdFR5cGVzKG9wdGlvbnM6IEV4Y2VsT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy50eXBlKSB7XG4gICAgICBvcHRpb25zLnR5cGUgPSBUWVBFX0FSUkFZO1xuICAgIH1cbiAgICAob3B0aW9ucyBhcyBhbnkpLmJvb2tUeXBlID0gdGhpcy5nZXRNaW1lVHlwZSgpLmV4dGVuc2lvbi5yZXBsYWNlKCcuJywgJycpOyAvLyBzaGVldGpzIHJlcXVpcmVzIGJvb2tpbmdUeXBlIGZvciBleGNlbCBmb3JtYXRcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFRvV2NoKGNvbHVtbldpZHRoczogQXJyYXk8bnVtYmVyPik6IEFycmF5PHt3Y2g6IG51bWJlcn0+IHtcbiAgICByZXR1cm4gY29sdW1uV2lkdGhzLm1hcCh3aWR0aCA9PiAoe3djaDogd2lkdGh9KSk7XG4gIH1cbn1cbiJdfQ==