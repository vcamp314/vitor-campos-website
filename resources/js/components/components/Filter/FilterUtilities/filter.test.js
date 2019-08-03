import profile from '../../../Assets/data/profile.json';

import { applyFilter, removeAllFiltering, checkFilterResultsEmpty } from './filter';

describe('applyFilter', () => {

  it('should FilterOut to remain undefined if no tags are specified', () => {
    applyFilter(profile, []);
    expect(profile.experience[0].sections[0].responsibilities[0].filteredOut).toBeUndefined();
  });

  it('should set FilterOut to false for the first responsibility under the first experience when selected tag includes PHP', () => {
    applyFilter(profile, ["PHP"]);
    expect(profile.experience[0].sections[0].responsibilities[0].filteredOut).toBe(false);
  });

  it('should set FilterOut to true for the second responsibility under first experience when selected tag includes PHP', () => {
    applyFilter(profile, ["PHP"]);
    expect(profile.experience[0].sections[0].responsibilities[1].filteredOut).toBe(true);
  });
});

describe('removeAllFiltering', () => {

  it('should set all FilterOut values to false', () => {
    applyFilter(profile, ["PHP"]);
    removeAllFiltering(profile);
    expect(profile.experience[0].sections[0].responsibilities[1].filteredOut).toBe(false);
  });
});

describe('checkFilterResultsEmpty', () => {

  it('should return true if applyFilter is performed with a non-matching tag name', () => {
    applyFilter(profile, ["notAExistingTag"]);
    expect(checkFilterResultsEmpty(profile)).toBe(true);
  });
  
  it('should return false if applyFilter is performed with an existing tag name', () => {
    applyFilter(profile, ["PHP"]);
    expect(checkFilterResultsEmpty(profile)).toBe(false);
  });
});