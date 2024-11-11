import { UserEntity, UserProps } from '../../user.entity'
import { userDataBuilder } from '@/users/domain/testing/helpers/userDataBuilder'

describe('UserEntity unit tests', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = userDataBuilder({})
    sut = new UserEntity(props)
  })
  it('Constructor method', () => {
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('Getter of name field', () => {
    expect(sut.props.name).toBeDefined()
    expect(sut.props.name).toEqual(props.name)
    expect(typeof sut.props.name).toBe('string')
  })

  it('Setter of name field', () => {
    sut['name'] = 'any_name'
    expect(sut.props.name).toEqual('any_name')
  })

  it("Should update user's name", () => {
    sut.updateName('any_name')
    expect(sut.props.name).toEqual('any_name')
  })

  it('Getter of email field', () => {
    expect(sut.props.email).toBeDefined()
    expect(sut.props.email).toEqual(props.email)
    expect(typeof sut.props.email).toBe('string')
  })
  it('Getter of password field', () => {
    expect(sut.props.password).toBeDefined()
    expect(sut.props.password).toEqual(props.password)
    expect(typeof sut.props.password).toBe('string')
  })

  it('Setter of password field', () => {
    sut['password'] = 'any_password'
    expect(sut.props.password).toEqual('any_password')
  })

  it("Should update user's password", () => {
    sut.updatePassword('any_name')
    expect(sut.props.password).toEqual('any_name')
  })

  it('Getter of password field', () => {
    expect(sut.props.createdAt).toBeDefined()
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })
})
