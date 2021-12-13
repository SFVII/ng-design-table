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
        _this._totalElements.subscribe(function (page) { return _this.totalElements = page; });
        _this.page$ = _this.pageSort.pipe(switchMap(function (sortAction) { return _this.pageFilter.pipe(debounceTime(500))
            .pipe(switchMap(function (filter) { return _this.pageFilterDate.pipe(switchMap(function (range) { return _this.pageNumber.pipe(switchMap(function (page) { return from([{
                content: _this.slice(_this.sortData(_this.filterDataObject(_this.filterData(_this.filterDateRange(_this.data, range), filter), _this.filterTable), sortAction), page, _this.size, detailRaws)
            }]); }), share()); })); })); }));
        return _this;
        /* if (Object.keys(this.filterTable).length > 0) {
           this.page$ = this.page$.pipe(
             switchMap(sortAction2 => this.pageFilter.pipe(debounceTime(500))
               .pipe(
                 switchMap(filter => this.pageFilterDate.pipe(
                   switchMap(range2 => this.pageNumber.pipe(
                     switchMap(page2 => from([{
                       content: this.slice(
                         this.sortData(
                           this.filterDataObject(
                             this.filterDateRange(
                               this.dataAfterSearch, range2
                             ), this.filterTable
                           ), sortAction2
                         ), page2, this.size, detailRaws)
                     }])), share())
                   ))
                 ))));
         }
    
         /*
    
         (likes: any[]) => {
            return likes.length === 0 ?
              Observable.of(likes) :
              Observable.combineLatest(
                likes.map(like => this.af.database.object("/citations/" + like.$key))
            )
          }
    
         this.page$ = this.pageFilterDate.pipe(
            startWith(rangeRules),
            switchMap(range => this.pageFilter.pipe(debounceTime(500)).pipe(
              startWith(''),
              switchMap(filter => this.pageSort.pipe(
                startWith(sortRules),
                switchMap(sortAction => this.pageNumber.pipe(
                  startWith(this.startWith),
                  switchMap(page => from([{
                    content: this.slice(
                      this.sortData(
                        this.filterData(
                          this.filterDateRange(
                            this.data, range
                          ), filter
                        ), sortAction
                      ), page, this.size, detailRaws)
                  }])),
                  share()
                ))))
            )));*/
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
        if (this.number > 0)
            this.fetch(0);
        /*if (data.length === 0 && this.data) {
          data = this.data;
        }*/
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
            return result.filter((function (e) { return e.pond; })).sort(function (a, b) { return a > b ? 1 : (a < b ? -1 : 0); });
        }
        else {
            this.dataAfterSearch = data;
            return data;
        }
    };
    CoreMatTable.prototype.filterDataObject = function (data, filter) {
        var e_4, _a;
        if (this.number > 0)
            this.fetch(0);
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
        this.number = 0;
    };
    CoreMatTable.prototype.sortIt = function (sortidea) {
        this.pageSort.next(sortidea);
    };
    CoreMatTable.prototype.filter = function (myFilter) {
        if (!myFilter && this.data || !myFilter.trim() && this.data) {
            this._totalElements.next(this.data.length);
        }
        this.pageFilter.next(myFilter.toString());
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
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = 20; }
        if (detailRow === void 0) { detailRow = true; }
        var rows = [];
        this._totalElements.next(data.length);
        if (data.length) {
            data = data.slice(start * end, (start * end) + end);
            if (this.emptyRow) {
                data.forEach(function (d) {
                    rows.push('empty');
                    rows.push(d);
                });
                return rows;
            }
            return data;
        }
        else {
            // data = data.slice(start * end, (start * end) + end);
            // if (this.emptyRow) {
            //  data.forEach((d) => {
            //    rows.push('empty');
            //    rows.push(d);
            // });
            //  return rows;
            // }
            return rows;
        }
    };
    return CoreMatTable;
}(DataSource));
export { CoreMatTable };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLWRhdGEtdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFzQixNQUFNLE1BQU0sQ0FBQztBQUdoRSxPQUFPLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBNENwRDtJQUFrQyxnQ0FBbUI7SUFtQm5ELHNCQUFZLElBQVMsRUFBRSxTQUFlLEVBQzFCLFVBQStCLEVBQUUsSUFBUyxFQUFFLFVBQTBCLEVBQ3RFLFFBQXlCLEVBQUUsT0FBaUI7UUFEWCxxQkFBQSxFQUFBLFNBQVM7UUFBRSwyQkFBQSxFQUFBLGlCQUEwQjtRQUN0RSx5QkFBQSxFQUFBLGdCQUF5QjtRQUFFLHdCQUFBLEVBQUEsWUFBaUI7UUFGeEQsWUFHRSxpQkFBTyxTQXFGUjtRQXpHTSxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBTVgsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUliLG9CQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEMsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQU92QixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixLQUFJLENBQUMsSUFBSSxZQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLEtBQUksQ0FBQyxVQUFVLFlBQU8sSUFBSSxDQUFDLENBQUM7UUFDNUIsbUNBQW1DO1FBQ25DLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLEtBQUks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QyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQVUsQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUM7WUFDbEcsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsQ0FBMEIsRUFBRSxDQUEwQixFQUFFLEtBQWM7UUFDNUUsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNOLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDVjtRQUNELElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDTixDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ1Y7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pNLENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sSUFBWTtRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLFFBQWE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxRQUFhO1FBQ2xCLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQzNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLFVBQStCO1FBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw4QkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsaUNBQVUsR0FBVjtJQUNBLENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sSUFBVyxFQUFFLEtBQWlCLEVBQUUsR0FBZ0IsRUFBRSxTQUF5QjtRQUE5RCxzQkFBQSxFQUFBLFNBQWlCO1FBQUUsb0JBQUEsRUFBQSxRQUFnQjtRQUFFLDBCQUFBLEVBQUEsZ0JBQXlCO1FBQy9FLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNwRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO29CQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLHVEQUF1RDtZQUN2RCx1QkFBdUI7WUFDdkIseUJBQXlCO1lBQ3pCLHlCQUF5QjtZQUN6QixtQkFBbUI7WUFDbkIsTUFBTTtZQUNOLGdCQUFnQjtZQUNoQixJQUFJO1lBQ0osT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUE3UkQsQ0FBa0MsVUFBVSxHQTZSM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgZnJvbSwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7TWF0U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQge2RlYm91bmNlVGltZSwgcGx1Y2ssIHNoYXJlLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBTb3J0IHtcbiAgYWN0aXZlOiBzdHJpbmc7XG4gIGRpcmVjdGlvbjogJ2FzYycgfCAnZGVzYyc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVJlcXVlc3Qge1xuICBwYWdlOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgc29ydD86IFNvcnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZSB7XG4gIGNvbnRlbnQ6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb3JlTWF0VGFibGVJbnRlcmZhY2Uge1xuICBwYWdlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICB0b3RhbEVsZW1lbnRzOiBudW1iZXI7XG4gIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBudW1iZXI6IG51bWJlcjtcbiAgZGF0YTogYW55W107XG4gIHNpemU6IG51bWJlcjtcbiAgZmV0Y2g6IChwYWdlOiBhbnkpID0+IHZvaWQ7XG4gIGNvbm5lY3Q6ICgpID0+IHZvaWQ7XG4gIGRpc2Nvbm5lY3Q6ICgpID0+IHZvaWQ7XG4gIHNvcnQ6IE1hdFNvcnQ7XG4gIHNvcnRJdDogKHNvcnRpZGVhOiBhbnkpID0+IHZvaWQ7XG4gIGZpbHRlcjogKG15RmlsdGVyOiBhbnkpID0+IHZvaWQ7XG4gIGZpbHRlckRhdGE6IChkYXRhOiBhbnksIGZpbHRlcjogYW55KSA9PiB2b2lkXG4gIGZpbHRlckRhdGU6IChkYXRlRmlsdGVyOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKSA9PiB2b2lkO1xuICBwYWdlTnVtYmVyOiBTdWJqZWN0PG51bWJlcj47XG4gIHN0YXJ0V2l0aDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyRGF0ZUludGVyZmFjZSB7XG4gIGFjdGl2ZTogc3RyaW5nO1xuICB2YWx1ZVN0YXJ0OiBEYXRlO1xuICB2YWx1ZUVuZDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgQ29yZU1hdFRhYmxlIGV4dGVuZHMgRGF0YVNvdXJjZTxFbGVtZW50PiB7XG4gIHB1YmxpYyBwYWdlJDogT2JzZXJ2YWJsZTxQYWdlPjtcbiAgcHVibGljIHRvdGFsRWxlbWVudHMgPSAwO1xuICBwdWJsaWMgbnVtYmVyID0gMDtcbiAgcHVibGljIHNpemU6IGFueTtcbiAgcHVibGljIHNvcnQ6IE1hdFNvcnQ7XG4gIHB1YmxpYyBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgcHVibGljIGRhdGE6IGFueTtcbiAgcHVibGljIHBhZ2VOdW1iZXI6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+O1xuICBwdWJsaWMgc3RhcnRXaXRoID0gMDtcbiAgcHJpdmF0ZSBwYWdlU29ydDogQmVoYXZpb3JTdWJqZWN0PFNvcnQ+O1xuICBwcml2YXRlIHBhZ2VGaWx0ZXI6IEJlaGF2aW9yU3ViamVjdDxhbnk+O1xuICBwcml2YXRlIHBhZ2VGaWx0ZXJEYXRlOiBCZWhhdmlvclN1YmplY3Q8RmlsdGVyRGF0ZUludGVyZmFjZT47XG4gIHByaXZhdGUgX3RvdGFsRWxlbWVudHMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuICBwcml2YXRlIGJhY2tVcERhdGE6IGFueTtcbiAgcHJpdmF0ZSBlbXB0eVJvdyA9IGZhbHNlO1xuICBwcml2YXRlIGZpbHRlclRhYmxlID0ge307XG4gIHByaXZhdGUgZGF0YUFmdGVyU2VhcmNoO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSwgc29ydFJ1bGVzOiBTb3J0LFxuICAgICAgICAgICAgICByYW5nZVJ1bGVzOiBGaWx0ZXJEYXRlSW50ZXJmYWNlLCBzaXplID0gMjAsIGRldGFpbFJhd3M6IGJvb2xlYW4gPSB0cnVlLFxuICAgICAgICAgICAgICBlbXB0eVJvdzogYm9vbGVhbiA9IGZhbHNlLCBmaWx0ZXJUOiBhbnkgPSB7fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmRhdGEgPSBbLi4uZGF0YV07XG4gICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2ggPSBbXTtcbiAgICB0aGlzLmJhY2tVcERhdGEgPSBbLi4uZGF0YV07XG4gICAgLy90aGlzLnRvdGFsRWxlbWVudHMgPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLmVtcHR5Um93ID0gZW1wdHlSb3c7XG4gICAgdGhpcy5maWx0ZXJUYWJsZSA9IGZpbHRlclQ7XG4gICAgdGhpcy5wYWdlU29ydCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U29ydD4oc29ydFJ1bGVzKTtcbiAgICB0aGlzLnBhZ2VGaWx0ZXJEYXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGaWx0ZXJEYXRlSW50ZXJmYWNlPihudWxsKTtcbiAgICB0aGlzLnBhZ2VGaWx0ZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oJycpO1xuICAgIHRoaXMucGFnZU51bWJlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPih0aGlzLnN0YXJ0V2l0aCk7XG4gICAgdGhpcy5fdG90YWxFbGVtZW50cy5zdWJzY3JpYmUoKHBhZ2U6IG51bWJlcikgPT4gdGhpcy50b3RhbEVsZW1lbnRzID0gcGFnZSk7XG5cbiAgICB0aGlzLnBhZ2UkID0gdGhpcy5wYWdlU29ydC5waXBlKFxuICAgICAgc3dpdGNoTWFwKHNvcnRBY3Rpb24gPT4gdGhpcy5wYWdlRmlsdGVyLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcChmaWx0ZXIgPT4gdGhpcy5wYWdlRmlsdGVyRGF0ZS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKHJhbmdlID0+IHRoaXMucGFnZU51bWJlci5waXBlKFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5zbGljZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuc29ydERhdGEoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YU9iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGVSYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLCByYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgKSwgdGhpcy5maWx0ZXJUYWJsZSksIHNvcnRBY3Rpb25cbiAgICAgICAgICAgICAgICAgICksIHBhZ2UsIHRoaXMuc2l6ZSwgZGV0YWlsUmF3cylcbiAgICAgICAgICAgICAgfV0pKSwgc2hhcmUoKSlcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSkpKTtcblxuXG4gICAgLyogaWYgKE9iamVjdC5rZXlzKHRoaXMuZmlsdGVyVGFibGUpLmxlbmd0aCA+IDApIHtcbiAgICAgICB0aGlzLnBhZ2UkID0gdGhpcy5wYWdlJC5waXBlKFxuICAgICAgICAgc3dpdGNoTWFwKHNvcnRBY3Rpb24yID0+IHRoaXMucGFnZUZpbHRlci5waXBlKGRlYm91bmNlVGltZSg1MDApKVxuICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICBzd2l0Y2hNYXAoZmlsdGVyID0+IHRoaXMucGFnZUZpbHRlckRhdGUucGlwZShcbiAgICAgICAgICAgICAgIHN3aXRjaE1hcChyYW5nZTIgPT4gdGhpcy5wYWdlTnVtYmVyLnBpcGUoXG4gICAgICAgICAgICAgICAgIHN3aXRjaE1hcChwYWdlMiA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5zbGljZShcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydERhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YU9iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGVSYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YUFmdGVyU2VhcmNoLCByYW5nZTJcbiAgICAgICAgICAgICAgICAgICAgICAgICApLCB0aGlzLmZpbHRlclRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICksIHNvcnRBY3Rpb24yXG4gICAgICAgICAgICAgICAgICAgICApLCBwYWdlMiwgdGhpcy5zaXplLCBkZXRhaWxSYXdzKVxuICAgICAgICAgICAgICAgICB9XSkpLCBzaGFyZSgpKVxuICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICApKSkpO1xuICAgICB9XG5cbiAgICAgLypcblxuICAgICAobGlrZXM6IGFueVtdKSA9PiB7XG4gICAgICAgIHJldHVybiBsaWtlcy5sZW5ndGggPT09IDAgP1xuICAgICAgICAgIE9ic2VydmFibGUub2YobGlrZXMpIDpcbiAgICAgICAgICBPYnNlcnZhYmxlLmNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgICBsaWtlcy5tYXAobGlrZSA9PiB0aGlzLmFmLmRhdGFiYXNlLm9iamVjdChcIi9jaXRhdGlvbnMvXCIgKyBsaWtlLiRrZXkpKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgdGhpcy5wYWdlJCA9IHRoaXMucGFnZUZpbHRlckRhdGUucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHJhbmdlUnVsZXMpLFxuICAgICAgICBzd2l0Y2hNYXAocmFuZ2UgPT4gdGhpcy5wYWdlRmlsdGVyLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpLnBpcGUoXG4gICAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgICBzd2l0Y2hNYXAoZmlsdGVyID0+IHRoaXMucGFnZVNvcnQucGlwZShcbiAgICAgICAgICAgIHN0YXJ0V2l0aChzb3J0UnVsZXMpLFxuICAgICAgICAgICAgc3dpdGNoTWFwKHNvcnRBY3Rpb24gPT4gdGhpcy5wYWdlTnVtYmVyLnBpcGUoXG4gICAgICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLnN0YXJ0V2l0aCksXG4gICAgICAgICAgICAgIHN3aXRjaE1hcChwYWdlID0+IGZyb20oW3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRhKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0ZVJhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLCByYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICksIGZpbHRlclxuICAgICAgICAgICAgICAgICAgICApLCBzb3J0QWN0aW9uXG4gICAgICAgICAgICAgICAgICApLCBwYWdlLCB0aGlzLnNpemUsIGRldGFpbFJhd3MpXG4gICAgICAgICAgICAgIH1dKSksXG4gICAgICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgICAgICkpKSlcbiAgICAgICAgKSkpOyovXG4gIH1cblxuICBmaWx0ZXJEYXRlUmFuZ2UoZGF0YTogYW55LCByYW5nZTogRmlsdGVyRGF0ZUludGVyZmFjZSkge1xuICAgIGlmICghcmFuZ2UgfHwgKCFyYW5nZS52YWx1ZVN0YXJ0ICYmICFyYW5nZS52YWx1ZUVuZCkpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKChlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJhbmdlLnZhbHVlU3RhcnQgJiYgcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA+PSBuZXcgRGF0ZShyYW5nZS52YWx1ZVN0YXJ0KVxuICAgICAgICAgICAgJiYgbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA8PSBuZXcgRGF0ZShyYW5nZS52YWx1ZUVuZCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuZ2UudmFsdWVTdGFydCAmJiAhcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA+PSBuZXcgRGF0ZShyYW5nZS52YWx1ZVN0YXJ0KTtcbiAgICAgICAgfSBlbHNlIGlmICghcmFuZ2UudmFsdWVTdGFydCAmJiByYW5nZS52YWx1ZUVuZCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pIDw9IG5ldyBEYXRlKHJhbmdlLnZhbHVlRW5kKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICB9XG5cbiAgcG9uZGVyYXRpb24oc3RyOiBzdHJpbmcsIHNlYXJjaEtleTogc3RyaW5nKSB7XG4gICAgbGV0IHN0YWNrOiBzdHJpbmdbXSA9IHN0ci5zcGxpdCgnICcpO1xuICAgIGxldCBwb25kOiBudW1iZXIgPSAwO1xuICAgIGZvciAobGV0IHMgb2Ygc3RhY2spIHtcbiAgICAgIGxldCBzZWFyY2g6IHN0cmluZyA9IHMucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJycpO1xuICAgICAgaWYgKHNlYXJjaCAmJiBzZWFyY2guaW5jbHVkZXMoc2VhcmNoS2V5KSkge1xuICAgICAgICBwb25kKys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwb25kO1xuICB9XG5cbiAgZmlsdGVyRGF0YShkYXRhOiBhbnksIGZpbHRlcjogYW55KSB7XG4gICAgaWYgKHRoaXMubnVtYmVyID4gMCkgdGhpcy5mZXRjaCgwKTtcbiAgICAvKmlmIChkYXRhLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmRhdGEpIHtcbiAgICAgIGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgfSovXG4gICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YU9iamVjdChkYXRhLCBmaWx0ZXIpO1xuICAgIH0gZWxzZSBpZiAoZmlsdGVyICYmIGZpbHRlci5yZXBsYWNlKC9bXmEtekEtWiBdL2csICcgJykpIHtcbiAgICAgIGZvciAobGV0IGUgb2YgZGF0YSkge1xuICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICBjb25zdCBkYXRhUmF3OiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShlKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgJyAnKTtcbiAgICAgICAgY29uc3Qgc3RhY2s6IHN0cmluZ1tdID0gZmlsdGVyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXpBLVowLTkgXS9nLCAnICcpXG4gICAgICAgICAgLnNwbGl0KCcgJyk7XG4gICAgICAgIGxldCBjb21iaW5hdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgZm9yIChsZXQgayBvZiBzdGFjaykge1xuICAgICAgICAgIGlmIChkYXRhUmF3LmluY2x1ZGVzKGspKSB7XG4gICAgICAgICAgICBjb25zdCBwb25kOiBudW1iZXIgPSB0aGlzLnBvbmRlcmF0aW9uKGRhdGFSYXcsIGspO1xuICAgICAgICAgICAgaWYgKCFlLnBvbmQpIHtcbiAgICAgICAgICAgICAgZS5wb25kID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucG9uZCArPSBwb25kO1xuICAgICAgICAgICAgY29tYmluYXRpb24rKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUucG9uZCAmJiBjb21iaW5hdGlvbiA9PT0gc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZSk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2ggPSByZXN1bHQuZmlsdGVyKChlID0+IGUucG9uZCkpLnNvcnQoKGEsIGIpID0+IGEgPiBiID8gMSA6IChhIDwgYiA/IC0xIDogMCkpO1xuICAgICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YUFmdGVyU2VhcmNoID0gZGF0YTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckRhdGFPYmplY3QoZGF0YTogYW55LCBmaWx0ZXI6IGFueSkge1xuICAgIGlmICh0aGlzLm51bWJlciA+IDApIHRoaXMuZmV0Y2goMCk7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwICYmIHRoaXMuZGF0YSkge1xuICAgICAgLy9kYXRhID0gdGhpcy5kYXRhO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICBpZiAoZmlsdGVyICYmIE9iamVjdC5rZXlzKGZpbHRlcikubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgZSBvZiBkYXRhKSB7XG4gICAgICAgIGxldCBvayA9IHRydWU7XG4gICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgIE9iamVjdC5rZXlzKGZpbHRlcikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGlmIChmaWx0ZXJba2V5XS5pbmNsdWRlcyhlW2tleV0pKSB7XG4gICAgICAgICAgICAvL2UucG9uZCArPSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2UucG9uZCA9IDA7XG4gICAgICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vaWYgKGUucG9uZCkge1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIC8vcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIHNvcnREYXRhKGRhdGE6IGFueSwgc29ydEFjdGlvbjogYW55KSB7XG4gICAgaWYgKHNvcnRBY3Rpb24uZGlyZWN0aW9uICE9PSAnJykge1xuICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGEgPT09ICdlbXB0eScgfHwgYiA9PT0gJ2VtcHR5Jykge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUoYVtzb3J0QWN0aW9uLmFjdGl2ZV0sIGJbc29ydEFjdGlvbi5hY3RpdmVdLCBzb3J0QWN0aW9uLmRpcmVjdGlvbiA9PT0gJ2FzYycpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmUoYTogbnVtYmVyIHwgc3RyaW5nIHwgYW55W10sIGI6IG51bWJlciB8IHN0cmluZyB8IGFueVtdLCBpc0FzYzogYm9vbGVhbikge1xuICAgIGlmICghYSkge1xuICAgICAgYSA9IG51bGw7XG4gICAgfVxuICAgIGlmICghYikge1xuICAgICAgYiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoKChBcnJheS5pc0FycmF5KGEpID8gYS5sZW5ndGggOiBhKSA+ICgoQXJyYXkuaXNBcnJheShiKSA/IGIubGVuZ3RoIDogYikpID8gLTEgOiAoKEFycmF5LmlzQXJyYXkoYikgPyBiLmxlbmd0aCA6IGIpKSA+ICgoQXJyYXkuaXNBcnJheShhKSA/IGEubGVuZ3RoIDogYSkpID8gMSA6IDApICogKGlzQXNjID8gLTEgOiAxKSk7XG4gIH1cblxuICBmZXRjaChwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIubmV4dChwYWdlKTtcbiAgICB0aGlzLm51bWJlciA9IDA7XG4gIH1cblxuICBzb3J0SXQoc29ydGlkZWE6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFnZVNvcnQubmV4dChzb3J0aWRlYSk7XG4gIH1cblxuICBmaWx0ZXIobXlGaWx0ZXI6IGFueSk6IHZvaWQge1xuICAgIGlmICghbXlGaWx0ZXIgJiYgdGhpcy5kYXRhIHx8ICFteUZpbHRlci50cmltKCkgJiYgdGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLl90b3RhbEVsZW1lbnRzLm5leHQodGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgfVxuICAgIHRoaXMucGFnZUZpbHRlci5uZXh0KG15RmlsdGVyLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgZmlsdGVyRGF0ZShkYXRlRmlsdGVyOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlRmlsdGVyRGF0ZS5uZXh0KGRhdGVGaWx0ZXIpO1xuICB9XG5cbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UkLnBpcGUocGx1Y2soJ2NvbnRlbnQnKSk7XG4gIH1cblxuICBkaXNjb25uZWN0KCk6IHZvaWQge1xuICB9XG5cbiAgc2xpY2UoZGF0YTogYW55W10sIHN0YXJ0OiBudW1iZXIgPSAwLCBlbmQ6IG51bWJlciA9IDIwLCBkZXRhaWxSb3c6IGJvb2xlYW4gPSB0cnVlKTogYW55IHtcbiAgICBjb25zdCByb3dzID0gW107XG4gICAgdGhpcy5fdG90YWxFbGVtZW50cy5uZXh0KGRhdGEubGVuZ3RoKTtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0ICogZW5kLCAoc3RhcnQgKiBlbmQpICsgZW5kKTtcbiAgICAgIGlmICh0aGlzLmVtcHR5Um93KSB7XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICAgIHJvd3MucHVzaCgnZW1wdHknKTtcbiAgICAgICAgICByb3dzLnB1c2goZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcm93cztcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkYXRhID0gZGF0YS5zbGljZShzdGFydCAqIGVuZCwgKHN0YXJ0ICogZW5kKSArIGVuZCk7XG4gICAgICAvLyBpZiAodGhpcy5lbXB0eVJvdykge1xuICAgICAgLy8gIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgLy8gICAgcm93cy5wdXNoKCdlbXB0eScpO1xuICAgICAgLy8gICAgcm93cy5wdXNoKGQpO1xuICAgICAgLy8gfSk7XG4gICAgICAvLyAgcmV0dXJuIHJvd3M7XG4gICAgICAvLyB9XG4gICAgICByZXR1cm4gcm93cztcbiAgICB9XG4gIH1cbn1cbiJdfQ==