import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var DataExtractorService = /** @class */ (function () {
    function DataExtractorService() {
    }
    DataExtractorService.prototype.extractRows = function (cdkTable, hiddenColumns) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, cdkTable._rowOutlet);
    };
    DataExtractorService.prototype.extractRow = function (cdkTable, hiddenColumns, outlet) {
        return this.getRowsAsJsonArray(cdkTable, hiddenColumns, outlet)[0];
    };
    DataExtractorService.prototype.getRowsAsJsonArray = function (cdkTable, hiddenColumns, outlet) {
        var renderedRows = this.getRenderedRows(cdkTable, outlet);
        return this.convertToJsonArray(hiddenColumns, renderedRows);
    };
    DataExtractorService.prototype.getRenderedRows = function (cdkTable, outlet) {
        return cdkTable._getRenderedRows(outlet);
    };
    DataExtractorService.prototype.convertToJsonArray = function (hiddenColumns, rows) {
        var result = new Array();
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < rows.length; i++) {
            var row = this.convertRow(hiddenColumns, rows[i]);
            result.push(this.createExcelItem(row));
        }
        return result;
    };
    DataExtractorService.prototype.convertRow = function (hiddenColumns, row) {
        var result = new Array();
        var cells = row.children;
        for (var i = 0; i < cells.length; i++) {
            if (!this.shouldHide(hiddenColumns, i)) {
                var element = cells.item(i).innerText;
                result.push(element);
            }
        }
        return result;
    };
    DataExtractorService.prototype.shouldHide = function (hiddenColumns, columnIndex) {
        if (hiddenColumns && hiddenColumns.includes(columnIndex)) {
            return true;
        }
        else {
            return false;
        }
    };
    DataExtractorService.prototype.createExcelItem = function (row) {
        return Object.assign({}, row);
    };
    DataExtractorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });
    DataExtractorService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataExtractorService);
    return DataExtractorService;
}());
export { DataExtractorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1leHRyYWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pbmktY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2RhdGEtZXh0cmFjdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDO0lBRUU7SUFBZ0IsQ0FBQztJQUVWLDBDQUFXLEdBQWxCLFVBQW1CLFFBQWEsRUFBRSxhQUF5QjtRQUN6RCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRU0seUNBQVUsR0FBakIsVUFBa0IsUUFBYSxFQUFFLGFBQXlCLEVBQUUsTUFBcUI7UUFDL0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU8saURBQWtCLEdBQTFCLFVBQTJCLFFBQWEsRUFBRSxhQUF5QixFQUFFLE1BQXFCO1FBQ3hGLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sOENBQWUsR0FBdkIsVUFBd0IsUUFBYSxFQUFFLE1BQXFCO1FBQzFELE9BQU8sUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBMEIsQ0FBQztJQUNwRSxDQUFDO0lBRU8saURBQWtCLEdBQTFCLFVBQTJCLGFBQXlCLEVBQUUsSUFBMkI7UUFDL0UsSUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUNoQyx5Q0FBeUM7UUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBTSxHQUFHLEdBQWtCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLHlDQUFVLEdBQWxCLFVBQW1CLGFBQXlCLEVBQUUsR0FBd0I7UUFDcEUsSUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUNuQyxJQUFNLEtBQUssR0FBUSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdEMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyx5Q0FBVSxHQUFsQixVQUFtQixhQUF5QixFQUFFLFdBQW1CO1FBQy9ELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEQsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFTyw4Q0FBZSxHQUF2QixVQUF3QixHQUFrQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O0lBckRVLG9CQUFvQjtRQUhoQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUNXLG9CQUFvQixDQXNEaEM7K0JBNUREO0NBNERDLEFBdERELElBc0RDO1NBdERZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFSb3dPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhRXh0cmFjdG9yU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgZXh0cmFjdFJvd3MoY2RrVGFibGU6IGFueSwgaGlkZGVuQ29sdW1uczogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldFJvd3NBc0pzb25BcnJheShjZGtUYWJsZSwgaGlkZGVuQ29sdW1ucywgY2RrVGFibGUuX3Jvd091dGxldCk7XG4gIH1cblxuICBwdWJsaWMgZXh0cmFjdFJvdyhjZGtUYWJsZTogYW55LCBoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCBvdXRsZXQ6IERhdGFSb3dPdXRsZXQpOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRSb3dzQXNKc29uQXJyYXkoY2RrVGFibGUsIGhpZGRlbkNvbHVtbnMsIG91dGxldClbMF07XG4gIH1cblxuICBwcml2YXRlIGdldFJvd3NBc0pzb25BcnJheShjZGtUYWJsZTogYW55LCBoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCBvdXRsZXQ6IERhdGFSb3dPdXRsZXQpOiBBcnJheTxhbnk+IHtcbiAgICBjb25zdCByZW5kZXJlZFJvd3MgPSB0aGlzLmdldFJlbmRlcmVkUm93cyhjZGtUYWJsZSwgb3V0bGV0KTtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9Kc29uQXJyYXkoaGlkZGVuQ29sdW1ucywgcmVuZGVyZWRSb3dzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVuZGVyZWRSb3dzKGNka1RhYmxlOiBhbnksIG91dGxldDogRGF0YVJvd091dGxldCk6IEhUTUxUYWJsZVJvd0VsZW1lbnRbXSB7XG4gICAgcmV0dXJuIGNka1RhYmxlLl9nZXRSZW5kZXJlZFJvd3Mob3V0bGV0KSBhcyBIVE1MVGFibGVSb3dFbGVtZW50W107XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRUb0pzb25BcnJheShoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCByb3dzOiBIVE1MVGFibGVSb3dFbGVtZW50W10pOiBBcnJheTxhbnk+IHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByb3c6IEFycmF5PHN0cmluZz4gPSB0aGlzLmNvbnZlcnRSb3coaGlkZGVuQ29sdW1ucywgcm93c1tpXSk7XG4gICAgICByZXN1bHQucHVzaCh0aGlzLmNyZWF0ZUV4Y2VsSXRlbShyb3cpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFJvdyhoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCByb3c6IEhUTUxUYWJsZVJvd0VsZW1lbnQpOiBBcnJheTxzdHJpbmc+IHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgIGNvbnN0IGNlbGxzOiBhbnkgPSByb3cuY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLnNob3VsZEhpZGUoaGlkZGVuQ29sdW1ucywgaSkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNlbGxzLml0ZW0oaSkuaW5uZXJUZXh0O1xuICAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkSGlkZShoaWRkZW5Db2x1bW5zOiBBcnJheTxhbnk+LCBjb2x1bW5JbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGhpZGRlbkNvbHVtbnMgJiYgaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhjb2x1bW5JbmRleCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFeGNlbEl0ZW0ocm93OiBBcnJheTxzdHJpbmc+KTogYW55IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcm93KTtcbiAgfVxufVxuIl19