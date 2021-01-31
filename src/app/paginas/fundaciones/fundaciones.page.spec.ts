import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FundacionesPage } from './fundaciones.page';

describe('FundacionesPage', () => {
  let component: FundacionesPage;
  let fixture: ComponentFixture<FundacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FundacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
