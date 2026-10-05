function formatPrice(value, currency = 'RUB') {
  if (!Number.isFinite(value) || value < 0) throw new Error('price must be a non-negative number')
  return `${value.toFixed(2)} ${currency}`
}

function slugify(text) {
  return String(text).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

module.exports = { formatPrice, slugify }
