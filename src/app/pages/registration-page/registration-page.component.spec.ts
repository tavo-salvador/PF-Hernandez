import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationService } from 'src/app/services/registration-service/registration.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegistrationPageComponent } from './registration-page.component';
import { RegistrationServiceMock } from 'src/app/mocks/registration.service.mock';

fdescribe('RegistrationPageComponent', () => {
  let component: RegistrationPageComponent;
  let fixture: ComponentFixture<RegistrationPageComponent>;
  let registService: RegistrationService;
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
    spyPostRegist = spyOn(registService, 'postRegist').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe agregar un registro', () => {
    component.registrationForm.patchValue({
      name: 'Nombre de prueba',
      description: 'Prueba descripcion',
    });
    component.createRegistration();
    expect(spyPostRegist).toHaveBeenCalledWith(component.registrationForm.value);
  })

});
