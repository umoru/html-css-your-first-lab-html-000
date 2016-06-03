const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('index', () => {

  jsdom({
    html: fs.readFileSync(path.resolve(__dirname, '..', 'my_first_lab.html'), 'utf-8')
  })


  it('runs', () => {
    expect(true).to.be.true
  })

  it('has a div#party (that is, a <div> with an ID equal to "party")', () => {
    expect(document.getElementById('party')).not.to.be.null
  })
})
