import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatAchatComponent } from './creat-achat.component';

describe('CreatAchatComponent', () => {
  let component: CreatAchatComponent;
  let fixture: ComponentFixture<CreatAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
