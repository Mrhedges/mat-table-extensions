import { __extends } from "tslib";
// import * as XLSX from 'xlsx';
import * as XLSX from 'xlsx/dist/xlsx.mini.min';
import { FileExporter } from './file-exporter';
/**
 * An angular service class that is used to create files out of json object arrays.
 */
var WorksheetExporter = /** @class */ (function (_super) {
    __extends(WorksheetExporter, _super);
    function WorksheetExporter() {
        return _super.call(this) || this;
    }
    WorksheetExporter.prototype.createContent = function (rows, options) {
        var workSheet = XLSX.utils.json_to_sheet(rows, {
            skipHeader: true // we don't want to see object properties as our headers
        });
        return this.workSheetToContent(workSheet, options);
    };
    return WorksheetExporter;
}(FileExporter));
export { WorksheetExporter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NoZWV0LWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWluaS1jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXJzL3dvcmtzaGVldC1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQWdDO0FBQ2hDLE9BQU8sS0FBSyxJQUFJLE1BQU0seUJBQXlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DOztHQUVHO0FBQ0g7SUFBbUQscUNBQWU7SUFFaEU7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFTSx5Q0FBYSxHQUFwQixVQUFxQixJQUFnQixFQUFFLE9BQVc7UUFDaEQsSUFBTSxTQUFTLEdBQW9CLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtZQUNoRSxVQUFVLEVBQUUsSUFBSSxDQUFDLHdEQUF3RDtTQUMxRSxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUlILHdCQUFDO0FBQUQsQ0FBQyxBQWZELENBQW1ELFlBQVksR0FlOUQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4L2Rpc3QveGxzeC5taW5pLm1pbic7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5pbXBvcnQgeyBGaWxlRXhwb3J0ZXIgfSBmcm9tICcuL2ZpbGUtZXhwb3J0ZXInO1xuLyoqXG4gKiBBbiBhbmd1bGFyIHNlcnZpY2UgY2xhc3MgdGhhdCBpcyB1c2VkIHRvIGNyZWF0ZSBmaWxlcyBvdXQgb2YganNvbiBvYmplY3QgYXJyYXlzLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV29ya3NoZWV0RXhwb3J0ZXI8VD4gZXh0ZW5kcyBGaWxlRXhwb3J0ZXI8VD4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQ29udGVudChyb3dzOiBBcnJheTxhbnk+LCBvcHRpb25zPzogVCk6IGFueSB7XG4gICAgY29uc3Qgd29ya1NoZWV0OiBYTFNYLldvcmtTaGVldCA9ICBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQocm93cywge1xuICAgICAgc2tpcEhlYWRlcjogdHJ1ZSAvLyB3ZSBkb24ndCB3YW50IHRvIHNlZSBvYmplY3QgcHJvcGVydGllcyBhcyBvdXIgaGVhZGVyc1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLndvcmtTaGVldFRvQ29udGVudCh3b3JrU2hlZXQsIG9wdGlvbnMpO1xuICB9XG4gIHB1YmxpYyBhYnN0cmFjdCB3b3JrU2hlZXRUb0NvbnRlbnQod29ya1NoZWV0OiBYTFNYLldvcmtTaGVldCwgb3B0aW9ucz86IFQpOiBhbnk7XG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRNaW1lVHlwZSgpOiBNaW1lO1xuXG59XG4iXX0=