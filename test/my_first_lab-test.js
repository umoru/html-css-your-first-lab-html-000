const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('index', () => {
  jsdom({
    html: fs.readFileSync(path.resolve(__dirname, '..', 'my_first_lab.html'), 'utf-8')
  })

  it('does not have <strong>NAME</strong>', () => {
    expect(document.querySelector('strong').innerHTML).not.to.equal('NAME')
  })
})
