import { LaboratoriumUsersPage } from './app.po';

describe('laboratorium-users App', () => {
  let page: LaboratoriumUsersPage;

  beforeEach(() => {
    page = new LaboratoriumUsersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
