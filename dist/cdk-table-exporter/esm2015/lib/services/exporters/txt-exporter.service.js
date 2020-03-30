import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { MIME_TXT, RETURN, TAB } from './../../constants';
import { FileExporter } from './file-exporter';
import * as i0 from "@angular/core";
let TxtExporterService = class TxtExporterService extends FileExporter {
    constructor() {
        super();
    }
    createContent(rows, options) {
        let content = '';
        rows.forEach(element => {
            content += Object.values(element).join(this.getDelimiter(options)) + RETURN;
        });
        return content;
    }
    getMimeType() {
        return MIME_TXT;
    }
    getDelimiter(options) {
        if (options && options.delimiter) {
            return options.delimiter;
        }
        else {
            return TAB;
        }
    }
};
TxtExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
TxtExporterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], TxtExporterService);
export { TxtExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHh0LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taW5pLWNkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnRlcnMvdHh0LWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUsvQyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLFlBQXdCO0lBRTlEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRU0sYUFBYSxDQUFDLElBQVcsRUFBRSxPQUFvQjtRQUNwRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNyQixPQUFPLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUM5RSxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxZQUFZLENBQUMsT0FBb0I7UUFDdkMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUNoQyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDMUI7YUFBTTtZQUNMLE9BQU8sR0FBRyxDQUFDO1NBQ1o7SUFDSCxDQUFDO0NBRUYsQ0FBQTs7QUExQlksa0JBQWtCO0lBSDlCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7O0dBQ1csa0JBQWtCLENBMEI5QjtTQTFCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5pbXBvcnQgeyBUeHRPcHRpb25zIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBNSU1FX1RYVCwgUkVUVVJOLCBUQUIgfSBmcm9tICcuLy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBGaWxlRXhwb3J0ZXIgfSBmcm9tICcuL2ZpbGUtZXhwb3J0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUeHRFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBGaWxlRXhwb3J0ZXI8VHh0T3B0aW9ucz4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQ29udGVudChyb3dzOiBhbnlbXSwgb3B0aW9ucz86IFR4dE9wdGlvbnMpIHtcbiAgICBsZXQgY29udGVudCA9ICcnO1xuICAgIHJvd3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnRlbnQgKz0gT2JqZWN0LnZhbHVlcyhlbGVtZW50KS5qb2luKHRoaXMuZ2V0RGVsaW1pdGVyKG9wdGlvbnMpKSArIFJFVFVSTjtcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcbiAgICByZXR1cm4gTUlNRV9UWFQ7XG4gIH1cblxuICBwcml2YXRlIGdldERlbGltaXRlcihvcHRpb25zPzogVHh0T3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZGVsaW1pdGVyKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5kZWxpbWl0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBUQUI7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==