import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailComponent } from './movie-detail.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';



describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [ MovieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the movie properties', function () {
    // Act
    fixture.componentInstance.movie =                 
    {
      "id": 1,
      "key": "deadpool",
      "name": "Deadpool",
      "description": "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.",
      "genres": [
          "action",
          "adventure",
          "comedy"
      ],
      "rate": "8.6",
      "length": "1hr 48mins",
      "img": "deadpool.jpg"
    };

    fixture.detectChanges();
    // Assert
    expect(fixture.debugElement.query(By.css('img')).nativeElement.getAttribute('src')).toContain("deadpool.jpg");
    expect(fixture.debugElement.query(By.css('img')).nativeElement.getAttribute('alt')).toContain("Deadpool");
    expect(fixture.debugElement.query(By.css('h1')).nativeElement.textContent).toContain("Deadpool");
    expect(fixture.debugElement.query(By.css('.duration')).nativeElement.textContent).toContain("1hr 48mins");
    expect(fixture.debugElement.query(By.css('.description')).nativeElement.textContent).toContain("A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.");
    // Or
    expect(fixture.nativeElement.querySelector('img').getAttribute('src')).toContain("deadpool.jpg");
    expect(fixture.nativeElement.querySelector('img').getAttribute('alt')).toContain("Deadpool");
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain("Deadpool");
    expect(fixture.nativeElement.querySelector('.duration').textContent).toContain("1hr 48mins");
    expect(fixture.nativeElement.querySelector('.description').textContent).toContain("A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.");
  });

  it('should emit muteClicked with value of true', function () {
    // Arrange
    fixture.componentInstance.mute = false;
    spyOn( fixture.componentInstance.muteClicked, 'emit');
    // Act
    fixture.nativeElement.querySelector('#mute-movie').dispatchEvent(new Event('click'));
    fixture.detectChanges();
    // Assert
    expect(fixture.componentInstance.muteClicked.emit).toHaveBeenCalledWith(true);
  });

  it('should emit muteClicked with value of false', function () {
    // Arrange
    fixture.componentInstance.mute = true;
    spyOn( fixture.componentInstance.muteClicked, 'emit');
    // Act
    fixture.nativeElement.querySelector('#mute-movie').dispatchEvent(new Event('click'));
    fixture.detectChanges();
    // Assert
    expect(fixture.componentInstance.muteClicked.emit).toHaveBeenCalledWith(false);
  });
});
