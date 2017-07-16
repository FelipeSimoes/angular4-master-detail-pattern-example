import { Page } from './app.po';

describe('angular4 master detail pattern example', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  it('We should have a simple navigation', () => {
    page.navigateTo();
    expect(page.getNavbarElement(0)).toEqual('Home');
    expect(page.getNavbarElement(1)).toEqual('Cats');
    expect(page.getNavbarElement(2)).toEqual('Login');
    expect(page.getNavbarElement(3)).toEqual('Register');
  });
});
