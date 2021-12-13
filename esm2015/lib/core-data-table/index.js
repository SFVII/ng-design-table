import { BehaviorSubject, from } from 'rxjs';
import { debounceTime, pluck, share, switchMap } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';
export class CoreMatTable extends DataSource {
    constructor(data, sortRules, rangeRules, size = 20, detailRaws = true, emptyRow = false, filterT = {}) {
        super();
        this.totalElements = 0;
        this.number = 0;
        this.startWith = 0;
        this._totalElements = new BehaviorSubject(0);
        this.emptyRow = false;
        this.filterTable = {};
        this.size = size;
        this.data = [...data];
        this.dataAfterSearch = [];
        this.backUpData = [...data];
        //this.totalElements = data.length;
        this.emptyRow = emptyRow;
        this.filterTable = filterT;
        this.pageSort = new BehaviorSubject(sortRules);
        this.pageFilterDate = new BehaviorSubject(null);
        this.pageFilter = new BehaviorSubject('');
        this.pageNumber = new BehaviorSubject(this.startWith);
        this._totalElements.pipe(debounceTime(200)).subscribe((itemsLength) => {
            console.log('_totalElements', itemsLength);
            this.totalElements = itemsLength;
        });
        this.page$ = this.pageSort.pipe(switchMap(sortAction => this.pageFilter.pipe(debounceTime(500))
            .pipe(switchMap(filter => this.pageFilterDate.pipe(switchMap(range => this.pageNumber.pipe(switchMap(page => from([{
                content: this.slice(this.sortData(this.filterDataObject(this.filterData(this.filterDateRange(this.data, range), filter), this.filterTable), sortAction), page, this.size, detailRaws)
            }])), share())))))));
    }
    filterDateRange(data, range) {
        if (!range || (!range.valueStart && !range.valueEnd)) {
            return data;
        }
        else if (data && data.length) {
            return data.filter((e) => {
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
    }
    ponderation(str, searchKey) {
        let stack = str.split(' ');
        let pond = 0;
        for (let s of stack) {
            let search = s.replace(new RegExp(' ', 'g'), '');
            if (search && search.includes(searchKey)) {
                pond++;
            }
        }
        return pond;
    }
    filterData(data, filter) {
        if (data.length === 0 && this.data) {
            data = this.data;
        }
        const result = [];
        if (typeof filter === 'object') {
            return this.filterDataObject(data, filter);
        }
        else if (filter && filter.replace(/[^a-zA-Z ]/g, ' ')) {
            for (let e of data) {
                e.pond = 0;
                const dataRaw = JSON.stringify(e).toLowerCase()
                    .replace(/[^a-zA-Z0-9 ]/g, ' ');
                const stack = filter.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ' ')
                    .split(' ');
                let combination = 0;
                for (let k of stack) {
                    if (dataRaw.includes(k)) {
                        const pond = this.ponderation(dataRaw, k);
                        if (!e.pond) {
                            e.pond = 0;
                        }
                        e.pond += pond;
                        combination++;
                    }
                }
                if (e.pond && combination === stack.length) {
                    result.push(e);
                }
            }
            this.dataAfterSearch = result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
            this._totalElements.next(this.dataAfterSearch.length);
            return result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        }
        else {
            this.dataAfterSearch = data;
            this._totalElements.next(this.dataAfterSearch.length);
            return data;
        }
    }
    filterDataObject(data, filter) {
        if (data.length === 0 && this.data) {
            //data = this.data;
            return data;
        }
        const result = [];
        if (filter && Object.keys(filter).length > 0) {
            for (let e of data) {
                let ok = true;
                e.pond = 0;
                Object.keys(filter).forEach(key => {
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
            }
            this.dataAfterSearch = result;
            this._totalElements.next(this.dataAfterSearch.length);
            return result;
            //return result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        }
        else {
            return data;
        }
    }
    sortData(data, sortAction) {
        if (sortAction.direction !== '') {
            return data.sort((a, b) => {
                if (a === 'empty' || b === 'empty') {
                    return 0;
                }
                return this.compare(a[sortAction.active], b[sortAction.active], sortAction.direction === 'asc');
            });
        }
        else {
            return data;
        }
    }
    compare(a, b, isAsc) {
        if (!a) {
            a = null;
        }
        if (!b) {
            b = null;
        }
        return (((Array.isArray(a) ? a.length : a) > ((Array.isArray(b) ? b.length : b)) ? -1 : ((Array.isArray(b) ? b.length : b)) > ((Array.isArray(a) ? a.length : a)) ? 1 : 0) * (isAsc ? -1 : 1));
    }
    fetch(page) {
        this.pageNumber.next(page);
        this.number = page;
    }
    sortIt(sortIdea) {
        this.pageSort.next(sortIdea);
    }
    filter(myFilter) {
        if (!myFilter && this.data || !myFilter.trim() && this.data) {
            this._totalElements.next(this.data.length);
        }
        this.pageFilter.next(myFilter.toString());
        /*if (!myFilter.target.value || !myFilter.target.value.trim()) {
          this.totalElements = this.data.length;
        }
        this.pageFilter.next(myFilter.target.value);*/
    }
    filterDate(dateFilter) {
        this.pageFilterDate.next(dateFilter);
    }
    connect() {
        return this.page$.pipe(pluck('content'));
    }
    disconnect() {
    }
    slice(data, start = 0, end = 20, detailRow = true) {
        const rows = [];
        if (data.length) {
            data = data.slice(start * end, (start * end) + end);
            let cursor = 1;
            if (this.emptyRow) {
                for (const d of data) {
                    if (rows[cursor] !== 'empty') {
                        rows.push('empty');
                    }
                    rows.push(d);
                    cursor++;
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLWRhdGEtdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGVBQWUsRUFBRSxJQUFJLEVBQXNCLE1BQU0sTUFBTSxDQUFDO0FBR2hFLE9BQU8sRUFBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUE0Q3BELE1BQU0sT0FBTyxZQUFhLFNBQVEsVUFBbUI7SUFtQm5ELFlBQVksSUFBUyxFQUFFLFNBQWUsRUFDMUIsVUFBK0IsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLGFBQXNCLElBQUksRUFDdEUsV0FBb0IsS0FBSyxFQUFFLFVBQWUsRUFBRTtRQUN0RCxLQUFLLEVBQUUsQ0FBQztRQXBCSCxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBTVgsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUliLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQU92QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM1QixtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDM0IsSUFBSSxD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QUksRUFBRTtvQkFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBTyxFQUFFO3dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUNwQjtvQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNiLE1BQU0sRUFBRSxDQUFDO2lCQUNWO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBmcm9tLCBPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBwbHVjaywgc2hhcmUsIHN3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnQge1xuICBhY3RpdmU6IHN0cmluZztcbiAgZGlyZWN0aW9uOiAnYXNjJyB8ICdkZXNjJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlUmVxdWVzdCB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuICBzb3J0PzogU29ydDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlIHtcbiAgY29udGVudDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvcmVNYXRUYWJsZUludGVyZmFjZSB7XG4gIHBhZ2UkOiBPYnNlcnZhYmxlPGFueT47XG4gIHRvdGFsRWxlbWVudHM6IG51bWJlcjtcbiAgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIG51bWJlcjogbnVtYmVyO1xuICBkYXRhOiBhbnlbXTtcbiAgc2l6ZTogbnVtYmVyO1xuICBmZXRjaDogKHBhZ2U6IGFueSkgPT4gdm9pZDtcbiAgY29ubmVjdDogKCkgPT4gdm9pZDtcbiAgZGlzY29ubmVjdDogKCkgPT4gdm9pZDtcbiAgc29ydDogTWF0U29ydDtcbiAgc29ydEl0OiAoc29ydGlkZWE6IGFueSkgPT4gdm9pZDtcbiAgZmlsdGVyOiAobXlGaWx0ZXI6IGFueSkgPT4gdm9pZDtcbiAgZmlsdGVyRGF0YTogKGRhdGE6IGFueSwgZmlsdGVyOiBhbnkpID0+IHZvaWRcbiAgZmlsdGVyRGF0ZTogKGRhdGVGaWx0ZXI6IEZpbHRlckRhdGVJbnRlcmZhY2UpID0+IHZvaWQ7XG4gIHBhZ2VOdW1iZXI6IFN1YmplY3Q8bnVtYmVyPjtcbiAgc3RhcnRXaXRoOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJEYXRlSW50ZXJmYWNlIHtcbiAgYWN0aXZlOiBzdHJpbmc7XG4gIHZhbHVlU3RhcnQ6IERhdGU7XG4gIHZhbHVlRW5kOiBEYXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBDb3JlTWF0VGFibGUgZXh0ZW5kcyBEYXRhU291cmNlPEVsZW1lbnQ+IHtcbiAgcHVibGljIHBhZ2UkOiBPYnNlcnZhYmxlPFBhZ2U+O1xuICBwdWJsaWMgdG90YWxFbGVtZW50cyA9IDA7XG4gIHB1YmxpYyBudW1iZXIgPSAwO1xuICBwdWJsaWMgc2l6ZTogYW55O1xuICBwdWJsaWMgc29ydDogTWF0U29ydDtcbiAgcHVibGljIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBwdWJsaWMgZGF0YTogYW55O1xuICBwdWJsaWMgcGFnZU51bWJlcjogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj47XG4gIHB1YmxpYyBzdGFydFdpdGggPSAwO1xuICBwcml2YXRlIHBhZ2VTb3J0OiBCZWhhdmlvclN1YmplY3Q8U29ydD47XG4gIHByaXZhdGUgcGFnZUZpbHRlcjogQmVoYXZpb3JTdWJqZWN0PGFueT47XG4gIHByaXZhdGUgcGFnZUZpbHRlckRhdGU6IEJlaGF2aW9yU3ViamVjdDxGaWx0ZXJEYXRlSW50ZXJmYWNlPjtcbiAgcHJpdmF0ZSBfdG90YWxFbGVtZW50cyA9IG5ldyBCZWhhdmlvclN1YmplY3QoMCk7XG4gIHByaXZhdGUgYmFja1VwRGF0YTogYW55O1xuICBwcml2YXRlIGVtcHR5Um93ID0gZmFsc2U7XG4gIHByaXZhdGUgZmlsdGVyVGFibGUgPSB7fTtcbiAgcHJpdmF0ZSBkYXRhQWZ0ZXJTZWFyY2g7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogYW55LCBzb3J0UnVsZXM6IFNvcnQsXG4gICAgICAgICAgICAgIHJhbmdlUnVsZXM6IEZpbHRlckRhdGVJbnRlcmZhY2UsIHNpemUgPSAyMCwgZGV0YWlsUmF3czogYm9vbGVhbiA9IHRydWUsXG4gICAgICAgICAgICAgIGVtcHR5Um93OiBib29sZWFuID0gZmFsc2UsIGZpbHRlclQ6IGFueSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuZGF0YSA9IFsuLi5kYXRhXTtcbiAgICB0aGlzLmRhdGFBZnRlclNlYXJjaCA9IFtdO1xuICAgIHRoaXMuYmFja1VwRGF0YSA9IFsuLi5kYXRhXTtcbiAgICAvL3RoaXMudG90YWxFbGVtZW50cyA9IGRhdGEubGVuZ3RoO1xuICAgIHRoaXMuZW1wdHlSb3cgPSBlbXB0eVJvdztcbiAgICB0aGlzLmZpbHRlclRhYmxlID0gZmlsdGVyVDtcbiAgICB0aGlzLnBhZ2VTb3J0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTb3J0Pihzb3J0UnVsZXMpO1xuICAgIHRoaXMucGFnZUZpbHRlckRhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZpbHRlckRhdGVJbnRlcmZhY2U+KG51bGwpO1xuICAgIHRoaXMucGFnZUZpbHRlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PignJyk7XG4gICAgdGhpcy5wYWdlTnVtYmVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KHRoaXMuc3RhcnRXaXRoKTtcbiAgICB0aGlzLl90b3RhbEVsZW1lbnRzLnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpLnN1YnNjcmliZSgoaXRlbXNMZW5ndGg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ190b3RhbEVsZW1lbnRzJywgaXRlbXNMZW5ndGgpO1xuICAgICAgdGhpcy50b3RhbEVsZW1lbnRzID0gaXRlbXNMZW5ndGg7XG5cbiAgICB9KTtcblxuICAgIHRoaXMucGFnZSQgPSB0aGlzLnBhZ2VTb3J0LnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoc29ydEFjdGlvbiA9PiB0aGlzLnBhZ2VGaWx0ZXIucGlwZShkZWJvdW5jZVRpbWUoNTAwKSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKGZpbHRlciA9PiB0aGlzLnBhZ2VGaWx0ZXJEYXRlLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAocmFuZ2UgPT4gdGhpcy5wYWdlTnVtYmVyLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcChwYWdlID0+IGZyb20oW3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRhT2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0ZVJhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEsIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICApLCBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICApLCB0aGlzLmZpbHRlclRhYmxlKSwgc29ydEFjdGlvblxuICAgICAgICAgICAgICAgICAgKSwgcGFnZSwgdGhpcy5zaXplLCBkZXRhaWxSYXdzKVxuICAgICAgICAgICAgICB9XSkpLCBzaGFyZSgpKVxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApKSkpO1xuICB9XG5cbiAgZmlsdGVyRGF0ZVJhbmdlKGRhdGE6IGFueSwgcmFuZ2U6IEZpbHRlckRhdGVJbnRlcmZhY2UpIHtcbiAgICBpZiAoIXJhbmdlIHx8ICghcmFuZ2UudmFsdWVTdGFydCAmJiAhcmFuZ2UudmFsdWVFbmQpKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBkYXRhLmZpbHRlcigoZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyYW5nZS52YWx1ZVN0YXJ0ICYmIHJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPj0gbmV3IERhdGUocmFuZ2UudmFsdWVTdGFydClcbiAgICAgICAgICAgICYmIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPD0gbmV3IERhdGUocmFuZ2UudmFsdWVFbmQpO1xuICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLnZhbHVlU3RhcnQgJiYgIXJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPj0gbmV3IERhdGUocmFuZ2UudmFsdWVTdGFydCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXJhbmdlLnZhbHVlU3RhcnQgJiYgcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA8PSBuZXcgRGF0ZShyYW5nZS52YWx1ZUVuZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgfVxuXG4gIHBvbmRlcmF0aW9uKHN0cjogc3RyaW5nLCBzZWFyY2hLZXk6IHN0cmluZykge1xuICAgIGxldCBzdGFjazogc3RyaW5nW10gPSBzdHIuc3BsaXQoJyAnKTtcbiAgICBsZXQgcG9uZDogbnVtYmVyID0gMDtcbiAgICBmb3IgKGxldCBzIG9mIHN0YWNrKSB7XG4gICAgICBsZXQgc2VhcmNoOiBzdHJpbmcgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cCgnICcsICdnJyksICcnKTtcbiAgICAgIGlmIChzZWFyY2ggJiYgc2VhcmNoLmluY2x1ZGVzKHNlYXJjaEtleSkpIHtcbiAgICAgICAgcG9uZCsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcG9uZDtcbiAgfVxuXG4gIGZpbHRlckRhdGEoZGF0YTogYW55LCBmaWx0ZXI6IGFueSkge1xuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmRhdGEpIHtcbiAgICAgIGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGFPYmplY3QoZGF0YSwgZmlsdGVyKTtcbiAgICB9IGVsc2UgaWYgKGZpbHRlciAmJiBmaWx0ZXIucmVwbGFjZSgvW15hLXpBLVogXS9nLCAnICcpKSB7XG4gICAgICBmb3IgKGxldCBlIG9mIGRhdGEpIHtcbiAgICAgICAgZS5wb25kID0gMDtcbiAgICAgICAgY29uc3QgZGF0YVJhdzogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZSkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csICcgJyk7XG4gICAgICAgIGNvbnN0IHN0YWNrOiBzdHJpbmdbXSA9IGZpbHRlci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgJyAnKVxuICAgICAgICAgIC5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgY29tYmluYXRpb246IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGsgb2Ygc3RhY2spIHtcbiAgICAgICAgICBpZiAoZGF0YVJhdy5pbmNsdWRlcyhrKSkge1xuICAgICAgICAgICAgY29uc3QgcG9uZDogbnVtYmVyID0gdGhpcy5wb25kZXJhdGlvbihkYXRhUmF3LCBrKTtcbiAgICAgICAgICAgIGlmICghZS5wb25kKSB7XG4gICAgICAgICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnBvbmQgKz0gcG9uZDtcbiAgICAgICAgICAgIGNvbWJpbmF0aW9uKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLnBvbmQgJiYgY29tYmluYXRpb24gPT09IHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGUpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YUFmdGVyU2VhcmNoID0gcmVzdWx0LmZpbHRlcigoZSA9PiBlLnBvbmQpKS5zb3J0KChhLCBiKSA9PiBhID4gYiA/IDEgOiAoYSA8IGIgPyAtMSA6IDApKTtcbiAgICAgIHRoaXMuX3RvdGFsRWxlbWVudHMubmV4dCh0aGlzLmRhdGFBZnRlclNlYXJjaC5sZW5ndGgpO1xuICAgICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YUFmdGVyU2VhcmNoID0gZGF0YTtcbiAgICAgIHRoaXMuX3RvdGFsRWxlbWVudHMubmV4dCh0aGlzLmRhdGFBZnRlclNlYXJjaC5sZW5ndGgpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyRGF0YU9iamVjdChkYXRhOiBhbnksIGZpbHRlcjogYW55KSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwICYmIHRoaXMuZGF0YSkge1xuICAgICAgLy9kYXRhID0gdGhpcy5kYXRhO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICBpZiAoZmlsdGVyICYmIE9iamVjdC5rZXlzKGZpbHRlcikubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgZSBvZiBkYXRhKSB7XG4gICAgICAgIGxldCBvayA9IHRydWU7XG4gICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgIE9iamVjdC5rZXlzKGZpbHRlcikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGlmIChmaWx0ZXJba2V5XS5pbmNsdWRlcyhlW2tleV0pKSB7XG4gICAgICAgICAgICAvL2UucG9uZCArPSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2UucG9uZCA9IDA7XG4gICAgICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vaWYgKGUucG9uZCkge1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2ggPSByZXN1bHQ7XG4gICAgICB0aGlzLl90b3RhbEVsZW1lbnRzLm5leHQodGhpcy5kYXRhQWZ0ZXJTZWFyY2gubGVuZ3RoKTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIC8vcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIHNvcnREYXRhKGRhdGE6IGFueSwgc29ydEFjdGlvbjogYW55KSB7XG4gICAgaWYgKHNvcnRBY3Rpb24uZGlyZWN0aW9uICE9PSAnJykge1xuICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGEgPT09ICdlbXB0eScgfHwgYiA9PT0gJ2VtcHR5Jykge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUoYVtzb3J0QWN0aW9uLmFjdGl2ZV0sIGJbc29ydEFjdGlvbi5hY3RpdmVdLCBzb3J0QWN0aW9uLmRpcmVjdGlvbiA9PT0gJ2FzYycpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmUoYTogbnVtYmVyIHwgc3RyaW5nIHwgYW55W10sIGI6IG51bWJlciB8IHN0cmluZyB8IGFueVtdLCBpc0FzYzogYm9vbGVhbikge1xuICAgIGlmICghYSkge1xuICAgICAgYSA9IG51bGw7XG4gICAgfVxuICAgIGlmICghYikge1xuICAgICAgYiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoKChBcnJheS5pc0FycmF5KGEpID8gYS5sZW5ndGggOiBhKSA+ICgoQXJyYXkuaXNBcnJheShiKSA/IGIubGVuZ3RoIDogYikpID8gLTEgOiAoKEFycmF5LmlzQXJyYXkoYikgPyBiLmxlbmd0aCA6IGIpKSA+ICgoQXJyYXkuaXNBcnJheShhKSA/IGEubGVuZ3RoIDogYSkpID8gMSA6IDApICogKGlzQXNjID8gLTEgOiAxKSk7XG4gIH1cblxuICBmZXRjaChwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIubmV4dChwYWdlKTtcbiAgICB0aGlzLm51bWJlciA9IHBhZ2U7XG4gIH1cblxuICBzb3J0SXQoc29ydElkZWE6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFnZVNvcnQubmV4dChzb3J0SWRlYSk7XG4gIH1cblxuICBmaWx0ZXIobXlGaWx0ZXI6IGFueSk6IHZvaWQge1xuICAgIGlmICghbXlGaWx0ZXIgJiYgdGhpcy5kYXRhIHx8ICFteUZpbHRlci50cmltKCkgJiYgdGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLl90b3RhbEVsZW1lbnRzLm5leHQodGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgfVxuICAgIHRoaXMucGFnZUZpbHRlci5uZXh0KG15RmlsdGVyLnRvU3RyaW5nKCkpO1xuICAgIC8qaWYgKCFteUZpbHRlci50YXJnZXQudmFsdWUgfHwgIW15RmlsdGVyLnRhcmdldC52YWx1ZS50cmltKCkpIHtcbiAgICAgIHRoaXMudG90YWxFbGVtZW50cyA9IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMucGFnZUZpbHRlci5uZXh0KG15RmlsdGVyLnRhcmdldC52YWx1ZSk7Ki9cbiAgfVxuXG4gIGZpbHRlckRhdGUoZGF0ZUZpbHRlcjogRmlsdGVyRGF0ZUludGVyZmFjZSk6IHZvaWQge1xuICAgIHRoaXMucGFnZUZpbHRlckRhdGUubmV4dChkYXRlRmlsdGVyKTtcbiAgfVxuXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKHBsdWNrKCdjb250ZW50JykpO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHNsaWNlKGRhdGE6IGFueVtdLCBzdGFydDogbnVtYmVyID0gMCwgZW5kOiBudW1iZXIgPSAyMCwgZGV0YWlsUm93OiBib29sZWFuID0gdHJ1ZSk6IGFueSB7XG4gICAgY29uc3Qgcm93cyA9IFtdO1xuICAgIGlmIChkYXRhLmxlbmd0aCkge1xuICAgICAgZGF0YSA9IGRhdGEuc2xpY2Uoc3RhcnQgKiBlbmQsIChzdGFydCAqIGVuZCkgKyBlbmQpO1xuICAgICAgbGV0IGN1cnNvciA9IDE7XG4gICAgICBpZiAodGhpcy5lbXB0eVJvdykge1xuICAgICAgICBmb3IgKGNvbnN0IGQgb2YgZGF0YSkge1xuICAgICAgICAgIGlmIChyb3dzW2N1cnNvcl0gIT09ICdlbXB0eScpIHtcbiAgICAgICAgICAgIHJvd3MucHVzaCgnZW1wdHknKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcm93cy5wdXNoKGQpO1xuICAgICAgICAgIGN1cnNvcisrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgICAgfVxuICAgICAgdGhpcy5fdG90YWxFbGVtZW50cy5uZXh0KHRoaXMuZGF0YUFmdGVyU2VhcmNoLmxlbmd0aCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdG90YWxFbGVtZW50cy5uZXh0KHRoaXMuZGF0YUFmdGVyU2VhcmNoLmxlbmd0aCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==