import { AngularFacadeDraftPage } from './app.po';

describe('angular-facade-draft App', () => {
  let page: AngularFacadeDraftPage;

  beforeEach(() => {
    page = new AngularFacadeDraftPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
