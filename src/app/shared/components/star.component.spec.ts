import { TestBed, ComponentFixture } from "@angular/core/testing";
import { StarComponent } from './star.component';
import { By } from '@angular/platform-browser';


describe('StarComponent', () => {
  
    let fixture: ComponentFixture<StarComponent>;

    beforeEach(() => {
      // Arrange
      TestBed.configureTestingModule({
        declarations: [StarComponent],
      });
      fixture = TestBed.createComponent(StarComponent);
    });


    it('should create', () => {
      // Assert
      expect(fixture.componentInstance).toBeTruthy();
    });
  
    it('should have 0 Enabled 5 Disabled stars', function () {
      // Act
      fixture.componentInstance.num = 0;
      fixture.detectChanges();
      // Assert
      expect(fixture.debugElement.queryAll(By.css('.star-enabled')).length).toEqual(0);
      expect(fixture.debugElement.queryAll(By.css('.star-disabled')).length).toEqual(5);
      // Or
      expect(fixture.nativeElement.querySelectorAll('.star-enabled').length).toEqual(0);
      expect(fixture.nativeElement.querySelectorAll('.star-disabled').length).toEqual(5);
    });

    it('should have 0 Disabled  5 Enabled stars', function () {
      // Act          
      fixture.componentInstance.num = 10;
      fixture.detectChanges();
      // Assert
      expect(fixture.debugElement.queryAll(By.css('.star-enabled')).length).toEqual(5);
      expect(fixture.debugElement.queryAll(By.css('.star-disabled')).length).toEqual(0);
       // Or
      expect(fixture.nativeElement.querySelectorAll('.star-enabled').length).toEqual(5);
      expect(fixture.nativeElement.querySelectorAll('.star-disabled').length).toEqual(0);
    });


    it('should have 2 Disabled  3 Enabled stars', function () {
      // Act           
      fixture.componentInstance.num = 5;
      fixture.detectChanges()
      // Assert
      expect(fixture.debugElement.queryAll(By.css('.star-enabled')).length).toEqual(3);
      expect(fixture.debugElement.queryAll(By.css('.star-disabled')).length).toEqual(2);
       // Or
      expect(fixture.nativeElement.querySelectorAll('.star-enabled').length).toEqual(3);
      expect(fixture.nativeElement.querySelectorAll('.star-disabled').length).toEqual(2);
    });

});