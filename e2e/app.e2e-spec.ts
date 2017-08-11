import { NgCajeroPage } from './app.po';

describe('ng-cajero App', () => {
  let page: NgCajeroPage;

  beforeEach(() => {
    page = new NgCajeroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
