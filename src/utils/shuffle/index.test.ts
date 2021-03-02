import shuffle from './'

describe('shuffle', () => {
  it('returns an array with the same lenght  after being shuffled', () => {
    const array = [1, 2, 3]
    shuffle(array)
    expect(array).toHaveLength(3)
  })

  it('returns and arraywith the same elements after being shuffled', () => {
    const array = [1, 2, 3]
    shuffle(array)
    expect(array).toContain(1)
    expect(array).toContain(2)
    expect(array).toContain(3)
  })
})
