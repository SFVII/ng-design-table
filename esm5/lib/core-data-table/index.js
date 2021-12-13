import { __extends, __read, __spread, __values } from "tslib";
import { BehaviorSubject, from } from 'rxjs';
import { debounceTime, pluck, share, switchMap } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';
var CoreMatTable = /** @class */ (function (_super) {
    __extends(CoreMatTable, _super);
    function CoreMatTable(data, sortRules, rangeRules, size, detailRaws, emptyRow, filterT) {
        if (size === void 0) { size = 20; }
        if (detailRaws === void 0) { detailRaws = true; }
        if (emptyRow === void 0) { emptyRow = false; }
        if (filterT === void 0) { filterT = {}; }
        var _this = _super.call(this) || this;
        _this.totalElements = 0;
        _this.number = 0;
        _this.startWith = 0;
        _this._totalElements = new BehaviorSubject(0);
        _this.emptyRow = false;
        _this.filterTable = {};
        _this.size = size;
        _this.data = __spread(data);
        _this.dataAfterSearch = [];
        _this.backUpData = __spread(data);
        //this.totalElements = data.length;
        _this.emptyRow = emptyRow;
        _this.filterTable = filterT;
        _this.pageSort = new BehaviorSubject(sortRules);
        _this.pageFilterDate = new BehaviorSubject(null);
        _this.pageFilter = new BehaviorSubject('');
        _this.pageNumber = new BehaviorSubject(_this.startWith);
        _this._totalElements.pipe(debounceTime(200)).subscribe(function (itemsLength) {
            console.log('_totalElements', itemsLength);
            _this.totalElements = itemsLength;
        });
        _this.page$ = _this.pageSort.pipe(switchMap(function (sortAction) { return _this.pageFilter.pipe(debounceTime(500))
            .pipe(switchMap(function (filter) { return _this.pageFilterDate.pipe(switchMap(function (range) { return _this.pageNumber.pipe(switchMap(function (page) { return from([{
                content: _this.slice(_this.sortData(_this.filterDataObject(_this.filterData(_this.filterDateRange(_this.data, range), filter), _this.filterTable), sortAction), page, _this.size, detailRaws)
            }]); }), share()); })); })); }));
        return _this;
    }
    CoreMatTable.prototype.filterDateRange = function (data, range) {
        if (!range || (!range.valueStart && !range.valueEnd)) {
            return data;
        }
        else if (data && data.length) {
            return data.filter(function (e) {
                if (range.valueStart && range.valueEnd) {
                    return new Date(e[range.active]) >= new Date(range.valueStart)
                        && new Date(e[range.active]) <= new Date(range.valueEnd);
                }
                else if (range.valueStart && !range.valueEnd) {
                    return new Date(e[range.active]) >= new Date(range.valueStart);
                }
                else if (!range.valueStart && range.valueEnd) {
                    return new Date(e[range.active]) <= new Date(range.valueEnd);
                }
            });
        }
        else {
            return this.data;
        }
    };
    CoreMatTable.prototype.ponderation = function (str, searchKey) {
        var e_1, _a;
        var stack = str.split(' ');
        var pond = 0;
        try {
            for (var stack_1 = __values(stack), stack_1_1 = stack_1.next(); !stack_1_1.done; stack_1_1 = stack_1.next()) {
                var s = stack_1_1.value;
                var search = s.replace(new RegExp(' ', 'g'), '');
                if (search && search.includes(searchKey)) {
                    pond++;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (stack_1_1 && !stack_1_1.done && (_a = stack_1.return)) _a.call(stack_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return pond;
    };
    CoreMatTable.prototype.filterData = function (data, filter) {
        var e_2, _a, e_3, _b;
        if (data.length === 0 && this.data) {
            data = this.data;
        }
        var result = [];
        if (typeof filter === 'object') {
            return this.filterDataObject(data, filter);
        }
        else if (filter && filter.replace(/[^a-zA-Z ]/g, ' ')) {
            try {
                for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var e = data_1_1.value;
                    e.pond = 0;
                    var dataRaw = JSON.stringify(e).toLowerCase()
                        .replace(/[^a-zA-Z0-9 ]/g, ' ');
                    var stack = filter.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ' ')
                        .split(' ');
                    var combination = 0;
                    try {
                        for (var stack_2 = (e_3 = void 0, __values(stack)), stack_2_1 = stack_2.next(); !stack_2_1.done; stack_2_1 = stack_2.next()) {
                            var k = stack_2_1.value;
                            if (dataRaw.includes(k)) {
                                var pond = this.ponderation(dataRaw, k);
                                if (!e.pond) {
                                    e.pond = 0;
                                }
                                e.pond += pond;
                                combination++;
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (stack_2_1 && !stack_2_1.done && (_b = stack_2.return)) _b.call(stack_2);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    if (e.pond && combination === stack.length) {
                        result.push(e);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.dataAfterSearch = result.filter((function (e) { return e.pond; })).sort(function (a, b) { return a > b ? 1 : (a < b ? -1 : 0); });
            this._totalElements.next(this.dataAfterSearch.length);
            return result.filter((function (e) { return e.pond; })).sort(function (a, b) { return a > b ? 1 : (a < b ? -1 : 0); });
        }
        else {
            this.dataAfterSearch = data;
            this._totalElements.next(this.dataAfterSearch.length);
            return data;
        }
    };
    CoreMatTable.prototype.filterDataObject = function (data, filter) {
        var e_4, _a;
        if (data.length === 0 && this.data) {
            //data = this.data;
            return data;
        }
        var result = [];
        if (filter && Object.keys(filter).length > 0) {
            var _loop_1 = function (e) {
                var ok = true;
                e.pond = 0;
                Object.keys(filter).forEach(function (key) {
                    if (filter[key].includes(e[key])) {
                        //e.pond += 1;
                    }
                    else {
                        //e.pond = 0;
                        ok = false;
                    }
                });
                //if (e.pond) {
                if (ok) {
                    result.push(e);
                }
            };
            try {
                for (var data_2 = __values(data), data_2_1 = data_2.next(); !data_2_1.done; data_2_1 = data_2.next()) {
                    var e = data_2_1.value;
                    _loop_1(e);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (data_2_1 && !data_2_1.done && (_a = data_2.return)) _a.call(data_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
            this.dataAfterSearch = result;
            this._totalElements.next(this.dataAfterSearch.length);
            return result;
            //return result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        }
        else {
            return data;
        }
    };
    CoreMatTable.prototype.sortData = function (data, sortAction) {
        var _this = this;
        if (sortAction.direction !== '') {
            return data.sort(function (a, b) {
                if (a === 'empty' || b === 'empty') {
                    return 0;
                }
                return _this.compare(a[sortAction.active], b[sortAction.active], sortAction.direction === 'asc');
            });
        }
        else {
            return data;
        }
    };
    CoreMatTable.prototype.compare = function (a, b, isAsc) {
        if (!a) {
            a = null;
        }
        if (!b) {
            b = null;
        }
        return (((Array.isArray(a) ? a.length : a) > ((Array.isArray(b) ? b.length : b)) ? -1 : ((Array.isArray(b) ? b.length : b)) > ((Array.isArray(a) ? a.length : a)) ? 1 : 0) * (isAsc ? -1 : 1));
    };
    CoreMatTable.prototype.fetch = function (page) {
        this.pageNumber.next(page);
        this.number = page;
    };
    CoreMatTable.prototype.sortIt = function (sortIdea) {
        this.pageSort.next(sortIdea);
    };
    CoreMatTable.prototype.filter = function (myFilter) {
        if (!myFilter && this.data || !myFilter.trim() && this.data) {
            this._totalElements.next(this.data.length);
        }
        this.pageFilter.next(myFilter.toString());
        /*if (!myFilter.target.value || !myFilter.target.value.trim()) {
          this.totalElements = this.data.length;
        }
        this.pageFilter.next(myFilter.target.value);*/
    };
    CoreMatTable.prototype.filterDate = function (dateFilter) {
        this.pageFilterDate.next(dateFilter);
    };
    CoreMatTable.prototype.connect = function () {
        return this.page$.pipe(pluck('content'));
    };
    CoreMatTable.prototype.disconnect = function () {
    };
    CoreMatTable.prototype.slice = function (data, start, end, detailRow) {
        var e_5, _a;
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = 20; }
        if (detailRow === void 0) { detailRow = true; }
        var rows = [];
        if (data.length) {
            data = data.slice(start * end, (start * end) + end);
            var cursor = 1;
            if (this.emptyRow) {
                try {
                    for (var data_3 = __values(data), data_3_1 = data_3.next(); !data_3_1.done; data_3_1 = data_3.next()) {
                        var d = data_3_1.value;
                        if (rows[cursor] !== 'empty') {
                            rows.push('empty');
                        }
                        rows.push(d);
                        cursor++;
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (data_3_1 && !data_3_1.done && (_a = data_3.return)) _a.call(data_3);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                return rows;
            }
            this._totalElements.next(this.dataAfterSearch.length);
            return data;
        }
        else {
            this._totalElements.next(this.dataAfterSearch.length);
            return data;
        }
    };
    return CoreMatTable;
}(DataSource));
export { CoreMatTable };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLWRhdGEtdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFzQixNQUFNLE1BQU0sQ0FBQztBQUdoRSxPQUFPLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBNENwRDtJQUFrQyxnQ0FBbUI7SUFtQm5ELHNCQUFZLElBQVMsRUFBRSxTQUFlLEVBQzFCLFVBQStCLEVBQUUsSUFBUyxFQUFFLFVBQTBCLEVBQ3RFLFFBQXlCLEVBQUUsT0FBaUI7UUFEWCxxQkFBQSxFQUFBLFNBQVM7UUFBRSwyQkFBQSxFQUFBLGlCQUEwQjtRQUN0RSx5QkFBQSxFQUFBLGdCQUF5QjtRQUFFLHdCQUFBLEVBQUEsWUFBaUI7UUFGeEQsWUFHRSxpQkFBTyxTQW9DUjtRQXhETSxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBTVgsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUliLG9CQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEMsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQU92QixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixLQUFJLENBQUMsSUFBSSxZQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLEtBQUksQ0FBQyxVQUFVLFlBQU8sSUFBSSxDQUFDLENBQUM7UUFDNUIsbUNBQW1DO1FBQ25DLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLEtBQUks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QyxBQWhQRCxDQUFrQyxVQUFVLEdBZ1AzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBmcm9tLCBPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBwbHVjaywgc2hhcmUsIHN3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnQge1xuICBhY3RpdmU6IHN0cmluZztcbiAgZGlyZWN0aW9uOiAnYXNjJyB8ICdkZXNjJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlUmVxdWVzdCB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuICBzb3J0PzogU29ydDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlIHtcbiAgY29udGVudDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvcmVNYXRUYWJsZUludGVyZmFjZSB7XG4gIHBhZ2UkOiBPYnNlcnZhYmxlPGFueT47XG4gIHRvdGFsRWxlbWVudHM6IG51bWJlcjtcbiAgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIG51bWJlcjogbnVtYmVyO1xuICBkYXRhOiBhbnlbXTtcbiAgc2l6ZTogbnVtYmVyO1xuICBmZXRjaDogKHBhZ2U6IGFueSkgPT4gdm9pZDtcbiAgY29ubmVjdDogKCkgPT4gdm9pZDtcbiAgZGlzY29ubmVjdDogKCkgPT4gdm9pZDtcbiAgc29ydDogTWF0U29ydDtcbiAgc29ydEl0OiAoc29ydGlkZWE6IGFueSkgPT4gdm9pZDtcbiAgZmlsdGVyOiAobXlGaWx0ZXI6IGFueSkgPT4gdm9pZDtcbiAgZmlsdGVyRGF0YTogKGRhdGE6IGFueSwgZmlsdGVyOiBhbnkpID0+IHZvaWRcbiAgZmlsdGVyRGF0ZTogKGRhdGVGaWx0ZXI6IEZpbHRlckRhdGVJbnRlcmZhY2UpID0+IHZvaWQ7XG4gIHBhZ2VOdW1iZXI6IFN1YmplY3Q8bnVtYmVyPjtcbiAgc3RhcnRXaXRoOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJEYXRlSW50ZXJmYWNlIHtcbiAgYWN0aXZlOiBzdHJpbmc7XG4gIHZhbHVlU3RhcnQ6IERhdGU7XG4gIHZhbHVlRW5kOiBEYXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBDb3JlTWF0VGFibGUgZXh0ZW5kcyBEYXRhU291cmNlPEVsZW1lbnQ+IHtcbiAgcHVibGljIHBhZ2UkOiBPYnNlcnZhYmxlPFBhZ2U+O1xuICBwdWJsaWMgdG90YWxFbGVtZW50cyA9IDA7XG4gIHB1YmxpYyBudW1iZXIgPSAwO1xuICBwdWJsaWMgc2l6ZTogYW55O1xuICBwdWJsaWMgc29ydDogTWF0U29ydDtcbiAgcHVibGljIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBwdWJsaWMgZGF0YTogYW55O1xuICBwdWJsaWMgcGFnZU51bWJlcjogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj47XG4gIHB1YmxpYyBzdGFydFdpdGggPSAwO1xuICBwcml2YXRlIHBhZ2VTb3J0OiBCZWhhdmlvclN1YmplY3Q8U29ydD47XG4gIHByaXZhdGUgcGFnZUZpbHRlcjogQmVoYXZpb3JTdWJqZWN0PGFueT47XG4gIHByaXZhdGUgcGFnZUZpbHRlckRhdGU6IEJlaGF2aW9yU3ViamVjdDxGaWx0ZXJEYXRlSW50ZXJmYWNlPjtcbiAgcHJpdmF0ZSBfdG90YWxFbGVtZW50cyA9IG5ldyBCZWhhdmlvclN1YmplY3QoMCk7XG4gIHByaXZhdGUgYmFja1VwRGF0YTogYW55O1xuICBwcml2YXRlIGVtcHR5Um93ID0gZmFsc2U7XG4gIHByaXZhdGUgZmlsdGVyVGFibGUgPSB7fTtcbiAgcHJpdmF0ZSBkYXRhQWZ0ZXJTZWFyY2g7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogYW55LCBzb3J0UnVsZXM6IFNvcnQsXG4gICAgICAgICAgICAgIHJhbmdlUnVsZXM6IEZpbHRlckRhdGVJbnRlcmZhY2UsIHNpemUgPSAyMCwgZGV0YWlsUmF3czogYm9vbGVhbiA9IHRydWUsXG4gICAgICAgICAgICAgIGVtcHR5Um93OiBib29sZWFuID0gZmFsc2UsIGZpbHRlclQ6IGFueSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuZGF0YSA9IFsuLi5kYXRhXTtcbiAgICB0aGlzLmRhdGFBZnRlclNlYXJjaCA9IFtdO1xuICAgIHRoaXMuYmFja1VwRGF0YSA9IFsuLi5kYXRhXTtcbiAgICAvL3RoaXMudG90YWxFbGVtZW50cyA9IGRhdGEubGVuZ3RoO1xuICAgIHRoaXMuZW1wdHlSb3cgPSBlbXB0eVJvdztcbiAgICB0aGlzLmZpbHRlclRhYmxlID0gZmlsdGVyVDtcbiAgICB0aGlzLnBhZ2VTb3J0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTb3J0Pihzb3J0UnVsZXMpO1xuICAgIHRoaXMucGFnZUZpbHRlckRhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZpbHRlckRhdGVJbnRlcmZhY2U+KG51bGwpO1xuICAgIHRoaXMucGFnZUZpbHRlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PignJyk7XG4gICAgdGhpcy5wYWdlTnVtYmVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KHRoaXMuc3RhcnRXaXRoKTtcbiAgICB0aGlzLl90b3RhbEVsZW1lbnRzLnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpLnN1YnNjcmliZSgoaXRlbXNMZW5ndGg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ190b3RhbEVsZW1lbnRzJywgaXRlbXNMZW5ndGgpO1xuICAgICAgdGhpcy50b3RhbEVsZW1lbnRzID0gaXRlbXNMZW5ndGg7XG5cbiAgICB9KTtcblxuICAgIHRoaXMucGFnZSQgPSB0aGlzLnBhZ2VTb3J0LnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoc29ydEFjdGlvbiA9PiB0aGlzLnBhZ2VGaWx0ZXIucGlwZShkZWJvdW5jZVRpbWUoNTAwKSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKGZpbHRlciA9PiB0aGlzLnBhZ2VGaWx0ZXJEYXRlLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAocmFuZ2UgPT4gdGhpcy5wYWdlTnVtYmVyLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcChwYWdlID0+IGZyb20oW3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRhT2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0ZVJhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEsIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICApLCBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICApLCB0aGlzLmZpbHRlclRhYmxlKSwgc29ydEFjdGlvblxuICAgICAgICAgICAgICAgICAgKSwgcGFnZSwgdGhpcy5zaXplLCBkZXRhaWxSYXdzKVxuICAgICAgICAgICAgICB9XSkpLCBzaGFyZSgpKVxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApKSkpO1xuICB9XG5cbiAgZmlsdGVyRGF0ZVJhbmdlKGRhdGE6IGFueSwgcmFuZ2U6IEZpbHRlckRhdGVJbnRlcmZhY2UpIHtcbiAgICBpZiAoIXJhbmdlIHx8ICghcmFuZ2UudmFsdWVTdGFydCAmJiAhcmFuZ2UudmFsdWVFbmQpKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBkYXRhLmZpbHRlcigoZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyYW5nZS52YWx1ZVN0YXJ0ICYmIHJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPj0gbmV3IERhdGUocmFuZ2UudmFsdWVTdGFydClcbiAgICAgICAgICAgICYmIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPD0gbmV3IERhdGUocmFuZ2UudmFsdWVFbmQpO1xuICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLnZhbHVlU3RhcnQgJiYgIXJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPj0gbmV3IERhdGUocmFuZ2UudmFsdWVTdGFydCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXJhbmdlLnZhbHVlU3RhcnQgJiYgcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA8PSBuZXcgRGF0ZShyYW5nZS52YWx1ZUVuZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgfVxuXG4gIHBvbmRlcmF0aW9uKHN0cjogc3RyaW5nLCBzZWFyY2hLZXk6IHN0cmluZykge1xuICAgIGxldCBzdGFjazogc3RyaW5nW10gPSBzdHIuc3BsaXQoJyAnKTtcbiAgICBsZXQgcG9uZDogbnVtYmVyID0gMDtcbiAgICBmb3IgKGxldCBzIG9mIHN0YWNrKSB7XG4gICAgICBsZXQgc2VhcmNoOiBzdHJpbmcgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cCgnICcsICdnJyksICcnKTtcbiAgICAgIGlmIChzZWFyY2ggJiYgc2VhcmNoLmluY2x1ZGVzKHNlYXJjaEtleSkpIHtcbiAgICAgICAgcG9uZCsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcG9uZDtcbiAgfVxuXG4gIGZpbHRlckRhdGEoZGF0YTogYW55LCBmaWx0ZXI6IGFueSkge1xuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmRhdGEpIHtcbiAgICAgIGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGFPYmplY3QoZGF0YSwgZmlsdGVyKTtcbiAgICB9IGVsc2UgaWYgKGZpbHRlciAmJiBmaWx0ZXIucmVwbGFjZSgvW15hLXpBLVogXS9nLCAnICcpKSB7XG4gICAgICBmb3IgKGxldCBlIG9mIGRhdGEpIHtcbiAgICAgICAgZS5wb25kID0gMDtcbiAgICAgICAgY29uc3QgZGF0YVJhdzogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZSkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csICcgJyk7XG4gICAgICAgIGNvbnN0IHN0YWNrOiBzdHJpbmdbXSA9IGZpbHRlci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgJyAnKVxuICAgICAgICAgIC5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgY29tYmluYXRpb246IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGsgb2Ygc3RhY2spIHtcbiAgICAgICAgICBpZiAoZGF0YVJhdy5pbmNsdWRlcyhrKSkge1xuICAgICAgICAgICAgY29uc3QgcG9uZDogbnVtYmVyID0gdGhpcy5wb25kZXJhdGlvbihkYXRhUmF3LCBrKTtcbiAgICAgICAgICAgIGlmICghZS5wb25kKSB7XG4gICAgICAgICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnBvbmQgKz0gcG9uZDtcbiAgICAgICAgICAgIGNvbWJpbmF0aW9uKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLnBvbmQgJiYgY29tYmluYXRpb24gPT09IHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGUpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YUFmdGVyU2VhcmNoID0gcmVzdWx0LmZpbHRlcigoZSA9PiBlLnBvbmQpKS5zb3J0KChhLCBiKSA9PiBhID4gYiA/IDEgOiAoYSA8IGIgPyAtMSA6IDApKTtcbiAgICAgIHRoaXMuX3RvdGFsRWxlbWVudHMubmV4dCh0aGlzLmRhdGFBZnRlclNlYXJjaC5sZW5ndGgpO1xuICAgICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YUFmdGVyU2VhcmNoID0gZGF0YTtcbiAgICAgIHRoaXMuX3RvdGFsRWxlbWVudHMubmV4dCh0aGlzLmRhdGFBZnRlclNlYXJjaC5sZW5ndGgpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyRGF0YU9iamVjdChkYXRhOiBhbnksIGZpbHRlcjogYW55KSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwICYmIHRoaXMuZGF0YSkge1xuICAgICAgLy9kYXRhID0gdGhpcy5kYXRhO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICBpZiAoZmlsdGVyICYmIE9iamVjdC5rZXlzKGZpbHRlcikubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgZSBvZiBkYXRhKSB7XG4gICAgICAgIGxldCBvayA9IHRydWU7XG4gICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgIE9iamVjdC5rZXlzKGZpbHRlcikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGlmIChmaWx0ZXJba2V5XS5pbmNsdWRlcyhlW2tleV0pKSB7XG4gICAgICAgICAgICAvL2UucG9uZCArPSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2UucG9uZCA9IDA7XG4gICAgICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vaWYgKGUucG9uZCkge1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2ggPSByZXN1bHQ7XG4gICAgICB0aGlzLl90b3RhbEVsZW1lbnRzLm5leHQodGhpcy5kYXRhQWZ0ZXJTZWFyY2gubGVuZ3RoKTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIC8vcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIHNvcnREYXRhKGRhdGE6IGFueSwgc29ydEFjdGlvbjogYW55KSB7XG4gICAgaWYgKHNvcnRBY3Rpb24uZGlyZWN0aW9uICE9PSAnJykge1xuICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGEgPT09ICdlbXB0eScgfHwgYiA9PT0gJ2VtcHR5Jykge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUoYVtzb3J0QWN0aW9uLmFjdGl2ZV0sIGJbc29ydEFjdGlvbi5hY3RpdmVdLCBzb3J0QWN0aW9uLmRpcmVjdGlvbiA9PT0gJ2FzYycpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmUoYTogbnVtYmVyIHwgc3RyaW5nIHwgYW55W10sIGI6IG51bWJlciB8IHN0cmluZyB8IGFueVtdLCBpc0FzYzogYm9vbGVhbikge1xuICAgIGlmICghYSkge1xuICAgICAgYSA9IG51bGw7XG4gICAgfVxuICAgIGlmICghYikge1xuICAgICAgYiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoKChBcnJheS5pc0FycmF5KGEpID8gYS5sZW5ndGggOiBhKSA+ICgoQXJyYXkuaXNBcnJheShiKSA/IGIubGVuZ3RoIDogYikpID8gLTEgOiAoKEFycmF5LmlzQXJyYXkoYikgPyBiLmxlbmd0aCA6IGIpKSA+ICgoQXJyYXkuaXNBcnJheShhKSA/IGEubGVuZ3RoIDogYSkpID8gMSA6IDApICogKGlzQXNjID8gLTEgOiAxKSk7XG4gIH1cblxuICBmZXRjaChwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIubmV4dChwYWdlKTtcbiAgICB0aGlzLm51bWJlciA9IHBhZ2U7XG4gIH1cblxuICBzb3J0SXQoc29ydElkZWE6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFnZVNvcnQubmV4dChzb3J0SWRlYSk7XG4gIH1cblxuICBmaWx0ZXIobXlGaWx0ZXI6IGFueSk6IHZvaWQge1xuICAgIGlmICghbXlGaWx0ZXIgJiYgdGhpcy5kYXRhIHx8ICFteUZpbHRlci50cmltKCkgJiYgdGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLl90b3RhbEVsZW1lbnRzLm5leHQodGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgfVxuICAgIHRoaXMucGFnZUZpbHRlci5uZXh0KG15RmlsdGVyLnRvU3RyaW5nKCkpO1xuICAgIC8qaWYgKCFteUZpbHRlci50YXJnZXQudmFsdWUgfHwgIW15RmlsdGVyLnRhcmdldC52YWx1ZS50cmltKCkpIHtcbiAgICAgIHRoaXMudG90YWxFbGVtZW50cyA9IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMucGFnZUZpbHRlci5uZXh0KG15RmlsdGVyLnRhcmdldC52YWx1ZSk7Ki9cbiAgfVxuXG4gIGZpbHRlckRhdGUoZGF0ZUZpbHRlcjogRmlsdGVyRGF0ZUludGVyZmFjZSk6IHZvaWQge1xuICAgIHRoaXMucGFnZUZpbHRlckRhdGUubmV4dChkYXRlRmlsdGVyKTtcbiAgfVxuXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKHBsdWNrKCdjb250ZW50JykpO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHNsaWNlKGRhdGE6IGFueVtdLCBzdGFydDogbnVtYmVyID0gMCwgZW5kOiBudW1iZXIgPSAyMCwgZGV0YWlsUm93OiBib29sZWFuID0gdHJ1ZSk6IGFueSB7XG4gICAgY29uc3Qgcm93cyA9IFtdO1xuICAgIGlmIChkYXRhLmxlbmd0aCkge1xuICAgICAgZGF0YSA9IGRhdGEuc2xpY2Uoc3RhcnQgKiBlbmQsIChzdGFydCAqIGVuZCkgKyBlbmQpO1xuICAgICAgbGV0IGN1cnNvciA9IDE7XG4gICAgICBpZiAodGhpcy5lbXB0eVJvdykge1xuICAgICAgICBmb3IgKGNvbnN0IGQgb2YgZGF0YSkge1xuICAgICAgICAgIGlmIChyb3dzW2N1cnNvcl0gIT09ICdlbXB0eScpIHtcbiAgICAgICAgICAgIHJvd3MucHVzaCgnZW1wdHknKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcm93cy5wdXNoKGQpO1xuICAgICAgICAgIGN1cnNvcisrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgICAgfVxuICAgICAgdGhpcy5fdG90YWxFbGVtZW50cy5uZXh0KHRoaXMuZGF0YUFmdGVyU2VhcmNoLmxlbmd0aCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdG90YWxFbGVtZW50cy5uZXh0KHRoaXMuZGF0YUFmdGVyU2VhcmNoLmxlbmd0aCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==