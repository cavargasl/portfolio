import { sortSkills } from '../domain/sortSkills'
import { skillsFake, skillsFakeOrdered } from '../mock'

describe('skills', () => {
  it('should sortSkills', () => {
    expect(sortSkills(skillsFake)).toEqual(skillsFakeOrdered)
    expect(sortSkills(skillsFake).length).toEqual(skillsFakeOrdered.length)
  })
})
