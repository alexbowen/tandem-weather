import React from 'react'
import ReactDOM from 'react-dom'
import Cell from './Cell'
import renderer from 'react-test-renderer'

test('Cell component', () => {

    const component = renderer.create(
        <Cell messages={{time:"2018-02-22 00:00:00", temperature: 274.72}} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})