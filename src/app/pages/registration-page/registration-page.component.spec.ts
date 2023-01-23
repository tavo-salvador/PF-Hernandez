import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegistrationPageComponent } from './registration-page.component';
import { RegistrationService } from '../../services/registration-service/registration.service';
import { RegistrationServiceMock } from '../../mocks/registration.service.mock';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

fdescribe('RegistrationPageComponent', () => {
  let component: RegistrationPageComponent;
  let fixture: ComponentFixture<RegistrationPageComponent>;
  let registService: RegistrationService;
  let spyLoadRegist: jasmine.Spy;
  let spyPostRegist: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPageComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: RegistrationService,
          useClass: RegistrationServiceMock,
        }
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationPageComponent);
    component = fixture.componentInstance;
    registService = TestBed.inject(RegistrationService)
    spyLoadRegist = spyOn(registService, 'loadRegist').and.callThrough();
    spyPostRegist = spyOn(registService, 'postRegist').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe cargar los registros al inicio', () => {
    component.ngOnInit();
    expect(spyLoadRegist).toHaveBeenCalled()
  })

  it('Debe agregar un nuevo registro', () => {
    component.createRegistration();
    expect(spyPostRegist).toHaveBeenCalled()
  })

  
});
