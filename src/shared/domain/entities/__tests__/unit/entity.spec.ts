import { validate as validateUUID } from 'uuid'
import { Entity } from '../../entity'

type StubEntityProps = {
  prop1: string
  prop2: number
  prop3: boolean
}

class StubEntity extends Entity<StubEntityProps> {}

describe('UserEntity unit tests', () => {
  const props: StubEntityProps = {
    prop1: 'any',
    prop2: 1,
    prop3: true,
  }

  it('Should set props and id', () => {
    const entity = new StubEntity(props)
    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(validateUUID(entity._id)).toBeTruthy()
  })

  it('Shoud accept a valid uuid', () => {
    const uuid = '7a424d00-d955-42b9-949e-319308deb11c'
    const entity = new StubEntity(props, uuid)
    expect(validateUUID(entity._id)).toBeTruthy()
    expect(entity._id).toBe(uuid)
  })

  it('Should convert a entity to JSON', () => {
    const entity = new StubEntity(props)
    expect(entity.toJson()).toStrictEqual({
      id: entity._id,
      ...props,
    })
  })
})
