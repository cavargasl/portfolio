import { skillsMock, skillsMockDisordered, skillsMockOrdered } from '../__mock__/dataSkills'
import { sortSkills } from '../sortSkills'

describe('sortSkills()', () => {
  it('should return the same length', () => {
    expect(sortSkills(['Angular', 'Atlassian']).length).toEqual(2)
  })
  it('should return an array of unique skills', () => {
    expect(sortSkills(skillsMock).length).toEqual(skillsMockOrdered.length)
  })
  it('should return an array of skills ordered by default array defined in skillNameOrdered', () => {
    expect(sortSkills(skillsMock)).toEqual(skillsMockOrdered)
  })
  it('should not return an array of skills disordered', () => {
    expect(sortSkills(skillsMock)).not.toEqual(skillsMockDisordered)
  })
})
