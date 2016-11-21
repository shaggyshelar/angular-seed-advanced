// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { t } from '../../../../frameworks/test/index';
import { CoreModule } from '../../../../frameworks/core/core.module';

// app
import { HolidaysComponent } from './holidays.component';

export function main() {

    t.describe('Component: HolidaysComponent', () => {
        t.beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CoreModule],
                declarations: [HolidaysComponent, TestComponent],
                schemas: [NO_ERRORS_SCHEMA]
            });
        });

        t.it('should have a defined component', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        t.e(fixture.nativeElement).toBeTruthy();
                        t.e(TestComponent).toBeDefined();
                    });
            });
        });

        t.it('TC_01 (1) Current month calender should be displayed on the Left hand side', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        var calTitle = fixture.nativeElement.querySelectorAll('h4')[0].innerHTML;
                        var calYear = calTitle.split(' ');
                        var date = new Date();
                        let month: string = '';
                        switch (date.getMonth()) {
                            case 1:
                                month = 'January';
                                break;
                            case 2:
                                month = 'February';
                                break;
                            case 3:
                                month = 'March';
                                break;
                            case 4:
                                month = 'April';
                                break;
                            case 5:
                                month = 'May';
                                break;
                            case 6:
                                month = 'June';
                                break;
                            case 7:
                                month = 'July';
                                break;
                            case 8:
                                month = 'August';
                                break;
                            case 9:
                                month = 'September';
                                break;
                            case 10:
                                month = 'October';
                                break;
                            case 11:
                                month = 'November';
                                break;
                            case 12:
                                month = 'December';
                                break;
                            default:
                                month = '';
                                break;
                        }

                        t.e(calYear[1]).toBe(date.getFullYear());
                        t.e(calYear[0]).toBe(month);

                    });
            });
        });

        t.it('should contain all tables', () => {
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        var table = fixture.nativeElement.getElementsByClassName('undefined');
                        var tHead = table.nativeElement.querySelectorAll('thead')[0];
                        var tr = tHead.nativeElement.querySelectorAll('tr')[0];

                        t.e(tr.nativeElement.querySelectorAll('th').length).toBe(4);
                    });
            });
        });
    });

}

@Component({
    selector: 'test-cmp',
    template: '<sd-viewholidays></sd-viewholidays>'
})
class TestComponent { }
