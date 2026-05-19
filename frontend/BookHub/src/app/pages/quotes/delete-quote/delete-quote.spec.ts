import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQuote } from './delete-quote';

describe('DeleteQuote', () => {
  let component: DeleteQuote;
  let fixture: ComponentFixture<DeleteQuote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteQuote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteQuote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
