import { CourseRegistrationPage } from './app.po';

describe('course-registration App', function() {
  let page: CourseRegistrationPage;

  beforeEach(() => {
    page = new CourseRegistrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cr works!');
  });
});
