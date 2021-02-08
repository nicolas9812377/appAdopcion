import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerrosPage } from './perros.page';

describe('PerrosPage', () => {
  let component: PerrosPage;
  let fixture: ComponentFixture<PerrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
