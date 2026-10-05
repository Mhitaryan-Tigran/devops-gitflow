const { Client } = require('pg')
const { greet } = require('../src/index')
const { formatPrice, slugify } = require('../src/utils')

test('greet uses the name or a default', () => {
  expect(greet('Tigran')).toBe('Hello, Tigran!')
  expect(greet()).toBe('Hello, DevOps!')
})

test('formatPrice keeps two decimals and rejects negatives', () => {
  expect(formatPrice(1499)).toBe('1499.00 RUB')
  expect(formatPrice(9.5, 'USD')).toBe('9.50 USD')
  expect(() => formatPrice(-1)).toThrow()
})

test('slugify builds URL-safe names', () => {
  expect(slugify('  Hello DevOps World! ')).toBe('hello-devops-world')
})

const withDb = process.env.DATABASE_URL ? test : test.skip

withDb('the postgres service container answers', async () => {
  const client = new Client({ connectionString: process.env.DATABASE_URL })
  await client.connect()
  const { rows } = await client.query('SELECT 1 + 1 AS two')
  await client.end()
  expect(rows[0].two).toBe(2)
})
