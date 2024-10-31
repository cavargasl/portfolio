import { sortSkills } from '../domain/sortSkills'
import { skillsFake, skillsFakeDisordered, skillsFakeOrdered } from '../mock'

describe('skills', () => {
  it('should sortSkills', () => {
    expect(sortSkills(skillsFake)).toEqual(skillsFakeOrdered)
    expect(sortSkills(skillsFake)).not.toEqual(skillsFakeDisordered)
  })
})
