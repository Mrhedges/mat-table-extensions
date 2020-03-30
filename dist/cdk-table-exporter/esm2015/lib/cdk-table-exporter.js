import { __decorate, __metadata } from "tslib";
import { Directive, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { ExportType } from './export-type';
import { DataExtractorService } from './services/data-extractor.service';
import { ServiceLocatorService } from './services/service-locator.service';
/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
let CdkTableExporter = class CdkTableExporter {
    constructor(renderer, serviceLocator, dataExtractor, _cdkTable) {
        this.renderer = renderer;
        this.serviceLocator = serviceLocator;
        this.dataExtractor = dataExtractor;
        this._cdkTable = _cdkTable;
        this.exportCompleted = new EventEmitter();
        this.exportStarted = new EventEmitter();
    }
    /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     */
    exportTable(exportType, options) {
        this.loadExporter(exportType);
        this._options = options;
        this.exportStarted.emit();
        this._isIterating = true;
        this._isExporting = true;
        this._data = new Array();
        this.extractTableHeader();
        try {
            this.exportWithPagination();
        }
        catch (notPaginated) {
            this.exportSinglePage();
        }
    }
    loadExporter(exportType) {
        if (exportType === ExportType.OTHER.valueOf()) {
            this._exporterService = this.exporter;
        }
        else {
            this._exporterService = this.serviceLocator.getService(exportType);
        }
    }
    exportWithPagination() {
        this._initialPageIndex = this.getCurrentPageIndex();
        this.initPageHandler();
        this.goToPage(0);
    }
    exportSinglePage() {
        this.extractDataOnCurrentPage();
        this.extractTableFooter();
        this.exportExtractedData();
    }
    extractDataOnCurrentPage() {
        this._data = this._data.concat(this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns));
    }
    initPageHandler() {
        if (!this._subscription) {
            this._subscription = this.getPageChangeObservable().subscribe(() => {
                setTimeout(() => {
                    if (this._isIterating) {
                        this.extractDataOnCurrentPage();
                        if (this.hasNextPage()) {
                            this.nextPage();
                        }
                        else {
                            this._isIterating = false;
                            this.goToPage(this._initialPageIndex);
                        }
                    }
                    else if (this._isExporting) {
                        this._isExporting = false;
                        this.extractTableFooter();
                        this.exportExtractedData();
                    }
                });
            });
        }
    }
    exportExtractedData() {
        this._exporterService.export(this._data, this._options);
        this._data = new Array();
        this.exportCompleted.emit();
    }
    extractSpecialRow(outlet) {
        const row = this.dataExtractor.extractRow(this._cdkTable, this.hiddenColumns, outlet);
        if (row) {
            this._data.push(row);
        }
    }
    extractTableHeader() {
        this.extractSpecialRow(this._cdkTable._headerRowOutlet);
    }
    extractTableFooter() {
        this.extractSpecialRow(this._cdkTable._footerRowOutlet);
    }
    hasNextPage() {
        if (this.getCurrentPageIndex() < this.getPageCount() - 1) {
            return true;
        }
        else {
            return false;
        }
    }
    nextPage() {
        this.goToPage(this.getCurrentPageIndex() + 1);
    }
};
CdkTableExporter.ctorParameters = () => [
    { type: Renderer2 },
    { type: ServiceLocatorService },
    { type: DataExtractorService },
    { type: undefined }
];
__decorate([
    Input(),
    __metadata("design:type", Array)
], CdkTableExporter.prototype, "hiddenColumns", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CdkTableExporter.prototype, "exporter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CdkTableExporter.prototype, "exportCompleted", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CdkTableExporter.prototype, "exportStarted", void 0);
CdkTableExporter = __decorate([
    Directive(),
    __metadata("design:paramtypes", [Renderer2,
        ServiceLocatorService,
        DataExtractorService, Object])
], CdkTableExporter);
export { CdkTableExporter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWluaS1jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvY2RrLXRhYmxlLWV4cG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTNFOztHQUVHO0FBRUgsSUFBc0IsZ0JBQWdCLEdBQXRDLE1BQXNCLGdCQUFnQjtJQXdCcEMsWUFDWSxRQUFtQixFQUNyQixjQUFxQyxFQUNyQyxhQUFtQyxFQUNqQyxTQUFjO1FBSGQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQUs7UUF0QmhCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUMzQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFzQmhELENBQUM7SUF3Qko7O09BRUc7SUFDSCxXQUFXLENBQUMsVUFBMkUsRUFBRSxPQUE2QztRQUNwSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIs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QUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsRUFBRTtZQUN4RCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FFRixDQUFBOztZQTdIdUIsU0FBUztZQUNMLHFCQUFxQjtZQUN0QixvQkFBb0I7OztBQXZCcEM7SUFBUixLQUFLLEVBQUU7OEJBQWlCLEtBQUs7dURBQVM7QUFDOUI7SUFBUixLQUFLLEVBQUU7O2tEQUE4QjtBQUM1QjtJQUFULE1BQU0sRUFBRTs7eURBQTRDO0FBQzNDO0lBQVQsTUFBTSxFQUFFOzt1REFBMEM7QUFQL0IsZ0JBQWdCO0lBRHJDLFNBQVMsRUFBRTtxQ0EwQlksU0FBUztRQUNMLHFCQUFxQjtRQUN0QixvQkFBb0I7R0EzQnpCLGdCQUFnQixDQXNKckM7U0F0SnFCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFSb3dPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi9leHBvcnQtdHlwZSc7XG5pbXBvcnQgeyBFeGNlbE9wdGlvbnMsIE9wdGlvbnMsIFR4dE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgRGF0YUV4dHJhY3RvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEtZXh0cmFjdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXhwb3J0ZXIgfSBmcm9tICcuL3NlcnZpY2VzL2V4cG9ydGVycy9leHBvcnRlcic7XG5pbXBvcnQgeyBTZXJ2aWNlTG9jYXRvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2UtbG9jYXRvci5zZXJ2aWNlJztcblxuLyoqXG4gKiBFeHBvcnRlciBjbGFzcyBmb3IgQ2RrVGFibGUuIEFic3RyYWN0cyB0aGUgdmFyeWluZyBiZWhhdmlvcnMgYW1vbmcgZGlmZmVyZW50IENka1RhYmxlIGltcGxlbWVudGF0aW9ucy5cbiAqL1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2RrVGFibGVFeHBvcnRlciB7XG5cbiAgcHJpdmF0ZSBfZXhwb3J0ZXJTZXJ2aWNlOiBFeHBvcnRlcjxPcHRpb25zPjtcblxuICBASW5wdXQoKSBoaWRkZW5Db2x1bW5zPzogQXJyYXk8bnVtYmVyPjtcbiAgQElucHV0KCkgZXhwb3J0ZXI/OiBFeHBvcnRlcjxPcHRpb25zPjtcbiAgQE91dHB1dCgpIGV4cG9ydENvbXBsZXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGV4cG9ydFN0YXJ0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIERhdGEgYXJyYXkgd2hpY2ggaXMgZXh0cmFjdGVkIGZyb20gbmF0aXZlVGFibGVcbiAgICovXG4gIHByaXZhdGUgX2RhdGE6IEFycmF5PGFueT47XG5cbiAgcHJpdmF0ZSBfaXNJdGVyYXRpbmc6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbFBhZ2VJbmRleDogbnVtYmVyO1xuXG4gIHByaXZhdGUgX2lzRXhwb3J0aW5nOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgX29wdGlvbnM/OiBPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgc2VydmljZUxvY2F0b3I6IFNlcnZpY2VMb2NhdG9yU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGFFeHRyYWN0b3I6IERhdGFFeHRyYWN0b3JTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBfY2RrVGFibGU6IGFueSxcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBNdXN0IHJldHVybiB0aGUgbnVtYmVyIG9mIHBhZ2VzIG9mIHRoZSB0YWJsZVxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VDb3VudCgpOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE11c3QgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBwYWdlIHRoYXQncyBkaXNwbGF5ZWRcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRDdXJyZW50UGFnZUluZGV4KCk6IG51bWJlcjtcblxuICAvKipcbiAgICogV2hlbiBjYWxsZWQsIHRoZSBDZGtUYWJsZSBzaG91bGQgcmVuZGVyIHRoZSByb3dzIGluc2lkZSB0aGUgcGFnZSB3aG9zZSBpbmRleCBnaXZlbiBhcyBwYXJhbWV0ZXJcbiAgICogQHBhcmFtIGluZGV4IHBhZ2UgaW5kZXhcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnb1RvUGFnZShpbmRleDogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICogTXVzdCByZXR1cm4gYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHRoZSBzdWJzY3JpYmVycyBhYm91dCBwYWdlIGNoYW5nZXNcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPGFueT47XG5cblxuICAvKipcbiAgICogVHJpZ2dlcnMgcGFnZSBldmVudCBjaGFpbiB0aHVzIGV4dHJhY3RpbmcgYW5kIGV4cG9ydGluZyBhbGwgdGhlIHJvd3MgaW4gbmF0aXZldGFibGVzIGluIHBhZ2VzXG4gICAqL1xuICBleHBvcnRUYWJsZShleHBvcnRUeXBlPzogRXhwb3J0VHlwZSB8ICd4bHMnIHwgJ3hsc3gnIHwgJ2NzdicgfCAndHh0JyB8ICdqc29uJyB8ICdvdGhlcicsIG9wdGlvbnM/OiBPcHRpb25zIHwgRXhjZWxPcHRpb25zIHwgVHh0T3B0aW9ucykge1xuICAgIHRoaXMubG9hZEV4cG9ydGVyKGV4cG9ydFR5cGUpO1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuZXhwb3J0U3RhcnRlZC5lbWl0KCk7XG4gICAgdGhpcy5faXNJdGVyYXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2lzRXhwb3J0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICB0aGlzLmV4dHJhY3RUYWJsZUhlYWRlcigpO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmV4cG9ydFdpdGhQYWdpbmF0aW9uKCk7XG4gICAgfSBjYXRjaCAobm90UGFnaW5hdGVkKSB7XG4gICAgICB0aGlzLmV4cG9ydFNpbmdsZVBhZ2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRFeHBvcnRlcihleHBvcnRUeXBlOiBhbnkpIHtcbiAgICBpZiAoZXhwb3J0VHlwZSA9PT0gRXhwb3J0VHlwZS5PVEhFUi52YWx1ZU9mKCkpIHtcbiAgICAgIHRoaXMuX2V4cG9ydGVyU2VydmljZSA9IHRoaXMuZXhwb3J0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2V4cG9ydGVyU2VydmljZSA9IHRoaXMuc2VydmljZUxvY2F0b3IuZ2V0U2VydmljZShleHBvcnRUeXBlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV4cG9ydFdpdGhQYWdpbmF0aW9uKCkge1xuICAgIHRoaXMuX2luaXRpYWxQYWdlSW5kZXggPSB0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKTtcbiAgICB0aGlzLmluaXRQYWdlSGFuZGxlcigpO1xuICAgIHRoaXMuZ29Ub1BhZ2UoMCk7XG4gIH1cblxuICBwcml2YXRlIGV4cG9ydFNpbmdsZVBhZ2UoKSB7XG4gICAgdGhpcy5leHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKTtcbiAgICB0aGlzLmV4dHJhY3RUYWJsZUZvb3RlcigpO1xuICAgIHRoaXMuZXhwb3J0RXh0cmFjdGVkRGF0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKSB7XG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuY29uY2F0KHRoaXMuZGF0YUV4dHJhY3Rvci5leHRyYWN0Um93cyh0aGlzLl9jZGtUYWJsZSwgdGhpcy5oaWRkZW5Db2x1bW5zKSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRQYWdlSGFuZGxlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5nZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9pc0l0ZXJhdGluZykge1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc05leHRQYWdlKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0UGFnZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5faXNJdGVyYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5nb1RvUGFnZSh0aGlzLl9pbml0aWFsUGFnZUluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRXhwb3J0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0V4cG9ydGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0VGFibGVGb290ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0RXh0cmFjdGVkRGF0YSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV4cG9ydEV4dHJhY3RlZERhdGEoKSB7XG4gICAgdGhpcy5fZXhwb3J0ZXJTZXJ2aWNlLmV4cG9ydCh0aGlzLl9kYXRhLCB0aGlzLl9vcHRpb25zKTtcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICB0aGlzLmV4cG9ydENvbXBsZXRlZC5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RTcGVjaWFsUm93KG91dGxldDogRGF0YVJvd091dGxldCkge1xuICAgIGNvbnN0IHJvdyA9IHRoaXMuZGF0YUV4dHJhY3Rvci5leHRyYWN0Um93KHRoaXMuX2Nka1RhYmxlLCB0aGlzLmhpZGRlbkNvbHVtbnMsIG91dGxldCk7XG4gICAgaWYgKHJvdykge1xuICAgICAgdGhpcy5fZGF0YS5wdXNoKHJvdyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0VGFibGVIZWFkZXIoKSB7XG4gICAgdGhpcy5leHRyYWN0U3BlY2lhbFJvdyh0aGlzLl9jZGtUYWJsZS5faGVhZGVyUm93T3V0bGV0KTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFRhYmxlRm9vdGVyKCkge1xuICAgIHRoaXMuZXh0cmFjdFNwZWNpYWxSb3codGhpcy5fY2RrVGFibGUuX2Zvb3RlclJvd091dGxldCk7XG4gIH1cblxuICBwdWJsaWMgaGFzTmV4dFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpIDwgdGhpcy5nZXRQYWdlQ291bnQoKSAtIDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5leHRQYWdlKCk6IHZvaWQge1xuICAgIHRoaXMuZ29Ub1BhZ2UodGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCkgKyAxKTtcbiAgfVxuXG59XG5cbiJdfQ==