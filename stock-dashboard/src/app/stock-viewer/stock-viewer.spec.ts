import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockViewer } from './stock-viewer';

describe('StockViewer', () => {
  let component: StockViewer;
  let fixture: ComponentFixture<StockViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
