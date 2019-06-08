import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StarComponent } from './star.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('StarComponent', () => {
  
    let fixture: ComponentFixture<HostComponent>;
    const getStarsElement = () : HTMLElement => fixture.debugElement.query(By.css('.stars')) ? fixture.debugElement.query(By.css('.stars')).nativeElement : null
    const getEnabledStarsElement  =() : DebugElement[] => fixture.debugElement.query(By.css('.star-enabled')) ? fixture.debugElement.queryAll(By.css('.star-enabled')) : null
    const getDisabledStarsElement = () : DebugElement[] => fixture.debugElement.query(By.css('.star-disabled')) ? fixture.debugElement.queryAll(By.css('.star-disabled')): null

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [HostComponent, StarComponent],
      });
    });
  
    function createHostComponent( template : string ) : ComponentFixture<HostComponent> {
        TestBed.overrideComponent(HostComponent, { set: { template: template } });
        const fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
        return fixture as ComponentFixture<HostComponent>;
      }
    

        it('should display the stars', () => {
            const template = '<ma-star [num]="0"></ma-star>';
          fixture = createHostComponent(template);
          expect(getStarsElement()).toBeDefined();
        });
    
        it('should have 0 Enabled 5 Disabled stars', function () {
          const template = '<ma-star [num]="0"></ma-star>';
          fixture = createHostComponent(template);
          expect(getEnabledStarsElement()).toBeNull();
          expect(getDisabledStarsElement().length).toEqual(5);
        });

        it('should have 0 Disabled  5 Enabled stars', function () {
            const template = '<ma-star [num]="10"></ma-star>';
            fixture = createHostComponent(template);
            expect(getEnabledStarsElement().length).toEqual(5);
            expect(getDisabledStarsElement()).toBeNull();
         });


         it('should have 2 Disabled  3 Enabled stars', function () {
            const template = '<ma-star [num]="5"></ma-star>';
            fixture = createHostComponent(template);
            expect(getEnabledStarsElement().length).toEqual(3);
            expect(getDisabledStarsElement().length).toEqual(2);
         });
      });
  
 
  @Component({ selector: 'host-for-test', template: '' })
  class HostComponent {
  }