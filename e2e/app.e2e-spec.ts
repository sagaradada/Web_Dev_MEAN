import { Untitled2Page } from './app.po';

describe('untitled2 App', () => {
  let page: Untitled2Page;

  beforeEach(() => {
    page = new Untitled2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
