import { renderComponent, expect } from '../utility';
import App from '../../../../src/cms/components/App/index'

describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

});
